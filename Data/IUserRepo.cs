using BrowserNote.Models;

namespace BrowserNote.Data
{
    interface IUserRepo
    {
        Task SaveChanges();
        Task<User?> GetUserById(int id);
        Task<IEnumerable<User>> GetAllUsers();
        Task CreateUser(User user);
        void DeleteUser(User user);
    }
}
