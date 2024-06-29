<template>
  <div class="SignIn">
    <div class="sign-in-content">
      <div class="title">
        <p>REGISTER</p>
      </div>
      <v-form ref="forms" @submit.prevent="submit">
        <div class="name-input input">
          <p>Name</p>
          <v-text-field ref="name" v-model="name" placeholder="Name" class="name-input" :rules="nameRules"
            required></v-text-field>
        </div>
        <div class="name-input input">
          <p>Email</p>
          <v-text-field ref="email" v-model="email" :rules="emailRules" placeholder="Email" class="email-input"
            required></v-text-field>
        </div>
        <div class="name-input input">
          <p>Phone</p>
          <v-text-field ref="phone" v-model="phone" :rules="phoneRules" placeholder="Phone" class="phone-input"
            type="number" required></v-text-field>
        </div>

        <div class="name-input input">
          <p>Password</p>
          <v-text-field ref="password" v-model="password" :rules="passwordRules" hint="At least 8 characters"
            placeholder="Password" counter type="password" color="#1687F7" class="password-input"
            @click:append="show1 = !show1"></v-text-field>
        </div>
        <div class="name-input input">
          <p>Confirm Password</p>
          <v-text-field ref="confirmPassword" v-model="confirmPassword" :rules="passwordConfirmationRules"
            hint="At least 8 characters" placeholder="Password confirm" counter type="password" color="#1687F7"
            class="password-input" @click:append="show1 = !show1"></v-text-field>
        </div>
        <v-btn color="white" text @click="submit">
          Register
        </v-btn>
        <div class="form-description">
          <p>Already have an account?&nbsp;<span @click="ChangeSignUp">Sign Up +82-32-816-3383ы</span></p>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    name: '',
    email: '',
    phone: '',
    formHasErrors: false,
    show1: false,
    password: '',
    confirmPassword: '',
    passwordRules: [
      v => v.length >= 8 || 'Min 8 characters',
      v => !!v || 'Password is required',
    ],
    passwordConfirmationRules: [],
    emailRules: [],
    phoneRules: [],
    nameRules: []
  }),
  watch: {
    'email'(val) {
      this.emailRules = []
    }
  },

  methods: {
    submit() {
      this.emailRules = [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
      this.phoneRules = [
        v => v.length <= 14 || 'Max 14 characters',
        v => !!v || 'Phone number is required',
      ]
      this.nameRules = [
        v => !!v || 'Name is required',
      ]
      this.passwordConfirmationRules = [
        v => !!v || "Password is required",
        (this.password === this.confirmPassword) || 'Password must match'
      ]
      let self = this
      setTimeout(function () {
        if (self.$refs.forms.validate()) {
          alert('submitted')
        }
      })
    },
    ChangeSignUp() {
      this.$emit('ChangeSignUp')
    }
  }
}
</script>
<style scoped>
.auth-window-img {
  position: relative;
  left: 3px;
}

.SignIn {
  margin-top: 62px;
  display: flex;
  justify-content: space-between;
}

.title {
  padding-left: 49px;
}

.title p {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 27px;
}

.v-form {
  padding-left: 14px;
  width: 100%;
}

.v-text-field {
  padding: 0;
  margin: 0 0 10px 17px;
  width: 270px;
}

::v-deep .v-input__slot::before {
  border-color: rgba(22, 135, 247, 1) !important;
}

>>>.v-input input {
  max-height: 24px !important;
}

>>>.v-btn {
  background: linear-gradient(269.46deg, #A36DA2 0.24%, #59A0C5 96.9%);
  box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
  border-radius: 15px;
  margin-top: 14px;
  margin-left: 49px;
}

.v-btn:not(.v-btn--round).v-size--default {

  padding: 0 32%;
  height: 46px;
}

.v-btn.v-size--default {
  font-size: 20px;
}

>>>.v-text-field input {
  color: #1687F7;
}

.input {
  display: flex;
  align-items: baseline;
}

.input p {
  text-align: right;
  width: 146px;
  margin: 0;
}

.form-description p {
  color: #A6A0A0;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
}

.form-description p span {
  color: #0666F7;

}
</style>
