<template>
    <div>
        
    <p class="px-20 mt-4">

<font-awesome-icon
  class="text-seconcolor hover:text-gray-600 transition-all duration-500 text-2xl "
  :icon="['fas', 'home']"
/>  <font-awesome-icon
  class="text-seconcolor hover:text-gray-600 transition-all duration-500 text-xl mr-1"
  :icon="['fas', 'chevron-right']"
/>  
 <span class="text-lg text-seconcolor font-bold">shop</span>
</p>

<div class="container lg:flex p-4  mx-auto">
     <div :class="hidecat ? 'left-0' : '-left-64'" class="catogress z-20 bg-white transition-all  duration-500  absolute   lg:static lg:block shadow-lg p-10 mr-10 ">
        <div>
            <h1>Catogress</h1>
          <ul>
            <li>
                <input id="" type="checkbox" name=""> <span>bathroom</span> <span>(200)</span>
            </li>
            <li>
                <input id="" type="checkbox" name=""> <span>sofa</span> <span>(100)</span>
            </li>
            <li>
                <input id="" type="checkbox" name=""> <span>office</span> <span>(120)</span>
            </li>
          </ul>
        </div>
        <div>
            <h1>brands</h1>
          <ul>
            <li>
                <input id="" type="checkbox" name=""> <span>brand1</span> <span>(200)</span>
            </li>
            <li>
                <input id="" type="checkbox" name=""> <span>brand2</span> <span>(100)</span>
            </li>
            <li>
                <input id="" type="checkbox" name=""> <span>brand3</span> <span>(120)</span>
            </li>
          </ul>
        </div>
        <div>
          <h1>price</h1>
          <div class="flex">
            <input type="text" class="w-16 border " placeholder="min">  -  <input class="w-16 border " type="text" placeholder="max">
            
            </div>
        </div>

        <div>
            <h1>size</h1>
            <div class="flex gap-1">
                <span class="p-1 text-sm bg-maincolor font-bold text-white">XS</span>
                <span class="p-1 text-sm bg-maincolor font-bold text-white">S</span>
                <span class="p-1 text-sm bg-maincolor font-bold text-white">M</span>

            </div>
        </div>
        <div>
            <h1>color</h1>
            <div class="flex gap-1">
                <span class="p-1 text-sm w-4 h-4 bg-maincolor font-bold text-white"></span>
                <span class="p-1 text-sm w-4 h-4 bg-red-400 font-bold text-white"></span>
                <span class="p-1 text-sm w-4 h-4 bg-yellow-200 font-bold text-white"></span>

            </div>
        </div>
        
     </div>
     <div class="w-full">
            <div class="flex justify-between w-full items-center ">
                 <div>
                    <select class="border border-seconcolor p-2 px-10 text-left">
                        <option value="sam">sofa</option>
                        <option value="bd">bad room</option>
                        <option value="sol">sol</option>
                    </select>
                 </div>
                 <div>
                    <font-awesome-icon
          class="text-white bg-maincolor p-2 hover:text-gray-600 transition-all  duration-500 text-2xl mx-2"
          :icon="['fas', 'bars']"
          @click="hidecat =! hidecat"
        />
                    <font-awesome-icon
          class="text-white hidden lg:inline  bg-maincolor p-2 hover:text-gray-600 transition-all duration-500 text-2xl mx-2"
          :icon="['fas', 'bars']"
        />
                 </div>

            </div>
              <div class="flex gap-4 mt-2 flex-wrap justify-center">
                <Card v-for="item in carditem"  :key="item.id" :name="item.name" :price="item.price" /> 
              </div>
     </div>
</div>
    </div>
</template>
<script setup>

import {ref} from 'vue'
import Card from '../components/carD.vue';
let carditem = ref([
  {id :1 ,  name : 'product1' , price :50 } , 
  {id :2 ,  name : 'product2' , price :500 } , 
  {id :3 ,  name : 'product3' , price :60 } , 
  {id :2 ,  name : 'product2' , price :500 } , 
  {id :3 ,  name : 'product3' , price :60 } , 
  {id :2 ,  name : 'product2' , price :500 } , 
  {id :3 ,  name : 'product3' , price :60 }  
  
])

let hidecat = ref(false)
</script>

<style scoped>

.catogress h1 {
 @apply text-seconcolor text-xl font-bold my-4 mb-2 uppercase
}
.catogress ul li  {
    @apply text-lg whitespace-nowrap
}
</style>