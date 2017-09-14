console.log('Loaded!');
var cnt = 0;
var button = document.getElementById('btnCounter');
button.onclick = function() {
    cnt += 1;
    var count = document.getElementById('count');
    count.innerHTML = cnt;
};