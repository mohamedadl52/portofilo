<template>
   <div>

       <header style="z-index : 999"  class="xl:h-screen relative w-full overflow-hidden">


           <div style="z-index : 999"  class="flex relative flex-col md:flex-row ">
                   <div style="background-color: #a7d7c5;" class=" w-24  p-2 ml-2">
   <img width="300px" src="/src/assets/images/yoga/images/VectorSmart.png"  class="max-w-full w-32" alt="">
  
<label style="top: 4px; right: 10px;" for="menu-toggle" class="self-center sm:hidden absolute" @click="toglemenu()">
    <svg
      class="fill-current text-gray-700  mt-6 mr-"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  </label>
  <input id="menu-toggle" class="hidden" type="checkbox" />
  
      </div>
      <div style="z-index : 999"  class="flex-grow mt-0">
           <div   id="menu" style="background-color: #e2ede8; color: #494f4e;" class="">
   <ul :class="{'hidden' : classhidden}" style="transition : all 1s linear"  class="list-none md:block md:mt-6  text-center ">
       <li class="sm:inline-block mx-4 p-2 md:mx-8 hover:text-white hover:bg-blue-300 transition-all duration-300 cursor-pointer  ">home</li>
       <li class="sm:inline-block mx-4 p-2 md:mx-8 hover:text-white hover:bg-blue-300 transition-all duration-300 cursor-pointer ">about us </li>
       <li class="sm:inline-block mx-4 p-2 md:mx-8 hover:text-white hover:bg-blue-300 transition-all duration-300 cursor-pointer ">services </li>
       <li class="sm:inline-block mx-4 p-2 md:mx-8 hover:text-white hover:bg-blue-300 transition-all duration-300 cursor-pointer  sm:mr-20">contact us </li>
   </ul>
   </div>
      </div>

           </div>

           <div style="z-index : 999"  class=" flex flex-col md:flex-row md:justify-start xl:mb-20  relative">
  
    <div class=" md:w-1/2 lg:w-1/3 lg:ml-20 xl:mt-20 ">
      <img width="230px" class=" rounded-full mt-16 ml-16 md:ml-20 md:mt-20  absolute z-30" src="/src/assets/images/yoga/images/Place.png" alt="notfound">
      <img width="400px"  class=" rounded-full  absolute z-20 " src="/src/assets/images/yoga/images/temp.png" alt="notfound">
  </div>

    <div style="line-height: 1.5; color: #6c9894;" class=" text-center md:w-1/2   relative mt-64 md:mt-0 md:mb-32 lg:ml-14 md:ml-6 xl:mt-20 xl:ml-48 p-2">
        <h1 class="text-2xl uppercase font-bold mt-20">yoga class</h1>

        <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi rem consectetur fuga optio fugiat dolore asperiores praesentium, totam quasi facilis ipsam animi odio rerum laborum omnis ipsa mollitia labore?</p>
        <button class="mt-5 p-2 px-4" style=" background-color: #6c9894 ; color: white;">join us </button>
    </div>
  
     </div>

     <div style="z-index : 9999" class=" hidden  md:block   absolute w-64 -right-6 -bottom-40   ">
         <img width="300px" style="z-index : 9999" class="w-full z-50" src="/src/assets/images/yoga/images/temp.png" alt="">
     </div>
   <!-- <div style="background-color: #a7d7c5;" class=" w-24  p-2 ml-2">
   <img width="300px" src="/src/assets/images/yoga/images/VectorSmart.png"  class="max-w-full" alt="">
  
<label style="top: 4px; right: 10px;" for="menu-toggle" @click="toglemenu()" class="self-center sm:hidden absolute">
    <svg
      class="fill-current text-gray-700  mt-6 mr-"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  </label>
  <input class="hidden" type="checkbox" id="menu-toggle" />
  
      </div>
  

   
   <div style="background-color: #e2ede8; color: #494f4e;" id="menu" class="">
   <ul  class="list-none ">
       <li class="sm:inline-block mx-4 p-2  ">home</li>
       <li class="sm:inline-block mx-4 p-2  ">about us </li>
       <li class="sm:inline-block mx-4 p-2  ">services </li>
       <li class="sm:inline-block mx-4 p-2   sm:mr-20">contact us </li>
   </ul>
   </div>

