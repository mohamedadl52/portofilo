<template>
    <div class="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
	<div :class="message == 'User was registered successfully!' ? 'opacity-25' : '' " class="relative   py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold"> sign up</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input v-model="user.email" autocomplete="off"  name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">email</label>
						</div>
						<div class="relative">
							<input  v-model="user.username" name="username" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="اسم المستخدم" />
							<label  for="username" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">username</label>
						</div>
						<div class="relative">
							<input v-model="user.password"  autocomplete="off"  name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">password</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1" @click="handleRegister(user)" >تسجيل</button>
						</div>
					</div>
					<div
        v-if="message"
        class="alert"
        :class="successful ? 'text-green-500' : 'text-red-500'"
      >
        {{ message }}
      </div>
				</div>
			</div>
		</div>
  
	</div>
  <div v-if="message == 'User was registered successfully!'" class="absolute h-64 w-1/3 p-4   rounded-md top-1/3 left-1/3 container  bg-white shadow-xl">
        <div class="text-maincolor text-3xl font-bold">
            {{ message }}
        </div>


        <div class="mt-10 p-4">
           <router-link to="/login">
            <button class="bg-blue-500  mx-2 text-white text-lg p-4 ">
               go to login 
            </button>
           </router-link>
            <router-link to="/">
              <button class="bg-green-500 text-lg p-4 text-white ">
               go to main page 
            </button>
            </router-link>
        </div>




    </div>
</div>
</template>
<script>
export default {
	
  data() {
  
    return {
      successful: false,
      loading: false,
      message: "" , 
	  user : {
		username :  null , 
		password :  null , 
		email :  null 
	  }
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<style scoped>

</style>
