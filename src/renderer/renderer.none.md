
# How do make the update of the vertex buffer.

Well for now we will consider that we pretend to edit
all of the triangles every time that it was posible
for example be capable of moving and modify the vertex position
on that thing.

Seams that WebGL1 dont provide vertex array object
and some buffer methods.

For now is best keep things simple and simply use a 
binding and push data to the buffer for rendering 

but is still important to consider that the can be bests
ways to update the vertex information on each render frame.

´´´ javascript
gl.bindBuffer(buffer);
gl.bufferData(buffer, data, gl.STATIC_DRAW); 
´´´

But seams that WebGL has more features and some techniques
can be apply if this method becomes a bottle neck.

Now we made a class that will be exposure of the api in this case
in a class that will initialize every OpenGL stuff on the constructor
the will expose a single method that will we can say that we had ben 
encapsulate the WebGL code and resude the thing to only build some
arrayBuffer objecsts. that we will have to pass to the encapsulation
what we have to is build another layer that will be encharge of 
expose a more intuitive vertion for that but for now what we need to 
do is test what we have been building.

We should make test this engine
