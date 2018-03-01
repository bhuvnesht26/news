var htmlData;
var length;
var globalIndex = 0;
var url = 'https://bhuvnesht26.github.io/api/us-news.json';

document.addEventListener("DOMContentLoaded", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url );
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
            htmlData = JSON.parse(ourRequest.responseText);
            length = Object.keys(htmlData.articles).length;
            renderHTML();
            } else {
                    console.log("We connected to the server, but it returned an error.");
                }
            };

    ourRequest.onerror = function() {
        console.log("Connection error");
        };

    ourRequest.send();

});

function newsTemplate(news) {
    
    return `
              <div class="mdl-card__media">
                <img src="${news.urlToImage}">
              </div>
              <div class="mdl-card__title">
                 <h4 class="mdl-card__title-text">${news.title}</h4>
              </div>
              <div class="mdl-card__supporting-text">
                <span class="mdl-typography--font-light mdl-typography--subhead">${news.description}</span>
              </div>
              <div class="mdl-card__actions" style="text-align:center;">
                 <a class="android-link mdl-button mdl-js-button mdl-typography--font-light" href="${news.url}" target="_blank">
                   ${news.source.name}
                 </a>
              </div>
              <div class="mdl-card__actions" >
                 <button id="prev" onclick="prevListener()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="float:left;" >Prev</button>
                 <button id="next" onclick="nextListener()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="float:right;">Next</button>
              </div>
                
            
        `;
}

function renderHTML() {
     if(htmlData.articles[globalIndex].description == null || htmlData.articles[globalIndex].description == ""){ 
         globalIndex = globalIndex + 1;
         renderHTML();
     }
        document.getElementById("news-container").innerHTML = `
                ${newsTemplate(htmlData.articles[globalIndex])}
            `;
}

function nextListener() {
    if(globalIndex === length-1)
        hideButton("next");
    else {
    globalIndex = globalIndex + 1;
    renderHTML();
    }
}

function prevListener() {
    if(globalIndex!=0){
         globalIndex = globalIndex - 1;
        renderHTML();
    }
}

function hideButton(buttonid) {
    var x = document.getElementById(buttonid);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}