/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um Flavor', () =>{
    loginPage()
    cy.get(`[ng-class="{active: main.activeRoute('flavors')}"] > a`).click()
    cy.get('.col-md-9 > .btn').click()
    cy.wait(500)
    cy.get('#container').select('Openstack d', {force: true})
    cy.get('#name').type('Matheus Flavor')
    cy.get('#container').select('Openstack d', {force: true})
    cy.get(`[ng-show="cFlavorCtrl.selectedContainer.type == 'openstack' || cFlavorCtrl.enterpriseName=='Mob' || cFlavorCtrl.enterpriseName=='Algar Telecom'"]`).type('5')
    cy.get('.modal-footer > .btn-success').click()
})
