// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// ===============================================================================
var recordTransactionsGif = 'https://lh3.googleusercontent.com/pw/ACtC-3dNghgfrK16mEO37XHc0FSvxRCAnHkuf13COXhrUlL5WehpaxWIKN_j1BNlnDzlpshsU-BY5xXsOj0YBJXuIYCxdOTx8Cyosp2vSj8QJxG7TZSwHkCwyxx0nXZK8VD2BIUafrJzY4O_5EDD2dFRfT4=w720-h540-no'
var quizAppGif = 'https://lh3.googleusercontent.com/pw/ACtC-3doboCjr61ph7hFtUZ1I4CLpK3vHHTD0qQXyW9osiHlgSxlmO5OUYXz6HDcMcL-pp0kNP9xIzVTO41SqSZIDTctiulZ3If2bb7YLEB89ZWQFEVCaIK005vgJQVYaxW7C-zeOARXc-k01wJxrjygAwA=w364-h720-no'
var recipeAppGif = 'https://lh3.googleusercontent.com/pw/ACtC-3fQ19P4x4-Fa_ArgCoY1cdd6xe-Rk8JmqZ1VTbwczdV0fsNVPIfr-2M_NqWqz3bop-oQkFqP2HJiUhQutZq9BVXpa9P9B4rGRDVkhUO-pF3ITAIuDm_QCrVfuGyaqHWgTKlQPjoWncGs1YsxCUaF7Q=w364-h720-no'
var eventCountdownTimerAppGif = 'https://lh3.googleusercontent.com/pw/ACtC-3fFShKAOxjercWhpQePy4jtppAZnSFgUyYbrl8e_MmijWdaGUkc2r42ChIZUL-J6EXFeCMJ5sqNm54ixEFXFylCVGWnVPs4NB9if0090KK72Xsyt-KfZLKoq4xmQHNfWV_TyiKqj5gZ9o5k2f9AVTU=w351-h720-no'
var fourInARowAppGif = 'https://lh3.googleusercontent.com/pw/ACtC-3clx17kt5XoBPzK8wOIHbN1u1B1yGgp47S1SnJlP-1zJVycOCuOvECaugC_iI1fZOpenF1EnN8JSEnSgQlCM-tBDITLTrMLan8SiCo550CUPIffWRsxRK7aFx8IyXnsWqHZoPNnvN0zFvAmxgDwdC8=w720-h522-no'
var fallingWordsAppGif = 'https://lh3.googleusercontent.com/pw/ACtC-3d7Kmh1FQ2TTmFrcG7CUs7ao2Os-FOHh-K51x2pJeSEXqhHNO7uJMrnZwtLlIjFM7SvuGHMYOjzJVuoCt9mDzKTHlIyFn-5NZzQx9guttTLBx9hKzPYS7Nqyk5lrBObABeT1jZiruyRs4y7e0fcvCE=w720-h560-no'

var MODAL_VALUES = [
	{ id: 'project1DemoBtn', title: "Record Transaction", src: recordTransactionsGif, style: "width:50%;height:auto;", imgBtn: "project1ImgBtn" },
	{ id: 'project2DemoBtn', title: "Quiz App", src: quizAppGif, style: "width:auto;height:30%;", imgBtn: "project2ImgBtn" },
	{ id: 'project3DemoBtn', title: "Recipe App", src: recipeAppGif, style: "width:auto;height:30%;", imgBtn: "project3ImgBtn" },
	{ id: 'project4DemoBtn', title: "Event Countdown Timer App", src: eventCountdownTimerAppGif, style: "width:auto;height:30%;", imgBtn: "project4ImgBtn" },
	{ id: 'project5DemoBtn', title: "Four In A Row Game App", src: fourInARowAppGif, style: "width:50%;height:auto;", imgBtn: "project5ImgBtn" },
	{ id: 'project6DemoBtn', title: "Falling Words Game App", src: fallingWordsAppGif, style: "width:50%;height:auto;", imgBtn: "project6ImgBtn" }
]

MODAL_VALUES.map(
	obj => {
		var f = function () {
			modal.style.display = "block";
			document.getElementById("projectHeader").innerHTML = obj.title
			document.getElementById("projectGif").setAttribute("src", obj.src)
			document.getElementById("projectGif").setAttribute("style", obj.style)
		}
		document.getElementById(obj.id).onclick = f;
		document.getElementById(obj.imgBtn).onclick = f;
	}
)