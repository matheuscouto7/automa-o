/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar uma Zona Dns', () =>{
    loginPage()
    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('#liDNS > .ng-binding').click()
    cy.get('h4 > .ng-scope').click()
    cy.get('#domain_name').type('matheus')
    cy.get('#group_name').type('teste')
    // cy.get('.btn-success').click()
})
