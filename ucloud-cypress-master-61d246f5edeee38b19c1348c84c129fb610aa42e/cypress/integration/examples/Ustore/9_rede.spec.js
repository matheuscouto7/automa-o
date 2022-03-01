/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar uma Rede', () =>{
    loginPage()
    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('[ng-show="main.hasPermission(144002)"] > .ng-binding').click()
    cy.get('[ng-click="networks.openCreateNetworkModal()"]').click()
    cy.wait(5000)
    cy.get('#network-container').select('Openstack 8')
    cy.wait(9000)
    cy.get('#network-vdcs').select('matheus1603Open')
    cy.get('#selectNetworkType > .form-control').select('None')
    cy.get('#network-name').type('matheus')
    // cy.get('.btn-success').click()
})