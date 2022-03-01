/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um hosts', () =>{
    loginPage()
     
    cy.get('.navbar-minimalize').click()
    cy.get(`[ng-class="{active: main.activeRoute('hosts')}"] > a`).click()
    cy.get('h4 > .btn').click()
    cy.wait(2000)
    cy.get('#host-container').select('1')
   
})
