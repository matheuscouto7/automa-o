/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve fazer o login', () =>{
    loginPage()
    cy.wait(300)
    cy.get('.navbar-minimalize > .fa').click()
    cy.get('#networkNav').click()
    cy.wait(300)
    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(3) > .ng-binding').click()
    cy.get('h4 > .ng-binding').click()

})
