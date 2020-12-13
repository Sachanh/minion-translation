var btnTrans=document.querySelector(".btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");
// var serverUrl ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverUrl ="https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text

}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with server! Try agin after sometime.")
}

function clickEventHandler(){
// outputDiv.innerText="sfsfdsfddg" +txtInput.value

var inputTxt=txtInput.value; //taking input


// callingserver for processing
fetch(getTranslationURL(inputTxt))
   .then(response => response.json())
   .then(json =>{
       var translatedText = json.contents.translated;
       outputDiv.innerText = translatedText;//output
   })
   .catch(errorHandler)
};
btnTrans.addEventListener("click", clickEventHandler)