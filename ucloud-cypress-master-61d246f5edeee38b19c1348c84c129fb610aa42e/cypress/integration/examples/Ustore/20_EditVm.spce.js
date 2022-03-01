/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve editar uma vm', () =>{
    loginPage()

    cy.get('[ng-click="main.vm = !main.vm"]').click()
    cy.get(`[ng-class="{active: main.activeRoute('virtual-machines')}"] > .nav > :nth-child(1) > .ng-binding`).click()
    cy.wait(400)
    cy.get(':nth-child(4) > .text-left').click()
    cy.get(':nth-child(3) > .box-header > h4 > .btn').click()
    cy.get(':nth-child(1) > .form-group > .form-control').type('couto')
    cy.wait(400)
    cy.get('#snapshot-disks').select('minio_teste')    
    

})
