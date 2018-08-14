<template>
    <div class="episode-detail-page page-with-sidebar">
        <div class="sidebar-section">
            <Sidebar v-bind:podcast="podcast" />
        </div>
        <div class="content-section">
            <div class="episode-detail section">
                <div class="title">{{currentEpisode.title}}</div>
                <div class="subtitle" v-html="currentEpisode.description"></div>
                <hr/>
                <div class="player">
                    <audio :src="currentEpisode.mediaUrl" controls></audio>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getPodcastDetail } from '@/api/podcaster.js';
import Sidebar from '@/components/Sidebar.vue';

export default {
    name: 'Episode',
    components: { Sidebar },
    data: function() {
        return {
            podcast: {},
            currentEpisode: {}
        };
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            getPodcastDetail(this.$route.params.podcastId)
                .then(podcast => {
                    this.podcast = podcast;
                    this.currentEpisode = podcast.episodes.find(episode => episode.id === this.$route.params.episodeId);
                })
                .catch(error => {
                    console.error('Could not load episode details:', error);
                });
        }
    }
}
</script>

<style scoped>
.episode-detail {
	margin: 10px;
}
.episode-detail .title {
	font-weight: bold;
	font-size: 24px;
	margin-bottom: 5px;
}
.episode-detail .subtitle {
	font-style: italic;
}
.episode-detail .player audio {
	width: 100%;
}
</style>
