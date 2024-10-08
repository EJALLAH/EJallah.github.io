"use strict";

var gl;

var theta = 0.0;
var thetaLoc;

var color = vec4(0.0, 0.0, 1.0, 1.0);
var colorLoc;

var delay = 100;
var rotation = true;

init();

function init()
{
    var canvas = document.getElementById( "gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");

    //
    //  Configure WebGL
    //
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    //  Load shaders and initialize attribute buffers

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    var vertices = [
        vec2(  0.00 ,  1.00),
        vec2( -0.87 , -0.50),
        vec2(  0.87 , -0.50)
    ];


    // Load the data into the GPU

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation( program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    thetaLoc = gl.getUniformLocation( program, "uTheta" );
    colorLoc = gl.getUniformLocation( program, "aColor" );

    // Initialize event handlers
    document.getElementById("Rotation").onclick = function () {
        rotation = !rotation;
    };

    window.onkeydown = function(event) {
        var key = String.fromCharCode(event.keyCode);
        switch(key) {
          case '1':
            rotation = !rotation;
            break;

          case '2':
            color = vec4(1.0, 0.0, 0.0, 1.0);
            break;

          case '3':
            color = vec4(0.0, 1.0, 0.0, 1.0);
            break;
        }
    };
    render();
};

function render()
{
    gl.clear(gl.COLOR_BUFFER_BIT);

    theta += (rotation ? 0.1 : 0.0);
    gl.uniform1f(thetaLoc, theta);

    //color = 0.0;
    gl.uniform4fv(colorLoc, color);

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    setTimeout(
        function (){requestAnimationFrame(render);}, delay
    );
}

