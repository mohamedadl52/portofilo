<template>

    <div class="duration-1000 transition-all flex justify-center items-center flex-col  w-1/2 h-64 mt-10 mx-auto relative carsoul">
        <div class=" flex justify-center text-center mx-auto h-5/6 ">
              <img  :src="imageselect.img" alt="">
               </div>
            <div class="mt-10 font-bold text-xl text-center">
                <p>{{ imageselect.description }}</p>
            </div>
            
            <div class="btns">
                     <div class="absolute left-2 ">
                <button @click="prev(imageselect)" class="p-2 bg-red-500 text-white "> prev</button>
                     </div>
                     <div class="absolute right-2 ">
                <button  @click="next(imageselect)" class="p-2 bg-red-500 text-white "> next</button>
                     </div>
            </div>
        </div>
    
    </template>
    
    <script>
     export default {
        data: function () {
            return {
                counters: this.$props.counter,
                imageslider: [{ id: 0, img: "/src/assets/images/2.png", description: "image one" }, 
                { id: 1, img: "/src/assets/images/bg.jpg", description: "image tow" },
                { id: 2, img: "/src/assets/images/key7.jpg", description: "image three" }
            ],
                imageselect: { id: 0, img: "/src/assets/images/2.png", description: "image one" }
            };
        },
        methods: {
            next(payload) {
                if (payload.id + 1 > this.imageslider.length - 1) {
                    this.imageselect = this.imageslider[0];
                }
                else {
                    this.imageselect = this.imageslider[payload.id + 1];
                }
            },
            prev(payload) {
                console.log(this.imageslider.length - 1);
                if (payload.id - 1 < 0) {
                    this.imageselect = this.imageslider[this.imageslider.length - 1];
                }
                else {
                    this.imageselect = this.imageslider[payload.id - 1];
                }
            }
        },
        created(){
            setInterval(() => {
           this.next(this.imageselect)
            }, 5000);

            
        } , 
        props: {
            counter: Number
        },
    }
    </script>
    
    
    <style scoped>
    .carsoul {
        @apply  mx-auto items-center flex-col 
    }
    </style>