<br style="clear: both;">
<div  class="">
    <div style="position: relative;" class="  items-center ">
      <img  class=" rounded-full w-1/2 absolute z-30" src="/src/assets/images/yoga/images/Place.png" alt="notfound">
      <img  class=" rounded-full w-full absolute z-20 " src="/src/assets/images/yoga/images/temp.png" alt="notfound">
  </div>
    <div style="line-height: 1.5; color: #6c9894;" class="w-full sm:w-1/2 w-64 text-center mt-56 sm:mt-0 sm:ml-20  xl:-mt-20 xl:ml-48 p-2">
        <h1 class="text-2xl uppercase font-bold">yoga class</h1>

        <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi rem consectetur fuga optio fugiat dolore asperiores praesentium, totam quasi facilis ipsam animi odio rerum laborum omnis ipsa mollitia labore?</p>
        <button class="mt-5 p-2 px-4" style=" background-color: #6c9894 ; color: white;">join us </button>
    </div>
  
     </div>

     <div style="bottom: 0;
     left: 1080px; direction: rtl;
 "  class=" hidden xl:block  relative w-1/3 z-30  ">
         <img width="300px" class="w-full" src="/src/assets/images/yoga/images/temp.png" alt="">
     </div> -->

      
  </header>

  
  <article
style=";background-color: #6c9894;
  top: 0; z-index : 998
