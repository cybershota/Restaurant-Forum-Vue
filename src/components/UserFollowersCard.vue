<template>
  <div class="card text-center">
    <div class="card-header">
      <strong>{{userFollower.length}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <div
        v-for="user in userFollower"
        :key="user.id"
        class="d-inline-block mx-1"
        style="width:70px;height:70px"
      >
        <router-link :to="{name:'user-profile',params:{id:user.id}}">
          <img :src="user.image" style="width:100%; height:auto" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialFollowers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      userFollower: this.initialFollowers
    };
  }
};
</script>