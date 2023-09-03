/*
Fábrica de Software
QA - Desafio Final pt.2
Beatriz da Costa Ramalho 
*/

    
describe ('Cenário 1 - Autenticar no site.', () => {
    it('TC01A: Autenticar utilizando o login "standard_user."', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário autenticado com sucesso.

    it('TC01B: Autenticar utilizando o login "locked_out_user".', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário bloqueado e, por isso, não consegue realizar login.
    
    it('TC01C: Autenticar utilizando o login "problem_user".', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário consegue logar no site, mas o mesmo apresenta mau funcionamento.

    it('TC01D: Autenticar utilizando o login "performance_glitch_user".', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário autenticado com um certo delay.

    it('TC01E: Autenticar utilizando um login incorreto.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('Standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário inseriu o username errado.

    it('TC01F: Autenticar utilizando uma senha incorreta.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('Secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário inseriu a senha errada.

    it('TC01G: Autenticar sem utilizar senha.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário esqueceu de inserir o campo senha.

    it('TC01H: Autenticar sem utilizar o login.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário esqueceu de inserir o campo login.

    it('TC01I: Usuário tenta autenticar sem inserir login e senha.', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="login-button"]').click()
    })
    //Usuário esqueceu de inserir os campos login e senha.

})