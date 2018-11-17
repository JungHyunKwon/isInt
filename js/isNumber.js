/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name isNumber
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isNumber = function(value) {
			return typeof value === 'number' && !window.isNaN(value) && window.isFinite(value);
		};
	})();
}catch(e) {
	console.error(e);
}