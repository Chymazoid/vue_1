<template>
    <div>

       <slot name="title"></slot>
        <hr>
        <hr>

        <slot name="text"></slot>
    </div>
</template>

<script>


    export default {

    }
</script>

<style scoped>
    div {
        border: 1px solid black;
    }
    h2 {
        font-size: 200px;
    }
</style>
