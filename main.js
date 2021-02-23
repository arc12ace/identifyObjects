Webcam.set({
    width:300,
    height:300,
    image_format: "png",
    png_quality:90

});
// code for attaching the webcam
Webcam.attach("#camera")
//code for taking snapshot
function capture(){
    Webcam.snap(function (picture) {
        document.getElementById("snapshot").innerHTML=`<img id="captured_image" src=${picture}>`
    })
}
//check the version of ml5
console.log("ml5 version", ml5.version);

//code for importing the model
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uaGo71JYm/model.json", modelLoaded);

//code for checking whther model has loaded or not
function modelLoaded(){
    console.log("model loaded successfully")
}
//code for identify function
function identify(){
    img = document.getElementById("captured_image");
    classifier.classify(img, getResult);
}
// code for getting the results
function getResult(error, results){
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objectName=results[0].label
        console.log(objectName)
        accuracy= results[0].confidence.toFixed(3)*100+"%";
        console.log(accuracy)
        document.getElementById("objectResult").innerHTML=objectName;
        document.getElementById("objectAccuracy").innerHTML=accuracy;
        }
}