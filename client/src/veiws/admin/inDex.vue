<template>
    <div>
   
      <div class="flex min-h-screen w-full flex-row">
          <!-- start aside left part  -->   
          
       <navbar :news="news" /> 
          <!-- end aside left part  -->
        
             <!-- start right aside  -->
                      <div  class="w-full" style="background-color : #22222F">
                          <div class="bars ml-4 mt-2" @click="news = !news">
                              <div class="w-10 h-1 bg-white  my-1"></div>
                              <div class="w-10 h-1 bg-white  my-1"></div>
                              <div class="w-10 h-1 bg-white  my-1"></div>
                          </div>
                                 <div>
                                       <ul class="flex flex-col lg:flex-row p-4 flex-wrap gap-x-6 gap-y-4 justify-center w-full">
                                         <li class="lg:w-3/12 w-full">
                                            <div  style="box-shadow : 1px 1px 10px white   " class=" text-right text-gray-800   rounded-xl p-2 bg-white">
                                                <p class="flex justify-between">
                                                   <span class="text-white p-1 rounded-xl h-8 bg-green-600"> 30%</span>
                                                   <span>
                                                      
                  <font-awesome-icon class="text-6xl text-gray-800" :icon="['fas', 'user']"></font-awesome-icon>
                                                   </span>
                                                </p>
                                                <p class="text-2xl">
                                                  352
                                                </p>
                                                <p class="text-3xl">
                                                  منتجات مبيعة
                                                </p>
                                            </div>
                                            <!-- <div class="w-1/4  shadow-2xl bg-white h-10 "></div> -->
                                         </li>
                                         <li class="lg:w-3/12 w-full">
                                            <div  style="box-shadow : 1px 1px 10px white   " class=" text-right text-gray-800  rounded-xl p-2 bg-white">
                                                <p class="flex justify-between">
                                                   <span class="text-white p-1 rounded-xl h-8 bg-green-600"> 30%</span>
                                                   <span>
                                                      
                  <font-awesome-icon class="text-6xl text-gray-800" :icon="['fas', 'user']"></font-awesome-icon>
                                                   </span>
                                                </p>
                                                <p class="text-2xl">
                                                  352
                                                </p>
                                                <p class="text-3xl">
                                                  منتجات مبيعة
                                                </p>
                                            </div>
                                            <!-- <div class="w-1/4  shadow-2xl bg-white h-10 "></div> -->
                                         </li>
                                         <li class="lg:w-3/12 w-full">
                                            <div  style="box-shadow : 1px 1px 10px white   " class=" text-right text-gray-800  rounded-xl p-2 bg-white">
                                                <p class="flex justify-between">
                                                   <span class="text-white p-1 rounded-xl h-8 bg-green-600"> 30%</span>
                                                   <span>
                                                      
                  <font-awesome-icon class="text-6xl text-gray-800" :icon="['fas', 'user']"></font-awesome-icon>
                                                   </span>
                                                </p>
                                                <p class="text-2xl">
                                                  352
                                                </p>
                                                <p class="text-3xl">
                                                  منتجات مبيعة
                                                </p>
                                            </div>
                                            <!-- <div class="w-1/4  shadow-2xl bg-white h-10 "></div> -->
                                         </li>
                                         <li class="lg:w-3/12 w-full">
                                            <div  style="box-shadow : 1px 1px 10px white   " class=" text-right text-gray-800  rounded-xl p-2 bg-white">
                                                <p class="flex justify-between">
                                                   <span class="text-white p-1 rounded-xl h-8 bg-green-600"> 30%</span>
                                                   <span>
                                                      
                  <font-awesome-icon class="text-6xl text-gray-800" :icon="['fas', 'user']"></font-awesome-icon>
                                                   </span>
                                                </p>
                                                <p class="text-2xl">
                                                  352
                                                </p>
                                                <p class="text-3xl">
                                                  منتجات مبيعة
                                                </p>
                                            </div>
                                            <!-- <div class="w-1/4  shadow-2xl bg-white h-10 "></div> -->
                                         </li>
                                         <li class="lg:w-3/12 w-full">
                                            <div  style="box-shadow : 1px 1px 10px white   " class=" text-right text-gray-800  rounded-xl p-2 bg-white">
                                                <p class="flex justify-between">
                                                   <span class="text-white p-1 rounded-xl h-8 bg-green-600"> 30%</span>
                                                   <span>
                                                      
                  <font-awesome-icon class="text-6xl text-gray-800" :icon="['fas', 'user']"></font-awesome-icon>
                                                   </span>
                                                </p>
                                                <p class="text-2xl">
                                                  352
                                                </p>
                                                <p class="text-3xl">
                                                  منتجات مبيعة
                                                </p>
                                            </div>
                                            <!-- <div class="w-1/4  shadow-2xl bg-white h-10 "></div> -->
                                         </li>
                                         <li class="lg:w-3/12 w-full">
                                            <div  style="box-shadow : 1px 1px 10px white   " class=" text-right text-gray-800  rounded-xl p-2 bg-white">
                                                <p class="flex justify-between">
                                                   <span class="text-white p-1 rounded-xl h-8 bg-green-600"> 30%</span>
                                                   <span>
                                                      
                  <font-awesome-icon class="text-6xl text-gray-800" :icon="['fas', 'user']"></font-awesome-icon>
                                                   </span>
                                                </p>
                                                <p class="text-2xl">
                                                  352
                                                </p>
                                                <p class="text-3xl">
                                                  منتجات مبيعة
                                                </p>
                                            </div>
                                            <!-- <div class="w-1/4  shadow-2xl bg-white h-10 "></div> -->
                                         </li>
                                    
                                       </ul>
                                 </div>
                      </div>
             <!-- end right aside   -->
  
              </div>
      </div>
  
  </template>
  
  <script>
   import navbar from "/src/components/admin/navBar.vue";
 
 export default {
 components : {
     navbar
 },
     data(){
         return{
             news : true ,
             modelV : true
     }
 } 
 }
  </script>
  