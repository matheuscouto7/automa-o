/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um Ip Publico', () =>{
    loginPage()
    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(2) > .ng-binding').click()
    cy.wait(7000)
    cy.get('.pull-left').click()
    cy.get(':nth-child(1) > .form-group > .form-control').select('Openstack 8')
    cy.wait(8000)
    cy.get(`[ng-if="requestIpCtrl.container.type == 'openstack' || requestIpCtrl.container.type == 'azure'"] > .form-group > .form-control`).select("matheus1603Open")
    cy.get(`[ng-if="requestIpCtrl.container.type == 'openstack'"] > .form-group > .form-control`).select('public-fip')
    // cy.get('.modal-footer > .btn-success').click()
})
