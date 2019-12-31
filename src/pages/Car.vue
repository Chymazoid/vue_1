<template>
    <div>
        <h1>Car id {{ id }}</h1>
        <button class="btn btn-sm btn-default" @click="goBackToCars">Back</button>
        <br>
     <!--   <router-link
            class="btn btn-info mt-2"
            tag="button"
            :to="'/car/' + id +'/full'"

        >Ful info</router-link>-->

           <router-link
           class="btn btn-info mt-2"
           tag="button"
            :to="{name: 'carFull', params: { id : id}, query: {
                name: 'Mazda',
                year: 2018
            },
            hash: '#scroll'

            }"

       >Ful info</router-link>

        <hr>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data() {
            return{
                //id: this.$router.currentRoute.params['id']
                id: this.$route.params['id']
            }

        },
        methods: {
            goBackToCars() {
              this.$router.push('/cars')
          }
        },
        watch: {
            $route(toR, fromR) {
                this.id = toR.params['id']
            }
        },

        beforeRouteLeave(to, fromR, next) {
            console.log('beforeRouteLeave')
           if(window.confirm('ololo')) {
               next(true)
           } else {
               next()
           }
        }
    }
</script>

<style scoped>

</style>
