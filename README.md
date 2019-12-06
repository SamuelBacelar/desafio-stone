# Desafio técnico Stone - Front end

Projeto realizado para o desafio técnico de front end da Stone Pagamentos.

## Primeiros passos
É necessário uma instância do **MongoDB** para rodar esse projeto.

É possível instalar o **MongoDB** diretamente na sua máquina ou executar um container **Docker**.

Caso deseje iniciar o **MongoDB** a partir de um container **Docker** (assumindo que já tenha o **Docker** instalado), execute o seguinte comando:

```
docker run -d -p 27017:27107 -v ~/data:/data/db mongo
```

É necessário baixar todas as dependências do projeto antes de executá-lo. Instale o **yarn**, vá até a pasta raiz do projeto e execute `yarn install`.

Para executar o projeto, basta rodar o comando `npm start` ou `yarn start`.

Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

O back end para ser usado em conjunto com este projeto encontra-se no seguinte repositório [https://github.com/SamuelBacelar/backend-stone](https://github.com/SamuelBacelar/backend-stone)
