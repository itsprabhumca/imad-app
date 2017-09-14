console.log('Loaded!');
// Counter Code
var button = document.getElementById('btnCounter');
button.onclick = function() {
    // Make a request to Counter EndPoint
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE) {
            if(request.status == 200) {
                var cnt = request.responseText;
                var count = document.getElementById('count');
                count.innerHTML = cnt;
            }
        }
    };

    request.open('GET','http://itsprabhumca.imad.hasura-app.io/counter',true);
    request.send(null);
};