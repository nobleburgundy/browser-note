using AutoMapper;
using BrowserNote.Dtos;
using BrowserNote.Models;

namespace BrowserNote.Profiles
{
    public class UsersProfile : Profile
    {
        public UsersProfile()
        {
            CreateMap<User, UserReadDto>();
            CreateMap<UserCreateDto, User>();
            CreateMap<UserUpdateDto, User>();
        }
    }
}