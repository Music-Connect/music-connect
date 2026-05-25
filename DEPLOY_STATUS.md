# Status de Deploy — Music Connect 🚀

*Registrado em 24/05/2026*

Este documento registra o status atual do sistema após as recentes integrações e correções, detalhando exatamente onde paramos e o que falta para lançarmos o sistema em produção.

## ✅ Concluído e Comitado (`stg` branch)
- **Chat 100% Funcional**: O botão no perfil cria/abre a conversa corretamente. A página de mensagens puxa dados do banco, identifica quem é o remetente/destinatário e tem layout full-page adaptado para web/mobile.
- **Segurança das Rotas do Backend**: Corrigidos hooks críticos de autenticação que estavam quebrando as rotas de *Notificações* e *Analytics* (Erro 401).
- **Bug do `getFollowers` Resolvido**: Erros com o Client do Prisma desatualizado foram consertados via regeneração do schema.
- **Filtros e Buscas**: Integração de `pg_trgm` no banco e rotas abertas ao público para pesquisas.
- **Sem URLs "Chumbadas"**: Todo o frontend usa a variável global de `NEXT_PUBLIC_API_URL`, garantindo que não vai quebrar ao ser hospedado na Vercel.

---

## ⏳ Pendente (O que falta para o deploy ser perfeito)

O sistema central está apto para subir, mas a revisão profunda de deploy detectou 3 pequenos "buracos" no frontend que precisam ser tapados antes dos usuários entrarem:

1. **Sino de Notificações Inativo**: A UI existe lá em cima e usa uma store (Zustand), mas *nenhuma rota* do frontend bate no `/api/notifications` do backend ainda. O dropdown abre sempre vazio e sem dados reais.
2. **Portfólio de Mídia é "Mocado"**: No `/profile` e no `/u/[id]`, existe uma seção "Portfólio / Destaques" que hoje renderiza apenas caixas cinzas escritas *"Mídia do Usuário"*. Isso precisa ser conectado ao banco (tabela de uploads ou URLs externas).
3. **Tela de Configurações sem Integração**: No `/settings`, os "switches" de ligar/desligar notificações por email e o botão de *"Excluir Conta"* estão só desenhados no layout. Eles não fazem requisições ao backend quando clicados.

---

## 🛠️ Próximos Passos
Se quisermos hospedar o sistema amanhã, temos duas opções:
1. Atacar rapidamente as três tarefas acima (Notificações, Portfólio, Configurações).
2. Esconder provisoriamente essas interfaces (desativar os botões/esconder os blocos cinzas) e realizar o Deploy apenas com o "Core" (Feed, Perfil, Propostas, Chat e Busca), deixando essas três features para uma "Versão 1.1".
