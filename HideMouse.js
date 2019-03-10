//=============================================================================
// HideMouse.js
//=============================================================================

/*:
 * @plugindesc Hides the mouse cursor on Desktop platforms
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Useful if you do not need the mouse cursor to show on the game
 * window. Usually used along with the UtilityTouchInputDisable
 * plugin for cosmetic reasons
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		document.body.style.cursor = "none";
		document.documentElement.style.cursor = "none";
	
	}

})();
