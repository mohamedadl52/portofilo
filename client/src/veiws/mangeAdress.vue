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
               <div class="w-[300px]">
                   <span lass="text-6xl text-seconcolor font-semibold">full name </span>
                   <input type="text" class="border p-2 w-full" placeholder="jone">
                </div>
                <div class="w-[300px]">
                   <p lass="text-lg text-seconcolor font-semibold">phone number </p>
                   <input type="number" class="border p-2 w-full" placeholder="phone number">
                </div>
                <div class="w-[300px]">
                   <p lass="text-3x0l text-seconcolor font-semibold">countray </p>
                    <input type="text" class="border p-2 w-full" placeholder="jone">
               </div>
               <div class="w-[300px]">
                  <p lass="text-2xl text-seconcolor font-semibold">Region </p>
                  <input type="text" class="border p-2 w-full" placeholder="jone">
               </div>
               <div class="w-[300px]">
                  <p lass="text-lg text-red-500 font-semibold">City </p>
                  <input type="text" class="border p-2 w-full" placeholder="email">
               </div>
               <div class="w-[300px]">
                  <p lass="text-lg text-seconcolor font-semibold">Area </p>
                  <input type="text" class="border p-2 w-full" placeholder="jone">
               </div>
               <div class="w-full px-36 ml-2">
                  <p lass="text-lg text-seconcolor font-semibold">Adress </p>
                  <input type="text" class="border p-2 w-full" placeholder="jone">
               </div>
              </div>
              <div class="px-36 ml-4">
              <h1 class=" text-white font-bold text-center bg-maincolor p-2 px-2 w-32 mt-4">save changes</h1>
  
              </div>
            </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import accountCat from "../components/accountCat.vue";
  </script>
  