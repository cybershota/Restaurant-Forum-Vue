<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <!-- 元件 -->
      <TopUser v-for="user in users" :key="user.id" :initialUsers="user" />
    </div>
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
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T17:09:40.000Z",
      Followers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T16:02:20.000Z",
          Followship: {
            followerId: 2,
            followingId: 1,
            createdAt: "2020-03-02T19:37:40.000Z",
            updatedAt: "2020-03-02T19:37:40.000Z"
          }
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Followship: {
            followerId: 1,
            followingId: 1,
            createdAt: "2020-03-04T02:44:57.000Z",
            updatedAt: "2020-03-04T02:44:57.000Z"
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: true
    },
    {
      id: 62,
      name: "AC",
      email: "ac@ac.com",
      password: "$2a$10$yB01LxQAujWjRQ0WaprYV.t5SDx6kool5Cmrt0F7TRSXGRk.W8z1m",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-29T15:41:09.000Z",
      updatedAt: "2020-02-29T15:41:09.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Followship: {
            followerId: 1,
            followingId: 62,
            createdAt: "2020-03-04T03:19:13.000Z",
            updatedAt: "2020-03-04T03:19:13.000Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T16:02:20.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T16:01:50.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 72,
      name: "mohammad akhbarati",
      email: "makhbarati@gmail.com",
      password: "$2a$10$ljaWKqtQwgLA5BdTEhBTHeJK/Ku4ow3IHM4S5OJYmr7.anBAIl7NW",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-29T23:24:32.000Z",
      updatedAt: "2020-02-29T23:24:32.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    }
  ]
};

import NavTabs from "../components/NavTabs";
import TopUser from "../components/TopUser";
export default {
  components: {
    NavTabs,
    TopUser
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsertop();
  },
  methods: {
    fetchUsertop() {
      this.users = dummyData.users;
    }
  }
};
</script>
