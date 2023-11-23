const array = ["./img0.png","./img1.png","./img2.png","./img3.png"];
const circleArray = [".circle0",".circle1",".circle2",".circle3"];

let i=0;

const arrayObj = [
    {"./img0.png":".circle0"},
    {"./img0.png":".circle1"}
]

const circle = document.querySelectorAll(".circle");

// const circle = document.querySelector(".circle1");

circle.forEach(forEach)

function forEach(eachCircle,index,arr){

    // eachCircle.addEventListener("click",circleFn);

    eachCircle.addEventListener("click",function (){
        circleFn(index)
    });
    // arr[index]=eachCircle;
    console.log("circle for each");
}


function circleFn(index){
    const array = ["./img0.png","./img1.png","./img2.png","./img3.png"];
    // image.setAttribute("src","./img3.png")

    removeColorFn(index);
    image.setAttribute("src",array[index]);
    changeColorFn(index);
    console.log("circleFn",index,array[index]);
}



function changeColorFn(i){
    
    const circle1 = document.querySelector(circleArray[i]);
    circle1.style.cssText="background:blue";
    console.log("change color",i)
}

function removeColorFn(i){
    // i++;
    // if(i<3){i++}
    // else if(i==3){i=0}
    
    for(let j=0;j<4;j++){

        const circle = document.querySelector(circleArray[j]);
        circle.style.cssText="background:transparent";
    }
    console.log("remove color",i);
}
const image = document.querySelector(".image");

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

previous.addEventListener("click",previousFn);

function previousFn(){
    if(i>0){
        i--;
    }
    else{
        i=array.length-1;
    }
    removeColorFn(i);
    image.setAttribute("src",array[i]);
    changeColorFn(i);
    console.log("previous",i);
}

next.addEventListener("click",nextFn);

function nextFn(){
    if(i<array.length-1){
        i++;
    }
    else{
        i=0;
    }
    removeColorFn(i);
    image.setAttribute("src",array[i]);
    changeColorFn(i);
    console.log("next",i)
}
// setInterval(nextFn,2000);
// image.setAttribute("src",array[0])