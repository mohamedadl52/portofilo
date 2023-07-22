<template>
    <div>
        <div class="w-64 bgwork relative">
    <img src="src/assets/images/bg.jpg" class="w-full" alt="">
    <div class="w-full bgwork flex justify-center items-center h-full absolute top-0 left-0 " >  
      <p class='text-xl  text-white'>{{name}}</p>
    </div>
  </div>
    </div>
</template>

<script>
export default {
    props : {
      name : {
          type :String , 
          default : ''
        }
    }
}
</script>

<style scoped>
.bgwork   {
background: rgba(0, 0, 0, 0.4);
transition: all 0.5s;
}
.bgwork2 , .iconspage {
  transition: all 1s;
}
.iconspage {
  display: none;
}
.bgwork:hover {
  background: rgba(0, 0, 0, 0.8);
  cursor :pointer
}

</style>