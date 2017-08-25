<template>
	<div class="bg" v-if="showImage">
		<button class="btn" @click="close">close</button>
		<div class="img">
			<img :src="$store.state.activeImage.src">
			<h2 v-if="$store.state.activeImage.title">{{ $store.state.activeImage.title }}</h2>
			<p v-if="$store.state.activeImage.description">{{ $store.state.activeImage.description }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			console.log(this.$store.state.activeImage);
		},
		methods: {
			close() {
				this.$store.state.activeImage = null;
			}
		},
		computed: {
			showImage() {
				console.log("showImage: ", this.$store.state.activeImage);
				return !!this.$store.state.activeImage;
			}
		}
	}
</script>

<style scoped>
	.bg {
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background-color: rgba(0, 0, 0, 0.95);
		z-index:9997;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.bg .img img {
		max-width:100vw;
		max-height:100vh;
		z-index:9998;
	}
	button {
		position: fixed;
		top:10px;
		right:10px;
	}
</style>