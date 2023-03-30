using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Infrastructure.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PorfTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PorfTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PostTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PostTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Porfs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Article = table.Column<string>(type: "text", nullable: true),
                    Imageurl = table.Column<string>(type: "text", nullable: true),
                    Videourl = table.Column<string>(type: "text", nullable: true),
                    PorfTypeId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Porfs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Porfs_PorfTypes_PorfTypeId",
                        column: x => x.PorfTypeId,
                        principalTable: "PorfTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Article = table.Column<string>(type: "text", nullable: true),
                    Imageurl = table.Column<string>(type: "text", nullable: true),
                    Videourl = table.Column<string>(type: "text", nullable: true),
                    PostTypeId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Posts_PostTypes_PostTypeId",
                        column: x => x.PostTypeId,
                        principalTable: "PostTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Porfs_PorfTypeId",
                table: "Porfs",
                column: "PorfTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_PostTypeId",
                table: "Posts",
                column: "PostTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Porfs");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "PorfTypes");

            migrationBuilder.DropTable(
                name: "PostTypes");
        }
    }
}
