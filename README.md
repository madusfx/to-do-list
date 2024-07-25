# To Do List

Bem-vindo ao projeto To Do List, criado para um desafio técnico. Este é um projeto Full Stack desenvolvido com React/Next.js no front-end e Node.js no back-end.

O projeto está disponível online [aqui](https://to-do-list-gamma-opal.vercel.app/). Se você quiser testar o projeto localmente, siga os passos abaixo:

## Configuração do Projeto Local

### 1. Configuração do Servidor

1. Instale as dependências com o comando:
   ```
   yarn install
   ```
2. Crie uma pasta .env e adicione as variáveis de ambiente seguindo o formato do arquivo .env.example. Inclua a URL do MongoDB e as credenciais do Nodemailer.
3. Inicie o servidor com o comando:
   ```
   node src/index.js
   ```

### 2. Configuração do Front-End

1. Instale as dependências com o comando:
   ```
   npm install
   ```
2. Crie uma pasta .env e adicione a variável de ambiente para a URL do Back-End (por exemplo, http://localhost:3001).
3. Inicie o front-end com o comando:
   ```
   npm run dev
   ```

O projeto estará disponível em http://localhost:3000.

## Tecnologias e Bibliotecas Utilizadas

### Front-End

- React.js
- Next.js
- Tailwind CSS
- React Hook Form
- Yup
- Axios
- Swiper
- ESLint e Prettier

### Back-End

- Node.js
- MongoDB
- bcryptjs
- JWT
- Nodemailer
- cors

## Observações sobre o Desenvolvimento

- Deploy: A maior dificuldade foi o deploy separado do Back-End e do Front-End e a integração de ambos. Para gerenciar isso, usei plataformas diferentes para o deploy e configurei variáveis de ambiente para controlar as URLs.
- Estilização: A estilização foi um desafio em alguns momentos, mas foi uma excelente oportunidade para revisar conceitos importantes que não usava há algum tempo.
- Back-End: Esperava que o Back-End fosse o maior desafio, mas consegui desenvolvê-lo com eficácia, integrando o MongoDB Atlas e utilizando a AWS para a conexão virtual.
- Experiência: O projeto foi muito interessante e enriquecedor. A experiência foi valiosa e espero enfrentar mais desafios semelhantes no futuro.
