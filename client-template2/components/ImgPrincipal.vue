<template>
<div>

  <img :src="requestImg(comp.imagens[0].imgUrl)" alt="" class="w-100"/>
  <img v-if="mobile==true" :src="requestImg(comp.imagens[1].imgUrl)" alt="" class="w-100"/>
</div>
</template>

<script>
export default {
  props: {
    comp: Object,
  },
  data(){
    return{
      mobile:false
    }
  },
  methods: {
    requestImg(img) {
      if (this.SITE_STATICO == false && this.comp.imagens != undefined) {
        return this.API_URL + "/images/" + img;
      } else return require("~/assets/imagens/" + img);
    },
  },
};
</script>