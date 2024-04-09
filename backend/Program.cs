
using System.Globalization;
using Microsoft.EntityFrameworkCore;
using MovieSpin_Backend_Files;
    public class Program
    {
        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);
            CultureInfo.DefaultThreadCurrentCulture = CultureInfo.InvariantCulture;

            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            builder.Services.AddDbContext<Dbconnection>(options => options.UseSqlServer(connectionString, options => options.UseRelationalNulls().EnableRetryOnFailure().CommandTimeout((int)TimeSpan.FromMinutes(5).TotalSeconds)));

     

        builder.Services.AddAuthorization();
            builder.Services.AddControllers();
            var app = builder.Build();
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.MapControllers();
            app.Run();
        }
    public void ConfigureServices(IServiceCollection services)
    {
        // Add logging
        services.AddLogging();

        // Other service configurations...
    }
}
