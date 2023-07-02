# Desafio de Processo Seletivo

Este repositório faz parte do  desafio do processo seletivo da empresa Clima Tempo.
Neste desafio, criei uma aplicação web com um backend Node.js(este repositório), um frontend Vue.js com Quasar, e integrei o Firebase Realtime Database.
O objetivo deste desafio é fornecer instruções claras para que os recrutadores possam executar o programa.

## Pré-requisitos

Antes de executar o programa, verifique se o seu ambiente de desenvolvimento atende aos seguintes requisitos:

- Node.js (v12 ou superior) instalado
- npm (gerenciador de pacotes Node.js) ou Yarn instalado
- Conta no Firebase com um projeto criado

## Configuração do Firebase

1. Crie um projeto no Firebase (se ainda não tiver um).
2. No console do Firebase, ative o Realtime Database.
3. Crie um arquivo `.env` em `clima-tempo-backend\src\searchWeatherAPI` (ou renomeie o arquivo `.env.example` para `.env`).
4. No arquivo `.env`, preencha as informações sensíveis necessárias, como as credenciais do Firebase.

## Configuração do Backend

1. Navegue até a pasta do backend: `clima-tempo-backend`.
2. Instale as dependências do projeto: execute `npm install` ou `yarn install`.
3. Navegue até o diretório `clima-tempo-backend\src\searchWeatherAPI`
3. Execute o seguinte comando para iniciar o servidor backend: `npx ts-node index.ts` 

O servidor backend será executado em `http://localhost:3030`.