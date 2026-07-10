# News API Endpoints

## Endpoint Summary

| Method | Endpoint        | Description                              |
| ------ | --------------- | ---------------------------------------- |
| `GET`  | `/topHeadlines` | Retrieves top news headlines.            |
| `GET`  | `/search`       | Searches for news articles.              |
| `GET`  | `/sources`      | Retrieves news articles by source.       |
| `GET`  | `/categories`   | Retrieves the available news categories. |

---

## Get Top Headlines

Retrieves top news headlines.

### Request

```http
GET /topHeadlines
```

### Endpoint Mapping

```csharp
groupBuilder.MapGet("/topHeadlines", GetTopHeadlines);
```

### Responses

| Status Code                 | Result                 | Description                                |
| --------------------------- | ---------------------- | ------------------------------------------ |
| `200 OK`                    | `Results.Ok(result)`   | The headlines were retrieved successfully. |
| `500 Internal Server Error` | `Results.Problem(...)` | The request could not be completed.        |

---

## Search Articles

Searches for news articles using search parameters.

### Request

```http
GET /search
```

### Endpoint Mapping

```csharp
groupBuilder.MapGet("/search", SearchBySearchParams);
```

### Responses

| Status Code                 | Result                 | Description                                    |
| --------------------------- | ---------------------- | ---------------------------------------------- |
| `200 OK`                    | `Results.Ok(result)`   | Matching articles were retrieved successfully. |
| `500 Internal Server Error` | `Results.Problem(...)` | The request could not be completed.            |

---

## Get Articles by Source

Retrieves news articles from selected sources.

### Request

```http
GET /sources
```

### Endpoint Mapping

```csharp
groupBuilder.MapGet("/sources", GetBySources);
```

### Responses

| Status Code                 | Result                 | Description                                                     |
| --------------------------- | ---------------------- | --------------------------------------------------------------- |
| `200 OK`                    | `Results.Ok(result)`   | Articles from the selected sources were retrieved successfully. |
| `500 Internal Server Error` | `Results.Problem(...)` | The request could not be completed.                             |

---

## Get Categories

Retrieves the available news categories.

### Request

```http
GET /categories
```

### Endpoint Mapping

```csharp
groupBuilder.MapGet("/categories", GetCategories);
```

### Responses

| Status Code                 | Result                 | Description                                 |
| --------------------------- | ---------------------- | ------------------------------------------- |
| `200 OK`                    | `Results.Ok(result)`   | The categories were retrieved successfully. |
| `500 Internal Server Error` | `Results.Problem(...)` | The request could not be completed.         |

---

## Problem Response

Failed requests return a Problem Details object.

### Example

```json
{
  "type": "https://tools.ietf.org/html/rfc9110#section-15.6.1",
  "title": "An error occurred while processing your request.",
  "status": 500,
  "detail": "Unable to retrieve news articles."
}
```
