// Nome de Usuário do GitHuv
const username = 'PirataZang';
// Token
const token = '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';
// Div onde será carregada os Dados do Repositório
const repoDetailsContainer = document.getElementById('repoDetails');

// 1. Obter informações do usuário
fetch(`https://api.github.com/users/${username}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

  .then(response => response.json())
  .then(user => {
    // 2. Obter todos os repositórios do usuário
    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
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
          repoLinkElement.id = 'link'
          repoLinkElement.target = '#';
          repoLinkElement.textContent = 'Ver no GitHub';

          // Adicione os elementos ao container
          repoDetailsContainer.appendChild(reposDiv);
          reposDiv.appendChild(repoNameElement);
          reposDiv.appendChild(repoDescriptionElement);
          reposDiv.appendChild(repoLinkElement);

          // Carrega no Console os Nome dos Reposítório
          console.log(reposi.name);
        });
      })
      .catch(error => console.error('Erro ao obter repositórios:', error));
  })

  .catch(error => console.error('Erro ao obter informações do usuário:', error));