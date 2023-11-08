// search
$(function() {
    $('#login>input').hide()
$('.fa-magnifying-glass').on('click', function() {
    $('#login>input').fadeToggle()
})

})

// subBar
$(function() {
    var menu = $('.category1')
      for(let i=0; i<=menu.length; i++) {
          $('.category1>ul').hide()
     $(menu).mouseover(function() {
      $(this).children('ul').stop().slideDown()
      $(this).siblings('li').children('ul').stop().hide()
      $(this).children().children('h4').css('color', 'red')
      $(this).siblings('li').children().children('h4').css('color', '')
                                    }
                               )}
      
      $(menu).mouseout(function() {
      $(this).children('ul').stop().slideUp()
      $(this).siblings('li').children('ul').hide()
      $(this).children().children('h4').css('color', '')
                                    })
}) 
// 