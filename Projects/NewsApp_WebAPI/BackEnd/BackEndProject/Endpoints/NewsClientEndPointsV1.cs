using BackEndProject.Models;
using NewsAPI;
using NewsAPI.Constants;
using NewsAPI.Models;

namespace BackEndProject.Endpoints;

public static class NewsClientEndPointsV1
{
    public static RouteGroupBuilder MapNewsEndPointsV1(this IEndpointRouteBuilder app)
    {
        var groupBuilder = app.MapGroup("api/v1/news").WithTags("News Endpoints");
        
        groupBuilder.MapGet("/topHeadlines", GetTopHeadlines);
        groupBuilder.MapGet("/search", SearchBySearchParams);
        groupBuilder.MapGet("/sources", GetBySources);
        groupBuilder.MapGet("/categories", GetCategories);

        return groupBuilder;
    }




    private static IResult GetTopHeadlines([AsParameters] NewsSearchRequest request, NewsApiClient newsApiClient)
    {
        try
        {
            var result = newsApiClient.GetTopHeadlines(new TopHeadlinesRequest()
            {
                Country = request.Country,
                Language = request.Language,
            });
            return Results.Ok(result);
            
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Results.Problem("Failed to fetch top headlines.");
        }
    }

    private static IResult GetBySources([AsParameters] NewsSearchRequest request, NewsApiClient newsApiClient)
    {
        if (request.Sources is null || request.Sources.Length == 0)
        {
            return Results.BadRequest("At least one source is required.");
        }

        try
        {
            var result = newsApiClient.GetEverything(new EverythingRequest()
            {
                Language = request.Language,
                Sources = request.Sources.ToList()
            
            });
            return Results.Ok(result);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Results.Problem("Failed to fetch news by sources.");
        }
    }

    private static IResult SearchBySearchParams([AsParameters] NewsSearchRequest request, NewsApiClient newsApiClient)
    {
        try
        {
            var result = newsApiClient.GetTopHeadlines(new TopHeadlinesRequest()
            {
                Language = request.Language,
                Country = request.Country,
                Category = request.Category,
                Q = request.Keywords,
            
            });
            Console.WriteLine(result.Articles.Count);
            return Results.Ok(result);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Results.Problem("Failed to search news.");
        }
    }

    private static IResult GetCategories(HttpContext context)
    {
        try
        {
            List<string> categoriesList = new List<string>();
        
            categoriesList=Enum.GetNames(typeof(Categories)).ToList();
            Console.Write(categoriesList.Count);

            return Results.Ok(categoriesList);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Results.Problem("Failed to fetch categories.");
        }
    }
    
}
