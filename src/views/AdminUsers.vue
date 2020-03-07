<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{user.id}}</th>
          <!-- 姓名欄 -->
          <td class="position-relative">
            <div class="user-name">{{user.name}}</div>
          </td>
          <td class="position-relative">
            <div class="user-role">{{adminToString(user.isAdmin)}}</div>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-if="user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleAdmin(user.id)"
            >Set as Admin</button>
            <button
              v-else
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleAdmin(user.id)"
            >Set as User</button>
          </td>
        </tr>
        <!-- <tr>
          <th scope="row">1</th>
          <td>root@example.com</td>
          <td>admin</td>
          <td>
            <button type="button" class="btn btn-link">set as user</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>user1@example.com</td>
          <td>user</td>
          <td>
            <button type="button" class="btn btn-link">set as admin</button>
          </td>
        </tr>-->
      </tbody>
    </table>
  </div>
</template>

<script>
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
      isAdmin: true,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T17:09:40.000Z"
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-05T12:30:53.000Z"
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T16:01:50.000Z"
    },
    {
      id: 62,
      name: "AC",
      email: "ac@ac.com",
      password: "$2a$10$yB01LxQAujWjRQ0WaprYV.t5SDx6kool5Cmrt0F7TRSXGRk.W8z1m",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-29T15:41:09.000Z",
      updatedAt: "2020-02-29T15:41:09.000Z"
    },
    {
      id: 72,
      name: "mohammad akhbarati",
      email: "makhbarati@gmail.com",
      password: "$2a$10$ljaWKqtQwgLA5BdTEhBTHeJK/Ku4ow3IHM4S5OJYmr7.anBAIl7NW",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-29T23:24:32.000Z",
      updatedAt: "2020-02-29T23:24:32.000Z"
    }
  ]
};

// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: "管理者",
//     email: "root@example.com",
//     image: "https://i.pravatar.cc/300",
//     isAdmin: true
//   },
//   isAuthenticated: true
// };

import AdminNav from "../components/AdminNav";
export default {
  components: {
    AdminNav
  },
  data() {
    return {
      users: {
        id: -1,
        name: "",
        email: "",
        isAdmin: null
      }
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users.map(user => ({
        ...user
      }));
    },
    adminToString(isAdmin) {
      if (isAdmin) {
        return "admin";
      }
      return "user";
    },
    toggleAdmin(userId) {
      this.users = this.users.map(user => {
        console.log(userId);
        if (user.id !== userId) return user;
        return {
          ...user,
          isAdmin: !user.isAdmin
        };
      });
    }
  }
};
</script>