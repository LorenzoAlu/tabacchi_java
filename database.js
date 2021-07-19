const { Client } = require('pg')

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"root",
    database:"Tabacchi"
})
client.connect();

client.query('select * from fornitore', (err,res)=>{
    if(res){
        console.log(res.rows);
         res.rows;
    }else{
        console.log(err.message)
    }
    client.end;
});


