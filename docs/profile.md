# Profile Spec Api

## Create Profile Api

Endpoint : Post api/company/profile

Headers:

- Authorization : token

Request Body :

```json
{
  "first_name": "Aziz",
  "last_name": "Alfa",
  "email": "aziz@gmail.com",
  "phone": "082334"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1, //Autoincrement
    "first_name": "Aziz",
    "last_name": "Alfa",
    "email": "aziz@gmail.com",
    "phone": "082334"
  }
}
```

Response Error :

```json
{
  "error": "Email is not valid format"
}
```

## Update Contact Api

Endpoint : PUT api/company/profile/:id

Headers:

- Authorization : token

Request Body :

```json
{
  "first_name": "Aziz",
  "last_name": "Alfa",
  "email": "aziz@gmail.com",
  "phone": "082334"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1, //Autoincrement
    "first_name": "Aziz",
    "last_name": "Alfa",
    "email": "aziz@gmail.com",
    "phone": "082334"
  }
}
```

Response Error :

```json
{
  "errors": "Email is not valid"
}
```

## Get Contact Api

Endpoint : Get api/company/profile/:id

Headers:

- Authorization : token

Response Body Success:

```json
{
  "data": {
    "id": 1, //Autoincrement
    "first_name": "Aziz",
    "last_name": "Alfa",
    "email": "aziz@gmail.com",
    "phone": "082334"
  }
}
```

Response Error :

```json
{
  "errors": "User profile is not found!"
}
```

## Search Contact Api

Endpoint : Get api/company/profile

Headers:

- Authorization : token

- Query Params :

---

- name : Search by first_name or last_name , using like ,optional

- email : Search by email using like , optional

- phone : Search by phone using like , optional

- page : number of page, default 1

- size : number of page, default 10

Response Body Success:

```json
{
  "data": [
    {
      "id": 1, //Autoincrement
      "first_name": "Aziz",
      "last_name": "Alfa",
      "email": "aziz@gmail.com",
      "phone": "082334"
    },
    {
      "id": 2, //Autoincrement
      "first_name": "Eko",
      "last_name": "Adam",
      "email": "eko@gmail.com",
      "phone": "082332"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Error :

## Remove Contact Api

Endpoint : Delete api/contacts

Headers:

- Authorization : token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Error :

```json
{
  "errors": "Profile user is not found"
}
```
