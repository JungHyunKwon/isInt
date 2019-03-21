/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name isNumeric
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isNumeric = function(value) {
			return typeof value === 'number' && !isNaN(value) && isFinite(value);
		};
	})();
}catch(e) {
	console.error(e);
}