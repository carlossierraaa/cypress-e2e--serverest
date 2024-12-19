import {faker} from '@faker-js/faker'

describe('Testes de criação de carrinho na API da Serverest', () => {
    let token;

    before(() => {
        const novoUsuario = {
            nome: 'João da Silva',
            email: `joao${Date.now()}@teste.com`,
            password: '123456',
            administrador: 'true'
          };
    
          cy.cadastrarUsuario(novoUsuario);
          cy.Login(novoUsuario).then((response) => {
            expect(response.status).to.eq(200); // Verifica se o login foi bem-sucedido
            token = response.body.authorization; // Armazena o token
            expect(token).not.to.be.undefined;   // Validação extra do token
            cy.log('Token gerado:', token);      // Loga o token no Cypress
            cy.deleteChart(token);
        });
    });

    it('Deve criar um novo carrinho com sucesso', () => {
        const productData = {
            produtos: [
                {
                    idProduto: 'BeeJh5lz3k6kSIzA',
                    quantidade: 1
                }
            ]
        };

        cy.createChart(token, productData).then((response) => {
          expect(response.message).to.eq("Cadastro realizado com sucesso");
        });
    });
});


