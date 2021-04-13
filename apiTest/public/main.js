  let ran = "True";
  // get from server
  function load(){
    if(ran ==="True"){

      axios.get('http://localhost:5000/quotes')
      .then(res => {
        for (i = 0; i < res.data.length; i++) {
          let printQuote = res.data[i].quote;
          document.getElementById("list-Quotes").innerHTML += `${printQuote} <br/>`;
        }
        if(res.data.length == 0){
          document.getElementById("list-Quotes").innerHTML += `You have no quotes <br/>`;

        }
       
        ran = "False";
      })
      .catch(err => console.error(err));
    
    }

  }


// get from server
function loadQuote(){
  axios.get('http://localhost:5000/quote')
    .then(res => {
      let randomQuote = res.data.quote;
      if(typeof randomQuote !== 'undefined'){
      document.getElementById("quote-print").innerHTML = res.data.quote;
      } else {
        document.getElementById("quote-print").innerHTML = "You need to add your own quotes";
      }
    })
    .catch(err => console.error(err));
  
}

//add quotes




// post to server
function addQuote(){

if(document.getElementById("yourQuote").value != ""){
  let theQuote = document.getElementById("yourQuote").value;
  

  axios.post('http://localhost:5000/quotes', {
    quote: theQuote
  } )
    .then(res =>{
        
    })
    .catch( err => console.error(err));

    document.getElementById("yourQuote").value = "";
  
}
}

