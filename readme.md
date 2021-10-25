🖊️ API - JSON - Test API
API para base de dados de filmes e séries

 https://www.themoviedb.org
Manipular JSON

 http://jsonviewer.stack.hu
Testar Requisições

 http://resttesttest.com
Ícones do Material-UI

 https://material-ui.com/pt/components/material-icons/
📺 Projeto
Esse projeto trata-se de uma simples reprodução do NetFlix para estudo de React, não contem todas as funcionalidades.

Para a área de destaque e lista de filmes e séries foi usado a API do themoviedb.

📎 1. Criando e Adicionando Ícones
$ npx create-react-app netflixclone
$ cd netflixclone
$ npm install @material-ui/core @material-ui/icons
$ npm start
📎 2. Estrutura de arquivos e pastas
$ src
	$ components
		FeaturedMovie.css
		FeaturedMovie.js
		Header.css
		Header.js
		MovieRow.css
		MovieRow.js
	App.css
	App.js
	index.css
	index.js
	Tmdb.js
💻 App.js
A tela principal foi dividida em 03 componentes:

Cabeçario -
Destaque -
Lista de Filmes e Séries -
📎 ​Tmdb.js
Este arquivo contém a comunicação com a API do themoviedb.org que devolve um catalogo onde encontramos informações de filmes e séries.

📎 Header
Este componente serve apenas para compor a tela principal. Contem apenas o logo e ícone do usuário logado, não possui eventos.

📎 FeaturedMovie
Este componente é responsavel por mostrar um filme ou uma série em destaque.

Informando: pontuação, ano de lançamento, total de temporadas e uma breve descrição.

Toda vez que a página é carregada muda o destaque.

📎 MovieRow
Este componente é responsavel por mostrar as listas de:

Originais da netflix;
Recomendados trending;
Em alta melhores votados - top rated
Ação
Comédia
Terror
Romance
Documentários