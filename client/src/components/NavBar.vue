<template>
<div>

<!--  header start -->
   <header class="container fixed lg:static top-0 bg-white z-50 py-4 mx-auto flex justify-between gap-2 p-4 lg:p-4">
    
    <div class="logo">
          <router-link to="/" >     <p style="font-family: cursive;" class="uppercase font-bold text-xl text-seconcolor"> <span class="text-maincolor font-bold  rounded-full mr-2" style="    letter-spacing: -6px;">MH</span>TEAM</p>
</router-link>
    </div>
        <div class="p-1 shadow-xl text-white lg:text-lg font-bold uppercase rounded-lg " style="background: linear-gradient(80deg, #5c0455, #aa76ff);">
            Hair Us
        </div>  
   </header>
<!--  header end -->

   <!-- nav bar pc start -->
<nav style="background: linear-gradient(90deg , blue , white);"  class=" z-20 hidden bg-seconcolor w-64 absolute lg:relative lg:w-full rounded-r-lg lg:rounded-none lg:block ">  
  <div class="container w-full lg:flex py-2 lg:py-0 justify-center  mx-auto">
    
   
       <div>
         <ul class="lg:flex lg:flex-row-reverse justify-center items-center  text-center gap-8 text-bold text-white ">
            <li class="bg-maincolor font-bold my-1 py-2 px-1  rounded-r-lg lg:my-0 lg:w-auto lg:bg-transparent " ><router-link to="/">من نحن</router-link></li>
            <li class="bg-maincolor font-bold my-1 w-full rounded-r-lg lg:my-2 lg:w-auto lg:bg-transparent"><router-link to="/shop"> خدماتنا</router-link></li>
            <li class="bg-maincolor font-bold my-1 w-full rounded-r-lg lg:my-2 lg:w-auto lg:bg-transparent"><router-link to="/about">اعمالنا</router-link> </li>
            <li class="bg-maincolor font-bold my-1 w-full rounded-r-lg lg:my-2 lg:w-auto  lg:bg-transparent" @click="getUserDetails"><router-link to="/contac">تواصل معنا</router-link> </li>
         </ul>
         <div>
          {{ user }}
          </div>
      </div>
      <div class=" my-4  lg:hidden text-center">
 
        
 <span class="uppercase lg:text-white font-bold text-red-400 block lg:inline"> <font-awesome-icon
  class="
            text-white
            hover:text-gray-600
            transition-all
            duration-500
            text-lg
            mx-2
          "
          :icon="['fas', 'sign-in-alt']"
        /><router-link to="/login">login</router-link>  </span> <span class="hidden text-white lg:inline"> / </span>
 <span class="uppercase lg:text-white font-bold text-red-400">
   <font-awesome-icon
   class="
   text-white
            hover:text-gray-600
            transition-all
            duration-500
            text-lg
            mx-2
            "
            :icon="['fas', 'user-plus']"
            /><router-link to="/signup">register</router-link> </span>

</div>
</div>

</nav>
<!-- nav bar pc end -->


    <!-- navbar mobile start -->
    <div class="fixed lg:hidden  bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x dark:hover:bg-gray-800 group dark:border-gray-600">
          <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
          <span class="text-sm text-gray-500 dark:text-gray-400  dark:group-hover:text-blue-500 whitespace-nowrap"><router-link to="/contac">تواصل معنا</router-link></span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-r border-gray-200  dark:hover:bg-gray-800 group dark:border-gray-600">
          <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400  dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400  dark:group-hover:text-blue-500"><router-link to="/about">اعمالنا</router-link></span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5  dark:hover:bg-gray-800 group">
            <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400  dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 dark:group-hover:text-blue-500"><router-link to="/shop"> خدماتنا</router-link></span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5  dark:hover:bg-gray-800 group">
          <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400  dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 dark:group-hover:text-blue-500"><router-link to="/"> من نحن</router-link></span>
        </button>
      
    </div>
</div>
    <!-- navbar mobile end -->

  </div>  

</template>
<script>
  import VueJwtDecode from "vue-jwt-decode";
export default {
   data(){
      return {
         menut : true       }
   } ,
   methods : {
      tooglemenu(){
         return this.menut =! this.menut
      } , 
      getUserDetails() {
      // get token from localstorage
      let token = localStorage.getItem("user");
      console.log(token)
      try {
      //decode token here and attach to the user object
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;    
      } catch (error) {
        // return error in production env
        console.log(error, 'error from decoding token')
      }
    },
   }

}
</script>
