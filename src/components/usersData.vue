<template>
  <div>
    <h3>Hello All Welcome 😊 </h3>
    <div class="users">
      <div v-for="user in allUsers" :key="user.id" class="eachuser"> Coolie ID :{{ user.id }}
        <strong>Name : {{ user.name }}</strong>
      </div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "usersData",
  data(){
    return {
      rows: 100,
        perPage: 1,
        currentPage: 5
    }
  },
  computed: {
    ...mapGetters(['allUsers']),
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