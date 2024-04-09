using System.Diagnostics.Eventing.Reader;
using Microsoft.AspNetCore.Mvc;
using System.Drawing.Text;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Mysqlx;
using BCrypt.Net;
using Microsoft.CodeAnalysis.CSharp;

namespace MovieSpin_Backend_Files
{

    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly Dbconnection _Context;
        private readonly ILogger<UsersController> _logger; // Injecting ILogger

        public UsersController(Dbconnection context, ILogger<UsersController> logger)
        {
            _Context = context;
            _logger = logger;
        }


        [HttpPost("project")]
        public IActionResult AddProject([FromBody] ProjectData project) 
        {
            
                var user = _Context.Users.FirstOrDefault(x => x.Username == project.Username);
                if(user == null && string.IsNullOrEmpty(project.Title))
                {
                    return BadRequest("Not valid project information");
                }
                project newproject = new project(project.Title);
                user.UserProjects.Add(newproject);
                _Context.SaveChanges();
               return Ok("Project added for user");
        }



        [HttpPost("ProjectList")]
        public IActionResult GetProjects([FromBody] string Username)
        {
            _logger.LogInformation("Received request for projects for user: {Username}", Username);

            var user = _Context.Users.Include(x => x.UserProjects).FirstOrDefault(x=>x.Username == Username);
            if (user == null)
            {
                _logger.LogWarning("User does not exist: {Username}", Username);
                return BadRequest("User does not exist");
            }

            if (user.UserProjects != null)
            {
                var projects = user.UserProjects.Select(x => new { x.ProjectTitle } );
                _logger.LogInformation("Projects found for user {Username}: {@Projects}", Username, user.UserProjects.Any(), projects);
                return Ok(projects);
            }
            else
            {
                _logger.LogInformation("No projects found for user: {Username}", Username);
                return BadRequest("User has no projects");
            }
        }


        [HttpPost("register")]
        public IActionResult RegisterUser([FromBody] Users user)
        {
            try
            {
                string hashedpassword = BCrypt.Net.BCrypt.HashPassword(user.Password);
                user.Password = hashedpassword;
                var existingUsername = _Context.Users.FirstOrDefault(x => x.Username == user.Username);
                var existingEmail = _Context.Users.FirstOrDefault(x => x.Email == user.Email);

                if (existingUsername != null)
                {
                    return Conflict("Existing username already exists");
                }

                if (existingEmail != null)
                {
                    return Conflict("Existing email already exists");
                }
                else
                {
                    _Context.Users.Add(user);
                    _Context.SaveChanges();
                    return Ok("User registered");
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to register user: {ex.Message}");
            }
        }





        [HttpPost("Login")]
        public IActionResult LoginUser([FromBody] UserLoginDTO loginData)
        {
            try
            {

                var existingUser = _Context.Users.FirstOrDefault(u => u.Username == loginData.Username);


                if (existingUser != null)
                {
                    if (BCrypt.Net.BCrypt.Verify(loginData.Password, existingUser.Password))
                    {
                        return Ok(new { _Username = existingUser.Username });
                    }
                    else
                    {
                        return Unauthorized("Invalid username or password");
                    }
                }
                else
                {
                    return Unauthorized("Invalid username or password");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to log in: {ex.Message}");
            }
        }
    }

    public class UserLoginDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class ProjectData
    {
        public string Title { get; set; }
        public string Username { get; set; }
    }
}