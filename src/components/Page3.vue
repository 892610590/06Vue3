<template>
    <div>
        <p>3.请介绍一下自己</p>
        <textarea v-model="detail"></textarea>
        <br/>
        <button @click="doClick()">提交</button>
        <button @click="doClickUp()">上一页</button>
        <button @click="Reset()">重置</button>
    </div>
</template>


<script>
    export default {
        name: "page3",
        data(){
            return{
                detail:''
            }
        },
        methods:{
            doClick(){
                this.$store.commit("adddetail",this.detail);
                this.$router.push('/page4');
            },
            doClickUp(){
                this.$router.push('/page2');
            },
            Reset(){
               this.detail='';
            }
        }
    }
</script>
<style scoped>
</style>