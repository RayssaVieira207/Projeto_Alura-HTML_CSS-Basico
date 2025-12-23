# Portfólio HTML & CSS da Alura - Projeto de Consolidação

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Concluído-green)
![Alura](https://img.shields.io/badge/Alura-Curso-orange)
![Estrutura](https://img.shields.io/badge/Estrutura-Organizada-blue)

</div>

---

## 📋 Sobre o Projeto

Este repositório contém **dois componentes principais**:

1. **Página de Portfólio Consolidado** (`index.html`) - Uma página web moderna que apresenta todos os projetos desenvolvidos durante o curso de HTML e CSS da Alura.

2. **Projetos do Curso** (`atividades_do_curso/`) - Pasta contendo todos os projetos práticos desenvolvidos aula por aula durante o curso.

A página `index.html` funciona como um **dashboard interativo** que organiza e apresenta de forma visualmente atrativa os 8 projetos realizados, facilitando a navegação e demonstração do progresso no aprendizado.

## 🏗️ Estrutura do Repositório
```
Projeto_Alura-HTML_CSS-Basico/
├── atividades_do_curso/
│   ├── Aula 1/
│   ├── Aula 2/
│   ├── Aula 3/
│   ├── Aula 4/
│   ├── Aula 5/
│   ├── Ultimo projeto/
│   └── atividade 2 - portifolio/
├── index.html (desta página de portfólio que você mostrou)
└── README.md
```


## 🎯 Objetivos do Projeto

### Para a Página Principal (`index.html`):
- ✅ Criar uma **interface única** para visualização de todos os projetos
- ✅ Demonstrar **habilidades avançadas** em HTML, CSS e JavaScript
- ✅ Oferecer **navegação intuitiva** entre os projetos
- ✅ Apresentar **estatísticas visuais** do progresso do curso
- ✅ Servir como **portfólio profissional** para demonstração de habilidades

### Para os Projetos do Curso (`atividades_do_curso/`):
- ✅ Manter a **estrutura original** das aulas da Alura
- ✅ Preservar o **progresso cronológico** do aprendizado
- ✅ Documentar a **evolução das habilidades** técnicas
- ✅ Servir como **material de referência** para estudo

## ✨ Características da Página Principal

### Design e Usabilidade:
- 🎨 **Paleta de Cores Profissional**: Escuro com acentos em azul-turquesa (#64ffda)
- 📱 **Design Responsivo Total**: Adapta-se de mobile a desktop
- 🚀 **Navegação Suave**: Scroll animado entre seções
- 🃏 **Cards Interativos**: Efeitos hover e animações
- 📊 **Dashboard Visual**: Estatísticas e progresso do curso

### Conteúdo Organizado:
- 🔢 **Numeração Sequencial**: Dos projetos 1 ao 7
- 🏷️ **Badges Identificadoras**: Aula, Atividade ou Projeto Final
- 🏗️ **Tags Tecnológicas**: HTML5, CSS3, JavaScript, etc.
- 📝 **Descrições Detalhadas**: Contexto e objetivos de cada projeto
- 🔗 **Links Diretos**: Acesso rápido a cada projeto

## 🛠️ Tecnologias Utilizadas na Página Principal

### Front-End:
- **HTML5** - Estrutura semântica avançada
- **CSS3** - Variáveis CSS, Grid, Flexbox, animações
- **JavaScript Vanilla** - Navegação suave e interatividade
- **Font Awesome 6.4.0** - Ícones modernos

### Design Responsivo:
- **CSS Grid** - Layout principal dos projetos
- **Flexbox** - Alinhamento e distribuição
- **Media Queries** - Breakpoints para diferentes dispositivos
- **Unidades Relativas** - Para melhor escalabilidade

### Performance:
- **CSS Interno** - Tudo em um único arquivo para fácil deploy
- **JavaScript Otimizado** - Sem dependências externas
- **Imagens Otimizadas** - Para rápido carregamento

## 📚 Progressão dos Projetos no Curso

| # | Aula | Projeto | Conceitos Principais | Nível |
|---|------|---------|---------------------|-------|
| 1 | Aula 1 | Cinema e Trilhas Sonoras | HTML básico, CSS interno | Iniciante |
| 2 | Aula 2 | Portfólio Básico | Estrutura HTML, tags semânticas | Básico |
| 3 | Aula 3 | Portfólio com Flexbox | CSS interno, layout responsivo | Intermediário |
| 4 | Aula 4 | Portfólio com CSS Externo | Separação HTML/CSS, arquivos externos | Intermediário |
| 5 | Aula 5 | Portfólio Aprimorado | Cores personalizadas, seletores CSS | Intermediário |
| 6 | Projeto Final | Projeto Final Alura | Integração total, JavaScript | Avançado |
| 7 | Extra | Meu Portfólio Pessoal | Carrossel, múltiplos arquivos | Avançado |

## 🚀 Como Usar Este Repositório
### Para Desenvolvedores:
1. **Estude a estrutura** da página principal em `index.html`
2. **Analise a organização** dos projetos em `atividades_do_curso/`
3. **Compare a evolução** do código entre as diferentes aulas
4. **Adapte conceitos** para seus próprios projetos

## 📱 Responsividade

### Breakpoints Implementados:
- **Desktop (≥1024px)**: Layout com múltiplas colunas, navegação completa
- **Tablet (768px-1023px)**: 2 colunas, tipografia ajustada
- **Mobile (≤767px)**: Single column, navegação simplificada

### Features Responsivas:
- ✅ Menu de navegação adaptável
- ✅ Grid de projetos responsivo
- ✅ Tipografia escalável
- ✅ Botões otimizados para touch
- ✅ Imagens responsivas

## ⚙️ Funcionalidades JavaScript

### Navegação:
```javascript
// Scroll suave para âncoras
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
});
```

### Rastreamento de Seção:
- Detecta automaticamente a seção visível
- Atualiza o link ativo na navegação
- Feedback visual para o usuário

### Animações dos Cards:
- Delay escalonado para efeito cascata
- Transições suaves no hover
- Elevação e mudança de borda

## 🛡️ Proteção de Direitos e Imagem

### Aviso Importante:
As imagens pessoais contidas nos projetos são protegidas por direitos autorais. É estritamente proibido:

- ❌ Usar para fins comerciais
- ❌ Reproduzir sem autorização
- ❌ Modificar ou manipular
- ❌ Usar em treinamento de IA

### Conformidade Legal:
- ✅ Lei de Direitos Autorais (9.610/98)
- ✅ Direito à própria imagem (CF Art. 5º, X)
- ✅ LGPD - Proteção de dados pessoais

### Denúncia de Uso Indevido:
Reporte para: `vieirarayssa207@gmail.com`

## 👩‍💻 Autoria e Créditos

### Desenvolvedora:
**Rayssa Vieira** - Estudante de Desenvolvimento Web

### Projetos do Curso:
- **Curso**: HTML e CSS - Alura
- **Período**: 2025
- **Finalidade**: Aprendizado e portfólio educacional

### Página de Portfólio:
- **Desenvolvida por**: Rayssa Vieira
- **Finalidade**: Consolidação e apresentação dos projetos
- **Tecnologias**: HTML5, CSS3, JavaScript puro

### Contato:
- **GitHub**: [@Vieirarayssa207](https://github.com/Vieirarayssa207)
- **Email**: vieirarayssa207@gmail.com

## 📄 Licença e Termos de Uso

### Para a Página Principal (`index.html`):
- ✅ Pode ser usada como referência para estudo
- ✅ Conceitos podem ser adaptados em projetos próprios
- ✅ Código pode ser analisado para aprendizado

### Para os Projetos do Curso (`atividades_do_curso/`):
- ✅ São trabalhos desenvolvidos durante curso da Alura
- ✅ Servem como demonstração do progresso de aprendizado
- ✅ Podem ser estudados para entender conceitos ensinados

### Restrições:
- ❌ Não copiar integralmente para outros projetos
- ❌ Não remover créditos ou informações de autoria
- ❌ Não usar imagens pessoais sem autorização expressa

## 🙏 Agradecimentos

- **Alura** pelo curso estruturado e conteúdo de qualidade
- **Instrutores** pela orientação durante o aprendizado
- **Comunidade Dev** pelo compartilhamento de conhecimento
- **Ferramentas modernas** que facilitam o desenvolvimento web

---
**📅 Última Atualização**: 2025  
**✅ Status**: Concluído e Funcional  
**📱 Responsivo**: Totalmente Testado  
**🎯 Objetivo**: Portfólio Educacional e Demonstração de Habilidades
---

<div align="center">

### 🌟 **Se este portfólio for útil para seu aprendizado, considere dar uma estrela!**

**Nota Técnica:** Esta página (`index.html`) foi criada para consolidar e apresentar os projetos do curso. Os projetos individuais mantêm sua estrutura original conforme desenvolvidos durante as aulas.

</div>

---
