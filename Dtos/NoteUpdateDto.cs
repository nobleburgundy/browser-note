namespace BrowserNote.Dtos
{
    public class NoteUpdateDto
    {
        public string? Text { get; set; }
        public string? Title { get; set; }

        public DateTime? UpdatedDate { get; set; } = DateTime.Now;
    }
}