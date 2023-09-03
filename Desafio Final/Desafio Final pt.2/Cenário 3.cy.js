/*
Fábrica de Software
QA - Desafio Final pt.2
Beatriz da Costa Ramalho 
*/

describe ('Cenário 3 - Colocar um item no carrinho e finalizar a compra.', () => {
    it('Caso 3A: Adicionar um item ao carrinho.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        /*
        A pré-condição parar adicionar os itens ao carrinho e finalizar
        a compra é que o usuário esteja autenticado no site.
        */

        cy.contains('Sauce Labs Backpack').click()
        cy.contains('Add to cart').click()
    })
    //Um item adicionado ao carrinho com sucesso.

    it('Caso 3B: Adicionar mais um item ao carrinho.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Sauce Labs Backpack').click()
        cy.contains('Add to cart').click()
        /*
        A pré-condição desse teste é que o usuário esteja logado e que ainda
        esteja na página do produto que ele acabou de adicionar ao carrinho.
        */
        cy.get('[data-test="back-to-products"]').click()
        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.contains('Add to cart').click()
    })
    //Mais um item adicionado ao carrinho com sucesso.

    it('Caso C: Ir até o carrinho e conferir se os itens foram adicionados corretamete.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Sauce Labs Backpack').click()
        cy.contains('Add to cart').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.contains('Add to cart').click()
        /*
        A pré-condição desse teste é que o usuário esteja logado e que ainda
        esteja na página do produto que ele acabou de adicionar ao carrinho.
        */
        cy.get('.shopping_cart_link').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
    })
    //Carrinho conferido com sucesso.

    it('Caso D: Finalizar o pedido.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Sauce Labs Backpack').click()
        cy.contains('Add to cart').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.contains('Add to cart').click()
        cy.get('.shopping_cart_link').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
        //Pré-condições: ter itens adicionados ao carrinho corretamente.
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').click().type('Beatriz')
        cy.get('[data-test="lastName"]').click().type('Ramalho')
        cy.get('[data-test="postalCode"]').click().type('xxxxx-xxx')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"').click()
        //Compra finalizada com sucesso.

    })
})