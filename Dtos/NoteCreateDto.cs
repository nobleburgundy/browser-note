using System.ComponentModel.DataAnnotations;

namespace BrowserNote.Dtos
{
    public class NoteCreateDto
    {
        [Required]
        public string? Text { get; set; }

        [Required]
        public string? Title { get; set; }

        [Required]
        public int? UserId { get; set; }

        public DateTime? CreatedDate { get; set; } = DateTime.Now;

        public DateTime? UpdatedDate { get; set; } = DateTime.Now;
    }
}