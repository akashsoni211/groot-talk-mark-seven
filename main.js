var textInput = document.querySelector("#textinput")
var translateBtn = document.querySelector("#btn-translate")
var textOutput = document.querySelector("#textoutput")

function urlBuilder(text){
    return "https://api.funtranslations.com/translate/groot.json" + "?"+"text="+text
}

function textoutput(text){
    textOutput.innerHTML = text;
}

function errorCheck(error){
    return console.log("Error Configured" + error)
}

function fetchUrl(url){
    fetch(url)
    .then(response=>response.json())
    .then(json=>json.contents.translated)
    .then(textoutput)
    .catch()
}

function translatefn(){
    var url = urlBuilder(textInput.value)
    fetchUrl(url)
}

translateBtn.addEventListener('click', translatefn);
