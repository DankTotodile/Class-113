function preload()
{

}
function setup()
{
canvas = createCanvas(500,400);
canvas.position(150, 250);
vid = createCapture(VIDEO);
vid.hide();
input1 = "";
}
function draw()
{
 image(vid, 0, 0, canvas.width, canvas.height);
 tint(input1);
}
function take_snapshot()
{
    save("Filter_Pic.png");
}
function apply()
{
    input1 = document.getElementById("inp").value;
    
}