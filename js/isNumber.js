/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function(isNaN, isFinite) {
		'use strict';

		/**
		 * @name isNumber
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isNumber = function(value) {
			return typeof value === 'number' && !isNaN(value) && isFinite(value);
		};
	})(window.isNaN, window.isFinite);
}catch(e) {
	console.error(e);
}