Cypress.Commands.add('cadastrarUsuario', usuario => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    body: usuario,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    // Validação básica para garantir que o comando foi bem-sucedido
    expect(response.status).to.eq(201);
    return response.body;
  });
});


// Cypress.Commands.add('deletarTodosUsuarios', () => {
//   cy.request('GET', 'https://serverest.dev/usuarios').then((response) => {
//     expect(response.status).to.eq(200);
//     const usuarios = response.body.usuarios;

//     // Deleta cada usuário retornado pela API
//     usuarios.forEach((usuario) => {
//       cy.request({
//         method: 'DELETE',
//         url: `https://serverest.dev/usuarios/${usuario._id}`,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }).then((deleteResponse) => {
//         expect(deleteResponse.status).to.be.oneOf([200, 204]); // Sucesso ou sem conteúdo
//       });
//     });
//   });
// });



Cypress.Commands.add('Login', () => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login', 
    body: {
      email: Cypress.env('email'), 
      password: Cypress.env('password')
    }
})
})

Cypress.Commands.add('createProduct', (token, productData) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/produtos', 
    headers: {
      Authorization: token
    },
    body: productData
  }).then((response) => {
    expect(response.status).to.eq(201); // Verifica se o produto foi criado com sucesso
    return response.body; // Retorna o corpo da resposta
  });
});


Cypress.Commands.add('createChart', (token, productData) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/carrinhos', 
    headers: {
      Authorization: token
    },
    body: productData
  }).then((response) => {
    expect(response.status).to.eq(201); // Verifica se o carrinho foi criado com sucesso
    return response.body; // Retorna o corpo da resposta
  });
});


Cypress.Commands.add('deleteChart', (token) => {
  if (!token) {
      throw new Error('Token não foi gerado corretamente!');
  }

  cy.request({
      method: 'DELETE',
      headers: {
          Authorization: token
      },
      url: 'https://serverest.dev/carrinhos/cancelar-compra', 
  }).then((response) => {
      expect(response.status).to.eq(200); // Verifica se o carrinho foi deletado com sucesso
      return response.body; // Retorna o corpo da resposta
  });
});