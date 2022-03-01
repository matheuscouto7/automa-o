/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve Assiciar um IP a uma VM', () =>{
    loginPage()

    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(2) > .ng-binding').click()
    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(2) > .ng-binding').click()
    cy.wait(6000)
    cy.get('.filter-cell > .filter').select('Openstack 8')
    cy.get(`:nth-child(1) > [data-title="'ACTIONS' | translate"] > .btn-success`).click()
    cy.wait(6000)
    cy.get('#selectVm > .form-control').select('1808open')
    cy.get('#selectPrivateIp > .form-control').select('172.19.29.138')
    cy.wait(4000)
    cy.get('.modal-footer > .btn-success').click()
    cy.get('.confirm').click()
    cy.get('.modal-footer > .btn-success').click()
    cy.get('.confirm').click()
    
})
