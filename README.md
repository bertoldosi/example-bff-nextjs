# Search music

> Aplicação em React, utilizando [Next.js](https://nextjs.org/) para server-side render e rotas do SPA e [express](http://expressjs.com/) para a parte de sessão.

Tecnologias usadas no projeto:

- Desenvolvimento
  - [React](https://pt-br.reactjs.org/)
  - [SASS](https://sass-lang.com/)
  - [Next.js](https://nextjs.org/)
  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/pt-br/)

## Como instalar

_É recomendado que você possua o [NVM](https://github.com/nvm-sh/nvm) instalado, pois essa ferramenta auxilia na instalação e configuração do Node.js._

### Configurando o Node.js

Com **NVM**:

No terminal, na raiz do projeto:

```bash
nvm use #instala e fixa a versão do Node.js baseado no arquivo .nvmrc na raiz do projeto
```

Sem **NVM**:

No arquivo `.nvmrc` existe a versão do **Node.js** usada no projeto. Instale-a manualmente através do site do **Node.js**.

### Instalando pacotes

Após estar conectado na **VPN**, rode o comando na raiz do projeto:

```bash
npm install
```

## Rodando o projeto e alguns comandos

Comandos disponíveis na raiz do projeto:

```bash
npm run dev
# Inicia a aplicação em modo desenvolvedor
```

```bash
npm run start
# Inicia a aplicação em modo produção
```

Agora basta acessar
http://localhost:3000

## Estrutura de diretórios

```bash
┌── src	# Pasta que comportará as principais funcionalidades
│    ├── api # Funcionalidades para realização de requests
│    ├── components	# Todos os components usados na aplicação
│    ├── lib # Bibliotecas facilitadoras
│    │  └── axios-instance-local # Responsável por criar a instancia que fará as requests internas
│    ├── pages # Estrutura de páginas baseada na arquitetura do Next.js
│    └── styles # Pasta que comportará nossos estilos globais
│        └── global.scss # Nosso estilo global
├── pages # Estrutura de páginas baseada na arquitetura do Next.js
├── public # Pasta que será exposta após build, para arquivos que serão exportáveis
├── server # Configuração do Server Side Rendering com Next.js e Express
│   ├── routes	# Rotas de api externa
│	└── utils	# Utilitários do servidor
│       └── axios-instances-external # Responsável por criar a instancia que fará as requests externas
└── next.config.js	# Arquivo de configurações do Next.js
```

## Estrutura do Servidor (Back-for-front)

O nosso BFF tem como responsabilidade:

- Mediar todas as requisições pedidas pelo client, adicionando uma camada a mais de segurança e confiabilidade nas requisições feitas aos nossos serviços.

---

`Desenvolvido por Matheus Bertoldo!`