" class=" xl:relative relative h-auto xl:h-screen sm:mt-20 xl:mt-0 xl:mb-64">
<br> 
  <h1  class="text-white  text-center xl:text-5xl uppercase font-bold ">choose class</h1>

    <p class="text-center mt-10 text-white xl:px-64">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque exercitationem aliquid, maxime tenetur doloremque veritatis autem, voluptas saepe minima ratione reprehenderit similique corporis! Eum excepturi delectus eaque illo totam sit!</p>
    <div class="p-2 flex flex-wrap justify-center sm:justify-start xl:mt-20 ">
    

      <div class="flex flex-col w-full sm:w-1/3 h-64 mb-32   mt-48 sm:mt-32 xl:mt-20">
        <div  class="flex justify-center items-center">
          <img class="w-48 sm:w-32 lg:w-2/12 rounded-full absolute z-30" src="/src/assets/images/yoga/images/place2.png" alt="">
          <img class="w-full sm:w-56 lg:w-1/4 rounded-full absolute  z-10" src="/src/assets/images/yoga/images/temp.png" alt="">
                  </div>
                  
                  <div class="flex justify-center text-white flex-col items-center mt-48 sm:mt-32 xl:pt-6">
                    <p class="text-2xl font-bold">newbi class</p>
                    <p class="text-lg p-2 lg:p-4 ">Lorem ipsum  sit amet  atque facilis! Reprehenderit iste totam ab minus reiciendis rerum.</p>
                  </div>
      </div>
            
          
          <div class="w-full sm:w-1/3 h-64 mb-32  mt-48 flex flex-col sm:mt-32 xl:mt-20">
            <div  class=" flex justify-center items-center">
              <img class="w-48 sm:w-32 lg:w-2/12 rounded-full absolute z-30" src="/src/assets/images/yoga/images/place3.png" alt="">
              <img class="w-full sm:w-56 lg:w-1/4 rounded-full absolute  z-10" src="/src/assets/images/yoga/images/temp.png" alt="">
                      </div>
                      <div class="flex justify-center text-white flex-col items-center mt-48 sm:mt-32 xl:mt-32 xl:pt-6">
                        <p class="text-2xl font-bold">advanced class</p>
                        <p class="text-lg p-2 ">Lorem ipsum dolor sit    elit.  atque facilis! Reprehenderit iste totam ab minus reiciendis rerum.</p>
                      </div>
          </div>

                      
                    <div class="flex flex-col w-full sm:w-1/3 h-64 mt-48 mb-64 sm:mt-32 xl:mt-20 ">
                      <div  class=" flex justify-center items-center">
                        <img class="w-48 sm:w-32 lg:w-2/12 rounded-full absolute z-30" src="/src/assets/images/yoga/images/place4.png" alt="">
                        <img class="w-full sm:w-56 lg:w-1/4 rounded-full absolute  z-10" src="/src/assets/images/yoga/images/temp.png" alt="">
          
          
                                </div>

                                <div class="flex justify-center text-white flex-col items-center mt-48 sm:mt-32 xl:pt-6">
                                  <p class="text-2xl font-bold">EXperted class</p>
                                  <p class="text-lg p-2">Lorem   sit amet cis    atque facilis! Reprehenderit iste totam ab minus reiciendis rerum.</p>
                                </div>
                    </div>

                    
             
    </div>
         
  </article >


  <article  class="relative xl:h-screen sm:block xl:-mt-64 bggg ">
  <br> <br>
    <h1 style="color: #6c9894;" class="text-5xl text-center font-bold">our stats</h1>
  <p style="color: #6c9894;" class="text-center w-1/2 m-auto ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi consequuntur neque commodi ipsum omnis inventore mollitia vitae, sint explicabo fugiat ad! Sunt iusto repellendus officia at fugit? Dolor, accusantium!</p>

  <div class="flex flex-wrap  justify-center sm:justify-around p-2 sm:mt-10">
      <div style="border: 3px solid #6c9894; color: #6c9894;" class="w-48 h-48 items-center  w-sm:w-1/3 flex flex-wrap flex-col  justify-center rounded-full mb-3 mt-10 sm:mt-0 ">
          <p class="font-bold text-3xl">123</p>
          <p>Lorem ipsum dolor sit,</p>
      </div>
      <div style="border: 3px solid #6c9894; color: #6c9894;" class="w-48 h-48 items-center  w-sm:w-1/3 flex flex-wrap flex-col  justify-center rounded-full mb-3 ">
          <p class="font-bold text-3xl">123</p>
          <p>Lorem ipsum dolor sit,</p>
      </div>
      <div style="border: 3px solid #6c9894; color: #6c9894;" class="w-48 h-48 items-center  w-sm:w-1/3 flex flex-wrap flex-col  justify-center rounded-full mb-3 ">
          <p class="font-bold text-3xl">123</p>
          <p>Lorem ipsum dolor sit,</p>
      </div>
  </div>

  <img src="/src/assets/images/yoga/images/temp2.png" class="absolute w-64" style="top: -10px; left: 0;" alt="">
  </article>
    <article style="background-color: #6c9894; "  class="flex h-auto  justify-center flex-wrap">
      <div class="w-full sm:w-1/2 p-5 flex justify-center  xl:items-start flex-col items-center">
        <h1 class="text-white text-4xl  font-bold text-white">best</h1>
        <h1 class="text-5xl  font-bold text-white">instractor</h1>
        <p class="text-white mt-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt repellat nam reiciendis rem ratione aliquam corporis autem, et assumenda mollitia sapiente nulla qui voluptatibus distinctio numquam optio dolorum. Iure!</p>
        <button style="color: #6c9894;" class="text-2xl w-32 bg-white">read more</button>
      </div>
      <div class="w-full sm:w-1/2">
       <img class=" w-full " src="/src/assets/images/yoga/images/place6.png" alt=""> 
      </div>
    </article>
   <article style="color: #6c9894;" class="flex flex-wrap justify-center p-5 mt-10 sm:p-10 ">
    <div class="w-full sm:w-1/2 p-5 flex justify-center md:order-2   xl:items-start flex-col items-center">
      <h1 class="text-4xl  font-bold ">new</h1>
      <h1 class="text-5xl  font-bold ">EXperince</h1>
      <p class=" mt-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt repellat nam reiciendis rem ratione aliquam corporis autem, et assumenda mollitia sapiente nulla qui voluptatibus distinctio numquam optio dolorum. Iure!</p>
      <button style="background-color: #6c9894;" class="text-2xl w-32 text-white">read more</button>
    </div>
    <div  class="w-full order-1 sm:w-1/2">
      <img class=" w-full " src="/src/assets/images/yoga/images/place7.png" alt=""> 
     </div>
   </article>


   <article style="background-color: #6c9894;">
  <p  class="text-4xl text-center text-white">pricing</p>
  <p class="text-center text-white text-2xl p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam necessitatibus quae odio error ipsam consequuntur quam harums facere hic. Alias.</p>
  <div class="flex flex-col  sm:flex-row p-2 sm:justify-around ">
  <div style="background-color: white; color: #6c9894;" class="flex w-full sm:w-1/3 p-10 sm:p-5 flex-col items-center justify-center mb-10 sm:m-0">
     <h1 class="text-2xl font-bold uppercase">new pie class</h1>
     <p class="text-2xl font-bold">$00.00</p>
     <div><img src="/src/assets/images/yoga/images/logo2.png" alt=""></div>
     <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus culpa con</p>
      <button class="w-full py-2 mt-5 uppercase" style="background-color: #6c9894; color: white;">rejster now</button>
  </div>
  <div style="background-color: white; color: #6c9894;" class="flex w-full sm:w-1/3 p-10 sm:p-5 flex-col items-center justify-center sm:mx-2  sm:m-0 mb-10">
     <h1 class="text-2xl  font-bold uppercase">advance class</h1>
     <p class="text-2xl font-bold">$00.00</p>
     
     <div><img src="/src/assets/images/yoga/images/logo2.png" alt=""></div>
     <p class="text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lacon</p>
      <button class="w-full py-2 mt-5 uppercase" style="background-color: #6c9894; color: white;">rejster now</button>
  </div>
  <div style="background-color: white; color: #6c9894;" class="flex  w-full sm:w-1/3 mb-10 sm:p-5 p-10 flex-col  sm:m-0 items-center justify-center">
     <h1 class="text-2xl font-bold uppercase">expert class</h1>
     <p class="text-2xl font-bold">$00.00</p>
     
     <div><img src="/src/assets/images/yoga/images/logo2.png" alt=""></div>
     <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus culpa con</p>
      <button class="w-full py-2 mt-5 uppercase" style="background-color: #6c9894; color: white;">rejster now</button>
  </div>
  </div>
   </article>

   <article  style="background: url('/src/assets/images/yoga/images/place9.png') no-repeat  ; background-size: cover; background-position: center; color: #6c9894;" class="text-center relative h-auto xl:h-screen flex flex-col items-center justify-center">
     <div class="relative flex justify-center items-center w-full mt-32 mb-32 ">
       <img  class="absolute w-56  "  src="/src/assets/images/yoga/images/temp.png" alt="">
       <img  class="absolute rounded-full w-32" src="/src/assets/images/yoga/images/place8.png" alt="">
     </div>
     <div><p class="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus distinctio </p></div>
     <div class="font-bold text-3xl uppercase ">traner devandera</div>
   </article>
 <article style="background-color: #6c9894;" class="sm:text-center py-20">
   <h1 class="text-2xl mb-5 text-center text-white font-bold">DONT MISS OUR UPDATE</h1>
   <p class="text-xl text-center text-white lg:p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam adipisci, culpa facilis, a accusantium velit necessitatibus, odit consequuntur provident autem architecto asperiores tempora nulla voluptatum molestias sequi nesciunt atque.</p>

    <input id="" type="text" name="" class="w-11/12 lg:w-1/2 m-auto mt-10 ml-2  mt-2 p-2 rounded-lg lg:rounded-l-lg" placeholder="Your mail"><span  style="color: #6c9894;" class="bg-white w-32 m-auto block lg:inline-block mt-5 p-2 text-center rounded-lg cursor-pointer l:rounded-r-lg">subscribe</span>

 </article>

