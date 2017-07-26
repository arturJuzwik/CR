

//navbar padding and color
const navbar = document.querySelector('.navigation'),
		a = document.querySelectorAll('.navigation-ul li a'),
		imgLogo = document.querySelector('.navbar-brand img'),
		navbarCollapse = document.querySelector('.navbar-collapse'),
		freeAccount = document.getElementById('free-account-button'),
		body = document.querySelector('body'),
		nav = document.querySelector('.nav'),
		navbarContainer = document.querySelector('.navbar container'),
		returnArrow = document.querySelector('.return-arrow');


window.addEventListener('load',function(){
	if(window.pageYOffset<40){
		imgLogo.src ="img/PointCRM.png";
	}
});


window.addEventListener('scroll', function (){
if (window.innerWidth > 1200)  {
	if (window.pageYOffset < 80){
		imgLogo.src ="img/PointCRM.png";
		navbar.classList.remove('navigation-js');
		for (let i=0; i<a.length;i++){
			a[i].style.color = "white";
		}
	}else{
		imgLogo.src ="img/PointCRM-czarne.png";
		navbar.classList.add('navigation-js');
		for (let i=0; i<a.length;i++){
			a[i].style.color = "black";
		}
	}
}else{
	if (window.pageYOffset < 80){
		imgLogo.src ="img/PointCRM.png";
		navbar.classList.remove('navigation-js');
		nav.classList.remove('navigation-small');
		for (let i=0; i<a.length;i++){
			a[i].style.color = "white";
		}
	}else{
		imgLogo.src ="img/PointCRM-czarne.png";
		navbar.classList.add('navigation-js');
		nav.classList.add('navigation-small');
		for (let i=0; i<a.length;i++){
			a[i].style.color = "black";
		}
	}
}
});

window.addEventListener('resize',function(){
	if(window.innerHeight<1200){
		if(pageYOffset>80){
			nav.classList.add('navigation-small');
		}else{
			nav.classList.remove('navigation-small');
		}
	}
})

window.addEventListener('scroll',function(){
	if(window.pageYOffset<80){
		returnArrow.style.display = "none";
	}else{
		returnArrow.style.display = "block";
	}
})
//show password
const showButton = document.querySelector('.login-show'),
		inputPassword = document.querySelector('.login-form-password');
let	shown = 0;

$('.login-remove').click(
    function(){
        $('.login-form-text').val('');
    });


function show(){
	inputPassword.setAttribute('type','text');
	inputPassword.focus();
}
function hide(){
	inputPassword.setAttribute('type','password');
	inputPassword.focus();
}
showButton.addEventListener('click', function(){
	if (shown == 0){
		
		shown = 1;
		show();
	}else{
		
		shown=0;
		hide();
	}
});


//SMOOTH SCROLL
$('#navbar-main a').on('click',function(event){
	if (this.hash !== ""){
		event.preventDefault();
		var hash = this.hash;
		$('html,body').animate({
			scrollTop: $(hash).offset().top
		},500,function(){
			window.location.hash = hash;
		});
	}
});
