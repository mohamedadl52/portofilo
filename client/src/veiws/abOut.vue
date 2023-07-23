<template>
  
    <div class="mt-20 flex justify-center flex-wrap lg:mt-0">
       <button style="background: linear-gradient(60deg, rgb(147 84 185), rgb(38 146 153 / 60%))" class="inline-block bg-blue-900 rounded-sm p-2 lg:px-4 text-white mx-1 font-bold text-sm my-1 lg:mt-0 uppercase lg:mx-2" v-for="item in works" :key="item">
         {{ item }}
       </button>   
    </div>
</template>

<script setup>
import { ref } from "vue";


const works = ref([
    'full desgin pages' , 
    'component desgin pages' , 
    'full stack projects' , 
    'projects in progress' , 
])
</script>