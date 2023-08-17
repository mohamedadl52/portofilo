<template>
  <div
class="w-64 flex justify-around
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
          v-if="link"
          class="text-center transition-colors duration-300 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 p-1 text-white"
          :to="{ name: link }"
          >GO to Project</router-link
        >
        <a
v-if="href"
         class="text-center transition-colors duration-300 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 p-1 text-white" :href="href">GO to Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
return {
  image: this.img
}
  } , 
  props: {
    name  :  String , 
    link :  String  , 
    img  :  {type :String , default : ''} , 
    href : String
  } , 
  computed : {
   getImage(){
   return '../src/assets/images/works/yogaa.jpg'
   }
  }
}
</script>