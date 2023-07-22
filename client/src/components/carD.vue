<template>
     <div class="w-64  relative">
    <img src="src/assets/images/bg.jpg" class="w-full h-48" alt="">
    <div class="w-full bgwork2 flex justify-center  items-center h-48 absolute top-0 left-0 " >  
      <div class="absolute  iconspage top-1/2 left-1/3">
      <a href="#jbdv">
        <font-awesome-icon
                  class="
                    text-white
                    bg-maincolor
                    p-2
                    rounded-full
                    hover:text-gray-600
                    transition-all
                    duration-500
                    text-xl
                    mx-2
                    cursor-pointer
                  "
                  :icon="['fas', 'user-plus']"
                />
      </a>
                <font-awesome-icon
                  class="
                  text-white
                    bg-maincolor
                    p-2
                    rounded-full
                    hover:text-gray-600
                    transition-all
                    duration-500
                    text-xl
                    mx-2
                    cursor-pointer
                  "
                  :icon="['fas', 'user-plus']"
                />
    </div>
    </div>
     <div>
      <p   class="text-xl font-bold text-seconcolor ">{{ name }}</p>
      <p><span class="text-maincolor text-lg font-bold">${{price}} </span><i class="text line-through ml-4">$500</i></p>
       <p> 
        <font-awesome-icon
                  class="
                    text-yellow-500
                    rounded-full
                    transition-all
                    duration-500
                    text-xl
                    cursor-pointer
                  "
                  :icon="['fas', 'star']"
                /> 
              
                <font-awesome-icon
                  class="
                    text-yellow-500
                    rounded-full
                    transition-all
                    duration-500
                    text-xl
                    cursor-pointer
                  "
                  :icon="['fas', 'star']"
                />
                <font-awesome-icon
                  class="
                    text-yellow-500
                    rounded-full
                    transition-all
                    duration-500
                    text-xl
                    cursor-pointer
                  "
                  :icon="['fas', 'star']"
                />
                <font-awesome-icon
                  class="
                    text-yellow-500
                    rounded-full
                    transition-all
                    duration-500
                    text-xl
                    cursor-pointer
                  "
                  :icon="['fas', 'star']"
                />
                <font-awesome-icon
                  class="
                    text-yellow-500
                    rounded-full
                    transition-all
                    duration-500
                    text-xl
                    cursor-pointer
                  "
                  :icon="['fas', 'star']"
                />
              
          <span class="text-lg ml-2 text-seconcolor ">(150)</span>
              </p> 
              <p class="text-white bg-maincolor p-2 text-center font-bold px-4">Add to cart</p>
        
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name : {
          type :String , 
          default : ''
        }, 
        price : {
          type : Number , 
          default : null
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
.bgwork2:hover {
  background: rgba(0, 0, 0, 0.8);
  cursor :pointer
}
.bgwork2:hover  .iconspage{
  display: block;
}


</style>