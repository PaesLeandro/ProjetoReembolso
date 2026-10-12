# Projeto Sistema de Reembolso

Frontend de um sistema de reembolso desenvolvido durante o curso da Rocketseat, com React, TypeScript, Tailwind CSS e Vite.

## Funcionalidades

- Telas de login e cadastro.
- Formulário de solicitação com nome, categoria, valor e seleção de comprovante.
- Página de confirmação após o envio do formulário.
- Dashboard do gestor com listagem demonstrativa e paginação.
- Rotas para funcionários e gestores.

O projeto está em desenvolvimento. A sessão e os dados são simulados no frontend; autenticação, busca e envio dos comprovantes ao servidor ainda não estão implementados.

## Estrutura

- `web/index.html`: entrada da aplicação React.
- `web/src/pages/`: páginas da aplicação.
- `web/src/components/`: componentes reutilizáveis.
- `web/src/routes/`: rotas de autenticação, funcionário e gestor.
- `web/src/assets/`: ícones e imagens usados pelo frontend.
- `web/src/index.css`: configuração do Tailwind e estilos globais.
- `web/src/utils/`: categorias e funções auxiliares.

## Como executar

Com Node.js e npm instalados, execute na raiz do repositório:

```sh
npm install
cd web
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal. A instalação na raiz fornece `clsx` e `tailwind-merge`, usados pelo frontend.

## Build

Na pasta `web`:

```sh
npm run build
npm run preview
```

Para explorar os perfis simulados, ajuste `session.isAuthenticated` e `session.user.role` em `web/src/routes/index.tsx`. Os perfis disponíveis são `employee` e `manager`; o valor atual sem perfil exibe as telas de autenticação.

A versão inicial em HTML, CSS e JavaScript permanece no histórico do Git.
