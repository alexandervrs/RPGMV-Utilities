//=============================================================================
// DisableDragAndDrop.js
//=============================================================================

/*:
 * @plugindesc Disables dragging and dropping files on the game window
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Fixes the NW.js runtime bug where dragging and dropping a file onto the game
 * window will replace your game with that file
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		document.body.addEventListener("dragover", function(e){
		  e.preventDefault();
		  e.stopPropagation();
		}, false);

		document.body.addEventListener("drop", function(e){
		  e.preventDefault();
		  e.stopPropagation();
		}, false);
		
	}

})();
