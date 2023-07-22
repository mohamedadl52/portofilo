<template>
   <div class="overflow-hidden">
    <div class="background overflow-hidden">
       <img class="w-full lg:hidden" height="20px" src="../assets//images//key7.jpg" alt="">
       
       
       <div  class="flex flex-col container justify-between lg:flex-row">
           <div class="mx-2 ml-5 lg:mt-64">
               <h1 style="color:rgb(19, 255, 255)" class="text-white lg:text-3xl  uppercase text-2xl  text-bold ">We are Web DEvelpoer</h1>
               <h1 style="color:rgb(255, 255, 255)" class="text-white   uppercase text-lg  text-bold ">make your jobs with hight quality</h1>
               <button style="border: 1px solid blueviolet; border-radius: 10px;" class="text-white   uppercase text-lg p-2 mt-4 w-64  text-bold">
                Hair us
               </button>
            </div>
            <div  class="lg:w-1/2">
                <img  class="imfly" height="20px" src="../assets//images//2.png" alt="">

            </div>
        </div>
    </div>
    <div data-aos="zoom-out-up"
    class="mb-20" >
  <p class="bg-blue-400 text-center mb-10  mt-10 w-32 rounded-r-lg  text-2xl text-white p-2">our skills</p>
 <div  v-for="item in values " :key="item.name">
   
    <span class="ml-4 lg:ml-12 text-xl text-blue-500">{{item.name}}</span>
  <div class="flex mx-2">
    <div class="h-4   w-11/12 lg:w-1/2 bg-neutral-200 lg:ml-10 dark:bg-neutral-600">
  <div class="h-4 bg-green-600 bg-primary" :style="{width: item.value + '%' , background : item.color}">  </div>
  </div>
  <p class="text-red-500 mx-0 leading-4 text-xl ml-2" :style="{color  :  item.color}">    {{ item.value }}%
</p>
  </div>
  <br>
 </div>

    </div>
   </div>
</template>

<script>
import AOS from 'aos'
import { onMounted } from 'vue'
export default {
  
    data(){
        return {
        values : [
            {name  :  'html' , value  :   90 , color  :   '#7486748'} ,
            {name  :  'css' , value  :   70 , color  :   '#748'} ,
            {name  :  'js' , value  :   80 , color  :   '#a48'} ,
            {name  :  'tailwind css' , value  :   70 , color  :   '#c48'} ,
            {name  :  'bootstrap' , value  :   90 , color  :   '#774'} ,
            {name  :  'nodejs' , value  :   80 , color  :   '#748'} ,
            {name  :  'python' , value  :   60 , color  :   '#a54'} ,
            {name  :  'c++' , value  :   50 , color  :   '#a88'} 


            

        ]
        }
    } ,
    setup(){
        onMounted(()=>{
            AOS.init()
        })
    }
}
</script>
<style scoped>


.imfly {
    animation: bgfly 2s infinite;
}
.background {
  background-image: url("../src/assets/images/key7.jpg");
  background-size: cover;
  width: 100%;
  height: 85vh;
  position: relative;
}
@keyframes bgfly {
    0% {
   transform: translateY(8px);
}
50% {
    
    transform: translateY(0px);
}
100%{
    
    transform: translateY(8px);
    }
}
</style>