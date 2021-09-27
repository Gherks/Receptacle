using AutoMapper;
using Receptacle.Server.Entities;
using Receptacle.Server.Repositories.Interfaces;
using Receptacle.Server.Services.Interfaces;
using Receptacle.Shared.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Receptacle.Server.Services
{
    public class ArticleService : IArticleService
    {
        private readonly IArticleRepository _repository;
        private readonly IMapper _mapper;

        public ArticleService(IArticleRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<ArticleDto> GetByIdAsync(Guid id)
        {
            Article article = await _repository.GetByIdAsync(id);

            if (article != null)
            {
                return _mapper.Map<ArticleDto>(article);
            }

            return null;
        }

        public async Task<ArticleDto> GetByNumberAsync(string name)
        {
            Article article = await _repository.GetByNameAsync(name);

            if (article != null)
            {
                return _mapper.Map<ArticleDto>(article);
            }

            return null;
        }

        public async Task<IReadOnlyList<ArticleDto>> GetAllAsync()
        {
            var entities = await _repository.ListAllAsync();

            return entities.Select(article => _mapper.Map<ArticleDto>(article)).ToArray();
        }

        public async Task DeleteAsync(Guid id)
        {
            var entity = await _repository.GetByIdAsync(id);

            if (entity != null)
            {
                await _repository.DeleteAsync(entity);
            }
        }
    }
}