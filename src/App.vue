<template>
    <div id="app">
    </div>
</template>

<script>
import { fireStoreCore } from "./configs/firebase";
export default {
  components: {},
  data() {
    return {
      arr: []
    };
  }
  ,
  created() {
  },
  beforeupdated(){
  },
  mounted() {
    this.getTransaction();
  },
  methods: {
    async getTransaction(){
      const response = await fireStoreCore.collection('transactions').get();
      console.log(response.docs);
      this.arr = response.docs.map(doc => {
        return {...doc.data(),id: doc.id};
      })
      console.log(this.arr);
    }
  },
  watch: {
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>
