<template>
  <div class="sidebar">
    <h2> Sidebar </h2>
    <div v-for="member in members" :key="member.id">
      <div @click="showMember(member)">
        <h4> {{ member.name }} - {{ member.point }} </h4>
        <img :src="'/static/images/' + member.img" :alt="member.name" width="200">
      </div>
      <button @click="removeMember(member.id)"> (X) </button>
    </div>
    <div id="actions">
      <a href="#" @click.prevent="showMembers()"> Semua Member </a>
      <a href="#" @click.prevent="addMember()"> Tambah Member </a>
    </div>
  </div>
</template>

<script>
//import Member from '@/components/Member'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'members'
    ])
  },
  methods: {
    ...mapActions([
      'showMember',
      'showMembers',
      'addMember',
      'removeMember'
    ])
  }
}
</script>

<style scoped>
.sidebar {
  flex: 1;
}
.sidebar img {
  width: 150px;
}
.sidebar a {
  display: block;
}
</style>
