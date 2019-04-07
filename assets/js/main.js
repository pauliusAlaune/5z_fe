console.log('Hello world');
$(document).ready(function() {
    
    // gradient background on mouse move
    $(document).mousemove(function(event) {
          let windowWidth = $(window).width();
          let windowHeight = $(window).height();

          let mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
          let mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

          $('.bgUnder').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #ed1c42, #11122e)');
    });
    
    // header opening
    const navToggle = document.getElementById('navToggle');
    const headerOverlayBg = document.querySelector('.overlayBg');
    const headerNav = document.querySelector('.header__nav');
    const headerHolder = document.querySelector('.header__holder');
    navToggle.addEventListener('click', function(e){
        e.preventDefault();
        navToggle.classList.toggle('active');
        navToggle.classList.add('disable'); 
        setTimeout(function(){
            navToggle.classList.remove('disable');
        }, 1100);
        open
        if(navToggle.classList.contains('active')){
            headerOverlayBg.classList.add('visi');
            setTimeout(function(){
                headerOverlayBg.classList.add('open');
                headerHolder.classList.add('open');
                setTimeout(function(){
                    headerNav.classList.add('open');
                }, 200);
            }, 10);
        } else {
            headerNav.classList.remove('open');
            setTimeout(function(){
                headerOverlayBg.classList.remove('open');  
                headerHolder.classList.remove('open');
                setTimeout(function(){                
                    headerOverlayBg.classList.remove('visi');
                }, 800);
            }, 200);
        }
    });
    
    
    // press link on mobile device
    let psuedoLink = document.querySelectorAll('.header__nav__navList--item a');
    for(let i = 0; i < psuedoLink.length; i++){
        let elem = psuedoLink[i];
        if(window.innerWidth < 768){
            elem.onclick = function() {
                if(navToggle.classList.contains('active')){
                    headerNav.classList.remove('open');
                    navToggle.classList.add('disable'); 
                    setTimeout(function(){
                        navToggle.classList.remove('active');
                        headerOverlayBg.classList.remove('open');
                        headerHolder.classList.remove('open');
                        setTimeout(function(){
                            headerOverlayBg.classList.remove('visi');
                            navToggle.classList.remove('disable'); 
                        }, 800);
                    }, 300);     
                }
                if($('.section').hasClass('thisActive')){
                    $.fn.fullpage.setMouseWheelScrolling(true);
                    $.fn.fullpage.setAllowScrolling(true);
                    $('section').removeClass('sectionToLeft');
                    $('section').removeClass('thisActive');
                    $('.backBtn').removeClass('active');
                }
            }
        } else {
            elem.onclick = function() {
                if($('.section').hasClass('thisActive')){
                    $.fn.fullpage.setMouseWheelScrolling(true);
                    $.fn.fullpage.setAllowScrolling(true);
                    $('section').removeClass('sectionToLeft');
                    $('section').removeClass('thisActive');
                    $('.backBtn').removeClass('active');
//                    if($('.header__holder').hasClass() open)
                }
            }
        }
    }
    
    // full page init
	$('#fullpage').fullpage({
        keyboardScrolling: true,
        navigation: false,
        animateAnchor: true
	});
    
    
    // BEHIND THE SCENES btn Click
    $('.btsBtn').click(function(){
        $('section').addClass('sectionToLeft'); $(this).offsetParent().parent().find('.workSection__moreDetailHolder').addClass('active');
        $(this).offsetParent().parent().parent().addClass('thisActive');
        setTimeout(function(){
            $(this).offsetParent().parent().find('.backBtn').addClass('active')
        }, 800);
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);        
    }); 
    
    // inside BEHIND THE SCENES click back btn
    $('.backBtn').click(function(){
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
        $('section').removeClass('sectionToLeft');
        $('section').removeClass('thisActive');
    });
    
    
    
    let workSectionAll = document.querySelectorAll('.workSection__holder');
    
    workSectionNum(workSectionAll);  
    
    
    function workSectionNum(el){
        for(let i = 0; i < el.length; i++){
            let thisNum = i + 1;
            let allNumSum = el.length;
            let thisNumEl = el[i].nextElementSibling.childNodes[1].childNodes[0];
            let allNumEl = el[i].nextElementSibling.childNodes[1].childNodes[2];
            if(thisNum < 10){
                thisNumEl.textContent = "0" + thisNum;
                allNumEl.textContent = "0" + allNumSum;
            } else {
                thisNumEl.textContent = thisNum;
                allNumEl.textContent = allNumSum;
            }
        }
    }


});