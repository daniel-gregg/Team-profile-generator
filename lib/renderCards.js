const fs = require('fs');
const parse = require('node-html-parser').parse;

const writeHtml = (card) => {
    fs.readFile('./dist/index.html', 'utf8', (err,html)=>{
        if(err){
           throw err;
        }
     
      const root = parse(html);
    
      const cardsContainer = root.querySelector("#cards-container")
      cardsContainer.insertAdjacentHTML("beforeend", card)
      fs.writeFile('./dist/index.html',root.toString(),(err) => {
          if(err){
            throw err;
          }
      })

    });
}

module.exports = writeHtml
