# Music Connect - Frontend

Plataforma que conecta artistas e organizadores de eventos: perfis, feed, propostas de contratacao, chat e busca.

Ambiente de testes: https://music-frontend-orpin-sigma.vercel.app

## Funcionalidades

- Autenticacao e sessao com Better Auth, protegida por middleware do Next.js
- Perfis de artistas e organizadores, com seguir e ser seguido
- Feed com publicacoes e comentarios
- Propostas de contratacao, com pagina de detalhe e acompanhamento de status
- Chat entre usuarios, com atualizacao das mensagens em tempo quase real
- Busca de artistas e de oportunidades
- Tema claro e escuro
- Upload de imagens via Cloudinary

## Stack

- Next.js (App Router) e React com TypeScript
- Zustand para gerenciamento de estado
- Better Auth para autenticacao
- Tailwind CSS e PostCSS
- Deploy na Vercel, com CI no GitHub Actions

## Rodando localmente

```bash
git clone https://github.com/Music-Connect/Music-Connect-Frontend.git
cd Music-Connect-Frontend
npm install
cp .env.example .env.local
npm run dev
```

A aplicacao sobe em http://localhost:3000. E necessario ter o backend rodando ou apontar as variaveis de ambiente para a API publicada.

## Repositorios do projeto

- Frontend (este repositorio): aplicacao web em Next.js
- Backend: API em Fastify, Prisma e PostgreSQL
- Mobile: aplicativo em Flutter
