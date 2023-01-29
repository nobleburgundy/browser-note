namespace BrowserNote.Dtos
{
    public class NoteCreateDto
    {
        public string? Text { get; set; }
        public string? Title { get; set; }

        public int? UserId { get; set; }
    }
}