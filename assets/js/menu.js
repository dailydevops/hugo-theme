(function iifeMenu(d) {
	var b = d.querySelector('.burger');
	var	m = d.querySelector('.navigation');

	function toggleMenu() {
		m.classList.toggle('active');
		this.classList.toggle('active');
		this.setAttribute(
			'aria-expanded',
			this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
		);
	}

	if (b && m) {
		b.addEventListener('click', toggleMenu, false);
	}
}(document));
