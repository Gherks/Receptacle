using Receptacle.Server.Context;
using Receptacle.Server.Entities;
using Receptacle.Server.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Receptacle.Server.Repositories
{
    public class ArticleRepository : RepositoryBase<Article>, IArticleRepository
    {
        public ArticleRepository(ReceptacleContext dbContext) : base(dbContext)
        {
        }

        public async Task<Article> GetByNameAsync(string name)
        {
            return await _dbContext.Article.FirstOrDefaultAsync(article => article.Name.ToLower() == name.ToLower());
        }
    }
}
