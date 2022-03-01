/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar uma VPN', () =>{
    loginPage()

    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('#liVPN > a').click()
    cy.get(':nth-child(3) > .box-header > .col-md-12 > .row > h4 > .btn').click()
    cy.get('.col-md-8 > :nth-child(2) > .form-control').select('azure')
    cy.get('.row > .form-group > .form-control').select('couto1606')
    cy.get('#vpn-region-azure').select('Brazil South')
    cy.get('#domain_name').type('couto2311')
    cy.get(':nth-child(13) > .form-control').type('BHU*nji9')
    cy.get(':nth-child(14) > .btn').click()
    
    
})
