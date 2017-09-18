console.log('Loaded!');
// Counter Code
var button = document.getElementById('btnAdd');
var txtList = document.getElementById('txtList').value;
button.onclick = function() {
    // Make a request to Counter EndPoint
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE) {
            if(request.status == 200) {
                var arrList = request.responseText;
                arrList = JSON.parse(arrList);         
                var dispList = '';
                for(var i=0;i<arrList.length;i++)
                {
                    dispList += "<li>" + arrList[i] + "</li>"; 
                }
                
                var l = document.getElementById('list');
                l.innerHTML = dispList;
            }
        }
    };

    request.open('GET','http://itsprabhumca.imad.hasura-app.io/submit-name?name=' + txtList,true);
    request.send(null);
};