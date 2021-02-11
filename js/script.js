// event pada saat link
$('.page-scroll').on('click',function(e){
   
    // ambil isi href
    var tujuan=$(this).attr('href');
    // tangkap element
    var elemenTujuan = $(tujuan);
    //    pindah scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50

    },2000,'easeOutBack');

    e.preventDefault();
});

// menyimpan paralax
// about
$(window).on('load',function(){
    $('.kiri').addClass('pMuncul');
    $('.kanan').addClass('pMuncul');
});
$(window).scroll(function() {
//   jumbotron
    var wScroll = $(this).scrollTop();
  
    $('.jumbotron p').css({
       'transform':'translate(0px,'+ wScroll/1.2+'%)'
   });
    $('.jumbotron h1').css({
       'transform':'translate(0px,'+ wScroll /2+'%)'
   });

   $('.jumbotron img').css({
       'transform':'translate(0px,'+ wScroll /6+'%)'
   });

// porfolio
   if(wScroll > $('.porfolio').offset().top -250){
        $('.porfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                
                $('.porfolio .thumbnail').eq(i).addClass('muncul');
            }, 500 *(1+i));  
        });     
    }
});