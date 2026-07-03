using CalculatorProject;
using Microsoft.AspNetCore.Server.Kestrel.Core;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddEndpointsApiExplorer();


//builder.WebHost.ConfigureKestrel(o => o.ListenAnyIP(7270,options  => options.UseHttps()) );

/*
builder.WebHost.UseIIS();
builder.WebHost.UseKestrel();
*/

var app= builder.Build();
// route for http get request. lambda function is executed when called.
app.MapGet("/", () => "Calculator Application");
app.UseSwagger();
app.UseSwaggerUI();


CalculatorOperations calculatorOperations = new();

//route for calculator app
app.MapGet("/add",(double value1,double value2)=> calculatorOperations.Add(value1,value2) );
app.MapGet("/subtract",(double value1,double value2)=> calculatorOperations.Subtract( value1,value2) );
app.MapGet("/multiply",(double value1,double value2)=> calculatorOperations.Multiply( value1,value2) );
app.MapGet("/divide",(double value1,double value2)=> calculatorOperations.Divide(value1, value2));


app.Run();