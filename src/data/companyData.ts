export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  benefits: string[];
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  metric: string;
  isExample?: boolean;
}

export const COMPANY_INFO = {
  name: "Freitas Lima Engenharia",
  legalName: "Freitas Lima Consultoria e Engenharia",
  slogan: "Planejamento que Constrói Resultados",
  subtitle: "Soluções técnicas e estratégicas para obras mais eficientes, econômicas e seguras.",
  tagline: "DO PLANO À REALIZAÇÃO. Conte com quem entende de cada detalhe.",
  phone1: "(17) 99104-1274",
  phone1Raw: "5517991041274",
  phone2: "(17) 99625-9717",
  phone2Raw: "5517996259717",
  email: "freitaslimaeng.consult@gmail.com",
  region: "Votuporanga e região e consultorias online em todo território nacional",
  address: "Votuporanga - SP e atendimento nacional",
  logoImage: "/assets/aistudio/ChatGPT_Image_7_de_ago._de_2026__15_30_40_ff6b1390.png",
  defaultWebhookUrl: "https://script.google.com/macros/s/AKfycbzglv-aYgOlsKi0ibWwlVkkZfVHzkoRgbl0K6klKN25uP3bAjE4hjnuj2C_Fdl8NFA1/exec",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "gestao-execucao",
    number: "01",
    title: "Gestão e Execução de obras",
    shortDesc: "Controle físico-financeiro rigoroso e governança de canteiro para garantir prazos pontuais e orçamento blindado.",
    fullDesc: "Acompanhamento metódico e fiscalização em todas as etapas construtivas, desde a linha de balanço até a entrega das chaves. Integramos compras, logística de canteiro, fiscalização de qualidade e relatórios gerenciais transparentes.",
    icon: "ClipboardCheck",
    benefits: [
      "Eliminação de atrasos e paralisações não planejadas",
      "Cronograma físico-financeiro dinâmico e rastreável",
      "Auditoria contínua de produtividade e qualidade",
      "Fluxo de caixa da obra previsível sem surpresas"
    ],
    deliverables: [
      "EAP (Estrutura Analítica do Projeto)",
      "Cronograma Físico-Financeiro executivo",
      "Curva S de acompanhamento de avanço físico",
      "Relatórios periódicos de medição e fiscalização técnica"
    ]
  },
  {
    id: "orcamento-planejamento",
    number: "02",
    title: "Orçamento e planejamento",
    shortDesc: "Engenharia de custos analítica e engenharia de valor com levantamento quantitativo de máxima precisão.",
    fullDesc: "Orçamentação fundamentada em levantamentos criteriosos, composições analíticas unitárias e análise de riscos. Traduzimos projetos em planilhas executivas assertivas prontas para cotações e negociações com fornecedores.",
    icon: "Calculator",
    benefits: [
      "Levantamentos quantitativos exatos sem distorções",
      "Curva ABC de insumos e serviços críticos",
      "Engenharia de valor para economia sem perda de padrão",
      "Poder de negociação real em concorrências com fornecedores"
    ],
    deliverables: [
      "Planilha Orçamentária Sintética e Analítica",
      "Curva ABC de Materiais e Mão de Obra",
      "Cronograma de desembolso mensal previsto",
      "BDI detalhado e memória de cálculo documentada"
    ]
  },
  {
    id: "consultorias-tecnicas",
    number: "03",
    title: "Consultorias técnicas em gestão de obras",
    shortDesc: "Diagnósticos estratégicos, auditoria de processos e compatibilização integrada para zerar o retrabalho.",
    fullDesc: "Assessoria técnica especializada presencial e online para construtoras, incorporadoras e proprietários. Análise crítica de projetos, validação de viabilidade técnico-econômica e governança para obras de alto padrão.",
    icon: "Compass",
    benefits: [
      "Consultoria online personalizada para todo o Brasil",
      "Diagnóstico preciso de gargalos operacionais e financeiros",
      "Compatibilização multidisciplinar para eliminar retrabalho",
      "Segurança jurídica e técnica com conformidade total às normas ABNT"
    ],
    deliverables: [
      "Parecer Técnico e Relatório de Diagnóstico",
      "Matriz de Riscos e Oportunidades da Obra",
      "Auditoria de Viabilidade e Redução de Custos",
      "Sessões de alinhamento estratégico com o engenheiro responsável"
    ]
  }
];

export const IMPACT_METRICS = [
  { value: "+45", label: "Obras e Projetos", detail: "Com planejamento e fiscalização técnica" },
  { value: "15%", label: "Economia Média Gerada", detail: "Através de engenharia de valor e orçamentos" },
  { value: "99.4%", label: "Cumprimento de Prazos", detail: "Marcos contratuais rigorosamente atendidos" },
  { value: "100%", label: "Segurança Técnica", detail: "Conformidade total com as normas ABNT" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "depoimento-1",
    name: "Dr. Marcelo Castilho",
    role: "Diretor de Operações",
    company: "Castilho Incorporadora e Empreendimentos",
    text: "A assessoria da Freitas Lima Engenharia mudou nosso patamar de previsibilidade. O orçamento foi seguido à risca e os relatórios nos deram clareza absoluta em cada desembolso.",
    metric: "Obra de 18 pavimentos entregue no prazo"
  },
  {
    id: "depoimento-2",
    name: "Eng. Roberto Vasconcelos",
    role: "Construtor e Sócio",
    company: "Vasconcelos Construtora",
    text: "O nível de detalhamento dos orçamentos e a consultoria técnica evitaram semanas de retrabalho que costumávamos ter em obras desse porte. Trabalho impecável.",
    metric: "Economia de R$ 280 mil em retrabalho evitado"
  },
  {
    id: "depoimento-3",
    name: "Fernanda Silveira",
    role: "Proprietária e Investidora",
    company: "Residencial Quinta do Golfe",
    text: "Construir uma casa de alto padrão gera muita ansiedade financeira. A Freitas Lima nos deu a tranquilidade de saber exatamente quanto gastaríamos mês a mês.",
    metric: "Desvio orçamentário inferior a 1%"
  }
];
