/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('deve criar um Grupo', () =>{
    loginPage()
    cy.get('[ng-click="main.admin = !main.admin"]').click()
    cy.get('.active > .nav > :nth-child(2) > a').click()
    cy.get('.col-md-2 > .btn').click()
    cy.get('#group_name').type('matheus')
    cy.get('.modal-body > .box > .box-body > :nth-child(1) > :nth-child(1) >:nth-child(2) >.form-control').type('EBTuser')
    cy.wait(2000)
    cy.get('.dropdown-menu:first > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.get('#group_ip').type('2')
    cy.get('#group_cpu').type('1')
    cy.get(':nth-child(5) > .input-group').type('10')
    cy.get(':nth-child(6) > .input-group').type('50')
    cy.get(':nth-child(7) > .input-group').type('root')
    cy.get('.dropdown-menu>.active > .ng-binding').click()
    cy.get('.col-md-6.ng-binding > :nth-child(4) > input').click()
    // cy.get('.btn-success').click()

})
