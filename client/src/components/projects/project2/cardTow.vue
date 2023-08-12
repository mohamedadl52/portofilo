<template>
   
    <div  class="mt-10 bg-seconcolor p-10">
    
          <div class="container relative mx-auto gap-5 flex flex-wrap justify-around items-center">
    <div style="--i:0" class="box">
        <i></i>  
    <div class="content">
        <img src="/src/assets/images/bg.jpg" alt="">
        <p>mohamed adel</p>
        <p>awasome ui/ux desgin </p>
        <a href="/">hair me</a>
    </div></div>
    <div style="--i:1" class="box">
        <i></i>  
    <div class="content">
        <img src="/src/assets/images/bg.jpg" alt="">
        <p>mohamed adel</p>
        <p>awasome ui/ux desgin </p>
        <a href="/">hair me</a>
    </div></div>
    <div style="--i:2" class="box">
    <i></i>  
    <div class="content">
        <img src="/src/assets/images/bg.jpg" alt="">
        <p>mohamed adel</p>
        <p>awasome ui/ux desgin </p>
        <a href="/">hair me</a>
    </div>
    </div >
          </div>
    </div>
    </template> 
    
    
    <style scoped>
     .box {
        width: 400px;
        height: 300px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.5);
    
    
     }
     .box .content {
        position: absolute;
        background-color: #0d122c;
        display: flex;
    
        justify-content: center;
        align-items: center;
        background-size: cover ; 
        flex-direction: column;
        overflow: hidden;
        z-index: 3;
        inset: 10px;
    
        
     } 
     .box .content p {
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     }
     .box .content p:nth-of-type(1) {
        color:lightslategray 
     }
     .box .content a {
        background: #fff;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        padding: 14px;
        color: #0d122c;
        border-radius: 20px;
        margin-top: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: .2s;
     }
     .box .content a:hover {
        letter-spacing: 2px;
     }
     .box .content img  {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        left: 0px;
        top:0px;
        transition: 0.5s ;
        pointer-events: none;
        z-index: 2;
     }
     .box:hover .content img {
    
        opacity: 0;
     }
    
    
     .box::before ,  .box::after {
         content :  '';
         position: absolute;
         background:linear-gradient(315deg ,  #00efef , #d40041);
         inset: -100px 100px;
         transition: 0.5s;
         filter: hue-rotate(calc(var(--i) * 120deg));
         animation: animate 6s linear infinite;
        }
     @keyframes animate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
     }
     .box:hover::after ,.box:hover::before  {
      animation-play-state: paused;
     }
      .box i {
        position: absolute;
        inset: 3px;
        background: #1f2937;
        z-index: 1;
         
      }
    </style>