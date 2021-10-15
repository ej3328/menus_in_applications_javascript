var counterEle = document.body.querySelector(".counter")


var i=0;

function counterFunction(){
    i++;
    counterEle.innerHTML = "counter: " + i;
}

document.body.querySelector(".button").addEventListener("click", function(){
    counterFunction();
})