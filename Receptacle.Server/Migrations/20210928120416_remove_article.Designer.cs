﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Receptacle.Server.Context;

namespace Receptacle.Server.Migrations
{
    [DbContext(typeof(ReceptacleContext))]
    [Migration("20210928120416_remove_article")]
    partial class remove_article
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Receptacle.Server.Entities.Ingredient", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal>("Calories")
                        .HasColumnType("decimal(18,6)");

                    b.Property<decimal>("Carbohydrates")
                        .HasColumnType("decimal(18,6)");

                    b.Property<decimal>("Fat")
                        .HasColumnType("decimal(18,6)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Protein")
                        .HasColumnType("decimal(18,6)");

                    b.HasKey("Id");

                    b.ToTable("Ingredient");
                });

            modelBuilder.Entity("Receptacle.Server.Entities.Recipe", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("BasePortions")
                        .HasColumnType("int");

                    b.Property<string>("Instructions")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Recipe");
                });

            modelBuilder.Entity("Receptacle.Server.Entities.WeightedIngredient", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Grams")
                        .HasColumnType("int");

                    b.Property<Guid?>("IngredientId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("RecipeId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("IngredientId");

                    b.HasIndex("RecipeId");

                    b.ToTable("WeightedIngredient");
                });

            modelBuilder.Entity("Receptacle.Server.Entities.WeightedIngredient", b =>
                {
                    b.HasOne("Receptacle.Server.Entities.Ingredient", "Ingredient")
                        .WithMany()
                        .HasForeignKey("IngredientId");

                    b.HasOne("Receptacle.Server.Entities.Recipe", null)
                        .WithMany("WeightedIngredients")
                        .HasForeignKey("RecipeId");

                    b.Navigation("Ingredient");
                });

            modelBuilder.Entity("Receptacle.Server.Entities.Recipe", b =>
                {
                    b.Navigation("WeightedIngredients");
                });
#pragma warning restore 612, 618
        }
    }
}