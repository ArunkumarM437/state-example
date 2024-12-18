<template>
  <div>
    <h3>Hello All Welcome 😊 </h3>
    <div class="users">
      <div v-for="user in allUsers" :key="user.id" class="eachuser"> Coolie ID :{{ user.id }}
        <strong>Name : {{ user.name }}</strong>
      </div>
      <div class="overflow-auto">
        <b-pagination v-model="currentPage" pills :total-rows="rows" align="center"></b-pagination> 
        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </div>
      <!-- <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" first-number ></b-pagination> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "usersData",
  data(){
    return {
      rows: 2,
      perPage: 2,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters(['allUsers'],['owner']),
  },
};
</script>

<style scoped>
.users {
  display: center;
  flex-wrap: wrap;
  margin: 10px;
}

.eachuser {
  background-color: #f5f5f5;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
}
</style>