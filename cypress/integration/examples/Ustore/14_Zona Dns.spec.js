/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar uma Zona Dns', () =>{
    loginPage()
   
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav > .arrow').click()
    cy.get('.navbar-minimalize').click()
    cy.get('#liDNS > .ng-binding').click()
    cy.get('[ng-click="dnsZonesCtrl.openCreateAwsDnsModal()"]').click()
    cy.wait(15000)
    cy.get('.col-md-8 > :nth-child(2) > .form-control').select('Tavora - AWS')
    cy.get('#domain_name').type('teste.com')
    cy.get('#group_name').type('teste')

})
