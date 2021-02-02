const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_second_test',
    password: '71631990'
})

conn.connect(err => {
    if(err){
        console.log(err);
        return err;
    }else {
        console.log('Done-----------------> OK')
    }
})