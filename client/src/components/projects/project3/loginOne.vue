<template >
    <div class=" bg-seconcolor p-10">

<div class="container bg-seconcolor py-20 relative mx-auto gap-5 flex justify-around items-center">
<div
style="box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1) , -15px -15px 35px #0d122c ;
border-radius:10px ;
" class="box">
<i></i>  
<div style="font-family:sans-serif;" class="login text-white">
<p class="font-bold text-3xl ">Hello ,  </p>
<p  class="font-bold text-lg mb-4 ">wellcome back</p>
<div class="relative">
  <input placeholder="username" type="text">
  <font-awesome-icon
       class=" text-gray-800 icon"
       :icon="['fas', 'user']"
     />
</div>
<div class="relative">
  <input placeholder="password" type="text">
  <font-awesome-icon
       class=" text-gray-800 icon"
       :icon="['fas', 'lock']"
     />
</div>
<div>
  <input id="" type="checkbox" name="" style="width :20px">
  <span>keep me login in</span>
</div>
<div>
   <input class="bg-white mt-10 font-bold text-gray-800"  type="submit" value="login">

</div>


</div></div>


</div>
</div>
</template>


<style scoped>
.box {
  width: 400px;
  position: relative;
  padding: 20px;


}
input[type='text'] {
 padding: 10px 20px;
 padding-left: 40px;
 border-radius: 10px;
 margin-bottom:20px ;
 width: 100%;
 outline: none;
 border:none;
 box-shadow: inset 15px 15px 20px rgba(0, 0, 0, 0.1) , inset -15px -15px 20px #fffb ;
}
input[type='submit'] {
 
 padding: 10px 20px;
 border-radius: 10px;
 margin-bottom:20px ;
 width: 100%;
 outline: none;
 border:none;
 
 box-shadow:  2px 2px 10px rgba(0, 0, 0, 0.1) ,  -2px -2px 10px #fffb ;
}
.icon {
 position: absolute;
 left: 10px;
 top: 20%;
}
</style>