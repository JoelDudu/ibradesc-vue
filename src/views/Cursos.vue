<template>
<div class="container">
    <div class="breadcrumb-novo" v-bind:style= "{ 'background-image': 'url(' + box + ')' }">
        <div class="breadcrumb-title">
            <h2 class="title-pagina">Cursos Ofertados</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <h4>Poder Executivo</h4>
            <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Administração
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li>Atendimento Pleno com Ênfase na Satisfação do Cidadão</li>
                                <li>Auditoria</li>
                                <li>Cidades Criativas e Desenvolvimento Sustentável</li>
                                <li>Controle Interno</li>
                                <li>Curso de Utilização das Mídias Sociais no Executivo</li>
                                <li>Gestão de Projetos</li>
                                <li>Gestão Pública – Compromisso Com a Ética e a Cidadania</li>
                                <li>Licitação e Contratos</li>
                                <li>Planejamento Estratégico</li>
                                <li>Sistema Integrado de Gestão e Auditoria do TCM (SIGA)</li>
                                <li>E mais outros 17 cursos.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Educação
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li>Coordenação Pedagógica</li>
                                <li>Cursos de Utilização das Mídias Sociais na Educação</li>
                                <li>Desenvolvimento da Oralidade das Crianças na Educação</li>
                                <li>Educ. Infantil – Metodologia para Melhoria da Aprendizagem</li>
                                <li>Educ. Fundamental – Metodologia para Melhoria da Aprendizagem</li>
                                <li>Gerenciamento de Projetos e Captação de Recursos</li>
                                <li>Gestão Escolar</li>
                                <li>Jornada Pedagógica</li>
                                <li>Planejamento e Ensino</li>
                                <li>Psicopedagogia – Metodologias Alternativas</li>
                                <li>Sensibilização e Diagnóstico do “Bullying”</li>
                                <li>E outros 30 cursos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Meio Ambiente
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li>Atendimento Pleno com Ênfase na satisfação do Cidadão</li>
                                <li>Educação e Avaliação de Impactos Ambientais</li>
                                <li>Gestão Ambiental</li>
                                <li>Gestão de Resíduos Sólidos</li>
                                <li>Interpretação da Norma ISO 14.001</li>
                                <li>Legislação Ambiental Brasileira</li>
                                <li>Levantamento de Impactos e Compensações Ambientais</li>
                                <li>Licenciamento ambiental</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Saúde
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li>Acreditação Hospitalar e Qualidade – Obrigatoriedade Legal para Instituições de Saúde</li>
                                <li>Atendimento Pleno com ênfase na Satisfação do Paciente / Cidadão</li>
                                <li>Biosegurança – Prevenção e Controle a Infecção Hospitalar</li>
                                <li>Cursos de Utilização das Mídias Sociais na Saúde</li>
                                <li>Diagnósticos das Dificuldades e Soluções Possíveis para o Município</li>
                                <li>Elaboração, Gestão e Execução do Projeto Melhor Idade, Mais Saúde, Mas Amor, Mais Vida, para as Secretárias Municipais</li>
                                <li>Funções e Responsabilidades dos Departamentos nas Instituições de Saúde</li>
                                <li>Funções e Responsabilidades dos Departamentos nas Instituições de Saúde (ex: Farmácia, Administração, Financeiro, Enfermagem, etc)</li>
                                <li>Gerenciamento de Projetos e Capacitação de Recursos</li>
                                <li>Segurança e Integridade na Recepção e Transporte de Pacientes</li>
                                <li>E outros 05 cursos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFive">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Tecnologia da Informação
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li>Atendimento Pleno com Ênfase na Satisfação do Cidadão</li>
                                <li>Auditoria de TI</li>
                                <li>Diagnóstico Físico e Lógico dos Sistemas</li>
                                <li>Informática Básica e Avançada – com MS Office e Linux</li>
                                <li>Segurança da Informação ISO 22.000</li>
                                <li>Workshop sobre uso da Microinformática – A Futurologia do ontem</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingSix">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Trânsito
                            </button>
                        </h5>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li>Atendimento Pleno com Ênfase na Satisfação do Cidadão</li>
                                <li>Educação de Trânsito</li>
                                <li>Legislação de Trânsito</li>
                                <li>Operações de Trânsito</li>
                                <li>Primeiros Socorros</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-md-6">
            <h4>Poder Legislativo</h4>
            <div>
                <ul>
                    <li>Administração e Resolução de Conflitos</li>
                    <li>Cursos de Gestão Pública direcionada ao Legislativo Municipal</li>
                    <li>Curso de Utilização das Mídias Sociais no Contexto Público</li>
                    <li>Curso sobre Concessão de Serviços Públicos sob a Ótica da Fiscalização e Controle do Poder Legislativo</li>
                    <li>Estrutura e Organograma do Legislativo Municipal</li>
                    <li>Formação de Assessor Legislativo Interno</li>
                    <li>Informática Básica e Avançada (Windows, Office e Linux)</li>
                    <li>Introdução ao Legislativo Municipal</li>
                    <li>Oratória, Comunicação e Expressão</li>
                    <li>Processo Legislativo</li>
                    <li>Sistema Integrado de Gestão Administrativa (SIGA)</li>
                    <li>Técnica Legislativa Básica e Avançada</li>
                    <li>Textos e documentos oficiais do Legislativo (com o novo Acordo Ortográfico)</li>
                </ul>
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