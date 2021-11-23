# GraphQL API with TypeGraphQL, TypeGoose & TypeScript

### What technology are we using?
* [TypeGraphQL](https://typegraphql.com/)
* [TypeGoose](https://typegoose.github.io/typegoose/)


### Who is this tutorial for?
* Those familiar with NodeJs
* Those wanting to learn GraphQL
* Those wanting to learn TypeScript

### I don't know GraphQL, should I watch this video?
* TypeGraphQL is to GraphQL what TypeScript is to JavaScript
* You might get a bit confused, the syntax used is weird
* You should get a basic understanding of GraphQL first
* I'll do a walk-through and explain the code first

### Why TypeGraphQL?
TypeGraphQL reduced boilerplate. Without it, you have to update schema, data models, resolvers & type definitions. With TypeGraphQL, you only need to update resolvers and data models.

### WTF is an decorator?
A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

Reference: https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators



---

## Queries & mutations
### Create user
Query
```
mutation createUser($input: CreateUserInput!){
  createUser(input: $input) {
    email
    _id
    name
  }
}
```

Input
```
{
  "input": {
    "email": "1@example.com",
    "name": "Jane Doe",
    "password": "password"
  }
}
```

### Get current user
Query
```
query {
  me {
    _id
    name
    email
  }
}
```

### Login
Query
```
mutation login($input: LoginInput!){
  login(input: $input) 
}
```

Input
```
{
  "input": {
    "email": "1@example.com",
    "password": "password"
  }
}
```

### Create a product
Query
```
mutation createProduct($input: CreateProductInput!){
  createProduct(input: $input){
    _id
    price
    productId
    name
    description
  }
}
```

Input
```
{
  "input": {
    "name": "A test product111",
    "description": "blah blah blah blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah",
    "price": 24.99
    
  }
}
```

### Get products
```
query products {
  products {
    productId
    name
    description
    productId
  }
}
```

### Get a single product
Query
```
query product($input: GetProductInput!) {
  product(input: $input) {
    _id
    productId
    price
    name
    description
  }
}
```

Input
```
{
  "input": {
    "productId": "product_23cn3k61h8"
  }
}
```