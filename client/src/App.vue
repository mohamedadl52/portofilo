<script setup>
import NavBar from './components/NavBar.vue';

</script>

<template>
 <div>
  <NavBar />

<router-view  v-slot="slotProps">
  <transition name="route" mode="out-in">
    <component :is="slotProps.Component"></component>
  </transition>
</router-view>
 </div>
</template>

<script>

const DEFAULT_TRANSITION = 'fade'
export default {
  data(){
  return  {
    prevHeight  :   0,
    transitionName :DEFAULT_TRANSITION
  }
  } , 
  methods : {
    beforleave(element){
          this.prevHeight = getComputedStyle(element).height
    },
    enter(element){
          const {height} = getComputedStyle(element)
          element.style.height  =  this.prevHeight
          setTimeout(() => {
             element.style.height  = height 
          });
    } , 
    afterEnter (element){
    element.style.height  =   'auto'
    }
  } ,
  created(){
    this.$router.beforeEach((to, from ,next)=>{
      let transitionName =  to.meta.transitionName || from.meta.transitionName

      if(transitionName === 'slide'){
        const toDepth = to.path.split('/').length ;
        const fromDepth = from.path.split('/').length
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left' ;
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION 
      next()

    })
  }
}
</script>
<style scoped>
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.route-leave-active,
.route-enter-active {
  transition: all 0.4s ease;
}


</style>