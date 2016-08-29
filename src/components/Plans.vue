<template>
  <p>Confirme os dados de contato que serão apresentados para seu assinante na página de contratação de plano.</p>
  <div class="ls-steps">
    <div class="ls-steps-mobile">
      <a class="ls-steps-mobile-btn ls-ico-chevron-down"></a>
    </div>
    <ol class="ls-steps-nav">
      <li>
        <button class="ls-steps-btn" data-ls-module="steps" data-target="#step1" title="Dados da empresa"></button>
      </li>
      <li>
        <button class="ls-steps-btn" data-ls-module="steps" data-target="#step2" title="Formas de pagamento"></button>
      </li>
      <li>
        <button class="ls-steps-btn" data-ls-module="steps" data-target="#step3" title="Concluir"></button>
      </li>
    </ol>
    <div class="ls-steps-main">
      <div class="ls-steps-content" id="step1">
        <form action="" class="ls-form ls-form-inline row">
          <fieldset>
            <label class="ls-label col-md-12">
              <b class="ls-label-text">Nome da empresa:</b>
              <input type="text" name="nome" placeholder="Nome" value="{{$root.admin}}" required>
            </label>
            <label class="ls-label col-md-12">
              <b class="ls-label-text">Telefone:</b>
              <input type="tel" name="tel" placeholder="Escreva seu telefone" value="{{$root.tel}}" required>
            </label>
            <label class="ls-label col-md-12">
              <b class="ls-label-text">E-mail:</b>
              <input type="email" name="rua" placeholder="Escreve seu e-mail" value="{{$root.email}}" required>
            </label>
            <label class="ls-label col-md-12">
              <b class="ls-label-text">Endereço de acesso:</b>
              <div class="ls-prefix-group">
                <span class="ls-label-text-prefix">http://</span>
                <input type="text" name="rua" placeholder="meuendereço" value="{{$root.url_access}}" required>
                <span class="ls-label-text-prefix">.tryrecorrencia.com.br</span>
              </div>
            </label>
          </fieldset>
        </form>
        <div class="ls-actions-btn">
          <a href="#" class="ls-btn-primary ls-float-right" data-action="next">Próximo</a>
        </div>
      </div>
      <div class="ls-steps-content" id="step2">
        <p>Ecorrupti enim nam molestias molestiae unde tempora autem quidem suscipit eos voluptates ducimus quibusdam culpa. impedit qui distinctio corporis sunt doloremque</p>
        <div class="ls-actions-btn">
          <a href="#" class="ls-btn" data-action="prev">Anterior</a>
          <a href="#" class="ls-btn-primary ls-float-right" data-action="next">Próximo</a>
        </div>
      </div>
      <div class="ls-steps-content" id="step3">
        <p>Impedit alias aperiam blanditiis nihil voluptatibus voluptates delectus qui. fugiat ipsa esse libero itaque. sequi aut aut aut possimus sunt asperiores deserunt ut libero sed ut eaque</p>
        <div class="ls-actions-btn">
          <a href="#" class="ls-btn" data-action="prev">Anterior</a>
          <a href="#" class="ls-btn-primary ls-float-right">Finalizar</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{

}
</script>

<style>

</style>