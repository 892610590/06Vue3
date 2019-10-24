<template>
    <div>
        <p>1.请问您的性别是:</p>
        <input type="radio" v-model="sex" value="男" name="genter">男
        <input type="radio" v-model="sex" value="女" name="lady">女
        <input type="radio" v-model="sex" value="保密" name="secrite">保密
        <br>
        <button @click="doClick">下一步</button>
        <button @click="Reset()">重置</button>
    </div>
</template>


<script>
    export default {
        name: "page1",
        data(){
            return{
                sex:'',
            }
        },
        methods:{
            doClick(){
                this.$store.commit("addsex",this.sex);
                this.$router.push('/page2');
            },
            Reset(){
                this.sex='保密';
            }
        }
    }
</script>
<style scoped>
</style>