//=============================================================================
// MechaGS Plugins - Window Message Font Colour Plugin
// MechaGS_WindowMessageFontColour.js
// Version: 1.01
//=============================================================================

var Imported = Imported || {};
Imported.MechaGS_WindowMessageFontColour = true;

var MechaGS = MechaGS || {};

//=============================================================================
 /*:
 * @plugindesc A plugin to change the Window Message font colour in your game.
 * @author MechaGS
 *
 * @param Font Colour
 * @desc Set the Window Message's font colour (use a hex value)         .
 * Default: #ffffff
 * @default #ffffff
 *
 * @param Font Outline
 * @desc Set the Window Message's font outline colour (use rgba values) .
 * Default: rgba(0, 0, 0, 0.5)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param Font Outline Width
 * @desc Set the Window Message's font outline width                    .
 * Default: 4
 * @default 4
 *
 * @help
 * No documentation available.
 */
//=============================================================================

MechaGS.Parameters = PluginManager.parameters('MechaGS_WindowMessageFontColour');

MechaGS.Window_Message_Redo = Window_Message.prototype.initialize;
Window_Message.prototype.initialize = function(x, y, width, height) {
  MechaGS.Window_Message_Redo.call(this, x, y, width, height);
  this.changeTextColor();
}

Window_Message.prototype.changeTextColor = function() {
  console.log(this.contents);
  this.contents.outlineColor = String(MechaGS.Parameters["Font Outline"]);
  this.contents.outlineWidth = Number(MechaGS.Parameters["Font Outline Width"]);
  this.contents.textColor = String(MechaGS.Parameters["Font Colour"]);
}

//=============================================================================
// END OF FILE
//=============================================================================
