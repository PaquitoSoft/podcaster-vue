<template>
  <div class="podcasts-grid">
    <div class="filter">
      <span class="badge">{{filteredPodcasts.length}}</span>
      <input 
        type="text" 
        name="filter-value" 
        focus
        placeholder="Filter podcasts..." 
        v-model="filter">
    </div>
    <div class="podcasts-list">
      <div v-for="podcast in filteredPodcasts" :key="podcast.id">
        <PodcastSummary v-bind:podcast="podcast" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PodcastSummary from '@/components/PodcastSummary.vue';
import { getAllPodcasts } from '@/api/podcaster.js';

export default {
  name: "home",
  components: {
    PodcastSummary
  },
  data: function() {
    return {
      podcasts: [],
      filter: ''
    };
  },
  created: function() {
    if (!this.podcasts.length) {
      this.fetchData();
    }
  },
  methods: {
    fetchData: function() {
      getAllPodcasts()
        .then(podcasts => {
          this.podcasts = podcasts;
        })
        .catch(error => {
          console.error('Could not load all podcasts list:', error);
        });
    }
  },
  computed: {
    filteredPodcasts: function() {
      // TODO Bind to filter input
      const regExp = new RegExp(this.filter, 'i');
      return this.podcasts.filter(podcast => regExp.test(podcast.name + podcast.author));
    }
  }
};
</script>

<style scoped>
.filter {
	margin-bottom: 30px;
	text-align: right;
}
.filter .badge {
	display: inline-block;
	color: #fff;
	font-size: 25px;
	padding: 3px 7px;
	border-radius: 5px;
	position: relative;
	top: 5px;
	min-width: 40px;
	background-color: #337ab7;
	text-align: center;
}
.filter input[name="filter-value"] {
	display: inline-block;
	width: 25%;
	margin-left: 10px;
	border: 1px solid #ccc;
	line-height: 28px;
	border-radius: 5px;
	padding: 7px;
	font-size: 14px;
}

.podcasts-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
}
</style>

