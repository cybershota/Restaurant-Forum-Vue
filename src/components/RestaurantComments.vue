<template>
  <div>
    <div v-for="comment in restaurantComments" :key="comment.id">
      <h2 class="my-4">所有評論：</h2>

      <div>
        <blockquote class="blockquote mb-0">
          <button
            type="button"
            class="btn btn-danger float-right"
            @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          >Delete</button>
          <h3>
            <a href="#">{{comment.User.name}}</a>
          </h3>
          <p>{{comment.text}}</p>
          <footer class="blockquote-footer">{{comment.createdAt | fromNow}}</footer>
        </blockquote>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    }
  },
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      console.log("handleDeleteButtonClick", commentId);
      this.$emit("after-delete-comment", commentId);
    }
  }
};
</script>