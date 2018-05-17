	
	var img1 = document.getElementById('workimg1');
	var img2 = document.getElementById('workimg2');
	var img3 = document.getElementById('workimg3');
	var work1 = document.querySelector('.work1');
	var work2 = document.querySelector('.work2');
	var work3 = document.querySelector('.work3');

	function showWork1() {
		// body...
		// console.log(img1);
		img1.style.transform = "rotate(0deg) scale(0.7)";
		img2.style.transform = "rotate(0deg) scale(0.8)";
		img3.style.transform = "rotate(0deg) scale(0.9)";
		img1.style.left = "0";
		img2.style.right = "250px";
		img2.style.left = "unset";
		img3.style.right = "0px";
		img3.style.left = "unset";
		work1.style.display = "block"
		work2.style.display = "none";
		work3.style.display = "none";
	}

	function showWork2() {
		// body...
		// console.log(img1);
		img2.style.transform = "rotate(0deg) scale(0.7)";
		img1.style.transform = "rotate(0deg) scale(0.8)";
		img3.style.transform = "rotate(0deg) scale(0.9)";
		img2.style.left = "0";
		img1.style.right = "250px";
		img1.style.left = "unset";
		img3.style.right = "0px";
		img3.style.left = "unset";
		work2.style.display = "block"
		work1.style.display = "none";
		work3.style.display = "none";
	}

	function showWork3() {
		// body...
		// console.log(img1);
		img3.style.transform = "rotate(0deg) scale(0.7)";
		img2.style.transform = "rotate(0deg) scale(0.8)";
		img1.style.transform = "rotate(0deg) scale(0.9)";
		img3.style.left = "0";
		img1.style.right = "250px";
		img1.style.left = "unset";
		img2.style.right = "0px";
		img2.style.left = "unset";
		work3.style.display = "block"
		work1.style.display = "none";
		work2.style.display = "none";
	}