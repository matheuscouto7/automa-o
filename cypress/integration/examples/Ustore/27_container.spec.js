/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar/apagar um Container', () =>{
    loginPage()
     
    cy.get('.navbar-minimalize').click()
    cy.get('#containerNav').click()
    cy.get('#connectContainerBtn').click()
    cy.get('#containerTypeDrop').select('AWS')
    cy.get('#containerName').type('testeaws')
    cy.get('#awsAccessKey').type('AKIA57RVLYCL3IR4KDWU')
    cy.get('#awsSecretKey').type('AKIA57RVLYCL3IR4KDWU',{force: true})
    cy.wait(200)
    cy.get('#connectContainer').click()
    cy.wait(8000)
    cy.get('h4 > .pull-right').click()
    cy.get('[style=""] > #containerNameRow').click()
    cy.get('[style="margin:1em;margin-right:0"] > .btn-danger').click()
    cy.get('.confirm').click()
})
