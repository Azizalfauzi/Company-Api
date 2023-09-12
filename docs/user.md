# User API Spec

## Register User Api Admin

Endpoint : POST api/company/users

Request Body Admin :

```json
{
  "username": "zuha",
  "password": "rahazia123",
  "name": "Aziz Alfauzi",
  "role": "admin"
}
```

Request Body User :

```json
{
  "username": "joko",
  "password": "rahazia123",
  "name": "Joko Budiawan",
  "role": "user"
}
```

Response Body Admin :

```json
{
  "username": "zuha",
  "name": "Aziz Alfauzi",
  "role": "admin"
}
```

Response Body user :

```json
{
  "username": "zuha",
  "name": "Aziz Alfauzi",
  "role": "user"
}
```

Response Body Error

```json
{
  "error": "Username already registered"
}
```

## Login User Api

Endpoint : Post /api/company/users/login

Request Body :

```json
{
  "username": "zuha",
  "password": "rahazia123"
}
```

Response Body :

```json
{
  "data": {
    "role": "admin",
    "token": "unique-token"
  }
}
```

Response Body Error

```json
{
  "error": "Username and Password wrong"
}
```

## Get User Api

Enpoint : Get /api/company/users/current

Header :

- Authorization : token

```json
{
  "data": {
    "username": "zuha",
    "name": "Aziz Alfa Zuha",
    "role": "admin"
  }
}
```

Response Body Error

```json
{
  "error": "Unauthorized"
}
```

## Update User Api

Endpoint PATCH /api/company/users/current

Header :

- Authorization : token

Response Body :

```json
{
  "name": "Aziz Alfa Zuha", //optional
  "password": "new password" //optional
}
```

Response Body :

```json
{
  "data": {
    "username": "zuha",
    "name": "Aziz Alfa Zuha",
    "role": "admin"
  }
}
```

Response Body Error

```json
{
  "error": "Name length max 100"
}
```

## Logout User Api

Endpoint : DELETE /api/company/users/logout

Header :

- Authorization : token

Response body :

```json
{
  "data": "ok"
}
```

Response Body Error

```json
{
  "error": "Unauthorized"
}
```
