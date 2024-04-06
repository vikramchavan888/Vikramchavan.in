// Barba Load Wrapper
barba.hooks.beforeEnter(() => {

    //MIKE REVENUE CALCULATOR -> Thanks
    jQuery(function(){
        jQuery.fn.digits = function(){ return this.each(function(){ jQuery(this).val( jQuery(this).val().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); }) }
     
          jQuery('#rate').keyup('input', function() {
             calc();
          });
          jQuery('#percent').keyup('input', function() {
             calc();
          });
          jQuery('#audience').keyup('input', function() {
            calc();
          });
          function calc(){
                var Num1 = jQuery('#percent').val();
                var Num2 = parseInt(jQuery('#audience').val().replace(/,/g, ''));
                var Num3 = jQuery('#rate').val();
                var KeyCalc = (Num3 * Num1);
                var RateCut = (KeyCalc / 100);
                var pot = (RateCut * Num2)
                var FinalPot = (pot * .75).toFixed(2).toLocaleString("en");
                var AudThou = Num2.toLocaleString("en");
                if(isNaN(Num1) || isNaN(Num2) || isNaN(Num3)){
                     AudThou =" ";
                     curr =" ";
                    }else{
                    curr = FinalPot.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                 }
                jQuery('#earnpot').text(curr).prepend('$').append('*');
                jQuery('#audience').val(AudThou);
          }
     });
    
     // Calculate input width
    
     jQuery(document).ready(function () {
     $('input[type="text"]').keypress(function(e) {
        if (e.which !== 0 && e.charCode !== 0) { // only characters
             var c = String.fromCharCode(e.keyCode|e.charCode);
             $span = $(this).siblings('span').first();
             $span.text($(this).val() + c) ; // the hidden span takes 
                                                        // the value of the input
             $inputSize = $span.width() ; 
             $(this).css("width", $inputSize) ; // apply width of the span to the input
         }
    });
    });
    
    });