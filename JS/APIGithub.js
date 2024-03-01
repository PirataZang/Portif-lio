// Nome de Usuário do GitHuv
const username = 'PirataZang';
// Div onde será carregada os Dados do Repositório
const repoDetailsContainer = document.getElementById('repoDetails');

// 1. Obter informações do usuário
fetch(`https://api.github.com/users/${username}`, {
})

  .then(response => response.json())
  .then(user => {
    // 2. Obter todos os repositórios do usuário
    fetch(`https://api.github.com/users/${username}/repos`, {
    })
      .then(response => response.json())

      .then(repos => {
        // console.log('Informações do usuário:', user);
        console.log('Perfil:', user.login);
        const QntRepos = +user.public_repos;
        console.log('Quantidade Repositorios Publicos:', QntRepos);

        // como o Repos não é um item solido e sim vários Itens, é necessário usar o Foreach para Percorrer os 
        //dados e puxar os itens Name, Description e URL
        repos.forEach(reposi => {

          // Cria a Div
          const reposDiv = document.createElement('div');
          reposDiv.id = 'divRepos';

          // Cria um H2 com o Nome do Repositório
          const repoNameElement = document.createElement('h2');
          repoNameElement.textContent = reposi.name;
          repoNameElement.id = 'TitleRepos';

          // Cria um paragrafo contendo a Descrição do Paragrafo
          const repoDescriptionElement = document.createElement('p');
          repoDescriptionElement.textContent = reposi.description;
          repoDescriptionElement.id = 'ReposDescription'

          // Cria um Link de acesso ao Repositório
          const repoLinkElement = document.createElement('a');
          repoLinkElement.href = reposi.html_url;
          repoLinkElement.id = 'link';
          repoLinkElement.target = '#';
          repoLinkElement.textContent = 'Ver no GitHub';

          const repoLinkHomepage = document.createElement('a');
          repoLinkHomepage.href = reposi.homepage;
          repoLinkHomepage.id = 'homepage';
          repoLinkHomepage.target = '#';
          repoLinkHomepage.textContent = "Acessar Página";

          // Adicione os elementos ao container
          repoDetailsContainer.appendChild(reposDiv);
          reposDiv.appendChild(repoNameElement);
          reposDiv.appendChild(repoDescriptionElement);
          reposDiv.appendChild(repoLinkElement);
          if(reposi.homepage){
            reposDiv.appendChild(repoLinkHomepage);
          }

          // Carrega no Console os Nome dos Reposítório
          console.log(reposi.name);
        });
      })
      .catch(error => console.error('Erro ao obter repositórios:', error));
  })

  .catch(error => console.error('Erro ao obter informações do usuário:', error));
