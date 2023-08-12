<template>
    <div>
  
        <!-- start animation 1 -->
      <div class="animation1">
        <div class="loader">
          <div class="dot" style="--i: 1"></div>
          <div class="dot" style="--i: 2"></div>
          <div class="dot" style="--i: 3"></div>
          <div class="dot" style="--i: 4"></div>
          <div class="dot" style="--i: 5"></div>
          <div class="dot" style="--i: 6"></div>
          <div class="dot" style="--i: 7"></div>
        </div>
        <div class="text-white font-serif my-2  text-xl " style="letter-spacing : 5px ; color : #00ff0a">
            loading .....
        </div>
            <div class="loader">
          <div class="dot" style="--i: 1"></div>
          <div class="dot" style="--i: 2"></div>
          <div class="dot" style="--i: 3"></div>
          <div class="dot" style="--i: 4"></div>
          <div class="dot" style="--i: 5"></div>
          <div class="dot" style="--i: 6"></div>
          <div class="dot" style="--i: 7"></div>
        </div>
      </div>
        <!-- end animation 1 -->
  
  
  
        <!-- start animation 2 -->
            
              <div class="animation2">
                
                <span :key="item" v-for="item in 650">
                   
                </span>
  
              
              </div>
  
        <!-- end animation 2 -->
        <!-- start animation 3 -->
            
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
  
        <!-- end animation 3 -->
  
        <!-- start animation 4 -->
    <div  class="animation4">
         
    </div>
  
        <!-- end animation 4 -->
      
    </div>
  </template>
  
  <style lang="scss" scoped>
  
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0
  }
  
  .animation1 {
      @apply w-full flex flex-col relative justify-center h-screen items-center h-screen  ;
      background-color : #001300 ;
      animation : changecolor 5s linear infinite ;
      .loader{
      &:last-child .dot {
          
        animation-delay : calc(-0.1s * var(--i))
      }
      }
  }
  @keyframes changecolor {
      0%{
     filter: hue-rotate(0deg)
      }
      100%{
          
          filter: hue-rotate(360deg)
      }
  }
  .loader {
  
        @apply flex  relative;
   
   
  
  }
  .dot {
        @apply block relative rounded-full w-4 mx-2 transform hover:scale-100 transition transition-all  h-4 ;
        background-color : #00ff0a ;
        transform : scale(.1) ;
      //   transition: all 1s;
       box-shadow : 0 0 10px #00ff0a ,
        0 0 20px #00ff0a , 
        0 0 30px #00ff0a , 
        0 0 40px #00ff0a , 
        0 0 50px #00ff0a , 
       0 0 80px #00ff0a ;
        animation: first 2s infinite linear ;
        animation-delay : calc(0.1s * var(--i))
          }
  @keyframes first {
      0%{
        transform: scale(.1);
      } 
    10%{
   
        transform: scale(1);
      }
     50% , 100%{
  
          transform: scale(.1);
      }
  }
  
  
  
  // end animation1
  
  
  .animation2 {
    @apply w-full z-20 relative  h-screen flex flex-wrap overflow-hidden justify-center items-center  ;
    background-color : #000 ;
      
    span {
        @apply relative block w-10 h-10 bg-black ;
  
        &::before{
            content : '' ; 
            @apply rounded-full  absolute left-0 top-0 ;
            width :200%;
            height :200%;
            box-shadow : 0 0 10px #00ff0a , 0 0 20px #00ff0a , 0 0 30px #00ff0a ;
            z-index: 200;
            transform : scale(0) ;
            transition : 2s ;
            background-color : #00ff0a ;
                  animation : animatecolor 5s linear infinite;
        }
        &:hover::before{
            transform: scale(1);
            transition: 0s;
        }
    }
  }
  
  @keyframes animatecolor {
  
      from {
          filter: hue-rotate(0deg);
      }
      to {
          filter: hue-rotate(360deg);
      }
      
  }
  
  
  //  animation 3
  
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
  
  
  // animation 4
  
  </style> 