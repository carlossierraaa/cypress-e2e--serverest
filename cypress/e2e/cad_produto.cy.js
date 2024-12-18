import { faker } from '@faker-js/faker'

describe('Testes de criação de produto na API da Serverest', () => {
    let token;
   
  
    before(() => {
      cy.Login().then((response) => {
        expect(response.status).to.eq(200); // Verifica se o login foi bem-sucedido
        token = response.body.authorization; // Armazena o token
      });
    });
  
    it('Deve criar um novo produto com sucesso', () => {
      const productData = {
        nome: faker.random.words(2),
        preco: 100,
        descricao: 'Descrição do produto teste',
        quantidade: 10
      };
  
      cy.createProduct(token, productData).then((response) => {
        expect(response.message).to.eq('Cadastro realizado com sucesso');
        expect(response._id).to.exist; // Verifica se o ID do produto foi retornado
      });
    });
  });