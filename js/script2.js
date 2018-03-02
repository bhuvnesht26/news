var url1 = 'https://bhuvnesht26.github.io/api/us-news.json';
var url2 = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=90ecd4b993b044ada6d55459530292db'
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', url1);
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    renderHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function renderHTML(newsData) {
    var rawTemplate = document.getElementById("newsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(newsData);
    var newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ourGeneratedHTML;
}

function technology(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url2);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
        var data = JSON.parse(ourRequest.responseText);
        renderHTML(data);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
}