using BackEndProject.Models;
using NewsAPI;
using NewsAPI.Constants;
using NewsAPI.Models;

namespace BackEndProject.Endpoints;

public static class NewsClientEndPointsV1
{g
    public static RouteGroupBuilder MapNewsEndPointsV1(this IEndpointRouteBuilder app)
    {
        var groupBuilder = app.MapGroup("api/v1/news").WithTags("News Endpoints");
        
        groupBuilder.MapGet("/topHeadlines", GetTopHeadlines);
        groupBuilder.MapGet("/search", SearchBySearchParams);
        groupBuilder.MapGet("/sources", GetBySources);
        groupBuilder.MapGet("/categories", GetCategories);

        return groupBuilder;
    }




    private static ArticlesResult GetTopHeadlines([AsParameters] NewsSearchRequest request,NewsApiClient newsApiClient)
    {
        var result = newsApiClient.GetTopHeadlines(new TopHeadlinesRequest()
        {
            Country = request.Country,
            Language = request.Language,
        });
        
        return result;
    }

    private static ArticlesResult GetBySources([AsParameters] NewsSearchRequest request, NewsApiClient newsApiClient)
    {
        var result = newsApiClient.GetEverything(new EverythingRequest()
        {
            Language = request.Language,
            Sources = request.Sources.ToList()
            
        });
        return result;
    }

    private static ArticlesResult SearchBySearchParams([AsParameters] NewsSearchRequest request, NewsApiClient newsApiClient)
    {
        var result = newsApiClient.GetTopHeadlines(new TopHeadlinesRequest()
        {
            Language = request.Language,
            Country = request.Country,
            Category = request.Category  ,
            Q = request.Query,
            Sources = request.Sources.ToList()
        });
        Console.WriteLine(result.Articles.Count);
        return result;
    }

    private static List<string> GetCategories(HttpContext context)
    {
        List<string> categoriesList = new List<string>();
        categoriesList=Enum.GetNames(typeof(Categories)).ToList();

      
        Console.Write(categoriesList.Count);

        return categoriesList;
    }
    
}
