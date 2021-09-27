using Receptacle.Server.Entities;
using System.Threading.Tasks;

namespace Receptacle.Server.Repositories.Interfaces
{
    public interface IArticleRepository : IAsyncRepository<Article>
    {
        Task<Article> GetByNameAsync(string name);
    }
}
