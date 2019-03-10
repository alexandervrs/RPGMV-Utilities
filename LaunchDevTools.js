//=============================================================================
// LaunchDevTools.js
//=============================================================================

/*:
 * @plugindesc Shows the Developer Tools window on game start for Desktop platforms
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * Useful if you need the NW.js Developer Tools available for debugging
 * or testing plugins
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		var gui = require('nw.gui');
		var win = gui.Window.get();

		var devToolsWindow = win.showDevTools();
		devToolsWindow.hide();
		
		devToolsWindow.width = 530;

		devToolsWindow.x = screen.width - devToolsWindow.width;
		devToolsWindow.y = screen.availHeight - devToolsWindow.height - 4;
		
		devToolsWindow.show();

		win.focus();
	}

})();
