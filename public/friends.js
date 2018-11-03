$(document).ready(function () {
	// 	function apiPost(){
	// 	$.ajax({
	// 	url: '/apipost',
	// 	type: 'POST',
	// 	data: answers
	// 	})

	//create keys in answers for each persons score
	//keys should be the persons name
	//assign their survey results to answers.[name]
	//loop through our answers and add/compare each persons scores
	//if each scores are within 5 of other people, they are a match



	let answers = {
		john: 35,
		kimberly: 28,
		bigJim: 50,
		susie: 15,
		tanya: 47
	}
	let counter = 0

	let Match = []
	let scores = []
	$("#friendBtn").on("click", function (event) {
		console.log("button clicked")

		$.ajax({
			url: '/survey',
			type: "GET"
		}).then(function (data) {
			$("#friends").html(data)
		})
	})

	$("#homeBtn").on("click", function (event) {
		console.log('going home')
		$.ajax({
			url: '/',
			type: "GET"
		}).then(function (data) {
			console.log
			$("#friends").html(data)
		})
	})
	$("#submitBtn").on("click", function (event) {
		event.preventDefault()
		console.log('SUBMITTED')
		let name = $("#userName").val().trim()
		let checkedBox = $(":checked")
		for (let i = 0; i < 10; i++) {
			let currentCheckbox = $(checkedBox[i])
			scores.push(currentCheckbox.val())
		}
		answers[`${name}`] = scores
		console.log(answers)
		// sessionStorage.setItem(`${name}`, answers)
		$.ajax({
			url: '/results',
			type: 'GET',
		}).then(function (data) {
			$("#friends").html(data)
			for (let i = 0; i < scores.length; i++) {
				counter += parseInt(scores[i])
			}
			console.log(`counter: ${counter}`)
			for(let i=0; i<Object.keys(answers).length; i++){
				// console.log(Object.keys(answers)[i])
				let argh = Object.keys(answers)[i]
				if(answers[`${argh}`] ==counter){
					console.log(`if statement reached`)
					$("#friends").html(`<li>Your ideal Friend is ${argh}</li>`)
				}

				}
			})
		})
	})
