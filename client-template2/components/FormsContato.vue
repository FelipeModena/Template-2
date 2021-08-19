<template>
    <div class="text-center mb-2" :style="styleFormsContato()">
      <h1>
        <strong>{{ comp.titulo }}</strong>
      </h1>
      <div class="mt-4 forms-contato-componente">
        <label for="forms-nome-contato-componenente">Nome</label>
        <input type="text" id="forms-nome-contato-componenente" />
        <label for="forms-telefone-contato-componenente">Telefone</label>
        <input type="text" id="forms-telefone-contato-componenente" />
        <label for="forms-email-contato-componenente">Email</label>
        <input type="text" id="forms-email-contato-componenente" />
        <label for="forms-mensagem-contato-componenente">Mensagem</label>
        <textarea name="" id="forms-mensagem-contato-componenente" cols="30" rows="10"></textarea>
      </div>
      <button class="my-4 btn-forms w-50" :style="styleFormsContatoBtn()">{{ comp.txtBotao1 }}</button>
    </div>
</template>

<script>
export default {
  props: {
    comp: Object,
  },
  computed: {
    fundoColorido() {
      if (this.corFundo == true) {
        return "cor-fundo-forms";
      } else return "";
    },
  },
  methods:{
    styleFormsContato(){
      return [{'background':this.comp.corFundo},{'color':this.comp.corTitulo}] 
    },
    styleFormsContatoBtn(){
      return [{'background':this.comp.corBotao1}]
    }
  },
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    if (document.documentElement.clientWidth <= 800) {
      this.mobile = true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 800) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    });
  },
};
</script>

<style>
.forms-contato-componente {
  padding: 0 20%;
  display: grid;
}
.forms-contato-componente label{
  margin-top: 10px;
}
.forms-contato-componente input,
textarea {
  width: 100%;
  background: #f0f2e6;
  padding: 6px;
  border: none;
}
</style>
