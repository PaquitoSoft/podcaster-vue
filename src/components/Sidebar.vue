<template>
    <div class="section sidebar">
        <div class="podcast-cover text-center">
            <router-link :to="{ name: 'podcast', params: { id: podcast.id} }">
                <img :src="podcast.cover" :alt="podcast.name">
            </router-link>
        </div>
        <hr/>
        <div class="podcast-title">
            <router-link :to="{ name: 'podcast', params: { id: podcast.id} }">
                <div class="title">{{podcast.name}}</div>
                <div class="author"><span>by&nbsp;</span>{{podcast.author}}</div>
            </router-link>
        </div>
        <hr/>
        <div class="podcast-description">
            <div>Description:</div>
            <p>{{podcast.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        podcast: Object
    }
}
</script>

<style scoped>
.podcast-cover img {
	width: 100%;
	margin-top: 10px;
	border-radius: 5px;
}
.podcast-title {
	padding-left: 10px;
}
.podcast-title a {
	color: #000000;
}
.podcast-title .title {
	font-size: 16px;
	font-weight: bold;
}
.podcast-title .author {
	font-style: italic;
}
.podcast-description {
	font-size: 14px;
	padding-left: 5px;
}
.podcast-description div {
	font-weight: bold;
	margin-bottom: 5px;
}
.podcast-description p {
	font-style: italic;
	overflow-x: hidden;
	text-overflow: ellipsis;
}
</style>
