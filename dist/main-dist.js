"use strict";!function(){function t(){$("#descripcion").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function e(){$("#descripcion").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function n(){var t=$("#descripcion"),e=t.height();return $(window).scrollTop()>$(window).height()-2*e}var a=!1,i=0,c=$("[data-name='image-counter']").attr("content");$("#contact-form").on("submit",function(t){return t.preventDefault(),sendForm($(this)),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){c>i?i++:i=0,$("#galery .inner").css({left:"-"+100*i+"%"})},3e3),$(window).scroll(function(){var i=n();i&&!a&&(a=!0,t()),!i&&a&&(a=!1,e())})}();
