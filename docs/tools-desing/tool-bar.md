
# Tool bar feature

The tool bar will be a component of the gui of the user interface
the bar tool will be a cointaner of a un ordered list of different
buttons that they the buttons will be the important elements
and they will be use for activate modes of editon
that will require to provide a signal to the editor that
a mode as been activated or pick a color or style on the context
of the editor then for be capable of making this thing. the fact is that
there is a need of comunication the context of the editor
and the context of react and its labels and components for working good
with the editor.

Then for this we need a clear comunication channel of comunication beetween
the the react side and editor size that they acctually work together but
works in a diferent scope. that is the problem. Then what kind of stategy
i have to use for comunicate this two parts of the program.

Communication Needed

Signals as SetMode("edit-mode")
           SetStype("dsdf")
           SetTriangleMode("sdf")

this si quite complicated maybe i should define all the scope of tools
and ways of handeling it at once or at least define some rules that allow 
us to start working from that.

Features BrainStorm

SelectTiangle
SelectVertex
DrawNewTriangle
FrontTriangle
BackwardTiangles
Select Set Of Triangles

The we can have two editors modes

Meshes Mode
Triangle Mode
Vertex Mode


What are the vertex Properties

position
color ho that is important if we dont mind the colors of vertex can be shared too that is not a good
thing that if color or position are diferrent then that implies that the vertex should be devided
But that is not a matter of the actual renderer

The order that matters actually we have to define layers.
