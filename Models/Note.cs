using System.ComponentModel.DataAnnotations;

namespace BrowserNote.Models
{
    public class Note
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Title { get; set; }

        [Required]
        public string? Text { get; set; }

        public int UserId { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }
    }
}
