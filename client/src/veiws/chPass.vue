<template>
    <div>
      <p class="px-20 mt-4">
        <font-awesome-icon
          class="text-seconcolor hover:text-gray-600 transition-all duration-500 text-2xl"
          :icon="['fas', 'home']"
        />
        <font-awesome-icon
          class="text-seconcolor hover:text-gray-600 transition-all duration-500 text-xl mr-1"
          :icon="['fas', 'chevron-right']"
        />
        <span class="text-lg text-seconcolor font-bold">account</span>
      </p>
  
      <div class="container lg:flex p-4 mx-auto">
        <accountCat />
  
        <div class="w-full">
  
           <h1 class="text-xl text-seconcolor font-semibold">manage  Address</h1>
           
           <div class="flex mt-4 flex-wrap justify-center gap-10 w-full    relative items-center">
               <div class="w-full px-4 lg:w-1/2">
                   <span lass="text-xl text-seconcolor font-semibold">old password </span>
                   <input type="text" class="border p-2 w-full" placeholder="jone">
                </div>
                <div  class="w-full px-4 lg:w-1/2">
                   <p lass="text-lg text-seconcolor font-semibold">new password </p>
                   <input type="number" class="border p-2 w-full" placeholder="phone number">
                </div>
                <div  class="w-full px-4 lg:w-1/2">
                   <p lass="text-3x0l text-seconcolor font-semibold">re write new password </p>
                    <input type="text" class="border p-2 w-full" placeholder="jone">
               </div>
             
              </div>
              <div class="px-36 lg:px-64 ml-4">
              <h1 class=" text-white font-bold text-center bg-maincolor p-2 px-2 w-32 mt-4">save changes</h1>
  
              </div>
            </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import accountCat from "../components/accountCat.vue";
  </script>
  