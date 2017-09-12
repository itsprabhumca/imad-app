var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : 'Article - One | Prabhu',
    heading : 'Article - One',
    date : 'Sep 12, 2017',
    content : '
              <br/>
              <br/>
              <b>About Hasura</b>
              <p align='justify'>
                Hasura is a batteries included platform for building and deploying powerful backends. Instant APIs for data, auth & file handling (powered by Postgres). Hasura helps you deploy your custom code written in any language/framework. Runs anywhere: your laptop, your VM, your cluster on the cloud.
              </p>'
};

function createTemplate(Data) {
    
    var title = Data.title;
    var header = Data.header;
    var content = Data.content;
    
    var htmlTemplate = "
          <html>
          <head>
              <title> $(title);</title>
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <link href="/ui/style.css" rel="stylesheet" />
          </head>
          <body>
              <div class='container'>
                  <a href="/"><h5>Goto Home</h5></a>
                  <hr>
                  <div>
                      <h3>$(header);</h3>
                      
                  </div>
                  <br/>
                  <div>
                    <b>Today : </b> $(date);
                  </div>
                  <div>
                        $(content);   
                  </div>
              </div>
          </body>
        </html>  
    ";
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
   res.sendFile(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Profile.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Profile.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
