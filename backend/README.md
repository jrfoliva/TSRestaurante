# Comandos utilizados em ambiente de desenvolvimento.
yarn add typescript -D

yarn add express

yarn add @types/express -D

# Iniciar o projeto com typescript
yarn tsc --int

# Configura ts para inicialização dev
yarn add ts-node-dev -D

# Lembre-se de criar na chave scripts : {"dev": "ts-node-dev src/server.ts"}
yarn dev # inicia a aplicação.

# biblioteca para tratar erros express-async-errors
yarn add express-async-errors

# Cors libera a aplicação para acesso externo
yarn add cors
yarn add @types/cors -D #tipos do cors para ts.

# ORM prisma
yarn add prisma
yarn add @prisma/client
nxp prisma init

# Após criar a modelagem do banco
yarn prisma migrate dev

# Criptografar a senha - Instalar o bcryptjs e seus tipos
yarn add bcryptjs
yarn add @types/bcryptjs -D

# Jason Web Token - Instalando o JWT
yarn add jasonwebtoken
yarn add @types/jsonwebtoken -D

# Instalar dotenv
yarn add dotenv

# Instalar o multer para lidar com o path das imagens
yarn add multer
yarn add @types/multer --dev
