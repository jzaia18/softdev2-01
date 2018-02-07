var stophammertime = function() {
  window.cancelAnimationFrame(reqID);
};

var clear = function() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
};

var animate = function() {
  //special
  window.cancelAnimationFrame(reqID);

  ctx.fillStyle = "lightsteelblue";

  var rad = 0;
  var radMode = 0;

  var drawCircle = function() {
    clear(); //hacky fix
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, rad, 0, TAU);
    ctx.stroke();
    ctx.fill();

    if (rad > ctx.canvas.width/2)
      radMode = 1;
    if (rad <= 0)
      radMode = 0;

    if (radMode)
      rad--;
    else
      rad++;
    reqID = window.requestAnimationFrame(drawCircle);
    console.log("ReqID: " + reqID);
  };

  //special
  drawCircle();
};

var ctx = document.getElementById("iamthecanvas").getContext('2d');
var TAU = 2*Math.PI; //TAU!!!
var reqID = 0;

document.getElementById("iamthecanvas").addEventListener("click", animate);
document.getElementById("stop").addEventListener("click", stophammertime);
document.getElementById("clear").addEventListener("click", clear);
