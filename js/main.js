//SMOOTH SCROLL
$('#navbar-main a').on('click',function(event){
	if (this.hash !== ""){
		event.preventDefault();
		var hash = this.hash;
		$('html,body').animate({
			scrollTop: $(hash).offset().top
		},1000,function(){
			window.location.hash = hash;
		});
	}
});

//navbar padding and color
const navbar = document.querySelector('.navigation'),
		a = document.querySelectorAll('.navigation-ul li a'),
		svgPaths = document.querySelectorAll('.filler'),
		navbarCollapse = document.querySelector('.navbar-collapse');
    		
window.addEventListener('scroll', function (){

		
if (window.pageYOffset > 80){
	navbar.classList.add('navigation-js');
		for (let i=0; i<svgPaths.length; i++){
			svgPaths[i].classList.add('filler-black');
		}
		for (let i=1; i<a.length;i++){
			a[i].classList.add('li-js');
		}

		
}else{
	navbar.classList.remove('navigation-js')
		for (let i=0; i<svgPaths.length; i++){
			svgPaths[i].classList.remove('filler-black');
		}
		for(var i=0; i<a.length;i++){
			a[i].classList.remove('li-js');
			
 		}
}

			
});

//show password
const showButton = document.querySelector('.login-form-icon-show'),
		inputPassword = document.querySelector('.login-form-password');
let	shown = 0;

$('.login-form-icon-remove').click(
    function(){
        $('.login-form-text').val('');
    });


function show(){
	inputPassword.setAttribute('type','text');
}
function hide(){
	inputPassword.setAttribute('type','password');
}
showButton.addEventListener('click', function(){
	if (shown == 0){
		showButton.classList.remove('glyphicon-eye-open');
		showButton.classList.add('glyphicon-eye-close');
		shown = 1;
		show();
	}else{
		showButton.classList.remove('glyphicon-eye-close');
		showButton.classList.add('glyphicon-eye-open');
		shown=0;
		hide();
	}
});


