<template>
    <div id="app">
        <img src="~assets/logo.png">
        <Search></Search>
    </div>
</template>

<script>
    import Search from './components/search'
    export default {
        name: 'app',
        components: {
            Search
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
