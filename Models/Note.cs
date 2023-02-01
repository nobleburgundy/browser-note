using System.ComponentModel.DataAnnotations;

namespace BrowserNote.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string? Text { get; set; }
        public string? Title { get; set; }
        public int? UserId { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? UpdatedDate { get; set; }
    }
}
