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
                
                <span v-for="item in 650" :key="item">
                   
                </span>
  
              
              </div>
  
        <!-- end animation 2 -->
 
  
        <!-- start animation 3 -->
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
  
  

  
  // animation 3
  
  </style> 