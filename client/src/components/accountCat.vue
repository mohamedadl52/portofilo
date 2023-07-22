<template>
    <div>
        <div :class="hidecat ? 'left-0' : '-left-64'" class="catogress z-20 bg-white transition-all  duration-500  absolute   lg:static lg:block shadow-lg  mr-10 ">
        <div>
            <h1 class="whitespace-nowrap"><router-link to="/account">mange account</router-link> </h1>
          <ul>
            <li>
                <router-link to="/manginf"> <span>profile information</span> </router-link>
            </li>
            <li>
                <router-link to="/mangeAdress"> <span>mange address</span> </router-link>
            </li>
            <li>
                <router-link to="/chpass">  <span>change password</span> </router-link>
            </li>
          </ul>
        </div>
        <div>
            <h1 class="whitespace-nowrap">My order History</h1>
          <ul>
            <li>
                <span>My Returns</span> 
            </li>
            <li>
                <span>My Cancellations</span> 
            </li>
            <li>
                <span>My Reviews </span> 
            </li>
          </ul>
        </div>
        <div>
            <h1 class="whitespace-nowrap">payment Methods</h1>
          <ul>
            <li>
                <span>paypal</span> 
            </li>
          </ul>
        </div>
        <div>
            <h1 class="whitespace-nowrap"> <router-link to="/whitelist">white listk</router-link> </h1>
        </div>
      
        <div>
            <h1 class="whitespace-nowrap">logout</h1>
        </div>
      
        
     </div>
    </div>
</template>

<script setup>

import {ref } from 'vue'


let hidecat = ref(false)

</script>

<style scoped>
.catogress div {
    @apply border border-b p-10 py-4
}
.catogress h1 {
 @apply text-seconcolor text-lg  font-semibold my-4 mb-2 uppercase
}
.catogress ul li  {
    @apply text-sm whitespace-nowrap font-semibold leading-6 transition-transform duration-300 cursor-pointer
}
.catogress ul li:hover {
    @apply translate-x-3
}
</style>