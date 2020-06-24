<template>
  <b-container d-flex justify-content-center>
    <b-form  @submit="onSubmit" @reset="onReset" v-if="show" method="POST" data-netlify="true">


      <b-form-group id="input-group-1" :label="$t('contact.name')" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          :placeholder="$t('contact.name')"
        ></b-form-input>
      </b-form-group>
            <b-form-group
        class="form-group"  
        id="input-group-2"
        :label=" $t('contact.email')  "
        label-for="input-2"
        required
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          :placeholder=" $t('contact.email')"
        ></b-form-input>
      </b-form-group>
      <b-form-group :label="$t('contact.message')" >
          <b-form-textarea
    id="textarea-no-resize"
    :placeholder="$t('contact.title')"
    rows="3"
    no-resize
  ></b-form-textarea>
      </b-form-group >
      <div class="field">
        <div data-netlify-recaptcha="true"></div>
      </div>
      <div class="bord">
<button class="btn btn--animation-from-right">
  <span class="btn__text-static"> {{ $t('contact.send') }}</span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">{{ $t('contact.send') }}</span>
  </div>
</button>
</div>
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
 .bord{
    border: 1px solid $lightColor;
    padding:5px;
    margin: 0 10px 0 0;
    display: inline-block;
    margin-top: 25px;
}
.btn {
  padding: 10px 30px;
  position: relative;
  color: $lightColor;
  background-color: $blueColor;
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
    background-color: $redColor;
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