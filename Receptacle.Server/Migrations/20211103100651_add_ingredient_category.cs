using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Receptacle.Server.Migrations
{
    public partial class add_ingredient_category : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "IngredientCategoryId",
                table: "Ingredient",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "IngredientCategory",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SortOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IngredientCategory", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ingredient_IngredientCategoryId",
                table: "Ingredient",
                column: "IngredientCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ingredient_IngredientCategory_IngredientCategoryId",
                table: "Ingredient",
                column: "IngredientCategoryId",
                principalTable: "IngredientCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ingredient_IngredientCategory_IngredientCategoryId",
                table: "Ingredient");

            migrationBuilder.DropTable(
                name: "IngredientCategory");

            migrationBuilder.DropIndex(
                name: "IX_Ingredient_IngredientCategoryId",
                table: "Ingredient");

            migrationBuilder.DropColumn(
                name: "IngredientCategoryId",
                table: "Ingredient");
        }
    }
}
