/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um Par de chave', () =>{
    loginPage()
    // processo para entrar no menu de redes e ir ate a par de chaves, ate a linha 10
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav > .arrow').click()
    cy.get('.navbar-minimalize').click()
    cy.get('.active > .nav > :nth-child(4) > .ng-binding').click()
    cy.get(`[ng-disabled="main.isReadOnly() || !main.hasPermission(257011)"]`).click()
    cy.get('.col-md-8 > :nth-child(2) > .form-control').select('Tavora - AWS')
    cy.wait(2000)
    cy.get('#network-vdcs').select('coutoaws1410')
    cy.get(`[ng-show="createKeyPairCtrl.newKeyPair.container.type == 'aws' || createKeyPairCtrl.newKeyPair.container.type == 'ibm'"] > .form-control`).select('Asia Pacific (Tokyo) - ap-northeast-1')
    cy.get('#key_name').type('matheuscouto0111')
    cy.get('.btn-success').click()
    // depois de criado ele apaga o par de chave
    cy.wait(2000)
    cy.get('[data-title-text="Nome"] > .filter-cell > .input-filter').type('matheuscouto0111')
    cy.get('.align-center > .btn > .fa').click()
    cy.wait(2000)
    cy.get('.confirm').click()
    cy.get('.confirm').click()

}) 