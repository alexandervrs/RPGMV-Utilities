//=============================================================================
// QuitConfirmDialog.js
//=============================================================================

/*:
 * @plugindesc Shows a confirmation dialog before closing the game
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Allows you to display a confirmation dialog before quitting the
 * game. Can be used along with EscToQuit plugin
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		var gui = require('nw.gui');
		var win = gui.Window.get();
	
		win.on("close", function() {
			
			if (win.isFullscreen == true) {
				document.documentElement.style.overflow = "hidden";
				win.leaveFullscreen();
			}
			
			window.setTimeout(function() {
			
				if (confirm("Are you sure you want to quit the game?")) {
					win.hide();
					win.close(true);
				} else {
					win.focus();
				}
				
			}, 100);
		});
	
	}

})();
