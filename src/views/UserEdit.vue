<template>
  <div class="container py-5">
    <EditUser :initial-user="user" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};

import EditUser from "../components/EditUser";

export default {
  components: {
    EditUser
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: ""
      }
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  methods: {
    fetchUser(userId) {
      console.log("fetchUser:", userId);

      this.user = {
        id: dummyUser.currentUser.id,
        name: dummyUser.currentUser.name,
        image: dummyUser.currentUser.image
      };
    },
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  }
};
</script>