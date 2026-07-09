using BackEndProject.Endpoints;
using NewsAPI;

var builder = WebApplication.CreateBuilder(args);
var apiKey = builder.Configuration["apiKey"];

if (string.IsNullOrWhiteSpace(apiKey))
{
    throw new InvalidOperationException("Missing NewsAPI key. Configure 'apikey' in appsettings, user secrets, or environment variables.");
}
builder.Services.AddCors();
// Add services to the container.
builder.Services.AddSingleton(new NewsApiClient(apiKey));
builder.Services.AddOpenApi();
//discover endpoints
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddLogging(logging => logging.AddConsole());


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1"));
}
app.UseCors(policyBuilder => { policyBuilder.WithOrigins("http://localhost:5173").AllowAnyMethod().AllowAnyHeader();});

app.UseHttpsRedirection();
app.MapNewsEndPointsV1();

//Endpoints

app.Run();
