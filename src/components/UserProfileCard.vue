<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image" class="card-img" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{user.name}}</h5>
          <p class="card-text">{{user.email}}</p>
          <li>{{userCommentAll.length}} 已評論餐廳</li>
          <li>{{userFavRests.length}} 收藏的餐廳</li>
          <li>{{userFollowing.length}} followings</li>
          <li>{{userFollower.length}} followes</li>
          <button v-if="user.id === currentUser.id" type="button" class="btn btn-primary mt-3">Edit</button>
          <button
            v-else-if="userIsFollow === false"
            type="button"
            class="btn btn-primary mt-3"
            @click.stop.prevent="addFollow"
          >追蹤</button>
          <button
            v-else
            type="button"
            class="btn btn-primary mt-3"
            @click.stop.prevent="deleteFollow"
          >取消追蹤</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    },
    initialCommentAll: {
      type: Array,
      required: true
    },
    initialFavRests: {
      type: Array,
      required: true
    },
    initialFollowing: {
      type: Array,
      required: true
    },
    initialFollower: {
      type: Array,
      required: true
    },
    initialIsFollow: {
      type: Boolean,
      required: true
    },
    initialCurrentUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser,
      userCommentAll: this.initialCommentAll,
      userFavRests: this.initialFavRests,
      userFollowing: this.initialFollowing,
      userFollower: this.initialFollower,
      userIsFollow: this.initialIsFollow,
      currentUser: this.initialUser
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