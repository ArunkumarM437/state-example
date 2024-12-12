<template>
  <div>
    <h3>Hello All Welcome Again</h3>
    <div class="users">
      <div v-for="user in allUsers" :key="user.id" class="eachuser">{{ user.name }}</div>
    </div>
  </div>
</template>

<script> 

import { mapGetters } from 'vuex';

export default {
  name:"usersData",
  computed : mapGetters(...['allUsers '])
}
</script>
 
<style>

</style>