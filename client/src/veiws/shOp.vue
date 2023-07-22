<template>
  <div class="mt-20 lg:mt-0 bg-gray-700 ">
      <div>
         <h1  style=" background: linear-gradient(188deg, #0b6083, transparent);" class="text-2xl p-2 px-4 bg-teal-400 text-white text-right">ما نستطيع فعله</h1>
      </div>
      <div>
        <ul class="text-right px-4 lg:px-10">
          <li class="text-blue-200 text-xl fade-item mt-5" v-for="item in requireMent " :key="item">
            <span>
              {{ item }}
            </span>

          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default   { 
  data(){
    return  {
      requireMent :  [

   
       'تصميم موقع متجاوب مع كل الشاشات' ,
       'اصلاح الاعطال بالاكواد' ,
       'تطوير وبرمجه كل الافكار بشكل ممتاز' ,
       'العمل بروح التيم والفريق' ,
       'العمل بكل التقنيات بأحترافية ' ,
    
      ]

    }
  } , methods :{
    
    faded(){
      var items = document.getElementsByClassName("fade-item");
      console.log(items)
      function fadeIn (item, delay) {
        console.log(item)
        setTimeout(() => {
          item.classList.add('fadein')
        }, delay)
      }
      console.log(items)
      for (let i = 0; i < items.length; ++i) {
        console.log('test')
        fadeIn(items[i], i * 1000)
      }
    }
  } , 
  created(){
    this.faded()
  }
  
}
</script>