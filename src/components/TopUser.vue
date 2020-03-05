<template>
  <!-- users -->
  <div class="col-3">
    <a href="#">
      <img src="http://via.placeholder.com/300x300?text=No+Image" width="140px" height="140px" />
    </a>
    <h2>{{users.name}}</h2>
    <span class="badge badge-secondary">追蹤人數：{{users.FollowerCount}}</span>
    <p class="mt-3">
      <button
        v-if="users.isFollowed"
        type="button"
        class="btn btn-danger"
        @click.stop.prevent="deleteFollow"
      >取消追蹤</button>
      <button v-else type="button" class="btn btn-primary" @click.stop.prevent="addFollow">追蹤</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    initialUsers: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      users: this.initialUsers
    };
  },
  methods: {
    addFollow() {
      this.users = {
        ...this.users,
        isFollowed: true
      };
    },
    deleteFollow() {
      this.users = {
        ...this.users,
        isFollowed: false
      };
    }
  }
};
</script>