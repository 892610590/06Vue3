<template>
    <div>
        <p>您的性别是：{{this.$store.state.sex}}</p>
        <p>您的爱好是：{{this.$store.state.hobbies.join(",")}}</p>
        <p>个人简介：{{this.$store.state.detail}}</p>
    </div>
</template>

<script>
</script>
<style scoped>
</style>