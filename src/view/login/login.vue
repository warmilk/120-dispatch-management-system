<template>
	<div>
		<lheader></lheader>
		<div class="main">
			<form class="login-form" ref="loginForm">
				<div>
					<input v-model="form.username" type="text" class="un-input beauty-input" placeholder="请输入登录名" />
				</div>
				<div>
					<input v-model="form.password" type="password" class="pd-input beauty-input" placeholder="请输入密码" />
				</div>
				<div class="forget-pd-container">
					<router-link to="forget-password">忘记密码</router-link>
				</div>
				<div>
					<button class="login-button" @click="submit">登录</button>
				</div>
			</form>
		</div>
		<lfooter></lfooter>
	</div>
</template>

<script>
import lheader from "./header";
import lfooter from "./footer";
import { login } from "@/api/login/index";
import * as Cookie from "@/assets/js/cookie";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      let form = this.form;
      let vm = this;
      if (!form.username || !form.password) {
        this.$message({ message: "请填写用户名或者密码", type: "warning" });
        return false;
      }
      login(form.username, form.password)
        .then(resp => {
          return new Promise((resovle, reject) => {
            resp.returnCode === 1 ? resovle(resp) : reject(resp.errorMsg);
          });
        })
        .then((resp) => {
          Cookie.setCookie("token", `${resp.token}`);
          if( this.$route.query.redirect)
            this.$router.push(this.$route.query.redirect);
          else
            this.$router.push("/index");
        })
        .catch(msg => {
          this.$message.error({ message: "登录失败:".concat(msg) });
        });
    }
  },
  components: {
    lheader,
    lfooter
  }
};
</script>

<style lang="scss" scoped>
div.main {
  height: 500px;
  background: url("../../assets/img/login-background.png") no-repeat 7rem 5rem;
  position: relative;
  form {
    position: relative;
    top: 30%;
    left: 60%;
    width: 21.75rem;
    height: 17.63rem;
    border-style: inset;
    border-width: 0.06rem;
    border-color: #cdd6f8;
    div {
      margin: 1.8rem 0.5rem 0rem 2.5rem;
      width: 90%;
      input {
        display: inline-block;
        width: 90%;
        &:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #c3d0e1;
          opacity: 0.5;
        }

        ::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #c3d0e1;
          opacity: 1;
        }

        &:-ms-input-placeholder {
          color: #c3d0e1;
          opacity: 1;
        }

        &::-webkit-input-placeholder {
          color: #c3d0e1;
          opacity: 0.8;
        }
      }
      a {
        color: #e3654b;
        font-size: 0.75rem;
        margin-left: 74%;
      }
      &.forget-pd-container {
        margin-top: 0.3rem;
      }
      button {
        color: #ffffff;
        font-size: 0.88rem;
        background: #5dc77b;
        border: none;
        width: 90%;
        height: 2.25rem;
        border-radius: 3px;
      }
      .beauty-input {
        border: 0.06rem solid #cdd6f8;
        height: 2.25rem;
        color: #c3d0e1;
        font-size: 0.81rem;
        padding-left: 2.3rem;
        padding-top: 0.2rem;
      }
      .un-input {
        background: url("../../assets/img/username.png") no-repeat 0.3rem 0.5rem;
      }
      .pd-input {
        background: url("../../assets/img/password.png") no-repeat 0.3rem 0.5rem;
      }
    }
    div:first-child {
      margin-top: 3rem;
    }
  }
}
</style>
