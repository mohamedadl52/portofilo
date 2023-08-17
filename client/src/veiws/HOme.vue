<template >
  <div>
    <NavBar />
    
    <div  class="overflow-hidden">
     <div :style="{ backgroundImage: 'url(' + image + ')' }" class="background pb-5 overflow-hidden">
        <img class="w-full lg:hidden " height="20px" src="../assets//images//key7.jpg" alt="">
        
        
        <div class="flex flex-col container justify-between lg:flex-row">
            <div class="mx-2 ml-5 lg:mt-64">
                <h1 style="color:rgb(19, 255, 255)" class="text-white lg:text-3xl  uppercase text-2xl  text-bold ">We are Web DEvelpoer</h1>
                <h1 style="color:rgb(255, 255, 255)" class="text-white   uppercase text-lg  text-bold ">make your jobs with hight quality</h1>
                <button style="border: 1px solid blueviolet; border-radius: 10px;" class="text-white   uppercase text-lg p-2 mt-4 w-64  text-bold">
                 Hair us
                </button>
             </div>
             <div  class="lg:w-1/2 w-72 ml-10  ">
                 <img  class="imfly"  src="../assets//images//2.png" alt="">
 
             </div>
         </div>
     </div>
     <div  class="wrapper overflow-hidden">
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
       <div><span class="dot"></span></div>
     </div>
     <div
data-aos="zoom-out-up" style="background-color: rgba(0, 0, 0 ,0.8);"
     class=" pt-10 pb-10 xl:pb-24 overflow-hidden"  >
   <p class="bg-blue-500 text-center mb-10  mt-0  w-32 rounded-r-lg  text-2xl text-white p-2">our skills</p>
  <div  v-for="item in values " :key="item.name">
    
     <span class="ml-4 lg:ml-12 text-2xl text-white">{{item.name}}</span>
   <div class="flex mx-2">
     <div class="h-4   w-11/12 lg:w-1/2 bg-neutral-200 lg:ml-10 dark:bg-neutral-600">
   <div class="h-4 bg-green-600 bg-primary" :style="{width: item.value + '%' , background : item.color}">  </div>
   </div>
   <p class=" mx-0 leading-4 font-bold text-xl ml-2" :style="{color  :  item.color}">    {{ item.value }}%
 </p>
   </div>
   <br>
  </div>
 
     </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import { onMounted } from 'vue'
import image from "../assets/images/key7.jpg" 
import NavBar from '../components/NavBar.vue'
export default {
  components : {
    NavBar
  } ,
    setup(){
        onMounted(()=>{
            AOS.init()
        })
    }, 
  
    data(){
        return {
            image : image , 
        values : [
            {name  :  'html' , value  :   90 , color  :   '#730'} ,
            {name  :  'css' , value  :   70 , color  :   '#748'} ,
            {name  :  'js' , value  :   80 , color  :   '#a48'} ,
            {name  :  'tailwind css' , value  :   70 , color  :   '#c48'} ,
            {name  :  'bootstrap' , value  :   90 , color  :   '#774'} ,
            {name  :  'vuetfiy' , value  :   90 , color  :   '#544'} ,
            {name  :  'vue js' , value  :   90 , color  :   '#974'} ,
            {name  :  'nuxt js' , value  :   90 , color  :   '#374'} ,
            {name  :  'react js' , value  :   90 , color  :   '#774'} ,
            {name  :  'next js' , value  :   90 , color  :   '#a74'} ,
            {name  :  'nodejs' , value  :   80 , color  :   '#448'} ,
            {name  :  'Express js' , value  :   80 , color  :   '#948'} ,
            {name  :  'soket IO' , value  :   80 , color  :   '#b28'} ,
            {name  :  'mongoDB' , value  :   80 , color  :   '#448'} ,
            {name  :  'my sql DB' , value  :   80 , color  :   '#c48'} ,
            {name  :  'PHP' , value  :   60 , color  :   '#854'} ,
            {name  :  'laraval' , value  :   60 , color  :   '#e54'} ,
            {name  :  'python' , value  :   60 , color  :   '#005154'} ,
            {name  :  'flask' , value  :   60 , color  :   '#b65554'} ,
            {name  :  'django' , value  :   60 , color  :   '#a54'} ,
            {name  :  'c++' , value  :   50 , color  :   '#dd8'} 


            

        ]
        }
    } 
}
</script>
<style scoped>


.imfly {
    animation: bgfly 2s infinite;
}
.background {
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

/* animated bg */
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  height: 1736px;
  width: 100%;
  background: linear-gradient(180deg, #0e8385, 5%, #119dff, 50%, #030423);
  position: absolute;
}

.wrapper div {
  height: 60px;
  width: 60px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  position: absolute;
  top: 10%;
  left: 10%;
  animation: 4s linear infinite;
}
div .dot {
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 20%;
  right: 20%;
}
.wrapper div:nth-child(1) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(2) {
  top: 60%;
  left: 80%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(3) {
  top: 40%;
  left: 40%;
  animation: animate 3s linear infinite;
}
.wrapper div:nth-child(4) {
  top: 66%;
  left: 30%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(5) {
  top: 90%;
  left: 10%;
  animation: animate 9s linear infinite;
}
.wrapper div:nth-child(6) {
  top: 30%;
  left: 60%;
  animation: animate 5s linear infinite;
}
.wrapper div:nth-child(7) {
  top: 70%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(8) {
  top: 75%;
  left: 60%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(9) {
  top: 50%;
  left: 50%;
  animation: animate 6s linear infinite;
}
.wrapper div:nth-child(10) {
  top: 45%;
  left: 20%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(11) {
  top: 10%;
  left: 90%;
  animation: animate 9s linear infinite;
}
.wrapper div:nth-child(12) {
  top: 20%;
  left: 70%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(13) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(14) {
  top: 60%;
  left: 5%;
  animation: animate 6s linear infinite;
}
.wrapper div:nth-child(15) {
  top: 90%;
  left: 80%;
  animation: animate 9s linear infinite;
}
@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
  }
  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg);
  }
}
/* end animated bg */
</style>