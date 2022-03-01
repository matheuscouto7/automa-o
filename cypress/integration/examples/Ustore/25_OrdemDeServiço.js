/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar uma Ordem de Serviço', () =>{
    loginPage()

    cy.get(`[ng-class="{active: main.activeRoute('service_order')}"] > a > .nav-label`).click()
    cy.get('h4 > .ng-binding').click()
    cy.get('td > :nth-child(1) > .form-control').select('couto1111aws')
    cy.get(':nth-child(2) > #group_name').type('couto1101')
    cy.get(':nth-child(3) > #group_name').type('teste automatizado')
    cy.get(':nth-child(4) > #group_name').type('go')
    cy.get(':nth-child(5) > #group_name').type('show')
    cy.get(':nth-child(6) > #group_name').type('teste')
    cy.get(`.row > :nth-child(1) > .form-group > .form-control > #date-picker`).select('11')
    // cy.get('#id-name').should('be.visible')
    
})  
