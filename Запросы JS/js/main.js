//! XMLHttpRequest

let xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8000/todos");
xhr.send();
xhr.onload = function(){
    console.log(xhr);
}