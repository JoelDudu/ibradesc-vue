<template>
    <div class="container">
        <div class="mapa mt-5">
            <div class="row">
                <div class="col-md-12">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1B2BNCl4Li25p7DEOqr54svMRq7og1FcQ&hl=pt-BR" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="contato mt-5">
            <div class="row">
                <div class="col-md-5">
                    <div class="endereco mb-3">
                        <h4> <i class="fas fa-map-marker-alt"></i>  Sede e Cordenação Pedagógica</h4>
                        <p>Av. Luís Tarquínio Pontes, 1821 - Centro Comercial da Torre sala 205B </p>
                        <p>Pitangueiras - Lauro de Freitas/Bahia - CEP 42707-150</p>
                        <p>Telefone: 71 4109-5252/4113-2445</p>
                    </div>
                    <div class="endereco">
                        <h4> <i class="fas fa-map-marker-alt"></i>  Escritório de Projetos</h4>
                        <p>Condomínio CEO Salvador Shopping - Torre Nova Iorque, sala 406</p>
                        <p>Av. Tancredo Neves, 2539 - Caminho das Árvores - Salvador/Bahia, CEP 41820-021</p>
                        <p>Telefone: 71 3288-6473/3901-1106</p>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="title-contato"> Entre em contato</h2>
                            <div class="form-group">
                                <input type="text" class="form-control" name="To" value="" placeholder="Nome">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="tel" class="form-control" name="Subject" value="" placeholder="Telefone">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="form-group">
                                <input type="email" class="form-control" name="From" value="" placeholder="E-mail">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea class="form-control" name="Body" rows="3" placeholder="Mensagem"></textarea>
                            </div>
                            <button class="btn btn-default btn-contato" type="submit" name="button" value="send">
                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Enviar
                            </button>
                        </div>
                        <div class="col-md-12" style="text-align:center; color:red;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import box from '@/assets/img/slide-desk-bg.jpg';

  export default {
    data() {
      return { box };
    }
  }
</script>