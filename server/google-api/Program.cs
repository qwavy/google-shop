using System.Net;
using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// var builder = WebApplication.CreateBuilder(args);
// builder.Services.AddDbContext<MyDb>(opt => opt.UseInMemoryDatabase("Users"));
// builder.Services.AddDatabaseDeveloperPageExceptionFilter();

// builder.Services.AddCors(options =>
// {
//     options.AddDefaultPolicy(builder =>
//     {
//         builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
//     });
// });

// var app = builder.Build();

// app.UseCors();


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<MyDb>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<MyDb>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    using var scope = app.Services.CreateScope();
    var dbContext = scope.ServiceProvider.GetRequiredService<MyDb>();
    dbContext.Database.EnsureCreated();
};

app.UseCors();


// auth

app.MapGet("/users", async (MyDb db) =>
    await db.Users.ToListAsync());

app.MapPost("/register", async (User user, MyDb db) =>
{
    db.Users.Add(user);
    await db.SaveChangesAsync();

    return Results.Created($"user created {user.Email}", user);
});

app.MapPost("/login", async (User user, MyDb db) =>
{

    var userInDb = await db.Users.FirstOrDefaultAsync(userDb => userDb.Email == user.Email );

    if(userInDb != null){
        if(userInDb.Password == user.Password){
            return Results.Ok(userInDb);
        }else{
            return Results.NotFound("password not correct");
        }
    }

    return Results.NotFound("user not found");
});

int userIdVariable = 0;

app.MapPost("/sendUserId" , (UserIdModel userId,MyDb db) => {
    userIdVariable = userId.userId;
    return Results.Ok(userIdVariable);
});
app.MapGet("/getUserId" , () => {
    return Results.Ok(userIdVariable);
});

// products


app.MapGet("/products/{id}", async (int id, MyDb db) =>
    await db.Products.FindAsync(id)
        is Product product
            ? Results.Ok(product)
            : Results.NotFound()
);

app.MapGet("/products", async (string? filterMethod, MyDb db) =>
{

    Task<List<Product>> filteredProducts;


    if (filterMethod == null)
    {
        var allProducts = await db.Products.ToListAsync();
        filteredProducts = Task.FromResult(allProducts);
    }
    else
    {
        filteredProducts = filterByCategoryAsync(filterMethod, db);
    }
    var filteredProductsResponse = await filteredProducts;
    return Results.Ok(filteredProductsResponse);

    async Task<List<Product>> filterByCategoryAsync(string categoryMethod,  MyDb db)
    {


        var filterByCategoryProducts = await db.Products
            .Where((elem) => elem.Category == categoryMethod)
            .ToListAsync();

        return filterByCategoryProducts;
    }

});



app.MapPost("/AddProducts", async (Product product, MyDb db) =>
{
    db.Products.Add(product);
    await db.SaveChangesAsync();
    return Results.Created($"{product.Name} created", product);
});


app.MapDelete("/DeleteProduct/{productId}" , async (int productId , MyDb db) => {
    var productDel = await db.Products.FindAsync(productId);
    if(productDel == null) return Results.NotFound();
    db.Products.Remove(productDel);
    await db.SaveChangesAsync();
    return Results.NoContent();
});



// cart
app.MapGet("/cart/{userId}/get", async (int userId, MyDb db) =>
{
    List<CartProduct> objectsList = new List<CartProduct>();


    foreach (var elem in db.CartProducts)
    {
        if (elem.UserId == userId)
        {
            objectsList.Add(elem);
        }
    }

    return Results.Ok(objectsList);
});

app.MapGet("/cart/{userId}/total" , async (int userId,MyDb db) => {
    double total = 0;
    foreach(var elem in db.CartProducts)
    {
        if(elem.UserId == userId)
        {
            total += elem.Price;
        }
    }
    return Results.Ok(total);

    
});

app.MapPost("/cart/{userId}/{id}", async (int userId, int id, MyDb db) =>
{
    var product = await db.Products.FindAsync(id);
    var cartProduct = new CartProduct
    {
        UserId = userId,
        Name = product.Name,
        Price = product.Price,
        Category = product.Category,
        Image = product.Image

    };
    db.CartProducts.Add(cartProduct);
    await db.SaveChangesAsync();
    return Results.Ok($"created {cartProduct.Id} for {cartProduct.UserId}");
});

app.MapDelete("/cart/{userId}/{productId}", async (int userId, int productId, MyDb db) =>
{
    foreach (var elem in db.CartProducts)
    {
        if (elem.UserId == userId)
        {
            if (elem.Id == productId)
            {
                db.CartProducts.Remove(elem);
            }
        }
    }
    await db.SaveChangesAsync();
    return Results.Ok($"deleted {productId} for {userId}");
});

app.MapGet("/cart/{userId}/testEmptyCart" , async ( int userId,MyDb db) => {
        List<CartProduct> objectsList = new List<CartProduct>();


    foreach (var elem in db.CartProducts)
    {
        if (elem.UserId == userId)
        {
            objectsList.Add(elem);
        }
    }

    if(objectsList.Count > 0){
        return Results.Ok("cart doesnt Empty");
    }else{
        return Results.Ok("cart Empty");
    }

});


app.Run();