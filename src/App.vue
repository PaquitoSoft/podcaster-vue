<template>
  <div id="app">
    <div class="header">
      <h1>
        <router-link to="/">Podcaster</router-link>
        <div class="spinner hidden">
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
</style>
