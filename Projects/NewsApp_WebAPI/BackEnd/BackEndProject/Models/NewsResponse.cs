using NewsAPI.Models;
namespace BackEndProject.Models;


/// <summary>
/// Represents a response returned from the news API.
/// </summary>

public class NewsResponse
{
    /// <summary>
    /// Gets or sets the status of the news API request.
    /// </summary>
    public string Status;

    /// <summary>
    /// Total number of articles that match the request.
    /// </summary>
    public int TotalResults;

    /// <summary>
    ///  Articles objects returned by the news API.
    /// </summary>
    public List<Article> Articles;
}
