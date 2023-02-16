//Arcanjo Silva(2025121) e Kauet Jesus(2037321)

const express = require('express');
const app = express()
const mysql = require('mysql')
const port = 3000;


// Para converter o body para json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//LIGACAO A SQL
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projetobackend'
})

// PARTE A //

// PARTE A - a)
app.get('/videos', (req, res) => {
  connection.query('Select * from projetobackend.videos', function (error, results, fields) {  // Faz mostrar a tabela videos em json
    res.send(results)
  })
})


// PARTE A - b)
app.post('/videos', (req, res) => {
  var addnewperson = req.body;
  connection.query("Insert videos set ?", [addnewperson], function (error, results, fields) {  // Adiciona uma nova pessoa na tabela videos
    res.send("Inserted " + results.insertId);
  })
})


// PARTE A - c)  
app.get('/videos/:uploader', (req, res) => {
  var uploader = req.params.uploader;  
  connection.query("SELECT * FROM projetobackend.videos where uploader = ?", [uploader], function (error, results, fields) {  // Vai mostrar todos os videos daquele uploader 
    res.send(results)
  })
})


// PARTE A - d)
app.put('/videos/:id/likes', (req, res) => {
  var id = req.params.id;
  connection.query("UPDATE projetobackend.videos SET likes = likes + 1 WHERE id = ?", [id], function(err, results, fields) {  // vai incrementar + 1 like
    res.send("The like has been successfully added: " + id);
  });
});
   
   
// PARTE A - e) 
app.get('/videos/tags/tags', (req, res) => {                                                                        
  var tags = req.query.tags;
  connection.query('SELECT * FROM projetobackend.videos WHERE tags = ?', [tags], function(err, results, fields) {   // mostra todos os videos com determinada #
      res.send(results)
  })
})

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//

// PARTE B //

// PARTE B - a)
app.get('/videos/id/:id', (req, res) => {
  var id = req.params.id;
  connection.query("SELECT * FROM projetobackend.videos where id = ? ", [id], function (error, results, fields) { // Selecionar um vídeo pelo seu ID
    if ( id == undefined){
      res.send("ID does not exist" )
    }
    else{
      res.send(results)
    }
  })
})

// PARTE B - b)
app.delete('/videos/delete', (req, res) => {
  var id = req.query.id;                                                                                           
  connection.query("DELETE FROM projetobackend.videos WHERE id = ? ", [id], function (error, results, fields) {   // Apaga um vídeo existente
    if (results.affectedRows == 1) {
      res.send("Deleted: " + id)
    }
    else {
      res.send("This video doesn't exist")
    }
  })
})
    

//PARTE B - c)
app.get('/videos/uploader/:uploader', (req, res) => {
  var uploader = req.params.uploader;
  connection.query("SELECT * FROM projetobackend.videos where uploader = ?", [uploader], function (error, results, fields) {  // Selecionar todos os vídeos de um determinado uploader
    res.send(results)
  })
})


//PARTE B - d)
app.post('/videos/:id', (req, res) => {
  var id = req.params.id;
  var comments = req.body.comments
  connection.query("UPDATE projetobackend.videos SET comments = CONCAT(comments,'; ' ?) WHERE id = ?", [comments, id], function (error, results, fields) {  // Adicionar um comentário a um determinado vídeo
    res.send('The new comment has been added: ' + comments);
  })
})


 //PARTE B - e)
 app.get('/videos/ordem/likes', (req, res) => {
  connection.query('SELECT * FROM projetobackend.videos', function (err, results, fields) {  // Listar todos os vídeos ordenados por ordem crescente de likes
    crescente = results.sort(function (a, b) {
      return a.likes - b.likes
    })
    res.send(crescente)
  })
})
