var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Conectado ao SQLite')
        db.run(`CREATE TABLE newsletter (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email text UNIQUE, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO newsletter (email) VALUES (?)'
                db.run(insert, ["contato@blockchainbrasil.org"])
                if (err){
                    console.log('Erro na inserção SQLite.')
                      /*res.status(400).json({"error": err.message})*/
                      return;
                }
                console.log('Criando registro inicial.')

            }
        });  
    }
});


module.exports = db