var glu = require('pex-glu');
var color = require('pex-color');
var geom = require('pex-geom');
var Context = glu.Context;
var Material = glu.Material;
var Program = glu.Program;
var Color = color.Color;
var Vec3 = geom.Vec3;
var merge = require('merge');
var fs = require('fs');

var ShowWorldPositionGLSL = fs.readFileSync(__dirname + '/ShowWorldPosition.glsl', 'utf8');

function ShowWorldPosition(uniforms) {
  this.gl = Context.currentContext;
  var program = new Program(ShowWorldPositionGLSL);
  var defaults = {
  };
  uniforms = merge(defaults, uniforms);
  Material.call(this, program, uniforms);
}

ShowWorldPosition.prototype = Object.create(Material.prototype);

module.exports = ShowWorldPosition;