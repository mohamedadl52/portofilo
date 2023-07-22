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
  
           <h1 class="text-xl text-seconcolor font-semibold">Personal infomation</h1>
  
           <div class="flex mt-4 flex-wrap justify-center w-full  gap-4  relative items-center">
               <div class="w-[400px]  shadow-lg p-2 ">
                   <div class="flex justify-between">
                                 <div class="text-lg text-seconcolor font-semibold">
                                   Personal profile
                                 </div>
                                 <div class="text-sm text-maincolor  font-semibold">
                                   edit
                                 </div>
                   </div>
                <p class="text-sm text-seconcolor font-semibold">Mohamed adel </p>
                <p class="text-sm text-seconcolor ">email gmail@.com</p>
                <p class="text-sm text-seconcolor">090203083</p>
                 
                </div>
               <div class="w-[400px]  shadow-lg p-2 ">
                   <div class="flex justify-between">
                                 <div class="text-lg text-seconcolor font-semibold">
                                   shapping address
                                 </div>
                                 <div class="text-sm text-maincolor  font-semibold">
                                   edit
                                 </div>
                   </div>
                <p class="text-sm text-seconcolor font-semibold">Mohamed adel </p>
                <p class="text-sm text-seconcolor ">tamboul</p>
                <p class="text-sm text-seconcolor">090203083</p>
                 
                </div>
               <div class="w-[400px]  shadow-lg p-2 ">
                   <div class="flex justify-between">
                                 <div class="text-lg text-seconcolor font-semibold">
                                   billing  Addre]
                                 </div>
                                 <div class="text-sm text-maincolor  font-semibold">
                                   edit
                                 </div>
                   </div>
                <p class="text-sm text-seconcolor font-semibold">Mohamed adel </p>
                <p class="text-sm text-seconcolor ">tamboul</p>
                <p class="text-sm text-seconcolor">090203083</p>
                 
                </div>
        
        
              </div>
            </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import accountCat from "../components/accountCat.vue";
  </script>
  