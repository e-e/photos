<template>
	<div class="wrap">
		<!-- <router-link v-for="album in $store.state.albums" :key="album.id" :to="{ name: 'album', params: { albumId: album.id } }" class="grid-item">
			<figure>
				<img :src="album.images[album.coverIndex].thumb">
				<figcaption>{{album.title}}</figcaption>
			</figure>
		</router-link> -->

		<router-link v-for="album in $store.state.albums" :key="album.id" :to="{ name: 'album', params: { albumId: album.id } }" class="box">
	      <div class="boxInner">
	        <img :src="album.images[album.coverIndex].thumb">
	        <div class="titleBox">{{ album.title }}</div>
	      </div>
	    </router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>

</style>