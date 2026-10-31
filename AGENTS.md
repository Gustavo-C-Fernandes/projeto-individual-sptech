# AGENTS.md — Ninho dos Dragões

## 1. Visão geral

**Ninho dos Dragões** é o projeto individual do semestre (SPTech, curso ADS). É um site informativo sobre o universo dos dragões da franquia *Como Treinar o Seu Dragão*, com cadastro/login, conteúdo, um quiz sobre as raças de dragões e um dashboard com o desempenho do usuário.

- **Público:** fãs do tema que querem testar o conhecimento (estilo app de quiz).
- **Objetivo do quiz:** estimular o conhecimento sobre o universo dos dragões e classificar o usuário em níveis de fã.
- **Autor:** Gustavo, aluno que está desenvolvendo e vai apresentar o projeto. Ele precisa entender 100% do código (se não souber explicar algo, o projeto é zerado).

### Páginas (site multi-page, não one-page)
1. **Home** — header, menu, botão "Começar o quiz" e cards de Conteúdo / Quiz / Dashboard
2. **Cadastro**
3. **Login**
4. **Conteúdo** — informações sobre os dragões, com links internos por seção
5. **Quiz** — tela de início e tela de pergunta
6. **Dashboard** — acertos, erros, percentual de acerto, gráfico de barras e classificação do usuário

### Classificação do quiz (regra de negócio)
- Poucos acertos → **Iniciante**
- Cerca de metade dos acertos → **Intermediário**
- Todos os acertos → **Mestre dos Dragões**

(Faixas exatas definidas por Gustavo no código; não invente limites novos sem perguntar.)

---

## 2. Tecnologias

- **Front-end:** HTML, CSS e JavaScript puros (sem frameworks)
- **Back-end:** Node.js (API que já vem pronta do professor)
- **Banco de dados:** MySQL
- **Dashboard:** Chart.js
- **Base do projeto:** Web Data Viz
- **Prototipação:** Figma
- **Versionamento:** Git + GitHub (os commits são avaliados)
- **Gestão:** backlog no Excel (PP/P/M/G/GG → pontos Fibonacci), burndown e Trello

---

## 3. Comandos

> Confirme os nomes exatos dos scripts no `package.json` do projeto antes de rodar.

```bash
# instalar dependências
npm install

# subir a API/servidor
npm start

# acessar o banco (MySQL)
mysql -u <usuario> -p
```

Git (commits pequenos e frequentes, mensagens claras em português):

```bash
git add .
git commit -m "feat: tela de cadastro"
git push
```

---

## 4. Arquitetura

```
projeto/
├── src/            # API Node.js (caminho da API; estrutura fornecida, não alterar)
├── public/         # Front-end: páginas HTML, CSS, JS e imagens
│   ├── index.html
│   ├── cadastro.html
│   ├── login.html
│   ├── conteudo.html
│   ├── quiz.html
│   ├── dashboard.html
│   ├── css/
│   ├── js/
│   └── assets/
└── AGENTS.md
```

Fluxo: **página HTML → JavaScript (fetch) → API Node.js (`src/`) → MySQL**. O dashboard lê os resultados do quiz pela API e desenha os gráficos com Chart.js.

> A estrutura real das pastas segue a do repositório. Se divergir deste esquema, o repositório manda.

---

## 5. Padrões de desenvolvimento

### Visual
- **Paleta:** preto e vermelho (inspirada no Banguela, com a cauda vermelha)
- **Header** vermelho com logo e menu; conteúdo do header com `max-width: 1200px` centralizado
- **Cards** (Conteúdo, Quiz, Dashboard) feitos com **Flexbox**
- Aplicar **reset de estilo de links** (`a { text-decoration: none; color: inherit; }`) e estilizar os botões de forma consistente
- Site **multi-page**: cada tela em seu próprio arquivo HTML

### Código
- HTML semântico; CSS em arquivos separados; JavaScript em arquivos separados (evitar `style` e `script` inline)
- Nomes de variáveis, funções, classes e IDs **em português**, claros e consistentes (camelCase em JS)
- Código simples, no nível do que foi visto em aula: `function`, `if/else`, `while/for`, `switch/case`, `fetch`, manipulação do DOM
- Evitar recursos avançados (classes complexas, bibliotecas extras, padrões sofisticados) a menos que Gustavo peça
- Comentários curtos em português explicando **o porquê** de cada bloco importante
- Validação de formulários (cadastro e login) feita em JavaScript, com mensagens claras ao usuário

### Banco de dados (MySQL)
- Modelagem e criação das tabelas feitas por Gustavo (relacionamentos, constraints e `CHECK` seguindo a convenção do professor)
- Scripts SQL em arquivo próprio, versionado no repositório

---

## 6. Cuidados e restrições

- **NÃO alterar a estrutura da API** recebida do professor e **não adicionar nada a mais nela**. O projeto se adapta à API, não o contrário. Não criar rotas, controllers ou arquivos novos na API sem Gustavo pedir explicitamente.
- **Tema:** conteúdo informativo e adequado. Nada de temas proibidos ou polêmicos.
- **Não inventar conteúdo** sobre a franquia (raças, características, fatos). Se não tiver certeza, avisar e pedir a Gustavo para conferir.
- **Não instalar dependências** nem trocar a stack sem perguntar.
- **Não apagar nem sobrescrever** arquivos de outras telas; alterar só o que foi pedido.
- Nunca colocar senhas, `.env` ou credenciais do banco no código nem no repositório.
- O projeto deve aplicar conteúdo de todas as matérias (TI, Banco de Dados, Algoritmo, Arquitetura) e algum cálculo/conteúdo de Matemática do reforço (ex.: frações/percentual no dashboard).

---

## 7. Regra geral

Este projeto é **individual** e Gustavo precisa saber explicar tudo. Portanto, o agente deve:

1. **Explicar antes e depois** de alterar código: o que mudou, por quê e como funciona, em linguagem simples, passo a passo.
2. **Fazer uma tarefa de cada vez**, em mudanças pequenas e fáceis de entender, em vez de entregar o projeto inteiro de uma vez.
3. **Entregar código completo e pronto para usar** em cada mudança (arquivo inteiro ou trecho com localização exata), sem deixar lacunas.
4. **Quando Gustavo disser que quer aprender a fazer sozinho**, guiá-lo como um professor (explicação + instruções para ele escrever o código) em vez de entregar a solução pronta.
5. **Preferir a solução mais simples** que atenda ao requisito, compatível com o nível da disciplina.
6. **Registrar no diário de prompts:** ao final de cada tarefa, sugerir a entrada do diário no formato abaixo, para Gustavo copiar:

```
Contexto:
Prompt Original:
Prompt Otimizado:
Decisão Técnica:
```

7. Em caso de dúvida sobre requisito, tema ou estrutura da API, **perguntar antes de assumir**.
