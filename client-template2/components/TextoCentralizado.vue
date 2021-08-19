<template>
  <div
    class="mb-2 text-center px-5 py-4  w-100"
    :style="'background:' + comp.corFundo + ';color:' + comp.corTitulo"
  >
    <img
      v-if="imgNome != ''"
      :src="require('~/assets/imagens/' + imgNome)"
      :alt="imgNome"
    />
    <h1>
      <strong>{{ comp.titulo }} </strong>
    </h1>
    <p>{{ comp.texto }}</p>
    <NuxtLink
      v-if="comp.txtBotao1 != null && comp.txtBotao1 != ''"
      :to="comp.urlBotao1 || 'quemSomos'"
      ><button
        class="w-25 bg-transparent p-3"
        :style="'border-color:' + comp.corBotao1 + ';color:' + comp.corBotao1"
      >
        <strong> Leia mais</strong>
      </button></NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: {
    rota: "",
    btnRota: { default: false },
    img: { default: false },
    imgNome: { default: "" },
    comp: "",
  },
};
</script>

<style scoped></style>
