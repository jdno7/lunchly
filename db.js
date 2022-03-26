/** Database for lunchly */

const {Client} = require('pg')

// const db = new pg.Client("postgresql://postrgres:password@localhost:5432/lunchly");
let DB_URI

if (process.env.NODE_ENV === 'test'){
    
    DB_URI = 'postgresql://postgres:password@localhost:5432/lunchly'
    } else {
        
        DB_URI = 'postgresql://postgres:password@localhost:5432/lunchly'
    }

let db = new Client ({
    connectionString: DB_URI
})

db.connect();

module.exports = db;
