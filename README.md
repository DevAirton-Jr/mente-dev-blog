# 🧠 Mente Dev

> *"Software Engineering, Design Systems & Coffee."*

Bem-vindo ao repositório do **Mente Dev**. Este projeto não é apenas um blog, é um **portfolio de engenharia de software** vivo. Aqui eu centralizo meus artigos técnicos, apresento meus projetos open-source e compartilho as últimas novidades que moldam minha carreira como desenvolvedor.

---

## 🏗️ Engenharia & Arquitetura

O **Mente Dev** foi construído com uma filosofia de **Performance First** e **Developer Experience (DX)**. A arquitetura foi desenhada para ser estática, segura e extremamente rápida, eliminando a dependência de bancos de dados tradicionais em favor de uma abordagem baseada em arquivos (Git-based CMS).

### Destaques Técnicos

*   **Markdown-as-Database**: Todo o conteúdo (Artigos, Notícias, Projetos) vive em arquivos Markdown (`.md`) com Frontmatter. Isso permite versionamento real do conteúdo via Git, backups automáticos e edição offline.
*   **Static Generation (SSG)**: O Next.js compila todas as páginas de conteúdo no build-time. O resultado é um **Time to First Byte (TTFB)** quase instantâneo e SEO perfeito.
*   **Segurança Ofensiva**: O projeto passou por uma auditoria de segurança rigorosa.
    *   Sanitização de HTML via `isomorphic-dompurify` para mitigar XSS.
    *   Proteção contra *Reverse Tabnabbing* em todos os links externos.
    *   Headers de segurança configurados.
*   **Design System Moderno**: UI construída com TailwindCSS v4 e animações fluídas via Framer Motion. O tema Escuro/Claro é persistente e respeita a preferência do sistema.

---

## � Stack Tecnológica

Um mergulho nas tecnologias que alimentam este projeto:

| Camada | Tecnologia |
| :--- | :--- |
| **Core** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Content Processing** | `gray-matter` + `remark` + `remark-html` |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) |
| **Sanitização** | `isomorphic-dompurify` |
| **Assets** | [Devicon CDN](https://devicon.dev/) (Logos SVG Reais) |

---

## 🎨 Features de UX/UI

*   **Splash Screen**: Animação de entrada estilo "Terminal Cyberpunk" com efeito de digitação (`> initializing system...`).
*   **3D Tech Stack**: Exibição interativa das tecnologias que domino (Java, Python, AWS, React, MySQL) com efeitos de rotação e escala.
*   **Glassmorphism**: Elementos de UI translúcidos (Navbar, Cards) para uma estética moderna e limpa.

---

## 📂 Estrutura do Código

Para os curiosos, o projeto segue uma organização modular e escalável:

```bash
/app          # Rotas e Pages (Next.js App Router)
/components   # Componentes React atômicos e reutilizáveis
/content      # O "Banco de Dados" em Markdown
/lib          # Lógica de processamento de dados (CMS)
/public       # Assets estáticos
```

---

## � Status de Segurança

✅ **Auditado**: Este projeto foi validado contra as vulnerabilidades web mais comuns (OWASP Top 10) e conta com relatórios de conformidade.

---

© 2026 **Mente Dev**.
