using Microsoft.AspNetCore.Mvc;

namespace browser_note.Controllers;

[Route("api")]
[ApiController]
public class BrowserNotesController : ControllerBase
{
    private readonly ILogger<BrowserNotesController> _logger;

    public BrowserNotesController(ILogger<BrowserNotesController> logger)
    {
        _logger = logger;
    }

    [HttpGet("notes")]
    public IEnumerable<BrowserNote> GetAll()
    {
        _logger.LogInformation(1, "api/notes GetAll() CALLED");
        return Enumerable.Range(1, 5).Select(index => new BrowserNote
        {
            Date = DateTime.Now.AddDays(index),
            ID = Random.Shared.Next(100000, 999999),
            Text = String.Format("blar browser note from {0}.", DateTime.Now.AddDays(index))
        })
        .ToArray();
    }
}
