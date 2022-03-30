<template>
  <div id="app">
    <div v-if="client === ''">
      <div>
        <h1>SignUp</h1>
        <label for="email">email</label>
        <input id="email" type="email" v-model="email" />
        <label for="password">password</label>
        <input id="password" type="password" v-model="password" />
        <button @click="signup">新規登録</button>
      </div>
      <div>
        <h1>SignIn</h1>
        <label for="email">email</label>
        <input id="email" type="email" v-model="email" />
        <label for="password">password</label>
        <input id="password" type="password" v-model="password" />
        <button @click="signin">SignIn</button>
      </div>
    </div>
  </div>
  <div v-if="client !== ''">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      uid: "",
      access_token: "",
      client: "",
      title: "",
      content: "",
      tasks: [],
      comment: "",
      posts: [],
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:3000/v1/auth", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          this.access_token = response.headers["access-token"];
          this.client = response.headers["client"];
          this.uid = response.headers["uid"];
        });
    },
    signin() {
      console.log(this.email);
      console.log(this.password);
      axios
        .post("http://localhost:3000/v1/auth/sign_in", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          this.access_token = response.headers["access-token"];
          this.client = response.headers["client"];
          this.uid = response.headers["uid"];
        });
    },
    signout() {
      console.log(this.uid);
      console.log(this.access_token);
      console.log(this.client);
      axios
        .delete("http://localhost:3000/v1/auth/sign_out", {
          test: { test: "test" },
          headers: {
            uid: this.uid,
            "access-token": this.access_token,
            client: this.client,
          },
        })
        .then((response) => {
          console.log(response);
          this.access_token = "";
          this.client = "";
          this.uid = "";
          localStorage.removeItem("uid");
          localStorage.removeItem("access-token");
          localStorage.removeItem("client");
        });
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(216, 173, 173);
}

* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
}
.box {
  width: 350px;
  height: 450px;
  margin: 60px auto 0;
  border-radius: 4px;
  border: 1px #ddd solid;
  display: flex;
  justify-content: right;
  align-items: center;
}

.box-inner {
  padding: 20px 26px;
}

h1 {
  font-weight: 400;
  font-size: 28px;
  line-height: 1.2;
  margin-bottom: 10px;
  padding-bottom: 4px;
  color: #111111;
}

.box-email {
  margin-bottom: 13px;
}

.box-name {
  margin-bottom: 13px;
}

.box-password {
  margin-bottom: 22px;
}

.box-email label, .box-password label .box-name label {
  font-weight: 700;
  font-size: 13px;
  padding-left: 2px;
  padding-bottom: 2px;
}

.box-email input[type="email"], .box-password input[type="password"] , .box-name input[type="text"] {
  border-style: none;
  box-sizing: border-box;
  width: 100%;
  height: 31px;
  border: 1px solid #a6a6a6;
  box-shadow: 0 1px 0 rgba(0,0,0,.07) inset;
  border-radius: 3px;
  padding: 0 7px;
}

.column-left {
  float: left;
}

.column-right {
  float: right;
}

.box-password a {
  font-size: 13px;
}

.box-login {
  margin-bottom: 26px;
}

.box-login input[type="submit"] ,.box-register input[type="submit"]  {
  border-style: none;
  width: 100%;
  height: 31px;
  background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
  border-radius: 3px;
  border: 1px #a88734 solid;
}

.box-login input[type="submit"]:hover , .box-register input[type="submit"]:hover {
  cursor: pointer;
  background: #f0c14b;
}

.legal-text {
  margin-top: 18px;
  font-size: 12px;
}

.remember {
  font-size: 13px;
  margin-top: 18px;
  padding-left: 3px;
}

.box-newusr p , .text-login p {
  text-align: center;
  font-size: 12px;
  color: #767676;
  margin-bottom: 14px;
}

.box-newusr p span , .text-login p span {
  text-decoration: line-through;
  text-decoration-color: #e7e7e7;
}

.box-newusr a {
  display: block;
  width: 100%;
  height: 31px;
  font-size: 13px;
  color: #111;
  line-height: 31px;
  text-align: center;
  background: linear-gradient(to bottom,#f7f8fa,#e7e9ec);
  border-radius: 3px;
  border: 1px #a2a6ac solid;
}

.box-newusr a:hover {
  background: #e7e9ec;
}

.text-login a {
  display: block;
  width: 100%;
  height: 31px;
  font-size: 14px;
  color: blue;
  line-height: 31px;
  text-align: center;
  text-decoration: underline;
}

.text-login {
  margin-top: 18px;
}
</style>