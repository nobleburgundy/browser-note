using System.ComponentModel.DataAnnotations;

namespace BrowserNote.Dtos
{
    public class NoteCreateDto
    {
        [Required]
        public string? Text { get; set; }

        [Required]
        public string? Title { get; set; }

        public int? UserId { get; set; }
    }
}