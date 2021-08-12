//Create a reference for canvas 
canvas= document.getElementById('my_canvas');
ctx=canvas.getContext("2d");
//Give specific height and width to the car image


var background_image = ('parkingLot.jpg')
greencar_image = "car2.png";
var background_imgTag = new Image();
var greencar_imgTag= new Image();
greencar_image_widthTag = 75;
greencar_image_heightTag = 100;

greencar_x =5;
greencar_y =225;


//Set initial position for a car image.

function add() {
	background_imgTag= new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag= new Image();
	greencar_imgTag.onload= uploadgreencar;
	greencar_imgTag.src = greencar_image

	//upload car, and background images on the canvas.
}

function uploadBackground() {
	// CanvasImageSource  = new CanvasImageSource(background_image);
ctx.drawImage(background_imgTag,0 ,0, canvas.width ,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag ,greencar_x ,greencar_y , greencar_image_widthTag ,greencar_image_heightTag);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >= 0) {
       greencar_y = greencar_y - 10;
	   console.log("UP");
		uploadBackground();
        uploadgreencar();

    }
}

function down()
{


 if (greencar_y <= 500) {
	greencar_y = greencar_y + 10;
	console.log("Down");
	uploadBackground();
	uploadgreencar();

    }
}
function left()
{
    if (greencar_x >= 0) {
        greencar_x = greencar_x - 10
		console.log("Left");
		uploadBackground();
		uploadgreencar();

    }
}

function right()
{
	if (greencar_x <= 500) {
        greencar_x = greencar_x + 10
		console.log("RICE");
		uploadBackground();
		uploadgreencar();

    }
}
