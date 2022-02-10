/**
 * A tool for centralize the registration
 * of simbols that will be neded for the
 * application that are exterior resources
 * here we hava a central place to change or
 * modify it later. and creating simbols or
 * names to be use on other part of the programs
*/

var host = window.location.origin;
var iconsUrl = host + "/icons/";

var icons = {
  defaultTool : iconsUrl + "default-tool.svg",
  meshTool : iconsUrl + "mesh-tool.svg",
  triangleTool : iconsUrl + "triangle-tool.svg",
  vertexTool : iconsUrl + "vertex-tool.svg"
};

export default icons;
