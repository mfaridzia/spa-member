<template>
  <div class="member">
    <div>
      <h4> {{ member.name }} - {{ member.point }} </h4>
      <img :src="'/static/images/' + member.img" :alt="member.name" width="200">
    </div>
  </div>
</template>

<script>
export default {
  props: ['member']
}
</script>

<style scoped>
.sidebar img {
  width: 100px;
}
</style>
