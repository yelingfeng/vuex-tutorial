<template>
    <div class="list-group">
        <div class="list-group-item" v-for="item in data">
            <div class="row-picture">
                <i class="material-icons">location_on</i>
            </div>
            <div class="row-content">
                <h4 class="list-group-item-heading">{{item.name}}</h4>
                <p class="list-group-item-text">{{item.address}}</p>
            </div>
            <div class="list-group-separator"></div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['data']
    }
</script>