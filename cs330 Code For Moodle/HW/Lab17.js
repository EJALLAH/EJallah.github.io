"use strict";
var gl;
var points;

var positionsArray = [];
var colorsArray = [];
var vertexColor = vec4(0.0, 0.0, 1.0, 1.0);  

window.onload = init;

function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = canvas.getContext('webgl2');
    if ( !gl ) { alert( "WebGL isn't available" ); }

/*
    points=[
    vec4( -0.95 , -0.95 , 0.0 , 1.0 ),
    vec4(  0.95 , -0.95 , 0.0 , 1.0 ),
    vec4(  0.00 ,  0.95 , 0.0 , 1.0 )
    ];
*/
// right triangle
/*
    points=[
    vec4( -0.95 ,  0.95 , 0.0 , 1.0 ),
    vec4( -0.95 , -0.95 , 0.0 , 1.0 ),
    vec4(  0.95 , -0.95 , 0.0 , 1.0 )

    ];
// isoceles triangle
    points=[
    vec4( -0.95 , -0.95 , 0.0 , 1.0 ),
    vec4(  0.95 , -0.95 , 0.0 , 1.0 ),
    vec4(  0.00 ,  0.95 , 0.0 , 1.0 )
    ];

    positionsArray.push(points[0]);
    colorsArray.push(vertexColor);
    positionsArray.push(points[1]);
    colorsArray.push(vertexColor);
    positionsArray.push(points[2]);
    colorsArray.push(vertexColor);
   
    texCoordsArray.push(texCoord[0]);
    texCoordsArray.push(texCoord[1]);
    texCoordsArray.push(texCoord[2]);
    
    

    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers

    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU

    // color buffer
    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW);
    var colorLoc =gl.getAttribLocation(program, "aColor");
    gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorLoc);

    // positions buffer
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(positionsArray), gl.STATIC_DRAW);
    var positionLoc =gl.getAttribLocation( program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);


    render();
};

var texCoord = [
    vec2(0, 0),
    vec2(0, 1),
vec2(1, 1) ];
function configureTexture(image) {
var texture = gl.createTexture(); gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, texture); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, texSize, texSize, 0,
gl.RGBA, gl.UNSIGNED_BYTE, image); gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
gl.NEAREST_MIPMAP_LINEAR);
//        gl.NEAREST_MIPMAP_NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST_MIPMAP_LINEAR);
}
    texCoordsArray.push(texCoord[0]);
    texCoordsArray.push(texCoord[1]);
    texCoordsArray.push(texCoord[2]);
// texture buffer
var tBuffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, tBuffer); gl.bufferData(gl.ARRAY_BUFFER, flatten(texCoordsArray),
gl.STATIC_DRAW);
var texCoordLoc = gl.getAttribLocation(program, "aTexCoord"); gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0); gl.enableVertexAttribArray(texCoordLoc); configureTexture(image2);
gl.uniform1i( gl.getUniformLocation(program, "uTextureMap"), 0);

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLES, 0, positionsArray.length );
}