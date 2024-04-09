using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieSpin_Backend_Files
{
    public class project
    {
        public string ProjectTitle { get; set; }



        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProjectId { get; set; }

        public int UserId { get; set; }
        [ForeignKey("UserId")] public Users User { get; set; }


        public project(string projectTitle)
        {
            ProjectTitle = projectTitle;
        }
    }
}
