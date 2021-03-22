function setup () {
    canvas = createCanvas(280, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
    background("white");
}
 
function clearCanvas () {
   
    background("white");
 
function modelLoaded() {
    console.log('Model Loaded!')
}
 
function draw() {
    Image(video, 0, 0, 300, 300)
 
}
 
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
 
 
}
