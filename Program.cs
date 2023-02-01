using AutoMapper;
using BrowserNote.Data;
using BrowserNote.Dtos;
using BrowserNote.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

// Add services to the container.
// builder.Services.AddControllers();

var sqlConBuilder = new SqlConnectionStringBuilder();

sqlConBuilder.ConnectionString = builder.Configuration.GetConnectionString("SQLDBConnection");
sqlConBuilder.UserID = builder.Configuration["UserId"];
sqlConBuilder.Password = builder.Configuration["Password"];


// builder.Services.AddDbContext<AppDbContext>(opt => opt.UseMySql(sqlConBuilder.ConnectionString, ServerVersion.AutoDetect(sqlConBuilder.ConnectionString)));
builder.Services.AddDbContext<AppDbContext>(opt => opt.UseSqlServer(sqlConBuilder.ConnectionString));
builder.Services.AddScoped<INoteRepo, NoteRepo>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

var notesAPI = "api/v1/notes";

app.MapGet(notesAPI, async (INoteRepo repo, IMapper mapper) =>
{
    var notes = await repo.GetAllNotes();
    return Results.Ok(mapper.Map<IEnumerable<NoteReadDto>>(notes));
});

app.MapGet("api/v1/notes/{id}", async (INoteRepo repo, IMapper mapper, int id) =>
{
    var note = await repo.GetNoteById(id);
    if (note != null)
    {
        return Results.Ok(mapper.Map<NoteReadDto>(note));
    }

    return Results.NotFound();
});

app.MapPost("api/v1/notes", async (INoteRepo repo, IMapper mapper, NoteCreateDto noteCreateDto) =>
{
    var noteModel = mapper.Map<Note>(noteCreateDto);
    if (noteModel.UserId == null)
    {
        return Results.BadRequest("User Id not specified");
    }

    await repo.CreateNote(noteModel);
    await repo.SaveChanges();

    var noteReadDto = mapper.Map<NoteReadDto>(noteModel);
    return Results.Created($"api/vi/notes/{noteReadDto.Id}", noteReadDto);
});

app.MapPut("api/v1/notes/{id}", async (INoteRepo repo, IMapper mapper, int id, NoteUpdateDto noteUpdateDto) =>
{
    var note = await repo.GetNoteById(id);
    if (note == null)
    {
        return Results.NotFound();
    }

    mapper.Map(noteUpdateDto, note);
    await repo.SaveChanges();

    return Results.NoContent();
});


app.MapDelete("api/v1/notes/{id}", async (INoteRepo repo, IMapper mapper, int id) =>
{
    var note = await repo.GetNoteById(id);
    if (note == null)
    {
        return Results.NotFound();
    }

    repo.DeleteNote(note);
    await repo.SaveChanges();

    return Results.NoContent();
});

app.Run();
