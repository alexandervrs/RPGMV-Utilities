//=============================================================================
// AutoHideMouse.js
//=============================================================================

/*:
 * @plugindesc Auto-hides the mouse cursor on Desktop platforms but only if mouse is inactive
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Useful if you do not need the mouse cursor to show on the game
 * window all the time.
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		var mouseCheck;
	
		window.addEventListener("mousemove", function() {
			
			clearTimeout(mouseCheck);
			
			document.body.style.cursor = "default";
			document.documentElement.style.cursor = "default";
			
			mouseCheck = window.setTimeout(function() {
				document.body.style.cursor = "none";
				document.documentElement.style.cursor = "none";
			}, 2000);
			
		}, false);
	
	}

})();
