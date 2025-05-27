/*-----
Spanizer
- Wraps letters with spans, for CSS animations
-----*/
(function ($) {
  var s;
  var spanizeLetters = {
    settings: {
      letters: $(".js-spanize"),
    },
    init: function () {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function () {
      s.letters.html(function (i, el) {
        // Trim whitespace and split each character, then wrap each in <span>
        var spanizer = $.trim(el).split("");
        return "<span>" + spanizer.join("</span><span>") + "</span>";
      });
    },
  };
  spanizeLetters.init();
})(jQuery);
