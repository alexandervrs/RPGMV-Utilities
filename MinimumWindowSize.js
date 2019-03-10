//=============================================================================
// MinimumWindowSize.js
//=============================================================================

/*:
 * @plugindesc Forces the game window to not resize below the minimum width and height
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Useful if you need the game window not to resize to tiny dimensions
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		var gui = require('nw.gui');
		var win = gui.Window.get();
		
		win.setMinimumSize(window.innerWidth, window.innerHeight);
		document.documentElement.style.overflow = "hidden";
		
	}

})();
