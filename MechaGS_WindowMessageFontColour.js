//=============================================================================
// MechaGS Plugins - Window Message Font Colour Plugin
// MechaGS_WindowMessageFontColour.js
// Version: 1.1
//=============================================================================

var Imported = Imported || {};
Imported.MechaGS_WindowMessageFontColour = true;

var MechaGS = MechaGS || {};
MechaGS.WMFC = MechaGS.WMFC || {};

//=============================================================================
 /*:
 * @plugindesc A plugin to change the Window Message font colour in your game.
 * @author MechaGS
 *
 * @param Font Colour
 * @desc Set the Window Message's font colour (use a hex value).
 * Default: #ffffff
 * @default #ffffff
 *
 * @param Font Outline
 * @desc Set the Window Message's font outline colour (use rgba values).
 * Default: rgba(0, 0, 0, 0.5)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param Font Outline Width
 * @desc Set the Window Message's font outline width.
 * Default: 4
 * @default 4
 *
 * @param Font Size
 * @desc Set the Window Message's font size.
 * Default: 28
 * @default 28
 *
 * @help
 * You can now use the Plugin Command section to add your own custom settings
 * before a message box is shown. It's pretty simple.
 *
 * The command is:
 * MechaGS_WMFC <size> <colour> <outline_colour> <outline_width>
 *
 * An example would be:
 * MechaGS_WMFC 28 #FF9900 rgba(255,255,255,1) 4
 * Which will have a font size of 28, the colour will be orange,
 * the outline will be white and the outline will have a width of 4.
 *
 * I would recommend not setting the presets above and just manually insert
 * your settings if you intend to use the plugin command.
 */
//=============================================================================

MechaGS.WMFC.Parameters = PluginManager.parameters('MechaGS_WindowMessageFontColour');

MechaGS.Window_Message_Redo = Window_Message.prototype.initialize;
Window_Message.prototype.initialize = function(x, y, width, height) {
  MechaGS.Window_Message_Redo.call(this, x, y, width, height);
  this.changeTextColor();
}

Window_Message.prototype.changeTextColor = function() {
  this.contents.outlineColor = String(MechaGS.WMFC.Parameters["Font Outline"]);
  this.contents.outlineWidth = Number(MechaGS.WMFC.Parameters["Font Outline Width"]);
  this.contents.textColor = String(MechaGS.WMFC.Parameters["Font Colour"]);
  this.contents.fontSize = Number(MechaGS.WMFC.Parameters["Font Size"]);
}

//=============================================================================
// Game_Interpreter - New Plugin Commands
//=============================================================================

MechaGS_Window_Message_Font_Colour_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;

Game_Interpreter.prototype.pluginCommand = function(command, args) {
    MechaGS_Window_Message_Font_Colour_pluginCommand.call(this, command, args);
    if (command === 'MechaGS_WMFC') {
      MechaGS.WMFC.Parameters["Font Size"] = args[0];
      MechaGS.WMFC.Parameters["Font Colour"] = args[1];
      MechaGS.WMFC.Parameters["Font Outline"] = args[2];
      MechaGS.WMFC.Parameters["Font Outline Width"] = args[3];
    }
  };

//=============================================================================
// END OF FILE
//=============================================================================
