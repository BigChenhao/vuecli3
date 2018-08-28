<template>
  <div class="home">
    count:{{count}}
    <span @click="increment">+5</span>
    <span @click="decrement">-3</span>
    <img alt="Vue logo"
         src="../assets/logo.png" @click="addUsers(1)">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from '@/assets/axios';
import {mapGetters, mapActions, mapState} from 'vuex';

export default {
  name: "home",
  computed: {
    ...mapState(['count'])
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(['increment', 'decrement']),
    getdata() {
      return axios({
        url: '/app/healthService/doctors',
        method: 'get',
        headers: {
          uid: 1,
          token: 2,
        },
        params: {
        },
      }).then(res => {
        alert(res);
      }).catch()
    },
    addUsers(id) {
      this.$store.dispatch("addUsers", { id });
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>
