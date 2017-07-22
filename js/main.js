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
})