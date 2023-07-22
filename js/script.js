let signup_btn = document.querySelector('.signup-btn');
let signin_btn = document.querySelector('.signin-btn');
let signin_page = document.querySelector('.signin');
let signup_page = document.querySelector('.signup');
let btn = document.querySelector('.btn');

signup_btn.addEventListener('click', () => {
	signin_page.classList.add('none');
	signup_page.classList.remove('none');
});
signin_btn.addEventListener('click', () => {
	signin_page.classList.remove('none');
	signup_page.classList.add('none');
});
btn.addEventListener('click', () => {
	window.location.href = 'page.html';
})