# Descrição do sistema:

O objetivo do sistema é ser uma comunidade onde seus usuários podem tanto mentorar quanto receberem mentoria de outros usuários com habilidades na área de tecnologia da informação.

## Stack Tecnológica:

    - Frontend: React.js/Typescript
    - Servidor: Node.js/Express.js
    - Banco de Dados: PostgreSQL
    - Testes de unidade: Jest/Testing-library
    - Testes de integração: MirageJS (mock API)
    - Testes de sistema: Cypress
    - Linter: Eslint/Prettier
    - CI/CD: Github Actions
    - Logging/Analytics: MixPanel (ou similar)

## Equipe:

    - Lucas Gonçalves Antunes Paiva - Fullstack
    - Victor Hugo Alves Miranda de Souza - Fullstack
    - Eduardo Henrique - Fullstack

## Escopo inicial:

    - Como usuário, quero fazer um cadastro na plataforma como mentor;
    - Como usuário, quero fazer um cadastro na plataforma como mentorado;
    - Como usuário, quero fazer um login na plataforma;
    - Como usuário, quero anunciar minhas skills;
    - Como usuário, quero poder pesquisar mentores;
    - Como usuário, quero poder conversar com meus mentores e mentorandos;
    - Como usuário, quero poder ver os próximos meetups;
    - Como usuário, quero poder pedir mentoria a mentores;
    - Como mentor, quero poder aceitar ou recusar mentorandos;
    - Como mentorando, quero poder ver as atividades planejadas pelo meu mentor;

# Sprint 1

## Tarefas:

<br>

### Tarefas de preparação de ambiente:

<br>

**Backend**:

- Iniciar projeto do backend com Express.js e Typescript (path: src/backend/)
- Integrar conexão com PostgreSQL no backend;
- Integrar Sequelize no backend;

**Frontend**:

- Iniciar projeto do frontend com React.js e Typescript (create-react-app); (path: src/frontend/)
- Configurar ESlint/Prettier no frontend;
- Integrar Jest/Testing-library no frontend;

**Estrutura**:

- Pesquisar e definir o padrão de projeto a ser usado no sistema com base na stack de tecnologias;

<br>

### Tarefas geradas pelas Histórias:

<br>

- Criar tela de cadastro e login no Figma (ou ferramenta de design semelhante);
- Criar tela de login no frontend;
- Criar tela de cadastro no frontend;
- Criar entidade de usuário no banco e no backend (de acordo com padrão de projeto escolhido);
- Criar API Express para cadastro de usuário (api/signup);
- Criar API Express para login de usuário (api/login);
