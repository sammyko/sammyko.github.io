function countparagraph() {
	var countparagraph = document.getElementsByTagName('p').length;
	alert("There are " + countparagraph + " paragraph tags on the page")
}

function firstparagraph_count() {
	var first_count = document.getElementById('first_div');
	var group_one = first_count.getElementsByTagName('p');
	alert("There are " + group_one.length + " paragraph tags on the page")
}



function secondparagraph_count() {
	var second_count = document.getElementById('second_div');
	var group_two = second_count.getElementsByTagName('p');
	alert("There are " + group_two.length + " paragraph tags in this group")
}