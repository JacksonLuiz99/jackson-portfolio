# Portfólio — Jackson Luiz

Portfólio pessoal de Jackson Luiz, engenheiro de software front-end. A página apresenta trajetória profissional, habilidades, projetos, formação, certificados e canais de contato.

## Recursos

- Interface responsiva em página única, com navegação por seções.
- Conteúdo em português e inglês. O idioma inicial acompanha o navegador e a escolha fica salva no `localStorage`.
- Projetos organizados por categoria (pessoais, clientes e trabalho), com links para código ou aplicações quando disponíveis.
- Links diretos para os canais de contato.

## Tecnologias

Angular 22, TypeScript, Tailwind CSS 4 e SCSS. Os testes unitários usam Vitest.

## Executar localmente

É necessário ter Node.js e npm compatíveis com as dependências do projeto.

```bash
npm ci
npm start
```

Acesse `http://localhost:4200/`. O servidor atualiza a página após alterações no código.

## Comandos

| Comando | Função |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist/jackson-portfolio/browser/`. |
| `npm run watch` | Recompila em modo de desenvolvimento após alterações. |
| `npm test` | Executa os testes unitários com Vitest. |

## Onde atualizar o conteúdo

| Conteúdo | Arquivo |
| --- | --- |
| Experiência, formação, certificados e habilidades | [`src/app/data/profile.data.ts`](src/app/data/profile.data.ts) |
| Projetos e links associados | [`src/app/data/projects.data.ts`](src/app/data/projects.data.ts) |
| Canais de contato | [`src/app/data/contact.data.ts`](src/app/data/contact.data.ts) |
| Textos da interface em português e inglês | [`src/app/core/i18n/translations.ts`](src/app/core/i18n/translations.ts) |
| Cores e estilos globais | [`src/styles.css`](src/styles.css) |

Os componentes das seções ficam em `src/app/components/`. Ao alterar textos da interface, atualize as versões `pt` e `en`.

## Publicação

O repositório inclui [`vercel.json`](vercel.json), configurado para executar `npm run build` e publicar `dist/jackson-portfolio/browser` na Vercel.
