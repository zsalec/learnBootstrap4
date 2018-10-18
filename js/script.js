$(document).ready(() => {

	$(".close-alert").click(() => {
		$(".alert").alert("close");
	});

	$('.alert').on('close.bs.alert', () => {
		console.log('close alert');
	});

	$('.alert').on('closed.bs.alert', () => {
		console.log('closed alert');
	});

	$('.carousel').carousel({
		interval: 2000
	});

	$("#carousel-demo").on('slide.bs.carousel', (event) => {
		console.log("slide", `
			方向：${ event.direction }
			从：${ event.from }
			到：${ event.to }
			`);
	});

	$("#carousel-demo").on('slid.bs.carousel', (event) => {
		console.log("slid", `
			方向：${ event.direction }
			从：${ event.from }
			到：${ event.to }
			`);
	});

	$("#dropdown-demo").on("show.bs.dropdown", () => {
		console.log("show");
	});

	$("#dropdown-demo").on("shown.bs.dropdown", () => {
		console.log("shown");
	});

	$("#dropdown-demo").on("hide.bs.dropdown", () => {
		console.log("hide");
	});

	$("#dropdown-demo").on("hidden.bs.dropdown", () => {
		console.log("hidden");
	});

	const list = $("#tab-demo .list-group a");
	list.click(function(event) {
		event.preventDefault();
		$(this).tab("show");
	});

	list.on("show.bs.tab", function(event) {
		console.log(`begin to show: ${ event.target.getAttribute("href") }`);
	});

	list.on("shown.bs.tab", function(event) {
		console.log(`shown: ${ event.target.getAttribute("href") }`);
	});

	list.on("hide.bs.tab", function(event) {
		console.log(`begin to hide: ${ event.target.getAttribute("href") }`);
	});

	list.on("hidden.bs.tab", function(event) {
		console.log(`hidden: ${ event.target.getAttribute("href") }`);
	});

	$("#modal-demo").on("show.bs.modal", function() {
		console.log("show");
	});

	$("#modal-demo").on("shown.bs.modal", function() {
		console.log("shown");
	});

	$("#modal-demo").on("hide.bs.modal", function() {
		console.log("hide");
	});

	$("#modal-demo").on("hidden.bs.modal", function() {
		console.log("hidden");
	});

	$('[data-toggle="popover"]').popover();

	$('[data-toggle="tooltip"]').tooltip();
});