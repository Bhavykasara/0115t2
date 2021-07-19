function preload() {
    img3=loadImage('data:image/jpeg;base64,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');
    img2=loadImage('https://cdn2.scratch.mit.edu/get_image/user/21420854_60x60.png');
    img=loadImage('https://i2.wp.com/clipart-library.com/images_k/mustache-transparent-png/mustache-transparent-png-23.png');
}

which="mg";

nosex=0;
nosey=0;
x2=0;
y2=0;
x3=0;
y3=0;
x4=0;
y4=0;

function setup() {
    canvas=createCanvas(300,300);
    vedio=createCapture(VIDEO);
    vedio.size(300,300);
    vedio.hide();

    poseNet=ml5.poseNet(vedio,modalLoaded);
    poseNet.on('pose',gotPoses);
}

function modalLoaded() {
    console.log("modal is loaded");
}

function gotPoses(poses) {
    if (poses.length > 0) {
        nosex=poses[0].pose.keypoints[0].position.x;
        nosey=poses[0].pose.keypoints[0].position.y;
        xo2=poses[0].pose.keypoints[1].position.x;
        yo2=poses[0].pose.keypoints[1].position.y;
        x3=poses[0].pose.keypoints[2].position.x;
        y3=poses[0].pose.keypoints[2].position.y;
        x4=poses[0].pose.rightWrist.x;
        y4=poses[0].pose.rightWrist.y;
    }
}

function draw() {
    image(vedio,0,0,300,300);

    image(img,nosex-25,nosey,50,40);
    image(img2,x3-15,y3-40,60,80);
}


function take_snapshot() {
    save("mustache_and_glasses_image.png");
}