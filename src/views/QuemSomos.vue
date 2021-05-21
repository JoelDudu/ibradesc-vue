<template>
<div class="container">
    <div class="breadcrumb-novo" v-bind:style= "{ 'background-image': 'url(' + box + ')' }">
        <div class="breadcrumb-title">
            <h2 class="title-pagina">Quem Somos</h2>
        </div>
    </div>
    <div class="text-quem-somos">
        <div class="row">
            <div class="col-md-12">
                <div class="text">
                    O <a href="/">IBRADESC (Instituto Brasileiro de Desenvolvimento das Cidades)</a> pessoa jurídica de direito privado, entidade civil sem fins lucrativos, tem como principais finalidades, desde a sua fundação, em 2004, o desenvolvimento educacional, social, econômico e cultural dos municípios, principalmente através de projetos voltados para a educação básica, do incentivo ao esporte, à cultura e à preservação do meio ambiente.
                      <p>  
                          O IBRADESC atua na assessoria da administração pública com foco no desenvolvimento institucional e educacional – visando a valorização dos servidores públicos através de cursos de aperfeiçoamento, na organização, na modernização e na gestão, por meio de estudos e pesquisas.

                          Qualidade, inovação e eficiência são conceitos construídos através de cursos, palestras, seminários, congressos, coordenação de eventos e fóruns educacionais, subsidiando o Executivo e o Legislativo, em relação ao:
                      </p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul>
                                <li>Aperfeiçoamento e Formação Continuada dos Servidores Municipais.</li>
                                <li>Diagnóstico Físico e Lógico dos Setores.</li>
                                <li>Levantamento Arquivístico Documental.</li>
                                <li>Planejamento Estratégico Institucional, com Plano Tático Operacional.</li>
                                <li>Replanejamento Administrativo, com Planos de Cargos e Vencimentos.</li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            <div class="text">
                                <span class="azulClaro"> Os diferenciais do  <a href="~/Home/">IBRADESC</a> consistem na tríade:</span>
                                <ul>
                                    <li>Acompanhamento técnico pedagógico permanente, articulado com intensos diálogos entre a teoria e a prática.</li>
                                    <li>Expertise da equipe, com profissionais de reconhecida excelência.</li>
                                    <li>Uso de modernas tecnologias de comunicação.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text">
                    <p>Neste contexto, em função da necessidade constante de evolução, já estamos implementando o modelo de educação à distância (EAD), uma modalidade de ensino que objetiva oferecer um processo de aprendizagem completo, dinâmico e eficiente, utilizando recursos inerentes à tecnologia da informação e das telecomunicações. É usar a internet para diminuir distâncias, ultrapassar limites físicos e geográficos, disseminando conhecimentos em tempo real de um ponto qualquer para um número exponencial de pontos de acesso e pessoas.</p>
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