"use strict";$.fn.formObject=function(){var n={};return $.each($(this).serializeArray(),function(i,t){n[t.name]=t.value||""}),n};
