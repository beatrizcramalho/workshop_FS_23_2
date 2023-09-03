/*
Fábrica de Software
QA - Desafio Final pt.2
Beatriz da Costa Ramalho 
*/

describe ('Cenário 2 - Fazer logout do site.', () => {
    it('Caso 2A: Fazer logout.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //A pré-condição parar fazer logout é que o usuário esteja autenticado no site.

        cy.get('#react-burger-menu-btn').click()
        /*
        Aqui utilizei o seletor que consegui pegar através da lupa no próprio Cypress,
        pois não consegui o resultado através das outras formas que pesquisei.
        */
        cy.contains('Logout').click()
    })
    //Logout realizado com sucesso.
    
})