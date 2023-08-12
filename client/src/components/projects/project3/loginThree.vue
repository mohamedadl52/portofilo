<template>
    <div>
        <div class="animation3 ">
                    <section class="relative top-0 flex min-h-screen items-center justify-center">
                      <div class="color "></div>
                      <div class="color"></div>
                      <div class="color"></div>
                      <div class="box relative ">
                        <div class="squre" style="--i :0;"></div>
                        <div class="squre" style="--i :1;"></div>
                        <div class="squre" style="--i :2;"></div>
                        <div class="squre" style="--i :3;"></div>
                        <div class="squre" style="--i :4;"></div>
                             <div class="form px-10">
                                <form action="" >
                                <h2>Login page</h2>
                                     <div class="inputBox">
                                         <input placeholder="username" type="text" >
                                     </div>
                                     <div class="inputBox">
                                         <input placeholder="password" type="password" >
                                     </div>
                                     <div class="inputBox">
                                         <input type="submit"  class="font-semibold cursor-pointer" value="login In" >
                                     </div>
                                     <p class="text-gray-100 lg:text-gray-800">forget password ? Click <a href="#" class="text-blue-500">here</a></p>
                                     <p class="text-gray-100 lg:text-gray-800">Dont have Account ? Click <a href="#" class="text-blue-500">here</a></p>
                                </form>
                             </div>
                      </div>
                    </section>
                
            
            </div>
    </div>
</template>



<style lang="scss" scoped>

.animation3{
     
     section {
       background: linear-gradient(to bottom , #f1f4f9 , #dff1ff) ;
       .color {
         @apply absolute  ;
         filter:  blur(150px);
        
        &:nth-child(1){
          top:-350px ;
           width : 600px ;
           height : 600px ;
           background: #0a0206; 
         } 
   
           &:nth-child(2){
          left:100px ;
          bottom: -150px ; 
           width : 500px ;
           height : 500px ;
           background: #0f0f0a; 
         } 
        &:nth-child(3){
          right:50px ;
          bottom:50px ;
           width : 300px ;
           height : 300px ;
           background: #02151a; 
         }
       
       }
       .box .squre {
          @apply absolute    rounded-2xl;
         background: rgba(255, 255, 255, 0.1);
           backdrop-filter: blur(15px);
           box-shadow: 0px 25px 45px  rgba(0, 0, 0, 0.1) ;
         border: 1px solid rgba(255, 255, 255, 0.5) ;
         border-right: 1px solid rgba(255, 255, 255, 0.2) ;
         border-bottom: 1px solid rgba(255, 255, 255, 0.2) ;
         animation : animate 5s linear infinite;
         animation-delay: calc(-1s * var(--i) );
         &:nth-child(1){
           @apply w-20 h-20 -top-11 right-14 lg:-right-14
         }
         &:nth-child(2){
           @apply w-24 h-24 top-24 -left-24
         }
         &:nth-child(3){
           @apply w-24 h-24 bottom-11 -right-14
         }
         &:nth-child(4){
           @apply w-20 h-20 -top-12 left-8
         }
   
       }
   
   @keyframes animate {
       0% , 100% {
     transform: translateY(40px)
       }
       50% {
         transform: translateY(0px)
   
       }
   }
       .box .form {
         @apply flex justify-center items-center rounded-3xl border  ;
         backdrop-filter: blur(4px);
         width: 400px;
         min-height: 400px;
           box-shadow: 0px 25px 45px  rgba(0, 0, 0, 0.1) ;
         border: 1px solid rgba(255, 255, 255, 0.5) ;
         border-right: 1px solid rgba(255, 255, 255, 0.2) ;
         border-bottom: 1px solid rgba(255, 255, 255, 0.2) ;
         background: rgba(255, 255, 255, 0.1);
       form{
       @apply w-full h-full relative p-10 ; 
       h2 {
         @apply text-white relative text-2xl  font-semibold tracking-wider mb-10 ;
         &::before {
           width: 80px ;
           height : 4px ;
           content : "";
           position : absolute ;
           bottom : -10px ;
           left : 0px ;
           background: white; 
   
           
         }
       }
       
       .inputBox {
   @apply w-full mb-5 ;
   input {
        @apply w-full border-none outline-none rounded-3xl px-5 py-2 ;
        background-color: rgba(255, 255, 255, 0.5);
        
         border: 1px solid rgba(255, 255, 255, 0.5) ;
         border-right: 1px solid rgba(255, 255, 255, 0.2) ;
         border-bottom: 1px solid rgba(255, 255, 255, 0.2) ;
        
       }
   
       }
       }
       } 
       
       
   
     }
   }
   
</style>