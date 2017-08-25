function test() {
	let imgstr = "";
	function post(url, data) {
		let vm = this;
		return new Promise((resolve, reject) => {
			let ajax = new XMLHttpRequest();
			ajax.onreadystatechange = function() {
				if (this.readyState === 4) {
					resolve(this);
				}
			};
			ajax.open("POST", url, true);
			ajax.setRequestHeader("Content-Type", "application/json");
			ajax.send(JSON.stringify(data));
		});
	}
	function previewImage(input) {
		var preview = document.getElementById('preview');
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				preview.setAttribute('src', e.target.result);
				post("/upload", {image: e.target.result})
					.then(response => {
						console.log("upload response", response);
						let data = JSON.parse(response.responseText);
						document.querySelector("#response").src = data.image;
					})
					.catch(console.log);

			};
			reader.readAsDataURL(input.files[0]);
			
		} else {
			preview.setAttribute('src', 'placeholder.png');
		}
	}
}
	




(function() {
	window.onload = main;



	function main() {





		const vm = new Vue({
			el: "#app",
			data: {

			},
			methods: {

			}
		})





	}

})();