jQuery.fn.supersleight=function(a){return a=jQuery.extend({imgs:!0,backgrounds:!0,shim:"x.gif",apply_positioning:!0},a),this.each(function(){jQuery.browser.msie&&parseInt(jQuery.browser.version,10)<7&&parseInt(jQuery.browser.version,10)>4&&jQuery(this).find("*").andSelf().each(function(b,c){var d=jQuery(c);if(a.backgrounds&&null!==d.css("background-image").match(/\.png/i)){var e=d.css("background-image"),f=e.substring(5,e.length-2),g="no-repeat"==d.css("background-repeat")?"crop":"scale",h={filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+f+"', sizingMethod='"+g+"')","background-image":"url("+a.shim+")"};d.css(h)}if(a.imgs&&d.is("img[src$=png]")){var h={width:d.width()+"px",height:d.height()+"px",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+d.attr("src")+"', sizingMethod='scale')"};d.css(h).attr("src",a.shim)}a.apply_positioning&&d.is("a, input")&&(""===d.css("position")||"static"==d.css("position"))&&d.css("position","relative")})})},$("#content, #page-footer").supersleight({shim:"/c/i/x.png",apply_positioning:!1,backgrounds:!1});