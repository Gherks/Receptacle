using Receptacle.Shared.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Receptacle.Server.Services.Interfaces
{
    public interface IArticleService
    {
        Task<ArticleDto> GetByIdAsync(Guid id);
        Task<ArticleDto> GetByNumberAsync(string number);
        Task<IReadOnlyList<ArticleDto>> GetAllAsync();
        Task DeleteAsync(Guid id);
    }
}
