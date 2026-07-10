using Microsoft.AspNetCore.Mvc;
using NewsAPI.Constants;

namespace BackEndProject.Models;

/// <summary>
/// Class <c> NewsSearchRequest </c> is used to collect all the query parameters.
/// This class acts as a model for the request parameters
/// instead of writing all query variables as parameters in the endpoint.
/// </summary>


public class NewsSearchRequest
{
    ///<summary>
    /// Variables describe the query parameters.
    /// The query parameters are used to filter the news articles.
    /// The query parameters are optional.
    /// </summary>
    ///
    /// 
    //keyword in title or article body
    [FromQuery(Name="searchKeyWords")]
    public string? Keywords { get; set; }=string.Empty;
    
    [FromQuery(Name="from")]
    public int? From { get; set; }
    [FromQuery(Name="to")]
    public int? To { get; set; }
    
    [FromQuery(Name = "language")] 
    public Languages? Language { get; set; } = Languages.EN;
    
    [FromQuery(Name = "country")] 
    public Countries? Country { get; set; } = Countries.US;
    [FromQuery(Name = "category")] 
    public Categories? Category { get; set; }
    
    
    [FromQuery(Name = "searchIn")]
    public string? SearchIn { get; set; }

    [FromQuery(Name="domains")]
    public string[]? Domains { get; set; }
    [FromQuery(Name="excludeDomains")]
    public string[]? ExcludeDomains { get; set; }
    [FromQuery(Name="sources")]
    public string[]? Sources { get; set; }
    [FromQuery(Name="excludeSources")]
    public string[]? ExcludeSources { get; set; }

    [FromQuery(Name = "sortBy")] 
    public string? SortBy { get; set; } = "publishedAt";
    
    [FromQuery(Name = "page")]
    public int? Page { get; set; } = 1;

    [FromQuery(Name = "pageSize")]
    public int? PageSize { get; set; } = 10;

}