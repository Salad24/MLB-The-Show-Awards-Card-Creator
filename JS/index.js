
const selectSeries = document.querySelector("#select-series");
selectSeries.addEventListener("change", myFunction);
function myFunction() {
    if (this.value === "gold-glove") {
        goldGlove();
    } else if (this.value === "silver-slugger") {
        silverSlugger();
    }
}
function goldGlove() {
    const img = document.getElementsByClassName("image")[0];
    img.src =
        "https://pbs.twimg.com/media/EpYMglbU8AAgUOv?format=jpg&name=medium";
    document.getElementById("player-name").removeAttribute('disabled');
}
function silverSlugger() {
    const img = document.getElementsByClassName("image")[0];
    img.src =
        "https://pbs.twimg.com/media/EpyEIGPVoAICmri?format=jpg&name=medium";
    document.getElementById("player-name").removeAttribute('disabled');
}
const playerName = document.getElementById("player-name");
playerName.addEventListener('input', function () {
    document.getElementById("player").innerHTML = this.value;
    doFit();
    document.getElementById("player-space").removeAttribute('disabled');
})
const playerSpace = document.getElementById("player-space");
playerSpace.addEventListener('input', function () {
    document.getElementById("container").style.top=400+parseInt(this.value)+"px";
    document.getElementById("player-overall").removeAttribute('disabled')
})
const playerOverall = document.getElementById("player-overall");
playerOverall.addEventListener('input', function () {
    document.getElementById("overall").innerHTML = this.value;
    document.getElementById("player-year").removeAttribute('disabled')
})
const playerYear = document.getElementById("player-year");
playerYear.addEventListener('input', function () {
    document.getElementById("year").innerHTML = this.value;
    document.getElementById("select-position").removeAttribute('disabled')
})
const selectPosition = document.querySelector("#select-position");
selectPosition.addEventListener("change", newFunction);
function newFunction() {
    document.getElementById("file").removeAttribute('disabled');
    document.getElementById("photo").style.color="black";
    document.getElementById("photo").style.border="solid 1px black";
    if (this.value === "starting-pitcher") {
        startingPitcher();
    } else if (this.value === "closing-pitcher") {
        closingPitcher();
    } else if (this.value === "catcher") {
        catcher();
    } else if (this.value === "first-base") {
        firstBase();
    } else if (this.value === "second-base") {
        secondBase();
    } else if (this.value === "third-base") {
        thirdBase();
    } else if (this.value === "shortstop") {
        shortstop();
    } else if (this.value === "left-field") {
        leftField();
    } else if (this.value === "center-field") {
        centerField();
    } else if (this.value === "right-field") {
        rightField();
    }
}
function startingPitcher() {
    document.getElementById("position-on-card").style.fontSize="9px";
    document.getElementById("position-on-card").style.bottom= "86px";
    document.getElementById("position-on-card").style.paddingLeft="5.5px";
    document.getElementById("position-on-card").style.letterSpacing="5.5px";
    document.getElementById("position-on-card").innerHTML = "STARTING"+"<br />"+"PITCHER";
}
function closingPitcher() {
    document.getElementById("position-on-card").style.fontSize="9px";
    document.getElementById("position-on-card").style.bottom= "86px";
    document.getElementById("position-on-card").style.paddingLeft="5.5px";
    document.getElementById("position-on-card").style.letterSpacing="5.5px";
    document.getElementById("position-on-card").innerHTML = "CLOSING"+"<br />"+"PITCHER";
}
function catcher() {
    document.getElementById("position-on-card").style.fontSize="9px";
    document.getElementById("position-on-card").style.bottom= "80.5px";
    document.getElementById("position-on-card").style.paddingLeft="4px";
    document.getElementById("position-on-card").style.letterSpacing="4px";
    document.getElementById("position-on-card").innerHTML = "CATCHER"
}
function firstBase() {
    document.getElementById("position-on-card").style.fontSize="8px";
    document.getElementById("position-on-card").style.bottom= "80px";
    document.getElementById("position-on-card").style.paddingLeft="4px";
    document.getElementById("position-on-card").style.letterSpacing="4px"
    document.getElementById("position-on-card").innerHTML="FIRST BASE";
}
function secondBase() {
    document.getElementById("position-on-card").style.fontSize="8px";
    document.getElementById("position-on-card").style.bottom= "80px";
    document.getElementById("position-on-card").style.paddingLeft="4px";
    document.getElementById("position-on-card").style.letterSpacing="4px"
    document.getElementById("position-on-card").innerHTML="SECOND BASE";
}
function thirdBase() {
    document.getElementById("position-on-card").style.fontSize="8px";
    document.getElementById("position-on-card").style.bottom= "80px";
    document.getElementById("position-on-card").style.paddingLeft="4px";
    document.getElementById("position-on-card").style.letterSpacing="4px"
    document.getElementById("position-on-card").innerHTML="THIRD BASE";
}
function shortstop() {
    document.getElementById("position-on-card").style.fontSize="8px";
    document.getElementById("position-on-card").style.bottom= "80px";
    document.getElementById("position-on-card").style.paddingLeft="4px";
    document.getElementById("position-on-card").style.letterSpacing="4px"
    document.getElementById("position-on-card").innerHTML="SHORTSTOP";
}
function leftField() {
    document.getElementById("position-on-card").style.fontSize="8px";
    document.getElementById("position-on-card").style.bottom= "80px";
    document.getElementById("position-on-card").style.paddingLeft="4px";
    document.getElementById("position-on-card").style.letterSpacing="4px"
    document.getElementById("position-on-card").innerHTML="LEFT FIELD";
}
function centerField() {
    document.getElementById("position-on-card").style.fontSize="8px";
    document.getElementById("position-on-card").style.bottom= "80px";
    document.getElementById("position-on-card").style.paddingLeft="4px";
    document.getElementById("position-on-card").style.letterSpacing="4px"
    document.getElementById("position-on-card").innerHTML="CENTER FIELD";
}
function rightField() {
    document.getElementById("position-on-card").style.fontSize="8px";
    document.getElementById("position-on-card").style.bottom= "80px";
    document.getElementById("position-on-card").style.paddingLeft="4px";
    document.getElementById("position-on-card").style.letterSpacing="4px"
    document.getElementById("position-on-card").innerHTML="RIGHT FIELD";
}
function loadFile(event) {
    const photo = document.getElementById("output");
    photo.style.display="block";
    photo.src = URL.createObjectURL(event.target.files[0]);
    photoReflection = document.getElementById("reflection");
    photoReflection.src=photo.src
    document.getElementById("player-size").removeAttribute('disabled');
};
const playerSize = document.getElementById("player-size");
playerSize.addEventListener('input', function () {
    document.getElementById("output").style.width=100+parseInt(this.value)+"%";
    document.getElementById("reflection").style.width=100+parseInt(this.value)+"%";
    document.getElementById("player-top-bottom").removeAttribute('disabled')
})
const playerTopBottom = document.getElementById("player-top-bottom");
playerTopBottom.addEventListener('input', function () {
    document.getElementById("output").style.bottom=500-parseInt(this.value)+"px";
    document.getElementById("reflection").style.bottom=500-parseInt(this.value)+"px";
    document.getElementById("player-left-right").removeAttribute('disabled');
})
const playerLeftRight = document.getElementById("player-left-right");
playerLeftRight.addEventListener('input', function () {
    document.getElementById("output").style.left=this.value+"px";
    document.getElementById("reflection").style.left=this.value+"px";
    document.getElementById("add-reflection").removeAttribute('disabled');
})
const addReflection = document.getElementById("add-reflection");
addReflection.addEventListener('click', function () {
    photoReflection.style.display="block";
    document.getElementById("reflection-position").removeAttribute('disabled');
})
const reflectionPosition = document.getElementById("reflection-position");
reflectionPosition.addEventListener('input', function () {
    document.getElementById("reflection").style.bottom=500-parseInt(this.value)+"px";
    document.getElementById("reflection-size").removeAttribute('disabled');
})
const reflectionSize = document.getElementById("reflection-size");
reflectionSize.addEventListener('input', function () {
    document.getElementById("reflection").style.height=this.value+"px";
})
function doFit() {
    textFit(document.getElementById('container'), { maxFontSize: 120, multiLine: true });
}
doFit();
/*function saveCanvas() {
    html2canvas(document.querySelector(".container-of-image-with-text")).then(function(canvas) {
    console.log(canvas.toDataURL("image/jpg"))
    })
}*/
domtoimage.toJpeg(document.querySelector(".container-of-image-with-text"))
.then(function (dataUrl) {
    var link = document.getElementById("download");
    link.download = 'my_image-name.jpeg';
    link.href=DataUrl;
    link.click();
});