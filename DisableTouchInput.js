//=============================================================================
// DisableTouchInput.js
//=============================================================================

/*:
 * @plugindesc Disables touch input on Desktop platforms
 * @author Alexander Vourtsis
 *
 * @help
 * Version 1.0.0
 * A useful plugin if you do not need touch input on Desktop platforms
 */

(function() {
	
	if (Utils.isNwjs() == true) {
	
		TouchInput._setupEventHandlers = function() {
			document.removeEventListener('mousedown', this._onMouseDown.bind(this));
			document.removeEventListener('mousemove', this._onMouseMove.bind(this));
			document.removeEventListener('mouseup', this._onMouseUp.bind(this));
			document.removeEventListener('wheel', this._onWheel.bind(this));
			document.removeEventListener('touchstart', this._onTouchStart.bind(this));
			document.removeEventListener('touchmove', this._onTouchMove.bind(this));
			document.removeEventListener('touchend', this._onTouchEnd.bind(this));
			document.removeEventListener('touchcancel', this._onTouchCancel.bind(this));
			document.removeEventListener('pointerdown', this._onPointerDown.bind(this));
		};
	}

})();
