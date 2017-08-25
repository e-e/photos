<template>
	<div>
		<div>
			<router-link :to="{name:'home'}">back</router-link>
		</div>

		<div class="wrap">
			<div class="box" v-for="image in album.images" :key="image.id" @click="viewImage(image)">
		      <div class="boxInner">
		        <img :src="image.thumb">
		        <!-- <div class="titleBox">{{ album.title }}</div> -->
		      </div>
		    </div>
		</div>
			
		<app-image></app-image>
	</div>
		
</template>

<script>
	import Image from "@/components/Image";
	import { mapGetters } from "vuex";
	export default {
		components: {
			"app-image": Image,
		},
		data() {
			return {
				activeImage: "",
				album: this.$store.state.albums.filter(album => album.id === this.$route.params.albumId).pop(),
			};
		},
		methods: {
			viewImage(image) {
				this.$store.state.activeImage = image;
			}
		}
	}
</script>

<style>

</style>