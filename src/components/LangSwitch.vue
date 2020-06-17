<template>
  <div>
  <b-dropdown id="dropdown-dropright" dropdown variant='dark' class="m-2">
          <template v-slot:button-content>
      <img :src="`/${$i18n.locale}.png`" alt="">
    </template>
    <b-dropdown-item href="#"
    @click.prevent="setLocale('es')">
    <img src='/es.png' alt=""> <span>ES</span></b-dropdown-item>
    <b-dropdown-item href="#"
    @click.prevent="setLocale('en')"
    ><img src='/en.png' alt=""> <span>EN</span></b-dropdown-item>
  </b-dropdown>
  </div>
</template>

<script>
export default {
    name: 'LangSwitch',
    data(){
        return{
            langs: ['en', 'es']
        }
    },
    methods:{
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
    }
    }
}
</script>

<style>

</style>