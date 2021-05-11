const fs = require('fs');
const parse = require('node-html-parser').parse;

const writeHtml = (card) => {
    fs.readFile('./dist/index.html', 'utf8', (err,html)=>{
        if(err){
           throw err;
        }
     
    const root = parse(html);
  
    const cardsContainer = root.querySelector("#cards-container")
    //body.set_content('<div id = "asdf"></div>');
    cardsContainer.insertAdjacentHTML("beforeend", card)
    console.log(root.toString()); // This you can write back to file!
    fs.writeFile('./dist/index.html',root.toString(),(err) => {
        if(err){
          throw err;
        }
    })

      });
}

module.exports = writeHtml
