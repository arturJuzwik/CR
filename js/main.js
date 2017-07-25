

//navbar padding and color
const navbar = document.querySelector('.navigation'),
		a = document.querySelectorAll('.navigation-ul li a'),
		imgLogo = document.querySelector('.navbar-brand img'),
		navbarCollapse = document.querySelector('.navbar-collapse'),
		freeAccount = document.getElementById('free-account-button'),
		div = document.createElement('div');

window.addEventListener('load',function(){
	if(window.pageYOffset<80){
		imgLogo.src ="img/PointCRM.png";
	}
});


window.addEventListener('scroll', function (){


		
if (window.pageYOffset > 80){
	imgLogo.src ="img/PointCRM-czarne.png";
	navbar.classList.add('navigation-js');
	div.innerHTML = '<a class="return-arrow" href="#login"><i class="glyphicon glyphicon-chevron-up"></i></a>'
	document.getElementById('login').appendChild(div);
		for (let i=0; i<a.length;i++){
			a[i].classList.add('li-js');
		}
}else{
	imgLogo.src ="img/PointCRM.png";
	navbar.classList.remove('navigation-js')
	document.getElementById('login').removeChild(div);
		for(var i=0; i<a.length;i++){
			a[i].classList.remove('li-js');
			
 		}
}

			
});



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
		},1000,function(){
			window.location.hash = hash;
		});
	}
});
