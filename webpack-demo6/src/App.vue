<template>
    <div>
        <h1>App</h1>
        <h2>{{ msg }}</h2>
        <foo></foo>
    </div>
</template>

<script>
    import Foo from './components/Foo.vue'
    export default {
       data() {
           return {
               msg:'xiakecp'
           }
       },
        components:{
            Foo
        }
    }


</script>

<style scoped>
    h1 {
        color: red;
    }

</style>