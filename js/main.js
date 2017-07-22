//SMOOTH SCROLL
$('body').scrollspy({target:'.navbar',offset:50});
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

//navbar padding
var navbar = document.querySelector('.navigation');

window.addEventListener('scroll', function (){
	if (window.pageYOffset > 80)
		navbar.classList.add('navigation-js')
	else
		navbar.classList.remove('navigation-js')
});

//inputs
const labelText = document.querySelector('.input-label-one'),
		inputText = document.querySelector('.login-form-text'),
		removerFirst = document.querySelector('.login-form-icon-remove-first'),
		inputPassword = document.querySelector('.login-form-password'),
		removerSecond = document.querySelector('.login-form-icon-remove-second');

//first input
labelText.addEventListener('keypress',function(){
	if(inputText.value.length > 1){
		removerFirst.classList.add('show');
	}else
		removerFirst.classList.remove('show');
});
//	
////		removerFirst.classList.add('show');
//		window.onclick = function(event){
//			if (!event.target.matches('.login-form-text')){
//				removerFirst.classList.remove('show');
//			}
//		}
//});
//	//second input
//
//inputPassword.addEventListener('click',function(){
//	
//
//		removerSecond.classList.add('show');
//		window.onclick = function(event){
//			if (!event.target.matches('.login-form-password')){
//				removerSecond.classList.remove('show');
//			}
//		}
//});