/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um Ip Publico', () =>{
    loginPage()
    
     // da linha 7 ate a linha 10 é o processo para entrar no menu de ip publico
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav > .arrow').click()
    cy.get('.navbar-minimalize').click()
    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(2) > .ng-binding').click()
    // botão para solicitar o ip publico
    cy.get('.pull-left').click()
    // seleciona o container
    cy.get(':nth-child(1) > .form-group > .form-control').select('Tavora - AWS')
    // seleciona a região  
    cy.get(':nth-child(4) > .form-group > .form-control').select('Asia Pacific (Tokyo) - ap-northeast-1')
    // botão para solicitar ip publico
    cy.get('.modal-footer > .btn-success').click()
    cy.wait(3000)
    cy.get('.confirm').click()


})
