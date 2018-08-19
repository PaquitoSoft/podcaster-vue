<template>
    <div class="podcast-detail-page page-with-sidebar">
        <section class="sidebar-section">
            <Sidebar v-bind:podcast="podcast" />
        </section>
        <section class="content-section">
            <div class="section podcast-episodes-count">
                <span>
                    Episodes: {{podcast.episodes.length}}
                </span>
            </div>
            <div class="section podcast-episodes">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="episode in podcast.episodes" v-bind:key="episode.id" class="podcast-episode-summary">
                            <td>
                                <router-link :to="{ name: 'episode', params: { podcastId: podcast.id, episodeId: episode.id } }">{{episode.title}}</router-link>
                            </td>
                            <td>{{episode.date}}</td>
                            <td class="duration">{{episode.duration}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
import { getPodcastDetail } from '@/api/podcaster.js';
import Sidebar from '@/components/Sidebar.vue';

export default {
    name: 'Podcast',
    components: { Sidebar },
    data: function() {
        return { podcast: { episodes: [] } };
    },
    beforeRouteEnter(to, from, next) {
        getPodcastDetail(to.params.podcastId)
            .then(podcast => {
                next(vm => vm.setData(podcast));
            })
            .catch(error => {
                console.log('Error loading podcast with ID', to.podcastId, ':', error);
            });
    },
    methods: {
        setData(podcast) {
            this.podcast = podcast;
        }
    }
}
</script>

<style scoped>
.podcast-episodes-count {
	margin-bottom: 20px;
	font-size: 22px;
	font-weight: bold;
	padding-left: 15px;
}

.podcast-episodes table {
	width: 100%;
	border-spacing: 0;
	border-collapse: 0;
}

.podcast-episodes table thead {
	text-align: left;
}

.podcast-episodes a {
	color: #337ab7;
}

.podcast-episodes table th, .podcast-episodes table td {
	padding: 8px;
	border-bottom: 2px solid #ddd;
}

.podcast-episodes table > tbody > tr:nth-of-type(odd) {
    background-color: #f9f9f9;
}

.podcast-episode-summary .duration {
	text-align: center;
}

</style>
