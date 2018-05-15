# React-Reservator

A quick and simple NodeJS/Mongo/GraphQL/React/Redux demo application.
This originally started out as a 'code challenge,' for what I could get done in 4-5 hours, but seeing as I've only been able to put in a few minutes here and there, and the server portion works, I'm building out a client (the React/Redux part), and adding/moving bits and pieces as I go (so, the demo will likely break for periods of time, until I can get off work for a few minutes and hit it again).
[Demonstration Deployment](https://blooming-caverns-52502.herokuapp.com/)

Note: Presently, the React client is being built out. I get about 15 minutes a day to write code that isn't for work, so the demo may or may not be up and running depending on where I last left off. 

- the demo is currently offline, that means I've hit an odd breakpoint somewhere, messing with the client. The server isn't being touched (complete, for the time being), and it's just a matter of cloning, cd'ing to the directory, and mashing in 'npm run start' to get it going.

- This is currently using MLab (so yes, the persistence is provided by MongoDB), as I made a compromise against running a local Couchbase instance.

- 'Production'-wise, I'm using Heroku, so I don't wind up cluttering my AWS account

- Eventually, I'll containerize the application, pipeline it, etc., but this is small-scale, and I'm time-crunched at the moment.

- GraphiQL is enabled at the moment, so http://localhost:4000/graphql to muck about with the API if you choose to clone it.
