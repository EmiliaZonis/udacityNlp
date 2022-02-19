var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//const fetch = require('node-fetch');
//import fetch from "node-fetch";

//const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const API_KEY = "933d86b7b197b2f77d053fe7348d9e72";
//const textapi = baseURL+application_key;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    console.log('activate server get');
    //res.sendFile(path.resolve('src/client/views/index.html'))
    //res.sendFile(path.resolve(''))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//send the api response to the client
app.post('/check', checkInput);


  function checkInput(req, res) {

      console.log('CheckInput Called');
      let newText = {text: req.body.input}

      console.log(req.body);
      console.log('startServerCheck: ' + req.body.input);

      const meaningUrl = "https://api.meaningcloud.com/sentiment-2.1?key="+API_KEY+"&of=json&txt="+newText+"&lang=en";
      fetch(meaningUrl,{
        method: 'POST'
      })
      .then(res => res.json())
      .then(data => res.send(data))
  }
