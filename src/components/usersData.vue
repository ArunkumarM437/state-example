<template>
  <div>
    <h3>Hello {{ ownerDetail.name }} Welcome 😊 </h3>
    <div v-if="projectLoad" class="text-center">
      <b-button variant="primary" disabled>
      <b-spinner small type="grow"></b-spinner>
      Loading...
    </b-button>
        <!-- <button type="button" class="btn btn-light">Light</button> -->
        <button type="button" class="btn btn-light" v-if="projectLoad" @click="this.projectLoad=false">Stop</button>
    </div>
    <div class="users">
      <div v-for="user in paginatedItems" :key="user.id" class="eachuser"> Coolie ID :{{ user.id }}
        <strong>Name : {{ user.name }}</strong>
      </div>
      <div class="overflow-auto">
        <h6 class="mt-3" >Page No</h6>
        <b-pagination v-model="currentPage" pills :total-rows="totalItems" :per-page="perPage" align="center"></b-pagination> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "usersData",
  data(){
    return {
      perPage: 2,
      currentPage: 1,
      projectLoad:false,
      ownerDetail : [],
    }
  },
  created(){
    this.projectLoad = true
    this.ownerDetail = this.ownerOfProj
    console.log(this.ownerOfProj)
    console.log("This Owner Is Who",this.owner)
    console.log("All Users:",this.a)
  },
  computed: {
    ...mapGetters(['allUsers']),
    ...mapGetters(['ownerOfProj']),
    totalItems(){
      return this.allUsers.length
    },
    paginatedItems(){
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      // if(this.allUsers.length>0){
      //   this.projectLoad = false;
      // }
      return this.allUsers.slice(start,end);
    }
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