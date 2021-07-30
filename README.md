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

# Projeto Figma:

O sistema está sendo projetado usando o software Figma.

## Screenshots:

### LoginScreen:

![Figma-LoginScreen](https://user-images.githubusercontent.com/29798601/120911049-65ab1800-c65a-11eb-9648-76ad15036f15.png)

### RegisterScreen:

![Figma-RegisterScreen](https://user-images.githubusercontent.com/29798601/120911052-69d73580-c65a-11eb-9a62-064ed84fd502.png)

# Sprint 1

## Tarefas:

<br>

### Tarefas de preparação de ambiente:

<br>

**Backend**:

- [Iniciar projeto do backend com Express.js e Typescript (path: src/backend/)](https://github.com/eduhdm/podcodar-platform/issues/2)
- [Integrar conexão com PostgreSQL no backend;](https://github.com/eduhdm/podcodar-platform/issues/4)
- [Integrar Sequelize no backend;](https://github.com/eduhdm/podcodar-platform/issues/5)

**Frontend**:

- [Iniciar projeto do frontend com React.js e Typescript (create-react-app); (path: src/frontend/)](https://github.com/eduhdm/podcodar-platform/issues/1)
- [Configurar ESlint/Prettier no frontend;](https://github.com/eduhdm/podcodar-platform/issues/6)
- [Integrar Jest/Testing-library no frontend;](https://github.com/eduhdm/podcodar-platform/issues/7)

**Estrutura**:

- [Pesquisar e definir o padrão de projeto a ser usado no sistema com base na stack de tecnologias;](https://github.com/eduhdm/podcodar-platform/issues/8)

<br>

### Tarefas geradas pelas Histórias:

<br>

- [Criar tela de cadastro e login no Figma (ou ferramenta de design semelhante);](https://github.com/eduhdm/podcodar-platform/issues/9)
- [Criar tela de login no frontend;](https://github.com/eduhdm/podcodar-platform/issues/10)
- [Criar tela de cadastro no frontend;](https://github.com/eduhdm/podcodar-platform/issues/11)
- [Criar entidade de usuário no banco e no backend (de acordo com padrão de projeto escolhido);](https://github.com/eduhdm/podcodar-platform/issues/12)
- [Criar API Express para cadastro de usuário (api/signup);](https://github.com/eduhdm/podcodar-platform/issues/13)
- [Criar API Express para login de usuário (api/login);](https://github.com/eduhdm/podcodar-platform/issues/14)


# Sprint 2

## Histórias

### Como usuário, quero criar o meu perfil (Edu)
### Como usuário, quero anunciar minhas skills (Edu)
### Como usuário, quero anunciar as skills que desejo aprender (Edu)
**Tarefas:**
- Criar entidade de usuários no banco de dados
- Criar entidade de perfil no banco de dados
- Criar endpoint para cadastro de informações do perfil
- Criar endpoint para cadastro de skills que "Quero aprender"
- Criar endpoint para cadastro de skills que "Tenho domínio"
- Criar endpoint para listar todas essas informações do perfil e skills
- Criar frontend para exibir perfil e permitir a alteração e o salvamento desse perfil através dos endpoints acima
- 

### Como usuário, quero poder pesquisar mentores (Victor)
### Como usuário, quero poder pedir mentoria a mentores (Victor)
### Como mentor, quero poder aceitar ou recusar mentorandos (Victor)
**Tarefas:**
- Adicionar menu lateral no Dashboard para as telas de "Perfil" / "Meus mentores" / "Pesquisar mentores" / "Sprints"
- Criar endpoint para pesquisa de mentores
- Criar endpoint para usuário solicitar ser aprendiz de outro usuário
- Criar endpoint para listar solicitações de mentoria
- Criar endpoint para usuário aceitar/rejeitar outro usuário como seu aprendir
- Criar frontend para a tela de pesquisa de mentores e solicitação de mentoria
- Criar frontend para que usuário veja, aceite ou rejeite solicitações de mentoria que recebeu
### Como mentor, gostaria de adicionar sprints para as minhas mentorias (Lucas)
### Como mentor, gostaria de adicionar atividades para as minhas atividades (Lucas)
### Como aprendiz, gostaria de ver as informações da minha sprint (Lucas)
**Tarefas:**
- Criar formulário para cadastrar exercícios
- Criar formulário para cadastrar recursos para serem utilizados como base
- Criar entidade da Sprint no bd
- Criar endpoint para cadastro da Sprint
- Criar tela para visualizar sprint atual e exercícios
- Criar endpoint que retorna informações da sprint
- Criar endpoint para marcar exercícios como completos

## Estrutura do banco de dados do sistema no final da Sprint 2

![image](https://user-images.githubusercontent.com/29798601/127712636-2ddc152c-5b77-427a-a9e8-46b0f0424ef9.png)

