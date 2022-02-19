

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value;

    // the text to check for in the api
    let inputToCheck = {input: formText};

        //validate the input
    if (formText==null || formText==""){
      alert("text can't be blank");
    } else if(!isNaN(formText)){
        alert("input must be only letters");
        } else {

          // check if in the names list
          Client.checkForName(formText);

          console.log("::: Form Submitted ::: " + formText);
          console.log("::: Json Stringify ::: " + JSON.stringify(inputToCheck));
          //console.log(JSON.stringify(inputToCheck));

          // go to the server and check the form Text
          fetch('http://localhost:8081/check', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
          //  credentials: 'same-origin',
            body: JSON.stringify(inputToCheck),
          })
          .then(res => res.json())
          .then(function(res){
            console.log('Success:', res, res.agreement, res.confidence, res.irony);
            document.getElementById('agreement').innerHTML = res.agreement;
            document.getElementById('confidence').innerHTML = res.confidence;
            document.getElementById('irony').innerHTML = res.irony;
          })
    }
}

export { handleSubmit }
