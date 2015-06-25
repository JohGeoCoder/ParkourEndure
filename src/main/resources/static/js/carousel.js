// Some browsers do not support Object.create
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function( $, window, document, undefined ) {

	var Carousel = {
		init: function( options, elem ) {
			var self = this;
			self.elem = elem;
			self.$elem = $( elem );

            self.previousSlideIndex = 0;
			self.currentSlideIndex = 0;
			self.nextSlideIndex = 0;
			self.hasCarouselLoader = false;
			self.isTransitioning = false;
			self.currentSlideWidth = 0;

			self.imageSlides = self.$elem.find(".imageSlide");

            self.options = $.extend( {}, $.fn.imageCarousel.options, options );
			self.imageSlides.each(function(index){
			    if( index === self.currentSlideIndex ) {
			        $(self.imageSlides[index]).css('z-index','2');
                }
                else {
                    $(self.imageSlides[index]).css('opacity', '0').css('z-index','0');
                }
			});

            self.setCarouselControl();

            if(self.options.autoRotation && self.imageSlides.length > 1) {
			    self.autoPlay();
			}
		},
		setCarouselControl: function(){
		    var self = this;

            if (self.imageSlides.length > 1){
                if(self.options.showControls) {
                    self.$elem.find('.carouselControl').show();
                    self.$elem.find('.carouselNavigation').show();
                }
                self.$elem.find('.carouselBack').click(function(){
                    if(!self.isTransitioning){
                        self.goToPreviousSlide();
                    }
                });
                self.$elem.find('.carouselNext').click(function(){
                    if(!self.isTransitioning){
                        self.goToNextSlide();
                    }
                });
            }
		},
		stopRotation: function(){
		    var self = this;
            clearTimeout(timeOut);
        },
        resumeAutoPlay: function(){
            var self = this;
            if(self.options.autoRotation) {
                self.stopRotation();
                self.autoPlay();
            }
        },
        autoPlay: function(){
            var self = this;
            timeOut = setTimeout(function(){self.goToNextSlide();}, self.options.waitUntilTransition);
        },
        hideCurrentSlide: function(){
            var self = this;
            $(self.imageSlides[self.currentSlideIndex]).animate( { opacity: "0" }, {
                duration:self.options.transitionTime, queue:false });
        },
        showNextSlide: function(){
            var self = this;
            $(self.imageSlides[self.nextSlideIndex]).animate( { opacity: "1" }, {
                duration:self.options.transitionTime, queue:false });
            self.currentSlideIndex = self.nextSlideIndex;
        },
        showPreviousSlide: function(){
            var self = this;
            $(self.imageSlides[self.previousSlideIndex]).animate( { opacity: "1" }, {
                duration:self.options.transitionTime, queue:false });
            self.currentSlideIndex = self.previousSlideIndex;
        },
        goToPreviousSlide: function(){
            var self = this;
            self.setSlideIndices();

            if( self.options.transitionType === "fade") {
                self.hideCurrentSlide();
                self.showPreviousSlide();
            }
            else {
                self.slideRight();
            }

            //Set page X of correctly
            self.$elem.find('.pageNumber').html(self.previousSlideIndex+1);

            //Set Description Properly
            self.$elem.find(".imageDescription").hide();
            self.$elem.find(".imageDescription"+self.previousSlideIndex).show();

            self.resumeAutoPlay();
        },
        goToNextSlide: function(){
            var self = this;
            self.setSlideIndices();

            if( self.options.transitionType === "fade") {
                self.hideCurrentSlide();
                self.showNextSlide();
            }
            else {
                self.slideToNext();
            }


            //Set page X of correctly
            self.$elem.find('.pageNumber').html(self.nextSlideIndex+1);

            //Set Description Properly
            self.$elem.find(".imageDescription").hide();
            self.$elem.find(".imageDescription"+self.nextSlideIndex).show();

            self.resumeAutoPlay();
        },
        slideToNext: function(){
            var self = this;
            self.getCurrentSlideWidth();
            self.setTransitioning();

            $(self.imageSlides[self.nextSlideIndex]).css('opacity', '1').css('z-index','1');
            $(self.imageSlides[self.currentSlideIndex]).animate({ "left": self.currentSlideWidth }, self.options.transitionTime, function(){
                $(self.imageSlides[self.currentSlideIndex]).css('opacity', '0').css('z-index','0').css('left','0');
                $(self.imageSlides[self.nextSlideIndex]).css('z-index','2');
                self.currentSlideIndex = self.nextSlideIndex;
                self.setTransitioning();
            });
        },
        slideRight: function(){
            var self = this;
            self.getCurrentSlideWidth();
            self.setTransitioning();

            $(self.imageSlides[self.currentSlideIndex]).css('z-index','1');
            $(self.imageSlides[self.previousSlideIndex]).css('opacity', '1').css('z-index','2').css('left', self.currentSlideWidth);
            $(self.imageSlides[self.previousSlideIndex]).animate({ "left": '0' }, self.options.transitionTime, function(){
                $(self.imageSlides[self.currentSlideIndex]).css('opacity', '0').css('z-index','0');
                self.currentSlideIndex = self.previousSlideIndex;
                self.setTransitioning();
            });
        },
        setSlideIndices: function() {
            var self = this;
            self.previousSlideIndex = ( self.currentSlideIndex-1 < 0 ) ? self.imageSlides.length - 1 : self.currentSlideIndex-1;
            self.nextSlideIndex = ( self.currentSlideIndex+1 > self.imageSlides.length - 1 ) ? 0 : self.currentSlideIndex+1;
        },
        getCurrentSlideWidth: function() {
            var self = this;
            self.currentSlideWidth = 0;
            self.currentSlideWidth -= $(self.imageSlides[self.currentSlideIndex]).width();
        },
        setTransitioning: function() {
            var self = this;
            self.isTransitioning = !self.isTransitioning;
        }
	};

	$.fn.imageCarousel = function( options ) {
		return this.each(function() {
			var carousel = Object.create( Carousel );
			carousel.init( options, this );
		});
	};

    //These are default carousel options -- current transition types are "fade" and "slider"
	$.fn.imageCarousel.options = {
		transitionTime: 600,
		waitUntilTransition: 7000,
		transitionType: "fade",
		autoRotation: true,
		showControls: true
	};
})( jQuery, window, document );
