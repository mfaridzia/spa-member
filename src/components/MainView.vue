<template>
  <div class="mainview">
    <div v-if="singleView">
      <h1> {{ active_member.name }} </h1>
      <Member :member="active_member"/>
      
      <!-- untuk edit data -->
      <input type="text" placeholder="name" v-model="active_member.name"> <br/>
      <input type="text" placeholder="point" v-model="active_member.point"> <br/>
      <input type="text" placeholder="image" v-model="active_member.img">
    
    </div>
    <div v-else>
      <h1> Member App </h1>
      <Member v-for="member in members" :key="member.id" :member="member"/>

      <h3 v-if="members.length === 0"> Tidak AdA Member </h3>
    </div>
  </div>
</template>

<script>
import Member from '@/components/Member'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'active_member',
      'members',
      'singleView'
    ])
  },
  components: {
    Member
  }
}
</script>

<style scoped>
.mainview {
  flex: 3;
}
</style>
