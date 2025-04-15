document.addEventListener('DOMContentLoaded', function() {
	const burgerBtn = document.querySelector('.burger-btn');
	const navMenu = document.querySelector('.nav_men-header');
	
	burgerBtn.addEventListener('click', function() {
			this.classList.toggle('active');
			navMenu.classList.toggle('active');
	});
	
	const navLinks = document.querySelectorAll('.itemNavLink a');
	navLinks.forEach(link => {
			link.addEventListener('click', function() {
					burgerBtn.classList.remove('active');
					navMenu.classList.remove('active');
			});
	});
	
	document.addEventListener('click', function(e) {
			if (!e.target.closest('.navBlock')) {
					burgerBtn.classList.remove('active');
					navMenu.classList.remove('active');
			}
	});
});