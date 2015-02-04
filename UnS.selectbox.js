/* 
 * @Author: UnS
 * @Date:   2015-01-12 14:14:18
 * @git: https://github.com/the-unsoul/uns.selectbox.js
 * @Last Modified by:   UnS
 * @Last Modified time: 2015-02-04 10:54:14
 */

(function( $ ) {
	var _intance ;
	jQuery.fn.initDropdown = function(elem) {
		if(typeof elem == "object"){
	    	_intance = elem;
	    }else{
	    	_intance = $(elem);
	    }
	    if(_intance.parent().find('.opts-stored').length < 1){
    		_intance.dropdownOptions = _intance.html();
		    var tempStr = "<div class='opts-stored' style='display:none'>"+ _intance.dropdownOptions + '</div>';
		    _intance.parent().append(tempStr);
	    }
	    else{
	    	_intance.dropdownOptions = _intance.parent().find('.opts-stored').html();
	    }

	    _intance.hideOptions = function(selector) {
			// _intance.empty();
		    // _intance.append(_intance.dropdownOptions);

		    _intance.find(selector).addClass('hidden-option');
		    // _intance.find('.hidden-option').detach();
		};
		_intance.showHideOptions = function(show, hide){
			_intance.empty();
		    _intance.append(_intance.dropdownOptions);

			_intance.find(hide).addClass('hidden-option', function() {
				setTimeout(function() {
					_intance.find(show).removeClass('hidden-option', function() {
						setTimeout(function() {
							_intance.find('.hidden-option').detach();	
						}, 100);
					});
				}, 100);
				
			});
		};
		return _intance;
	};
	

	var oAddClass = $.fn.addClass;
    $.fn.addClass = function () {
        for (var i in arguments) {
            var arg = arguments[i];
            if ( !! (arg && arg.constructor && arg.call && arg.apply)) {
                arg();
                delete arg;
            }
        }
        return oAddClass.apply(this, arguments);
    }

    var oRemoveClass = $.fn.removeClass;
    $.fn.removeClass = function () {
        for (var i in arguments) {
            var arg = arguments[i];
            if ( !! (arg && arg.constructor && arg.call && arg.apply)) {
                arg();
                delete arg;
            }
        }
        return oRemoveClass.apply(this, arguments);
    }
}(jQuery));

