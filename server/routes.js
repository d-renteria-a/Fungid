// const { query, response } = require('express');
const express = require('express');
const router = express.Router();

const mysql = require('mysql');

let pool;

if (process.env.NODE_ENV === 'production') {
    console.log("in production!")
    pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
  } else {
      pool = mysql.createPool(
      {
      connectionLimit : 10,
      host            : 'localhost',
      user            : 'root',
      password        : 'D46123Daniel',
      database        : 'fungid_final_project'
    });
    console.log("dev")
}

router.get('/api/', (request, response, next) => {
    response.send("hello from api root!");
})

//endpoint for grabbing all users
router.get('/users', (request, response, next) => {
    // Query the pool
    pool.query('select * from users', function (error, results, fields) {
    // Handle error after the release.
    if (error) throw error;
    //send newUser to front end
    response.send(results);
  });
})



//endpoint for users logging in. Adds user to DB, returns newUser 
router.post('/login', (request, response, next) => {
    //Create a new user and add them to database
    if (!request.body.username) {console.log ("Please add a username")}; 
  
    let newUser = {user_Id: Math.floor(Math.random()*50000), username: request.body.username};
    // Query the pool
    pool.query('insert into users (user_Id, username) values (?, ?)', [newUser.user_Id, newUser.username], function (error, results, fields) {
    // Handle error after the release.
        if (error) throw error;
        pool.query('select * from users', newUser.user_Id, function(error, results, fields) {
            if (error) throw error;
            response.send(results[0]);
        })
    });
    
})

router.get('/data_entries', (req, res, next) => {
    // let filter = req.query.filter

    pool.query('select * from data_entries', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    })
})

router.get('/data_entries/:filter/name', (req, res, next) => {
    let {filter} = req.params
    console.log(filter)

    switch(filter) {
        case 'A-E':
        pool.query("select * from data_entries WHERE name < 'E'", function (error, results, fields) {
            if (error) throw error;
            res.send(results)
        })
        break;

        case 'F-K':
        pool.query("SELECT * from data_entries WHERE name BETWEEN 'F' and 'K'", function (error, results,fields) {
            if (error) throw error;
            res.send(results)
        })
        break;

        case 'L-Q':
            pool.query("SELECT * from data_entries WHERE name BETWEEN 'L' and 'Q'", function (error, results,fields) {
                if (error) throw error;
                res.send(results)
            })
        break;

        case 'R-Z':
            pool.query("SELECT * from data_entries WHERE name BETWEEN 'R' and 'Z'", function (error, results,fields) {
                if (error) throw error;
                res.send(results)
            })
        break;

        default:
            return "No filter assigned"
    }
    
})

router.get('/data_entries/:filter/scientific_name', (req, res, next) => {
    let {filter} = req.params
    console.log(filter)

    switch(filter) {
        case 'A-E':
        pool.query("select * from data_entries WHERE scientific_name < 'E'", function (error, results, fields) {
            if (error) throw error;
            res.send(results)
        })
        break;

        case 'F-K':
        pool.query("SELECT * from data_entries WHERE scientific_name BETWEEN 'F' and 'K'", function (error, results,fields) {
            if (error) throw error;
            res.send(results)
        })
        break;

        case 'L-Q':
            pool.query("SELECT * from data_entries WHERE scientific_name BETWEEN 'L' and 'Q'", function (error, results,fields) {
                if (error) throw error;
                res.send(results)
            })
        break;

        case 'R-Z':
            pool.query("SELECT * from data_entries WHERE scientific_name BETWEEN 'R' and 'Z'", function (error, results,fields) {
                if (error) throw error;
                res.send(results)
            })
        break;

        default:
            return "No filter assigned"
    }
    
})

router.get('/data_entries/:filter/genus', (req, res, next) => {
    let {filter} = req.params
    console.log(filter)

    pool.query(`SELECT * FROM data_entries WHERE scientific_name LIKE '%${filter}%'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    })
})

module.exports = router;