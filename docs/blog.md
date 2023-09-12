# Blog Api Spec

## Create Blog Api

Endpoint : POST api/profile/:profileId/blog

Headers:

- Authorization : Token

Request Body :

```json
{
  "title": "Jl.Papandayan",
  "subtitle": "Bali",
  "description": "Bali"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "title": "Jl.Papandayan",
    "subtitle": "Bali",
    "description": "Bali"
  }
}
```

Response Body Error :

```json
{
  "errors": "Title is required"
}
```

## Update Blog Api

Endpoint : PUT api/profile/:profileId/blog/:blogId

Headers:

- Authorization : Token

Request Body :

```json
{
  "title": "Jl.Papandayan",
  "subtitle": "Bali",
  "description": "Bali"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "title": "Jl.Papandayan",
    "subtitle": "Bali",
    "description": "Bali"
  }
}
```

Response Body Error :

```json
{
  "errors": "Title is required"
}
```

## Get Blog Api

Endpoint : Get api/profile/:profileId/blog/:blogId

Headers:

- Authorization : Token

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "title": "Jl.Papandayan",
    "subtitle": "Bali",
    "description": "Bali"
  }
}
```

Response Body Error :

```json
{
  "errors": "Blog is not found"
}
```

## List Blog Api

Endpoint : Get api/profile/:profileId/blog

Headers:

- Authorization : Token

Response Body Success :

```json
{
  "data": [
    {
      "id": "1",
      "title": "Jl.Papandayan",
      "subtitle": "Bali",
      "description": "Bali"
    },
    {
      "id": "2",
      "title": "Jl.Papandayan",
      "subtitle": "Bali",
      "description": "Bali"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Blog is not found"
}
```

## Remove Blog Api

Endpoint : Delete api/profile/:profileId/blog/:blogId

Headers:

- Authorization : Token

Response Body Success :

```json
{
  "data": "Ok"
}
```

Response Body Error :

```json
{
  "errors": "Blog is not found"
}
```
