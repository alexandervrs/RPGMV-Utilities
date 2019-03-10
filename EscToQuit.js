//=============================================================================
// EscToQuit.js
//=============================================================================

/*:
 * @plugindesc Enables pressing ESC key to quit the game on Desktop platforms
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Allows you to end your game immediately by pressing the ESC key
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		var gui = require('nw.gui');
		var win = gui.Window.get();
		
		window.addEventListener("keydown", function(event){
			if (event.keyCode == 27) { win.close(); }
		}, false);
	
	}

})();
