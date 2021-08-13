var c=document.querySelectorAll("input");
var c1=document.getElementsByName("color1")[0];
var c2=document.getElementsByName("color2")[0];
var h=document.querySelector("h3");
var body=document.querySelector("body");
var randbut=document.querySelector(".randombut");

function changegradient() {
    body.style.background="linear-gradient(to right, "+c1.value+", "+c2.value+")";
    h.textContent=body.style.background+";";
}

changegradient();

c[0].addEventListener("input",changegradient)

c[1].addEventListener("input",changegradient)

randbut.addEventListener("click",function () {
    var color="#";
    var color2="#";
    for(var i=0;i<6;++i)
    {
        color+=Math.floor((Math.random()*10));
        color2+=Math.floor((Math.random()*10));
    }
    c1.value=color;
    c2.value=color2;
    changegradient();
})


