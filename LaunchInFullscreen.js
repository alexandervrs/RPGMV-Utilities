//=============================================================================
// LaunchInFullscreen.js
//=============================================================================

/*:
 * @plugindesc Enables fullscreen on game start for Desktop platforms
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Useful if you need your game to launch in fullscreen mode by default
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		var gui = require('nw.gui');
		var win = gui.Window.get();

		win.enterFullscreen();
	
	}

})();
