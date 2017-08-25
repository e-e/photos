Vue.component("files-input", {
	template: `
		<div>
			<input type="file" name="images" multiple @change="handleFiles">
			<ul class="list-group">
				<li class="list-group-item" v-for="img in images" :key="img.id">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" :src="img.thumbdata">
							</a>
						</div>
						<div class="media-object">
							<h4>{{ img.filename }}</h4>
							<progress></progress>
						</div>
					</div>
				</li>
			</ul>
		</div>
	`,
	data() {
		return {
			images: []
		}
	},
	methods: {
		newid() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    			s4() + '-' + s4() + s4() + s4();	
		},
		getThumbData(imgdata, width = 64, height = 64) {
			return new Promise((resolve, reject) => {
				let image = document.createElement("img");
				image.onload = function() {
					let cvs = document.createElement("canvas");
					let ctx = cvs.getContext("2d");
					cvs.width = width;
					cvs.height = height;
					ctx.drawImage( this, 0, 0, width, height);
					resolve(cvs.toDataURL());
				};
				image.src = imgdata;
			});
		},
		handleFiles(e) {
			let self = this;
			console.log(e);
			let input = e.target;
			let files = input.files;

			for (let i = 0; i < files.length; i++) {
				let file = files[i];
				let reader = new FileReader();
				reader.onload = function(e) {
					let imgdata = e.target.result;
					self.getThumbData(imgdata)
						.then(thumbdata => {
							self.images.push({
								id: self.newid(),
								thumbdata: thumbdata,
								data: imgdata,
								filename: file.name,
								size: file.size
							});
						})
						.catch(console.log);
				};
				reader.readAsDataURL(file);
			}

			console.log("input", input);
		}
	}
});