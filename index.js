const express = require('express');
const PORT = 8000;
const app = express();

const articles = require('./data/articles.json');

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.get('/', (req, res) => {
        res.render('home', {
            Allarticles : articles,
        }) 
  });

  app.get('/article/:id', (req, res) => {
    const id = Number(req.params.id);
    const searchArticle = articles.find((numberChooseArticle) => {
      return numberChooseArticle.id === id;
    });
    res.render('article', {
      article: searchArticle,
    });
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });