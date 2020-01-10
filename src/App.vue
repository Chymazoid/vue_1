<template>
    <div class="container text-center pt-5">
        <h1>{{title}}</h1>
        <app-counter></app-counter>
        <app-second-counter></app-second-counter>
        <app-actions></app-actions>
    </div>
</template>

<script>
    import Counter from './Counter'
    import SecondCounter from './SecondCounter'
    import Actions from './Actions'

    export default {
        data() {
            return {


            }

        },
        components: {
            appCounter: Counter,
            appActions: Actions,
            appSecondCounter: SecondCounter
        },
        computed: {
            title() {
                return this.$store.getters.title
            }
        }

    }
</script>

<style scoped>

</style>
