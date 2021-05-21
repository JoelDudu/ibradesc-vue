<template>
<div>
    <div class="breadcrumb-novo grande" v-bind:style= "{ 'background-image': 'url(' + box + ')' }">
        <div class="breadcrumb-title">
            <h2 class="title-pagina">Outros Serviços</h2>
        </div>
    </div>
    <div class="container card-servicos">
    <div class="row">
        <div class="col-md-3">
            <div class="card">
                <img class="card-img-top" scr="./assets/img/logo-nav.png" alt="Card image cap" >
                <div class="card-body">
                    <h5 class="card-title servicos">FORMAÇÃO / TREINAMENTO</h5>
                    <p class="card-text">
                        Atende às necessidades das Organizações - públicas e privadas, através de treinamentos e cursos de capacitação. As atividades desta área estão voltadas para o crescimento profissional e organizacional com foco na capacitação,
                        qualificação e melhoria das relações interpessoais, visando a satisfação da Organização e do cliente.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <img class="card-img-top" scr= "@/assets/img/digitalizacao.PNG" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title servicos">CONSULTORIA</h5>
                    <p class="card-text">Serviço que visa atender às necessidades das Organizações - públicas e privadas, para identificar e solucionar problemas relacionados à qualificação, gestão e produção - tanto de serviços como de produtos além de avaliar o índice de confiança de clientes, colaboradores e parceiro.</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <img class="card-img-top" scr= "@/assets/img/digitalizacao.PNG" alt="Card image cap" >
                <div class="card-body">
                    <h5 class="card-title servicos">ORGANIZAÇÃO DE ACERVOS</h5>
                    <p class="card-text">
                        A gestão de documentos e a preservação do patrimônio documental de qualquer instituição pública ou privada, torna-se cada vez mais relevante em função da reformatação digital dos acervos e consequente disponibilização para acesso público, como obriga a lei em alguns casos
                        Trabalhamos para identificar, verificar estado de conservação e organizar a massa documental para propor a implementação de recursos digitais confiáveis, contemporâneos, adequados e viáveis.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <img class="card-img-top" scr= "@/assets/img/digitalizacao.PNG" alt="Card image cap" >
                <div class="card-body">
                    <h5 class="card-title servicos">DIGITALIZAÇÃO</h5>
                    <p class="card-text">
                        Conversão do suporte físico de dados (papel, microfilme) para um suporte em formato digital visando dinamizar o acesso e a disseminação das informações já que possibilita a visualização multiusuários e instantânea das imagens via internet. Visa reduzir custos ao longo do tempo, garantir maior agilidade na consulta - com utilização
                        dos recursos da internet e segurança na preservação dos seus documentos com opção de contar com a tecnologia da Assinatura Digital.
                    </p>
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
      return { box,
      image: 'https://picsum.photos/id/1005/600/200'
       };
    }
  }
</script>