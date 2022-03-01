/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um disco orfão', () =>{
    loginPage()

    cy.get(`[ng-class="{active: main.activeRoute('storages')}"] > a`).click()
    cy.get('.filter-cell > .filter').select('Openstack 8')
    cy.get(`[style=""] > [data-title="'NAME_CONTAINER' | translate"]`).click()
    cy.get('h4.ng-binding > .btn.ng-binding').click()
    cy.get('.form-inline > :nth-child(1) > .form-control').type('couto2311')
    cy.get('.form-inline > :nth-child(2) > .form-control').type('50')
    cy.get('.form-inline > .btn-success').click()
    
})
