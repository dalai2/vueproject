<template>
  <b-container d-flex justify-content-center>
    <b-form  @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        class="form-group"  
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        required
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label='Enter your message' >
          <b-form-textarea
    id="textarea-no-resize"
    placeholder="Fixed height textarea"
    rows="3"
    no-resize
  ></b-form-textarea>
      </b-form-group >
<button class="btn btn--animation-from-right">
  <span class="btn__text-static">Submit</span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">Submit</span>
  </div>
</button>
    </b-form>
  </b-container>
</template>

<script scoped>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true,
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../styles/global.scss";
.form-group{
  color:#fff;
}
.btn {
  padding: 10px 30px;
  position: relative;
  
  color: $blueColor;
  background-color: $redColor;
  position: relative;
  
  overflow: hidden;
  cursor: pointer;
  
  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: -1px;
  
  
  .btn__text-dynamic,
  .btn__text-dynamic-inner {    
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 2;
    
    transition: all ease 0.5s;
  }
  
  .btn__text-dynamic {
    background-color: $lightColor;
    color: $lightColor;
    overflow: hidden;
  }
  
  &:hover {
    .btn__text-dynamic {
      transform: translateX(-100%);
    }
    .btn__text-dynamic-inner {
      transform: translateX(100%);
    }
  }
}

.btn--animation-from-right {
    &:hover {
    .btn__text-dynamic {
      transform: translateX(100%);
    }
    .btn__text-dynamic-inner {
      transform: translateX(-100%);
    }
  }
}
</style>