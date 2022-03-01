/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um Flavor', () =>{
    loginPage()
    
    cy.get('.navbar-minimalize').click()
    cy.get(`[ng-class="{active: main.activeRoute('flavors')}"] > a`).click()
    cy.get('h4 > .ng-binding').click()
    cy.get('#container').select('Tavora - AWS')
    cy.get('#name').type('Coutoteste')
    cy.get('.modal-footer > .btn-success').click()
    cy.wait(2000)
    cy.get('.navbar-minimalize').click()
    cy.wait(1000)
    cy.get(`[ng-class="{active: main.activeRoute('tasks')}"] > a`).click()
    cy.get('.navbar-minimalize').click()
    cy.get(`[ng-class="{active: main.activeRoute('flavors')}"] > a`).click()
    cy.get('[data-title-text="Nome"] > .filter-cell > .input-filter').type('Coutoteste')
    cy.wait(100)
    cy.get('[ng-hide="flavor.isEditing == true"] > .ng-binding').click()
    cy.wait(100)
    cy.get('h4 > .btn-danger').click()
    cy.wait(1000)
    cy.get('.confirm').click()

})
