### Problem Solving with Graphql

Over the past decade, REST has become the standard (yet a fuzzy one) for designing web APIs.
It offers some great ideas, such as stateless servers and structured access to resources.
However, REST APIs have shown to be too inflexible to keep up with the rapidly changing requirements of the clients that access them.

GraphQL was developed to cope with the need for more flexibility and efficiency!
It solves many of the shortcomings and inefficiencies that developers experience when interacting with REST APIs.

One of the most common problems with REST is that of over- and underfetching.
This happens because the only way for a client to download data is by hitting endpoints that return fixed data structures.
It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs.

1. Overfetching

- Overfetching means that a client downloads more information than is actually required in the app.
  Because when you ask only for a username, it gives you with the whole user object.

2. Underfetching

- Underfetching generally means that a specific endpoint doesn’t provide enough of the required information.

Benefits of a Schema & Type System
GraphQL uses a strong type system to define the capabilities of an API.
All the types that are exposed in an API are written down in a schema using the GraphQL Schema Definition Language (SDL).
This schema serves as the contract between the client and the server to define how a client can access the data.

Once the schema is defined,
the teams working on frontend and backends can do their work without further communication
since they both are aware of the definite structure of the data that’s sent over the network.

Frontend teams can easily test their applications by mocking the required data structures.
Once the server is ready, the switch can be flipped for the client apps to load the data from the actual API.

###Set up with(https://github.com/dotansimha/graphql-yoga)
###API from (https://yts.mx/api#list_movies)
