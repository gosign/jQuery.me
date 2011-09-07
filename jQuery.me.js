/*
 * jQuery.me v0.1
 * Copyright (C) 2010 by Gosign media. GmbH
 * Tested with jQuery 1.6.2
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

(function( $ ){

	/*
	 * jQuery.me adds a new attribute to the "this"-context applied to the
	 * passed function, for example:
	 *
	 * function foo() { console.log(this, this.me); }
	 * $('a').click( $.me(foo, this) );
	 *
	 * The first variable object being logged will be the DOMElement representing
	 * the <a>-Tag that was clicked, and this.me will contain a reference to
	 * DOMWindow. This is of course much more useful when you are inside the
	 * context of an own object.
	 */
	$.me = function( someFunction, context ) {

		return function() {
			this.me = context;
			someFunction.apply(this, arguments);
		};

	};

})( jQuery );