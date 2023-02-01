using BrowserNote.Models;
using Microsoft.EntityFrameworkCore;

namespace BrowserNote.Data
{
    public class NoteRepo : INoteRepo
    {
        private readonly AppDbContext _context;

        public NoteRepo(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreateNote(Note note)
        {
            if (note == null)
            {
                throw new ArgumentNullException(nameof(note));
            }

            await _context.AddAsync(note);
        }

        public void DeleteNote(Note note)
        {
            if (note == null)
            {
                throw new ArgumentNullException(nameof(note));
            }

            _context.Notes.Remove(note);
        }

        public async Task<IEnumerable<Note>> GetAllNotes()
        {
            return await _context.Notes.ToListAsync();
        }

        public async Task<Note?> GetNoteById(int id)
        {
            return await _context.Notes.FirstOrDefaultAsync(note => note.Id == id);
        }

        public async Task<IEnumerable<Note>> GetNotesByUserId(int userId)
        {
            return await _context.Notes.Where(note => note.UserId == userId).ToListAsync();
        }

        public async Task SaveChanges()
        {
            await _context.SaveChangesAsync();
        }
    }
}