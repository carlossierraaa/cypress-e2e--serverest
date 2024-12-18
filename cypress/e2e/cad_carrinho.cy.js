import {faker} from '@faker-js/faker'

describe('Testes de criação de carrinho na API da Serverest', () => {
    let token;

    before(() => {
        cy.Login().then((response) => {
            expect(response.status).to.eq(200);
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


