<template>
    <div>
      <header class="">
          <div class="container mx-auto ">
            <br>
              <div class="flex relative justify-between mx-2 xl:mx-0 flex-col md:flex-row">
                   <div class="flex justify-between">
                      <div>
                         <img class="inline-block w-8 mx-2 " width="auto" height="auto" src="/src/assets/images/project1/1.png" alt=""><span class="text-white text-2xl  mt-20">MotiveZone</span>
            
                      </div>
                      
                            <div class="md:hidden">
                       <font-awesome-icon class="text-white  text-3xlq" @click="togglemenu" :icon="['fas', 'bars']" />
                    </div>
                   </div>
                    
  
                   <div class="flex justify-between flex-grow flex-col md:flex-row ">
                                   <transition name="bounce">
                     <div   :class="{'hidden': fullwidth}" class="menu transition-all duration-700 ease-linear md:block text-center flex-grow">
                      
  
                       
                          <ul class="bg-blue-900 underline md:no-underline md:bg-transparent" >
                            <li><a href="">Home</a></li>
                            <li><a href="">Our Works</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact us</a></li>
                    
                          </ul>
  
                     </div>
                                   </transition>
                    <div class="flex-grow ">
                             
      
                        <button class="btn ">say hi</button>
  
                     </div>
                   </div>
                   
                  
        </div>
  
        <div class="flex flex-col md:flex-row mx-4 xl:mx-0 ">
     <div>
       <h1 class="text-3xl text-white mt-10 md:mt-32 "> clwe splite every things </h1>
       <p class="tesx-xl text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ipsum quisquam quaerat architecto vel at repellat eveniet laboriosam fuga atque quis, possimus minus ea necessitatibus voluptatem incidunt nulla beatae praesentium.</p>
     </div>
     <div>
         <img src="/src/assets/images/2.png" width="auto" class="z-30 mt-10 md:mt-20 relative" height="auto" alt="">
     </div>
  
        </div>
  
        <div class=" absolute bottom-0 w-full  left-0">
  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#fff" fill-opacity="1" d="M0,290L2040,200L1640,420L0,320Z"></path>
  </svg>
        </div>
          </div>
      </header>
  
  
      <section>
          <div class="mt-20 text-center">
                <h1 class=" text-gray-500 text-4xl text-center">Our Service </h1>
                <h1 class=" text-gray-500 text-xl text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores, voluptates </h1>
          </div>
  
          <div class="flex flex-col mt-20  container mx-auto md:flex-row md:justify-around justify-center items-center ">
             <div class="md:w-1/4 text-center mb-10 mx-4 text-gray-500 ">
               <img src="/src/assets/images/project1/3.png" class="mx-auto" alt=""> <br>
            <h1 class="text-2xl">web design</h1>
            <p class="leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem id eos quidem explicabo unde totam suscipit, re</p> 
            <p class="mt-2">learn more ----></p>
             </div>
             <div class="md:w-1/4 text-center mb-10 mx-4 text-gray-500 ">
               <img src="/src/assets/images/project1/4.png" class="mx-auto" alt=""> <br>
            <h1 class="text-2xl">web design</h1>
            <p class="leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem id eos quidem explicabo unde totam suscipit, re</p> 
            <p class="mt-2" >learn more ----></p>
             </div>
             <div class="md:w-1/4 text-center mb-10 mx-4 text-gray-500 ">
               <img src="/src/assets/images/project1/3.png" class="mx-auto" alt=""> <br>
            <h1 class="text-2xl">web design</h1>
            <p class="leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem id eos quidem explicabo unde totam suscipit, re</p> 
            <p class="mt-2">learn more ----></p>
             </div>
            
          </div>
      </section>
  
      <section class="container xl:mx-auto mt-20 ">
            <div class="flex flex-col md:flex-row mx-2 leading-5">
                 <div>
                  <h1 class="text-3xl text-gray-500  md:mt-20 font-bold"> what are we doing ?</h1>
               <p class="text-xl text-gray-500 leading-7 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum quo omnis totam harum autem sed obcaecati laudantium adipisci libero vero similique dicta !</p>
               <button class="bg-btn text-gray-500  p-2">read more</button>
                 </div>
                 <div>
                     <img src="/src/assets/images/project1/6.png" alt="">
                 </div>
            </div>
            <div class="flex flex-col md:flex-row mx-2 leading-5 mt-10 md:mt-20 ">
                 <div class="md:order-2 md:ml-2">
                  <h1 class="text-3xl text-gray-500 md:mt-20  font-bold"> what are we doing ?</h1>
               <p class="text-xl text-gray-500 leading-7 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum quo omnis totam harum autem sed obcaecati laudantium adipisci libero vero similique dicta !</p>
               <button class="bg-btn text-gray-500  p-2">read more</button>
                 </div>
                 <div>
                     <img src="/src/assets/images/project1/7.png" alt="">
                 </div>
            </div>
      </section>
        <section class="w-full xl:h-screen mt-10 sec2">
         <div class="div w-full xl:h-screen">
              <div  class="w-full  mt-10  "> <br>
            <p class="text-white text-center text-3xl font-bold uppercase  ">our latest projects </p>
            <p class="text-white text-center text-xl mb-10 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dolorem quasi magni sequi fuga nulla fugiat </p>
            </div>
    
    <div class="flex container mx-auto flex-col items-center justify-center mt-20 xl:mt-7 xl:justify-around md:flex-row">
             <div class="text-white text-center leading-8 mb-20">
              <img width="250" class="mx-auto" src="/src/assets/images/project1/9.png" alt="">
              <p class="text-3xl font-bold">food and gd</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, fugit velit</p>
              <button class="p-2 bg-btn mt-8 md:mt-2 ">learn more</button>
             </div>
             <div class="text-white text-center leading-8 mb-20">
              <img width="250" class="mx-auto" src="/src/assets/images/project1/9.png" alt="">
              <p class="text-3xl font-bold">food and gd</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, fugit velit</p>
              <button class="p-2 bg-btn mt-8  md:mt-2">learn more</button>
             </div>
             <div class="text-white text-center leading-8 mb-20">
              <img width="250" class="mx-auto" src="/src/assets/images/project1/9.png" alt="">
              <p class="text-3xl font-bold">food and gd</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, fugit velit</p>
              <button class="p-2 bg-btn mt-8  md:mt-2 ">learn more</button>
             </div>
    </div>
         </div>
  
        </section>
            <section>
                <footer class="bg-blue-600 font-black text-white pl-10 p-2">Created By Mohammed Adel </footer>
            </section>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        fullwidth: true,
      }
    },
    methods: {
      togglemenu() {
        this.fullwidth = !this.fullwidth
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  header {
    background: linear-gradient(to left bottom, white 0%, #1b498a 0%);
    @apply relative w-full h-screen;
    .menu ul li {
      @apply text-white md:inline-block ml-5 leading-10 transition-all duration-700  hover:text-gray-900;
    }
    .btn {
      background: #ff9c00;
      @apply text-white  leading-10 w-32 hidden md:block mx-auto;
    }
  }
  
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  
  .sec2 {
    background: url("/src/assets/images/project1/8.png") no-repeat;
    background-size: cover;
    .div{
      background:#1a4789b8;
    }
  }
  </style>
  