<article style="color: #6c9894;" class="flex flex-wrap sm:flex-no-wrap p-4 sm:p-10">
<div class="sm:w-1/3">
  <h1 style="" class="font-bold text-3xl">Title here</h1>
  <p class="w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, perferendis fugit qui pariatur iure eaque voluptates, consequatur exercitationem iste dicta magnam possimus eius nihil amet sed illum doloremque. Voluptas, quisquam!</p>
</div>

<div class="flex-grow sm:ml-10 capitalize mt-10 sm:mt-0 w-1/3 sm:w-auto">
  <h1 class="font-bold sm:text-3xl ">about</h1>
  <ul  class="sm:text-xl">
    <li>history</li>
    <li>our team</li>
    <li>brand guid lines</li>
    <li>terms & condtion</li>
    <li>privacy policy</li>
  </ul>
</div>

<div class="flex-grow capitalize mt-10 sm:mt-0 w-1/3 sm:w-auto">
  <h1 class="font-bold sm:text-3xl">services</h1>
  <ul class="sm:text-xl">
    <li>how to order</li>
    <li>our products</li>
    <li>order status</li>
    <li>promo</li>
    <li>payment methods</li>
  </ul>
</div>

<div class="flex-grow mt-10 sm:mt-0 capitalize">
  <h1 class="font-bold sm:text-3xl">about</h1>
  <ul  class="sm:text-xl">
    <li>facebook</li>
    <li>twitter</li>
    <li>instgram</li>
    <li>whatsapp</li>
  </ul>
</div>
</article>

   </div>


</template>

<script>
export default {
    
    data(){
        return{
            classhidden : true
        }
    } , 
    methods : {
        toglemenu(){
            this.classhidden = !this.classhidden
        }
    }
}
</script>

<style scoped>
  .bggg {
       background:url('/src/assets/images/yoga/images/place5.png') no-repeat ;
  background-size:cover ; background-position: center;
  }

</style>