const connection = require('./db/connection');
const express = require('express');
const express_graphql = require('express-graphql');
const cors = require('cors');

const db = connection();
const app = express();

app.use('*', cors());

const reservationSchema = require('./graphql/index').reservationSchema;
app.use('/graphql', cors(), express_graphql({
    schema: reservationSchema,
    rootValue: global,
    graphiql: true,
    pretty: true
}));

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file
    app.use(express.static('client/build'));
  
    // Express will serve up index.html if it doesn't
    // recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


  const PORT = process.env.PORT || 4000;
  

// Up and running on port 4000
app.listen(PORT, () => {
    console.log("React-Reservator GraphQL API running on port 4000");
});

