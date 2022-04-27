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


            $(".gsa-loader").fadeOut("fast");
			
			$(window).scroll(function() {                
				var currentScrollPos = window.pageYOffset;                     
				console.log(currentScrollPos); 
				if(currentScrollPos>10){
				  $("body").addClass("scrolled");
				}
				else{
				  $("body").removeClass("scrolled");
				}
			  });
			
            //home
            if($(".home").length>0){

              $(window).scroll(function() {                
                var currentScrollPos = window.pageYOffset;                     
                //console.log(currentScrollPos); 
                if(currentScrollPos>10){
                  $("body").addClass("scrolled");
                }
                else{
                  $("body").removeClass("scrolled");
                }
              });

              /*var centerslider = $(".homeslidered")
                .slick({
                    centerMode:false,
                    infinite:true,
                    slidesToScroll: 1,
                    slidesToShow:1,
                    speed:500,
                    dots:false,
                    arrows:false,
                    adaptiveHeight: true,
                    variableWidth:false
                });*/  
              

              $(".fourboxes").slick({
                  centerMode:false,
                  infinite:true,
                  slidesToScroll: 1,
                  slidesToShow:4,
                  speed:500,
                  variableWidth:false,
				  adaptiveHeight:true,
                  arrows:true,
                  appendArrows:$(".ourproperties .arrows-container"),
                  responsive: [
                      {
                        breakpoint:991,
                        settings: {
                          slidesToShow: 3
                        }
                      },{
                        breakpoint:767,
                        settings: {
                          slidesToShow: 2
                        }
                      },{
                        breakpoint:499,
                        settings: {
                          slidesToShow: 1
                        }
                      }
                  ]
              }); 

		      	}  



            //como
            if($("#como").length>0){

                $(".boxed").on("click", function(a) {
                  $(".boxed").removeClass("expanded");
                  $(this).addClass("expanded");
                  $("body").addClass("expandeded");
                });

                $(".floatinginfo closer").on("click", function(a) {
                  $(this).closest('.boxed').removeClass("expanded");
                  $("body").removeClass("expandeded");
                  a.stopPropagation();
                });
                $("layer").on("click",function(a){
                  $('.boxed.expanded').removeClass("expanded");
                  $("body").removeClass("expandeded");
                  a.stopPropagation();
                });

                /*$(".metodos").slick({
                  autoplay: false,
                  dots: false,
                  arrows:true,
                  adaptiveHeight: true,
                  slidesToScroll: 1,
                  slidesToShow: 1
                });*/
				
				$(".porqueslider").slick({
					autoplay: true,
					autoplaySpeed: 6000,
					dots: true,
					arrows:false,
					pauseOnFocus:true,
					pauseOnHover:true,
					pauseOnDotsHover:true,
					customPaging: function(slider, i) {
					  var thumb = $(slider.$slides[i]).data();
					  return (i+1);
					},
					adaptiveHeight: false,
					slidesToScroll: 1,
					slidesToShow: 1
				  });

            }

            //blog
            if($("#blog").length>0){

              $(window).scroll(function() {                
                var currentScrollPos = window.pageYOffset;                     
                console.log(currentScrollPos); 
                if(currentScrollPos>10){
                  $("body").addClass("scrolled");
                }
                else{
                  $("body").removeClass("scrolled");
                }
              });

              $(".frases").slick({
                  autoplay: false,
                  dots: false,
                  arrows:true,
                  adaptiveHeight: true,
                  slidesToScroll: 1,
                  slidesToShow: 1
              });

            }

            //faq
            if($("#invocell").length>0){
              $("body").on("click", ".fullquestion", function(a) { 
                $(this).toggleClass("active");
                $(this).find(".answer").slideToggle("slow");
              });
            }

            


            
			
    })
}();

function animateNumber(){
  $('.js-counter').countTo({
       formatter: function (value, options) {
            return value.toFixed(options.decimals);
        }
    });
}

