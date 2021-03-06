(function ($) {
  var pasteEventName = $.browser.msie ? 'paste' : 'input';

  $.fn.singlemask = function (mask) {
    $(this).keydown(function (event) {
      var key = event.keyCode;

      if (key < 16 || (key > 16 && key < 32) || (key > 32 && key < 41)) {
        return;
      }

      return String.fromCharCode(key).match(mask);
    }).bind(pasteEventName, function () {
      this.value = $.grep(this.value, function (character) {
        return character.match(mask);
      }).join('');
    });
  }
})(jQuery);
