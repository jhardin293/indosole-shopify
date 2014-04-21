function setSelect(n){
  if(n<0) return;
  jQuery('#select-box .option-set').removeClass('selected');
  jQuery('#select-box .option-set').eq(n).addClass('selected');
  jQuery('#product-actions select.single-option-selector  option').eq(n).attr("selected", "selected");
  jQuery('#product-actions select#product-select option').eq(n).attr("selected", "selected");
}


function toWrap(){
  if(jQuery(window).width()<768){
  	
    jQuery('html, body').animate({scrollTop: jQuery('.wrapper').position().top}, 500);
    
  }
  
}


function onAddItem(){
  var s = jQuery('#add-to-cart-msg a').attr('title');
  if(s=="view cart"){
   location.href="/cart"; 
  }
}

jQuery(document).ready(function($) {
  

  
var size = $('#product-information .description img:eq(0)');
 
  var simg = size.attr('src');
  
  if(simg!="" && simg != null){
  
  $('#purchase').append('<a href='+simg+'" class="size-chart"></a>');
  
  size.hide();
  

    
  $('a.size-chart').fancybox();
  
  }
  
  $('#sharing').appendTo('#purchase');  
  
  
  
  $('.product-grid .product-price').empty();
  $('#add-to-cart').attr('value','');
  
  $('#add-to-cart').click(function(){
        $('#add-to-cart-msg').hide();
   		setTimeout('onAddItem()',200);                       
   });
  
  $('#select-box-container').prepend('<div id="select-box"></div>');

  
  
  
  jQuery(window).load(function(){
  	$('#purchase .price').appendTo('#product-header-title');
  	$('#product-actions select.single-option-selector option').each(function(i){
  		var opt = $(this);
    	var txt = opt.text();
    	var val = opt.attr('value');
    	var s = i;
      	var clss = "";
       
      //FIXME FLOR OU OF STOCK
      if(txt.match('out')) { 
      			s = -1; 
    			clss = "outed";
        		txt = txt.replace('out','');
    			}

    	$('#select-box').append('<div class="option-set '+clss+'" onclick="setSelect('+s+');" value="'+val+'"><span>'+txt+'</span><span class="out">out of stock</span></div>');
  
      
      toWrap();
  	});
    
    $('#select-box').append('<div class="clear"></div>');
    setSelect(0);
  });
});


function trick(){
 var h = jQuery(window).width();
  
  if(h<768) {
   	
    jQuery('#product-gallery').prependTo('#product');
    
  } else {
    
    jQuery('#product-gallery').appendTo('#product');
    
  }
  
  
}


jQuery(document).ready(trick);
jQuery(window).resize(trick);

jQuery(document).ready(function($){
  if (!!$('#float-cart').offset()) { // make sure ".sticky" element exists
    var stickyTop = $('#float-cart').offset().top; // returns number
    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); // returns number
      var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      //alert(stickyTop+" : "+windowTop);
      //if (windowTop < windowTop){
      var top = (stickyTop-windowTop);
      if(scrollBottom<=200) 
      {
        //alert(scrollBottom);
        var bottom = scrollBottom;
        if(bottom<=20) bottom = 20;
        $('#float-cart').css({ 'position':'absolute','top': 'auto', 'bottom': bottom+'px' });
      }
      else if (270 < windowTop) 
      {
        //alert(windowTop);
        $('#float-cart').css({ 'position':'fixed', 'top': '10px', 'bottom': 'auto' });
      }     
      else $('#float-cart').css({'position':'fixed', 'top': top+'px', 'bottom': 'auto'});
      /*}
      else {
      	$('#product-actions').css({'position':'fixed', 'top': '300px'});
      }*/
    });
  }
}); 

function nextImageSelect()
{
  //alert('hereeeeeeeeeeeeeeeee');
  jQuery(document).ready(function($){
  	var hr = $('#next-img').find('a').attr('href');
    if(hr!='')
    {
      var hr1 = "http://indosole.myshopify.com"+hr;
      $.get(hr,function(data){
          var hr1 = $('#large-thumb', data).html();
        alert(dt);
          $('#next-img-src').html(dt);
      });
    }
  });
}

jQuery(document).ready(function($){ 
  $(".contents-container .description p img").hide();
});
function show_chart_img(){
  jQuery(document).ready(function($){ 
  	$(".contents-container .description p img").show();
  	$('html, body').animate({
        scrollTop: $(".description p img").offset().top
    }, 2000);
  });
}