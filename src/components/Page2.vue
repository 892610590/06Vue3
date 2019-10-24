<template>
    <div>
        <p>请选择您的兴趣爱好：</p>
        <input type="checkbox" value="看书" v-model="hobbies">看书
        <input type="checkbox" value="游泳" v-model="hobbies">游泳
        <input type="checkbox" value="跑步" v-model="hobbies">跑步
        <input type="checkbox" value="看电影" v-model="hobbies">看电影
        <input type="checkbox" value="听音乐" v-model="hobbies">听音乐
        <input type="checkbox" value="动漫" v-model="hobbies">动漫
        <br>
        <button @click="doClickUp">上一步</button>
        <button @click="doClickDown">下一步</button>
        <button @click="Reset()">重置</button>
    </div>
</template>



<script>
    export default {
        name: "page2",
        data(){
            return{
                hobbies:[],
            }
        },
        methods:{
            doClickUp(){
                        this.$router.push('/');
            },
            doClickDown(){
                this.$store.commit("addhobbies",this.hobbies);
                this.$router.push('/page3');
            },
            Reset(){
                this.hobbies=[];
            }
       }
    }
</script>
<style scoped>
</style>