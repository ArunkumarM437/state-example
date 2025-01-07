<template>
  <div>
    <h3 v-for="owner in ownerDetail" :key="owner.id">Hello {{ owner.name }} Welcome 😊 : {{ owner.role }}</h3>
    <div v-if="projectLoad" class="text-center">
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
        <!-- <button type="button" class="btn btn-light">Light</button> -->
        <button type="button" class="btn btn-light" v-if="projectLoad" @click="this.projectLoad=false">Stop</button>
    </div>
    <div class="col-sm-auto d-flex align-items-center">
  <form @submit.prevent class="d-flex align-items-center">
    <input 
      id="" 
      type="text" 
      class="form-control bg-gray w-100 h-100" 
      placeholder="Search Users" 
      v-model="searchStr">
  </form>
</div>

    <div class="users">
      <div v-for="user in paginatedItems" :key="user.id" class="eachuser"> Coolie ID :{{ user.id }}
        <strong>Name : {{ user.name }}</strong>
      </div>
      <div class="norecords" v-if="paginatedItems.length===0">
        <div>
          <p>No Records Found.</p>
        </div>
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
import { toRaw } from 'vue';
export default {
  name: "usersData",
  data(){
    return {
      perPage: 2,
      currentPage: 1,
      projectLoad:false,
      ownerDetail : [],
      searchStr : '',
    }
  },
  beforeCreate(){
    console.log(this.ownerOfProj)
    console.log("This Owner Is Who",this.owner)
  },
  created(){
    this.projectLoad = true
    this.ownerDetail = toRaw(this.ownerOfProj)
    this.getOwner()
    console.log("Owner Raw Data",this.ownerDetail)
    console.log("This Owner Is Who",this.owner)
    console.log("All Users:",this.allUsers)
  },
  computed: {
    // Use mapGetters to map Vuex getters
    ...mapGetters(['allUsers', 'ownerOfProj']),
    
    totalItems() {
        // Compute total number of items
        return this.filteredHistory.length;
    },
    filteredHistory(){
      const finalFiltered = this.allUsers.filter(filtHist =>
        filtHist.name.toLowerCase().includes(this.searchStr.toLowerCase()) 
      );
      return finalFiltered
    },
    paginatedItems() {
        // Compute paginated items
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;

        // Optional: Handle edge cases (e.g., empty array)
        if (this.allUsers && this.allUsers.length > 0) {
            // Uncomment and use projectLoad logic if needed
            // this.projectLoad = false;
            return this.filteredHistory.slice(start, end);
        }
        return [];
    }
},
methods:{
  getOwner(){
    console.log("This Owner From Methods:",this.ownerOfProj)
  },
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