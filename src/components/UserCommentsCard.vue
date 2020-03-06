<template>
  <div class="card text-center">
    <div class="card-header">
      <strong>{{userCommentAll.length}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <div
        v-for="comment in userCommentAll"
        :key="comment.id"
        class="d-inline-block mx-1 my-1"
        style="width:70px;height:70px"
      >
        <router-link :to="{name:'restaurant',params:{id:comment.Restaurant.id}}">
          <img :src="comment.Restaurant.image" style="width:100%; height:100%;object-fit: cover" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialCommentAll: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      userCommentAll: this.initialCommentAll
    };
  }
};
</script>