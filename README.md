# Node.js REST API versioning
REST API multiple versions using Node.js, Express and TypeScript

### Get Started
Requires Node 10+

1. `npm i` - Install dependencies
2. Start server
    - `npm run dev` - Start server in development mode
    - `npm run start` - Start server in production mode
3. Server runs in `http://localhost:3000`

### API Endpoints
| Endpoints | Methods |
| --- | --- |
| `/api/v1/parse` | POST |
| `/api/v2/parse` | POST |

### Sample Request & Response
#### Request
```json
// HTTP Method: POST
{ 
  "data": "JOHN0000MICHAEL0009994567"
}
```

#### Response
- from /api/v1/parse
```json
{
  "statusCode": 200,
  "data": {
    "firstName": "JOHN0000",
    "lastName": "MICHAEL000",
    "clientId": "9994567"
  }
}
```

- from /api/v2/parse
```json
{
  "statusCode": 200,
  "data": {
    "firstName": "JOHN",
    "lastName": "MICHAEL",
    "clientId": "999-4567"
  }
}
```

Note: Test screenshots in folder `/screenshots`.
