namespace BrowserNote.Dtos
{
    public class NoteReadDto
    {
        public int Id { get; set; }
        public string? Text { get; set; }
        public string? Title { get; set; }
        public int? UserId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}