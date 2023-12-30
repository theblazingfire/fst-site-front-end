<template>
    <div>
        <h1>
            Home page content {{ message }}
        </h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message : "How are you?"
        }
    }
}
</script>

<style>
    h1 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>