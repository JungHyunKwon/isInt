/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function(isNaN, isFinite) {
		'use strict';

		/**
		 * @name isInteger
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isInteger = function(value) {
			return typeof value === 'number' && !isNaN(value) && isFinite(value);
		};
	})(window.isNaN, window.isFinite);
}catch(e) {
	console.error(e);
}