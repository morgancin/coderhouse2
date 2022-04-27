var intervaloImageset;
! function() {
    "use strict";
    var a = function(a) {
        var e = $(".main-nav > ul");
        e.find("li").removeClass("active"), e.each(function() {
            $(this).find('a[data-nav-section="' + a + '"]').closest("li").addClass("active")
        })
    };
    $(function() {

        var e;
        $(".header-fixed").css("padding-top", $(".gsa-nav").height()),  						
			
            function() {
                $("body").prepend('<div id="gsa-offcanvas" />'), $("body").prepend('<a href="#" class="js-gsa-nav-toggle gsa-nav-toggle"><i></i></a>');
                var a = $(".menu-1 > ul").clone();
                $("#gsa-offcanvas").append(a);
                var e = $(".menu-2 > ul").clone();
                $("#gsa-offcanvas").append(e), $("#gsa-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown"), $("#gsa-offcanvas").find("li").removeClass("has-dropdown"), $(".offcanvas-has-dropdown").mouseenter(function() {
                    $(this).addClass("active").find("ul").slideDown(500, "easeOutExpo")
                }).mouseleave(function() {
                    $(this).removeClass("active").find("ul").slideUp(500, "easeOutExpo")
                }), $(window).resize(function() {
                    $("body").hasClass("offcanvas") && ($("body").removeClass("offcanvas"), $(".js-gsa-nav-toggle").removeClass("active"))
                })
            }(), $("body").on("click", ".js-gsa-nav-toggle", function(a) {
                var e = $(this);
                $("body").hasClass("offcanvas") ? $("body").removeClass("offcanvas") : $("body").addClass("offcanvas"), e.toggleClass("active"), a.preventDefault()
            }), (e = $("div[data-section]")).waypoint(function(e) {
                "down" === e && a($(this.element).data("section"))
            }, {
                offset: "70px"
            }), e.waypoint(function(e) {
                "up" === e && a($(this.element).data("section"))
            }, {
                offset: "68px"
            }), $(".animate-box").waypoint(function(a) {
                "down" !== a || $(this.element).hasClass("animated-fast") || ($(this.element).addClass("item-animate"), setTimeout(function() {
                    $("body .animate-box.item-animate").each(function(a) {
                        var e = $(this);
                        setTimeout(function() {
                            var a = e.data("animate-effect");
                            "fadeIn" === a ? e.addClass("fadeIn animated-fast") : "fadeInLeft" === a ? e.addClass("fadeInLeft animated-fast") : "fadeInRight" === a ? e.addClass("fadeInRight animated-fast") : e.addClass("fadeInUp animated-fast"), e.removeClass("item-animate")
                        }, 100 * a, "easeInOutExpo")
                    })
                }, 100))
            }, {
                offset: "100%"
            });


            $(window).scroll(function() {
      				var currentScrollPos = window.pageYOffset;				
            });
            /*        
            $(".flexslider").flexslider({
                animation: "fade",
                animationSpeed: 250,
                slideshowSpeed: 300,
                directionNav: false,
                controlNav: false,
                start: function() { $(".gsa-loader").fadeOut("slow"); },
                before: function() {
                }
            });
            */
    			  
			
    })
}();


