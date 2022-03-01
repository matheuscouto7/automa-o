/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar uma VPN', () =>{
    loginPage()
// precisa criar antes o virtual private gateawy e 
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav > .arrow').click()
    cy.get('.navbar-minimalize').click()
    cy.get('#liVPN > a').click()
    cy.get('[ng-controller="VpnsAwsController as vpnsAwsCtlr"] > :nth-child(3) > .box-header > .col-md-12 > .row > h4 > .btn').click()
    cy.get('.col-md-8 > :nth-child(2) > .form-control').select('Tavora - AWS')
    cy.get('#vpn-region-aws').select('South America (São Paulo')
    cy.get('#domain_name').type('teste')
    
})
