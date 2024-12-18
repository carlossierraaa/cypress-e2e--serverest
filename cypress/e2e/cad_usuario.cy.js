

const options = { env: { snapshotOnly: true } }

describe('Cadastro de usuário na API ServeRest', options, () => {
  // beforeEach(() => {
  //   // Deletar todos os usuários antes de cada teste
  //   cy.deletarTodosUsuarios();
  // });
    it('Deve cadastrar um novo usuário com sucesso', () => {
      const novoUsuario = {
        nome: 'João da Silva',
        email: `joao${Date.now()}@teste.com`,
        password: '123456',
        administrador: 'true'
      };
  
      // Usando o comando customizado para cadastrar o usuário
      cy.cadastrarUsuario(novoUsuario).then((responseBody) => {
        // Validando o retorno da API
        expect(responseBody.message).to.eq('Cadastro realizado com sucesso');
        expect(responseBody._id).to.not.be.null;
      });
    });
  });