using BrowserNote.Models;

namespace BrowserNote.Data
{
    interface INoteRepo
    {
        Task SaveChanges();
        Task<Note?> GetNoteById(int id);
        Task<IEnumerable<Note>> GetNotesByUserId(int userId);
        Task<IEnumerable<Note>> GetAllNotes();
        Task CreateNote(Note note);
        void DeleteNote(Note note);
    }
}
