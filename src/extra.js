currentURL = window.location.href;
lowerCaseURL = currentURL.toLowerCase();
if (currentURL != lowerCaseURL) {
    if (!UrlExists(currentURL)){
        console.log("Redirecting from " + currentURL + " to " + lowerCaseURL);
        location.replace(lowerCaseURL);
    }
}

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}