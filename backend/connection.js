const mysql = require('mysql');

class ConnectionFactory {
    getConnection(){
        const connection = mysql.createConnection({
            host: '34.95.213.167',
            port: '3306',
            user: 'root',
            password: 'maximus',
            database: 'projeto_integrador'
        });

        return connection;
    }
}

const conn = new ConnectionFactory();

conn.getConnection().connect(err => {
    if(err){
        console.error(err);
        return;
    }

    console.log('conectou')
});