//https://teachablemachine.withgoogle.com/models/jAKKuGcYU/model.json
dog = 0;
cat = 0;
cow = 0;
lion = 0;
function startRecognition() {
    navigator.mediaDevices.getUserMedia({
        audio:true 
    });
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jAKKuGcYU/model.json",modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_color_r=Math.floor(Math.random()*255)+1;
        random_color_g=Math.floor(Math.random()*255)+1;
        random_color_b=Math.floor(Math.random()*255)+1;
        imgCat="cat.png";
        imgCow="Cow.png";
        imgDog="Dog.png";
        imgLion="Lion.png";
        document.getElementById("identify").innerHTML="I can hear - "+results[0].label;
        document.getElementById("identify").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        document.getElementById("counter").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        if (results[0].label=="Barking") {
            dog++;
            document.getElementById("image").src=imgDog;
        }
        else if(results[0].label=="Meowing") {
            cat++;
            document.getElementById("image").src=imgCat;
        }
        else if(results[0].label=="Mooing") {
            cow++;
            document.getElementById("image").src=imgCow;
        }
        else if(results[0].label=="Roaring"){
            lion++;
            document.getElementById("image").src=imgLion;
        }
        else {
            document.getElementById("image").src="EarIMG.png";
        }
        document.getElementById("counter").innerHTML="Detected dog - "+dog+" Detected cat - "+cat+" Detected cow - "+cow+" Detected lion - "+lion;
    }
}