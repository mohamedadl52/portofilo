<template>
  <div class="w-64 flex justify-around
   items-center  flex-col h-56 ">
    <div>
      <img :src="img" alt="" />
    </div>
    <div>
      <h1 class="text-seconcolor text-center tex-lg font-black">
        {{name}}
      </h1>
      <div class="mt-2 mx-auto text-center">
        <router-link
          class="text-center transition-colors duration-300 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 p-1 text-white"
          :to="{ name: link }"
          v-if="link"
          >GO to Project</router-link
        >
        <a   class="text-center transition-colors duration-300 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 p-1 text-white"
         v-if="href" :href="href">GO to Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name  :  String , 
    link :  String  , 
    img  :  String , 
    href : String
  }
}
</script>