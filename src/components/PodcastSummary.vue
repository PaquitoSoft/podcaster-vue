<template>
    <div class="podcast-summary">
        <div class="box">
			<router-link :to="{ name: 'podcast', params: { podcastId: podcast.id} }">
                <div class="box-icon">
                    <img :src="podcast.cover" :alt="podcast.name">
                </div>
                <div class="info">
                    <h4 class="text-center">{{podcast.name}}</h4>
                    <p>
                        <span class="text-center">
                            <span>Author: </span>
                            <span>{{podcast.author}}</span>
                        </span>
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PodcastSummary',
    props: {
        podcast: Object
    }
}
</script>

<style scoped>
.podcast-summary {
	width: 225px;
	min-height: 350px;
}

.box {
	border-radius: 3px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	/*padding: 10px 25px;*/
	padding: 10px 10px;
	padding-bottom: 5px;
	text-align: right;
	display: block;
	margin-top: 60px;

	cursor: pointer;
	margin-bottom: 30px;
}
.box:hover {
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.52);
}
.box-icon {
	/*background-color: #57a544;*/
	border-radius: 50%;
	display: table;
	/*height: 100px;*/
	height: 125px;
	margin: 0 auto;
	/*width: 100px;*/
	width: 125px;
	margin-top: -61px;
}
.box-icon span {
	color: #fff;
	display: table-cell;
	text-align: center;
	vertical-align: middle;
}
.box-icon img {
	border-radius: 100%;
	width: 100%;
}
.box .info p > span {
	display: block;
}
.box a, .box a:hover {
	color: #000000;
	text-decoration: none;
}

.info h4 {
	font-size: 16px;
	/*letter-spacing: 2px;*/
	text-transform: uppercase;
	/* font-family: 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif; */
}
.info > p {
	color: #717171;
	font-size: 16px;
	/*padding-top: 10px;*/
	text-align: justify;
}
.info > a {
	background-color: #03a9f4;
	border-radius: 2px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	color: #fff;
	transition: all 0.5s ease 0s;
}
.info > a:hover {
	background-color: #0288d1;
	box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.12);
	color: #fff;
	transition: all 0.5s ease 0s;
}
</style>
