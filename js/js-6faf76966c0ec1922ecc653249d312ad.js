!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=159)}({159:function(e,t,o){"use strict";(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}document.addEventListener("DOMContentLoaded",(function(e){document.body.classList.add("page-loaded")})),window.addEventListener("load",(function(e){document.body.classList.add("page-done")}));e(".main_header"),e(".main_footer"),e(".main_wrapper"),e("nav.main_nav").find("ul.menu");var o=e("html");e("body"),e(window).outerWidth();function n(){e(".gt3_header_builder > .gt3_header_builder__container .gt3_megamenu_active > .sub-menu, .gt3_header_builder > .sticky_header > .gt3_header_builder__container .gt3_megamenu_active > .sub-menu").each((function(){e(this).find(".gt3_megamenu_triangle").css({"margin-left":"0px"}),e(this).css({"margin-left":"0px"});var t=e(this).outerWidth(),o=e(window).width();if(t>o-50||e(this).hasClass("huge_number_of_column")){t=o-50,e(this).addClass("huge_number_of_column");var n=e(this).children(".menu-item").outerWidth(),a=Math.floor(t/n),s=e(this).children(".menu-item").length,r=1,i=Math.floor(s/a)*a;e(this).children(".menu-item").each((function(){r++,i<r&&e(this).css("max-width",n-70+"px")}))}else e(this).removeClass("huge_number_of_column");var l=Math.round(t/2),d=e(this).offset().left-l,c=o-(d+t);c<25&&(l=l+25-c),d<25&&(l=l-25+d),e(this).find(".gt3_megamenu_triangle").css({"margin-left":l-34+"px"}),e(this).css({"margin-left":-l+"px"})}))}function a(e,t,o){e.removeClass("open"),t.css({left:offset,width:o})}function s(t){0==e(t).find(".menu-item-has-children > .mobile_switcher").length&&e(t).find(".menu-item-has-children").append('<div class="mobile_switcher"></div>');var o=e(".mobile-navigation-toggle"),n=1;o.on("tap click",(function(e){e.timeStamp-n>300&&(n=e.timeStamp,o.hasClass("is-active")?(t.removeClass("showsub").slideUp(200),o.removeClass("is-active")):(t.addClass("showsub").slideDown(200),o.addClass("is-active")))})),e(t).find('.menu-item-has-children > .mobile_switcher , .menu-item-has-children > a[href*="#"]').on("tap click",(function(t){t.preventDefault();var o=e(this);n!=t.timeStamp&&(n=t.timeStamp,o.hasClass("is-active")?(o.prev("ul.sub-menu").removeClass("showsub").slideUp(200),o.next("ul.sub-menu").removeClass("showsub").slideUp(200),o.removeClass("is-active")):(o.prev("ul.sub-menu").addClass("showsub").slideDown(200),o.next("ul.sub-menu").addClass("showsub").slideDown(200),o.addClass("is-active")))}))}function r(){var t=e(".blog_post_media .slider-wrapper");t.length&&e.each(t,(function(t,o){var n=e(".slick_wrapper",o);n.hasClass("slick-initialized")&&n.slick("unslick"),n.slick({autoplay:!0,arrows:!0,dots:!0,slidesToScroll:1,slidesToShow:1,focusOnSelect:!0,speed:500,fade:!0,cssEase:"linear",dotsClass:"gt3_custom_slick_paging",customPaging:function(e,t){return t+1+"<span>/</span>"+e.slideCount}})}))}Number.prototype.pad=function(e){void 0===e&&(e=2);var t=this.toString().length;return t>e&&(e=t),(new Array(e).join("0")+this).slice(-e)},e(document).ready((function(i){var l,d,c,u,_=document.querySelector(".gt3_preloader"),f="none";null!==_&&(f=_.dataset.loading_type),"linear"===f?setTimeout((function(){e(".gt3_linear-loading").fadeOut()}),8e3):"circle"===f?function(){var t=_.dataset.circle_l,o=_.querySelector(".gt3_circle-preloader"),n=o.querySelector(".gt3_circle-outer"),a=o.querySelector(".gt3_circle-logo"),s=0;function r(){s++,function(){var e=Math.round(s/50*100),o=t/100,a=Math.round(o*e),r=t-a;n.style.strokeDashoffset=r+"px"}(),s<45&&_.classList.contains("gt3_circle-load_done")&&(s=45),50===s?setTimeout(i,1e3):setTimeout(r,100)}function i(){e(o).addClass("gt3_circle-out"),e(a).removeClass("gt3_circle-fade_in"),e(a).addClass("gt3_circle-fade_out"),setTimeout((function(){e(_).fadeOut()}),500)}n.style.strokeDashoffset=t+"px",n.style.opacity=1,setTimeout((function(){n.style.strokeDashoffset=t+"px",e(n).addClass("gt3_circle-loading"),r()}),500)}():"theme"===f&&setTimeout((function(){e(".gt3_theme_prl-loading").fadeOut()}),8e3),r(),function(){e(".sticky_header .column_menu").removeClass("open");var t=e(".column_menu");t.length&&t.each((function(){var t=e(this),o=t.find("> .menu"),n=e(window).width(),s=1;t.hasClass("open")&&n>1200?o.slideDown(200):n<1200&&(a(t,o,n),e(window).resize((function(){a(t,o,n)})),function(t){0===e(t).find(".menu-item-has-children > .mobile_switcher").length&&e(t).find(".menu-item-has-children").append('<div class="mobile_switcher"></div>');var o=1;e(t).find('.menu-item-has-children > .mobile_switcher , .menu-item-has-children > a[href*="#"]').on("tap click",(function(t){t.preventDefault();var n=e(this);t.timeStamp-o>300&&(o=t.timeStamp,n.hasClass("is-active")?(n.prev("ul.sub-menu").removeClass("showsub").slideUp(200),n.next("ul.sub-menu").removeClass("showsub").slideUp(200),n.removeClass("is-active")):(n.prev("ul.sub-menu").addClass("showsub").slideDown(200),n.next("ul.sub-menu").addClass("showsub").slideDown(200),n.addClass("is-active")))}))}(o)),t.find(".gt3-menu-categories-title").on("tap click",(function(e){e.timeStamp-s>300&&(s=e.timeStamp,t.hasClass("open")?(o.slideUp(200),t.removeClass("open")):(o.slideDown(200),t.addClass("open")))}))}))}(),function(){var t=e(window),o=!1,n=e(".mobile_menu_container .main-menu > ul"),a=e(".mobile_menu_container .main-menu > ul ul"),r=e(".mobile-navigation-toggle");t.width()<=1200?(a.hide().removeClass("showsub"),n.hide().addClass("mobile_view_on"),o=!0,s(n)):(a.show(),n.show());e(window).resize((function(){t.width()<=1200?(r.hasClass("is-active")||(a.hide().removeClass("showsub"),n.hide().removeClass("showsub").addClass("mobile_view_on"),r.removeClass("is-active")),!1===o&&(o=!0,s(n))):(a.show().removeClass("showsub"),n.show().removeClass("showsub").removeClass("mobile_view_on"),r.removeClass("is-active"))}))}(),function(){var t=e(".main-menu.main_menu_container.menu_line_enable > ul");t.length&&t.each((function(){var t=e(this),o="";t.append('<span class="menu_item_line"></span>');var n=t.find("> .menu-item"),a=t.find("> .current-menu-item"),s=t.find("> .current-menu-ancestor"),r=t.closest(".header_side").find(".menu_item_line");(a.length||s.length)&&(o=a.length?a:s.length?s:"",r.css({width:25}),r.css({left:o.find(">a").offset().left-t.offset().left}),r.css({marginLeft:7})),n.mouseenter((function(){r.css({width:e(this).find("> a").outerWidth(),left:e(this).find("> a").offset().left-e(this).parent().offset().left,marginLeft:0})})),t.mouseleave((function(){o.length?r.css({width:25,left:o.find("> a").offset().left-t.offset().left,marginLeft:7}):r.css({width:"0",left:"100%",marginLeft:0})}))}))}(),function(){var t=e(window).width(),o=e(".gt3_header_builder > .sticky_header");if(t>1200||t>=768&&t<1200&&o.hasClass("sticky_header--tablet")||t<768&&o.hasClass("sticky_header--mobile")){var n=e(".gt3_header_builder").height(),a=o.parents(".gt3_header_builder").find(".mobile_menu_container"),s=e(document).scrollTop(),r=e(document).scrollTop();if(o.length){var i=o.height(),l=0;e("#wpadminbar").length&&e(window).width()>780&&(l=e("#wpadminbar").height()),a.css({top:i+l,"max-height":"calc(100vh - "+(i+l)+"px)"});var d=o.attr("data-sticky-type");o[0].hasAttribute("data-sticky-number")&&(n=o.attr("data-sticky-number"));var c=function(){s=e(document).scrollTop(),"classic"===d?s<n?(o.removeClass("sticky_on"),a.removeClass("sticky_on")):(o.addClass("sticky_on"),a.addClass("sticky_on")):r<s||s<n?(o.removeClass("sticky_on"),a.removeClass("sticky_on")):(o.addClass("sticky_on"),a.addClass("sticky_on")),r=e(document).scrollTop()};c(),e(window).scroll((function(){c()}))}}}(),l=e(".gt3_header_builder_burger_sidebar_component"),d=e(".gt3_header_builder__burger_sidebar"),e(".gt3_header_builder_burger_sidebar_component,.gt3_header_builder__burger_sidebar-cover").on("click",(function(){l.hasClass("active")?(l.removeClass("active"),d.removeClass("active"),e("body").removeClass("active_burger_sidebar")):(l.addClass("active"),d.addClass("active"),e("body").addClass("active_burger_sidebar"))})),e(d).on("swiperight",(function(){l.hasClass("active")?(l.removeClass("active"),d.removeClass("active"),e("body").removeClass("active_burger_sidebar")):(l.addClass("active"),d.addClass("active"),e("body").addClass("active_burger_sidebar"))})),function(){var t=e(window).height(),o=e(".gt3_back2top");if(o.length){o.on("click",(function(){return window.scrollTo({top:0,behavior:"smooth"}),!1}));var n=function(){e(document).scrollTop()<t?o.removeClass("show"):o.addClass("show")};n(),e(window).scroll((function(){n()}))}}(),n(),e(".gt3_search_form, .gt3_form, #mc_signup .mc_merge_var").length&&e(".gt3_search_form, .gt3_form, #mc_signup .mc_merge_var").each((function(){var t=e(this).find("input, textarea");""!==t.val()&&t.prev("label").addClass("gt3_onfocus"),t.on("focus",(function(){e(this).prev("label").addClass("gt3_onfocus")})).on("blur",(function(){""===e(this).val()&&e(this).prev("label").removeClass("gt3_onfocus")}))})),(c=e("select#gt3_product_cat, select#product_cat")).length&&c.select2(),e(".wpcf7-form .label").length&&e(".wpcf7-form .label").each((function(){var t=e(this);t.parent().find("input, textarea").on("focus",(function(){t.addClass("gt3_onfocus")})).on("blur change",(function(o){var n=e(this);"blur"===o.type?setTimeout((function(){""===n.val()?t.removeClass("gt3_onfocus"):t.addClass("gt3_onfocus")}),200):""===n.val()?t.removeClass("gt3_onfocus"):t.addClass("gt3_onfocus")}))})),e(".blog_post_media.has_post_thumb").each((function(){var t,o=e(this).find(".gt3_video__play_iframe iframe"),n=e(this).find(".gt3_video__play_iframe"),a=e(this).find(".gt3_video_wrapper__thumb");e(this).find(".gt3_video__play_button").on("click",(function(){t=e(this).attr("data-video-autoplay"),o[0].src+=t,n.addClass("play_video"),a.addClass("play_video")}))})),e(".gt3_custom_color").each((function(){var t=e(this),o=t.attr("data-color"),n=t.attr("data-hover-color"),a=t.attr("data-bg-color"),s=t.attr("data-border-color"),r=t.attr("data-hover-bg-color"),i=t.attr("data-hover-border-color");void 0!==o?t.css({color:o}):t.css({color:""}),void 0!==a?t.css({"background-color":a}):t.css({"background-color":""}),void 0!==s?t.css({"border-color":s}):t.css({"border-color":""}),t.mouseenter((function(){void 0!==n&&t.css({color:n}),void 0!==r&&t.css({"background-color":r}),void 0!==i&&t.css({"border-color":i})})).mouseleave((function(){void 0!==o?t.css({color:o}):t.css({color:""}),void 0!==a?t.css({"background-color":a}):t.css({"background-color":""}),void 0!==s?t.css({"border-color":s}):t.css({"border-color":""})}))})),u=e(".elementor-testimonial-wrapper.elementor-testimonial-text-align-left,.elementor-testimonial-wrapper.elementor-testimonial-text-align-right"),e(u).each((function(){var t=e(this);if(t.length){var o=t.find(".elementor-testimonial-content").css("color"),n=document.createElement("canvas");t.prepend(n);var a=new Image;a.onload=function(){n.width=this.width,n.height=this.height,s.drawImage(this,0,0),s.globalCompositeOperation="source-in",s.fillStyle=o,s.fillRect(0,0,n.width,n.height)},a.src=gt3_gt3theme.templateUrl+"/img/quote.png";var s=n.getContext("2d")}})),e(".pp_block").length>0&&o.addClass("pp_page"),e(".gt3_js_bg_img").length>0&&e(".gt3_js_bg_img").each((function(){e(this).css("background-image","url("+e(this).attr("data-src")+")")})),e(".gt3_js_bg_color").length>0&&e(".gt3_js_bg_color").each((function(){e(this).css("background-color",e(this).attr("data-bgcolor"))})),e(".gt3_js_color").length>0&&e(".gt3_js_color").each((function(){e(this).css("color",e(this).attr("data-color"))})),e(".gt3_js_transition").length>0&&e(".gt3_js_transition").each((function(){var t=e(this).attr("data-transition")+"ms";e(this).css({"transition-duration":t})})),e(".flickr_widget_wrapper").length>0&&e(".flickr_badge_image a").each((function(){e(this).append('<div class="flickr_fadder"></div>')})),e('a[href="#"]').on("click",(function(e){e.preventDefault()})),e(".flickr_widget_wrapper").length&&e(".flickr_widget_wrapper").each((function(){var t=e(this).attr("data-flickrid"),o=e(this).attr("data-widget_id"),n=e(this).attr("data-widget_number");e(this).addClass("flickr_widget_wrapper_"+t),e.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id="+o+"&lang=en-us&format=json&jsoncallback=?",(function(o){e.each(o.items,(function(o,a){o<n&&e("<img/>").attr("src",a.media.m).appendTo(".flickr_widget_wrapper_"+t).wrap("<div class='flickr_badge_image'><a href='"+a.link+"' target='_blank' title='Flickr'></a></div>")}))}))})),e(".gt3_btn_customize").length&&e(".gt3_btn_customize").each((function(){var t=e(this).find("a"),o=e("body"),n=t.attr("data-default-bg"),a=t.attr("data-default-color"),s=t.attr("data-default-border"),r=e(this).find(".gt3_btn_icon").attr("data-default-icon"),i=t.attr("data-hover-bg"),l=t.attr("data-hover-color"),d=t.attr("data-hover-border"),c=e(this).find(".gt3_btn_icon").attr("data-hover-icon"),u=o.attr("data-theme-color");t.mouseenter((function(){void 0!==i?t.css({"background-color":i}):t.css({"background-color":"#ffffff"}),void 0!==l?t.css({color:l}):t.css({color:u}),void 0!==d?t.css({"border-color":d}):t.css({"border-color":u}),void 0!==c?t.find(".gt3_btn_icon").css({color:c}):t.find(".gt3_btn_icon").css({color:"#ffffff"})})).mouseleave((function(){void 0!==n?t.css({"background-color":n}):t.css({"background-color":u}),void 0!==a?t.css({color:a}):t.css({color:"#ffffff"}),void 0!==s?t.css({"border-color":s}):t.css({"border-color":u}),void 0!==r?t.find(".gt3_btn_icon").css({color:r}):t.find(".gt3_btn_icon").css({color:"#ffffff"})}))})),function(){e(".grid_wrapper.not_elementor").not(".started").length&&e.each(e(".grid_wrapper.not_elementor"),(function(t,o){if("undefined"!=typeof GT3ElementorGalleryFrontend){if(e(o).hasClass("elementor"))return;GT3ElementorGalleryFrontend.GridGallery(e(o))}}));e(".packery_wrapper.not_elementor").not(".started").length&&e.each(e(".packery_wrapper.not_elementor"),(function(t,o){if("undefined"!=typeof GT3ElementorGalleryFrontend){if(e(o).hasClass("elementor"))return;GT3ElementorGalleryFrontend.PackeryGallery(e(o))}}));e(".fs_gallery_wrapper.not_elementor").not(".started").length&&e.each(e(".fs_gallery_wrapper.not_elementor"),(function(t,o){if("undefined"!=typeof GT3ElementorGalleryFrontend){if(e(o).hasClass("elementor"))return;GT3ElementorGalleryFrontend.FullScreenSlider(e(o))}}));e(".shift_gallery_wrapper.not_elementor").not(".started").length&&e.each(e(".shift_gallery_wrapper.not_elementor"),(function(t,o){if("undefined"!=typeof GT3ElementorGalleryFrontend){if(e(o).hasClass("elementor"))return;GT3ElementorGalleryFrontend.ShiftGallery(e(o))}}));e(".masonry_wrapper.not_elementor").not(".started").length&&e.each(e(".masonry_wrapper.not_elementor"),(function(t,o){if("undefined"!=typeof GT3ElementorGalleryFrontend){if(e(o).hasClass("elementor"))return;GT3ElementorGalleryFrontend.MasonryGallery(e(o))}}));e(".gallery_kenburns.not_elementor").not(".started").length&&e.each(e(".gallery_kenburns.not_elementor"),(function(t,o){if("undefined"!=typeof GT3ElementorGalleryFrontend){if(e(o).hasClass("elementor"))return;GT3ElementorGalleryFrontend.KenburnsGallery(e(o))}}));e(".ribbon_slider_wrapper.not_elementor").not(".started").length&&e.each(e(".ribbon_slider_wrapper.not_elementor"),(function(t,o){if("undefined"!=typeof GT3ElementorGalleryFrontend){if(e(o).hasClass("elementor"))return;GT3ElementorGalleryFrontend.Ribbon(e(o))}}));e(".flow_slider_wrapper.not_elementor").not(".started").length&&e.each(e(".flow_slider_wrapper.not_elementor"),(function(t,o){if("undefined"!=typeof GT3ElementorGalleryFrontend){if(e(o).hasClass("elementor"))return;GT3ElementorGalleryFrontend.Flow(e(o))}}))}(),e(".swipebox").length>0&&(e("html").addClass("gt3_swipe_box"),e(".swipebox").swipebox()),i("body").hasClass("disable_right_click")&&i(document).on("contextmenu",(function(){var e="Right click disabled";return"object"===("undefined"==typeof gt3_rcg?"undefined":t(gt3_rcg))&&(e=gt3_rcg.alert||"Right click disabled"),alert(e),!1})),e(".single").length>0&&e(".format-standard-image").length>0&&(e(".gt3-page-title_has_img_bg").length>0||e("body").addClass("visible_blog_post_media"));var h=e(".elementor-widget-gt3-core-googlemap");h.length&&h.each((function(){e(this).find(".section_map_height-yes").parents(".elementor-widget-gt3-core-googlemap").addClass("enable_section_map_height")}));var m=e(".post_share_block");m.length&&(m.on("mouseover",(function(){e(this).parents(".blog_post_preview").addClass("sharing-hover")})),m.on("mouseleave",(function(){e(this).parents(".blog_post_preview").removeClass("sharing-hover")}))),e(".gt3_page_apps-style").length&&e("body").addClass("gt3_page_apps_style"),e(".gt3_page_motion-style").length&&e("body").addClass("gt3_page_motion_style")})),function(){var t=e(".gt3_header_builder.header_over_bg"),o=e(".wpda-header-builder"),n=o.hasClass("header_over_bg"),a=o.hasClass("header_over_bg_tablet"),s=o.hasClass("header_over_bg_mobile"),r=e(window).width();if(t.length&&r>768){e(".gt3-page-title").css("padding-top",t.height()+"px");var i=e(".page_title_post_link");i.length&&i.css("margin-top",t.height()/2+"px")}if(o.length){var l=0;switch(!0){case r>1024&&n:case r>=768&&r<=1024&&a:case r<768&&s:l=o.height()}(function(e){for(;"BODY"!==e.parentNode.nodeName;)e=e.parentNode;return e})(o[0]).nextElementSibling.classList.contains("gt3-page-title_wrapper")&&e(".gt3-page-title").css("padding-top",l+"px")}}(),e(window).resize((function(){e(window).width()>=1200&&n(),r()})),e(window).on("load",(function(){e(".gt3_circle-overlay").addClass("gt3_circle-load_done"),e(".gt3_linear-loading").fadeOut(),e(".gt3_theme_prl-loading").fadeOut()})),e(document).on("click",".post_likes_add",(function(t){var o=e(this);e.cookie(o.attr("data-modify")+o.attr("data-postid"))||e.post(gt3_gt3theme.ajaxurl,{action:"add_like_attachment",attach_id:e(this).attr("data-postid")},(function(t){e.cookie(o.attr("data-modify")+o.attr("data-postid"),"true",{expires:7,path:"/"}),o.addClass("already_liked"),o.find("span.like_count").text(t)}))})),e(window).resize((function(){e(window).width()>=1200&&n(),r()}))}).call(this,o(2))},2:function(e,t){e.exports=jQuery}})
;