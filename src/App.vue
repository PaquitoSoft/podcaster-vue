<template>
  <div id="app">
    <div class="header">
      <h1>
        <router-link to="/">Podcaster</router-link>
        <div v-bind:class="{ spinner: true, hidden: !isNavigationActive }">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </h1>
    </div>
	<div class="main-content">
    	<router-view/>
	</div>
  </div>
</template>

<script>
export default {
	name: 'App',
	computed: {
		isNavigationActive() {
			return this.$store.state.isNavigationActive;
		}
	}
}
</script>


<style lang="css">
html {
	font-family: Arial;
}

body {
	margin: 0;
	padding-bottom: 20px;
}

.text-center {
	text-align: center;
}

hr {
	margin-top: 20px;
	margin-bottom: 20px;
	border: 0;
	border-top: 1px solid #eee
}

a {
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
}

.truncate {
	width: 150px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.header {
	/* margin-bottom: 30px;
	padding-bottom: 10px; */
	border-bottom: 1px solid #e5e5e5;
	position: fixed;
	width: 85%;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	background-color: #fff;
	/* padding-top: 20px; */
	z-index: 10;
}

.header h3 {
	margin-top: 0;
	margin-bottom: 0;
	line-height: 40px;
}

.header a {
	text-decoration: none;
	color: #337ab7;
}
.header a:visited {
	color: #337ab7;
}
.header a:active {
	color: #23527c;
}

.main-content {
	position: relative;
	top: 100px;
	/*padding: 0 7px;*/
	width: 83%;
	margin-left: auto;
	margin-right: auto
}

.section {
	padding: 10px 10px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.page-with-sidebar {
	display: flex;
	justify-content: space-between;
}

.page-with-sidebar .sidebar-section {
	width: 24%;
	margin-bottom: 25px;
}

.page-with-sidebar .content-section {
	width: 70%;
	margin-bottom: 25px;
}

/* START: Spinner (http://tobiasahlin.com/spinkit/) */
.spinner {
  width: 40px;
  height: 40px;

  position: absolute;
  right: 5px;
  /*margin: 100px auto;*/
  display: inline-block;
}

.spinner.hidden {
	display: none;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #337ab7;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
/* END: Spinner */
</style>
