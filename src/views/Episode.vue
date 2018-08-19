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
    beforeRouteEnter(to, from, next) {
        getPodcastDetail(to.params.podcastId)
            .then(podcast => {
                next(vm => vm.setData({
                    podcast,
                    currentEpisode: podcast.episodes.find(episode => episode.id === to.params.episodeId)
                }))
            })
            .catch(error => {
                console.error('Could not load episode details:', error);
            });
    },
    methods: {
        setData({ podcast, currentEpisode }) {
            this.podcast = podcast;
            this.currentEpisode = currentEpisode;
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
