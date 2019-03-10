//=============================================================================
// FullscreenShortcut.js
//=============================================================================

/*:
 * @plugindesc Enables toggling fullscreen with ALT+ENTER key combo or F11 key on Desktop platforms
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Useful if you need to be able to toggle fullscreen mode with ALT+ENTER
 * shortcut or F11 key
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		var gui = require('nw.gui');
		var win = gui.Window.get();
		
		var keyAltDown = false;
		var keyEnterDown = false;
		var keyF11Down = false;
		
		window.addEventListener("keydown", function(event){
			if (event.keyCode == 18) { keyAltDown = true; }
		}, false);
		
		window.addEventListener("keydown", function(event){
			if (event.keyCode == 13) { keyEnterDown = true; evaluateCombo(); }
		}, false);
		
		window.addEventListener("keydown", function(event){
			if (event.keyCode == 122) { keyF11Down = true; evaluateCombo(); }
		}, false);

		window.addEventListener("keyup", function(event){
			keyAltDown = false; keyEnterDown = false; keyF11Down = false;
		}, false);
		
		function evaluateCombo() {
			if ((keyAltDown == true && keyEnterDown == true) || keyF11Down == true) {
				
				if (win.isFullscreen == true) {
					win.leaveFullscreen();
				} else {
					win.enterFullscreen();
				}
				
				keyAltDown = false;
				keyEnterDown = false;
			}
		}
	
	}

})();
