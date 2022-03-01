/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve associar um Ip Publico', () =>{
    loginPage()
    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(2) > .ng-binding').click()
    cy.wait(400)
    cy.get('.filter-cell > .filter').select("Openstack 8")
    cy.get(`:nth-child(1) > [data-title="'ACTIONS' | translate"] > .btn-success`).click()
    cy.get(`[data-title="'ACTIONS' | translate"] > .btn-warning`).click()
    // cy.get('.confirm').click()





})
