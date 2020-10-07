window.onload = function() {
	var search = document.querySelector('.search-ic img');
	var form = document.querySelector('.icons form');
	var input = document.querySelector('.icons form input');
	var clipb = document.querySelector('.clipb');
	var body = document.querySelector('body');
	search.onclick = function() {
		form.style.display = 'block';
		search.style.display = 'none';	
		clipb.style.display = "none";
	};
	body.onclick = function(e) {
		if(e.target != input & e.target != search) {
			form.style.display = 'none';
			search.style.display = 'block';
			if(innerWidth < 600) {
				clipb.style.display = 'none';
			} else {
				clipb.style.display = 'block';
			}
		};	
	};
};
