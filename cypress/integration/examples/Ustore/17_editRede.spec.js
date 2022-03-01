/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve editar uma REDE', () =>{
    loginPage()
     
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav > .arrow').click()
    cy.get('.navbar-minimalize').click()
    cy.get('#networksNav').click()
    cy.get('#awsNetworksTable > tbody > :nth-child(3) > .text-center > .btn-default').click()
    cy.get(':nth-child(3) > .btn > .fa').click()
   
})
