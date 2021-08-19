<template>
  <div class="cor-fundo-secundaria mb-2">
    <h5 v-if="contato.endereco">{{ contato.endereco }}</h5>
    <h5 v-if="contato.bairro">{{ contato.bairro }}</h5>
    <h5 v-if="contato.cidade">{{ contato.cidade }} - {{ contato.estado }}</h5>
    <h5 v-if="contato.email">{{ contato.email }}</h5>
    <div>
      <h5 v-if="contato.telefone">{{ contato.telefone }}</h5>
      <h5 v-if="contato.whatsapp">{{ contato.whatsapp }}</h5>
    </div>
    <div class="footer-lista-icones" >
      <a :href="contato.facebook">
        <img src="~/assets/icones/facebook.png" alt="facebook" />
      </a>
      <a :href="contato.instagram">
        <img src="~/assets/icones/instagram.png" alt="instagram"
      /></a>
      <a :href="contato.linkedin">
        <img src="~/assets/icones/linkedin.png" alt="linkedin"
      /></a>
      <a :href="'https://api.whatsapp.com/send?phone='+contato.whatsapp">
        <img src="~/assets/icones/whatsapp.png" alt="whatsapp"
      /></a>
      <a href=""> <img src="~/assets/icones/message.png" alt="email" /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contato: Object,
  },
};
</script>

<style scoped>
.footer-lista-icones img {
  margin-right: 10px;
}
</style>