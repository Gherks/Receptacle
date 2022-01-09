﻿using Receptacle.Server.Entities.Base;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Receptacle.Server.Entities
{
    public class Ingredient : BaseEntity
    {
        public Guid IngredientCategoryId { get; set; }

        public string Name { get; set; }

        [Column(TypeName = "decimal(18,6)")]
        public decimal Fat { get; set; }

        [Column(TypeName = "decimal(18,6)")]
        public decimal Carbohydrates { get; set; }

        [Column(TypeName = "decimal(18,6)")]
        public decimal Protein { get; set; }

        [Column(TypeName = "decimal(18,6)")]
        public decimal Calories { get; set; }
    }
}
