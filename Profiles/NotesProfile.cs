using AutoMapper;
using BrowserNote.Dtos;
using BrowserNote.Models;

namespace BrowserNote.Profiles
{
    public class NotesProfile : Profile
    {
        public NotesProfile()
        {
            // source ->  target
            CreateMap<Note, NoteReadDto>();
            CreateMap<NoteCreateDto, Note>();
            CreateMap<NoteUpdateDto, Note>();
        }
    }
}
