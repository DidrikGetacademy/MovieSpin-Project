namespace MovieSpin_Backend_Files
{
    public class Users
    {
        public bool IsOnline { get; set; }
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }

        public List<project> UserProjects { get; set; }

        public Users()
        {
           UserProjects = new List<project>();
        }
    }
}
