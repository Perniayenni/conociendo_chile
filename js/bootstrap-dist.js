if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var r=t(this),s=r.data("bs.alert");s||r.data("bs.alert",s=new n(this)),"string"==typeof e&&s[e].call(r)})}var r='[data-dismiss="alert"]',n=function(e){t(e).on("click",r,this.close)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.close=function(e){function r(){i.detach().trigger("closed.bs.alert").remove()}var s=t(this),o=s.attr("data-target");o||(o=s.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""));var i=t("#"===o?[]:o);e&&e.preventDefault(),i.length||(i=s.closest(".alert")),i.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",r).emulateTransitionEnd(n.TRANSITION_DURATION):r())};var s=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=s,this},t(document).on("click.bs.alert.data-api",r,n.prototype.close)}(jQuery);
