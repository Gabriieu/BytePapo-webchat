***CERTIFIQUE-SE DE POSSUIR NODE.JS INSTALADO NA SUA MÁQUINA**

## Primeiros passos
1. Primeiramente deve-se instalar as dependências utilizando o comando `npm install`
2. Crie o arquivo de variáveis de ambiente chamado `.env` na pasta raiz e preencha-o com as informações necessário conforme o modelo `.env.example`
**Obs: certifique-se que o banco de dados está criado.**
3. Em seguida utilize o comando `npm run typeorm migration:run -- -d ./src/data-source.ts` para criar a tabela no banco de dados.
4. Após concluídas as etapas anteriores, utilize o comando `npm run dev` para rodar a aplicação.
