/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um Workflows', () =>{
    loginPage()

    cy.get('[ng-if="main.hasRole(991) || main.hasRole(999)"][style=""] > a').click()
    cy.get('h4 > .ng-binding').click()
    cy.get('#name').type('couto2311')
    cy.get('#description').type('teste')
    cy.get(':nth-child(3) > .form-control').select('Uma vez na semana')
    cy.get('[ng-if="createWorkFlowCtrl.intervalSelected.key == 3"] > .form-control').select('Sábado')
    cy.get(`ng-model=(".createWorkFlowCtrl > .selectedTime"`).click()
    
    
})
