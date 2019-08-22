
// send request to stats server, based on contents of #requestForm
var httpRequest;
function makePostRequest(url) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    console.log('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = logContents;
  httpRequest.open('POST', url);
  var formData = new FormData(document.getElementById("requestForm")); 
  httpRequest.send(formData);
}
function logContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    console.log(JSON.parse(httpRequest.responseText));
    if(httpRequest.status == 200){
      amiApp.stats.requestSent = true;
    }
  }
}