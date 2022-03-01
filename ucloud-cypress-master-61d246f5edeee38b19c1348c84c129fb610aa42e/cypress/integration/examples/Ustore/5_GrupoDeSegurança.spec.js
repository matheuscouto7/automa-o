/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('deve criar uma Grupo de Segurança', () =>{
    loginPage() 
    cy.wait(300)
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav').click()
    cy.wait(320)
    cy.get(`[ng-class="{active: main.network}"] > .nav > :nth-child(3) > .ng-binding`).click()
    cy.get('h4 > .ng-binding').click()
    //cy.server= monitorar as requisições.
    cy.server()
    //serve para buscar a requisição.  
    cy.route('/ucloud/rest/vdc').as('vdc')
    cy.get('.col-md-8 > :nth-child(2) > .form-control').select('AWS - Couto')
    //serve para esperar a requisição.
    // cy.wait('@vdc' , {
        // responseTimeout: 10000
    // })
    cy.get('#network-vdcs').select('matheus1603Open')
    cy.get('#group_name').type('teste automatizado')
    cy.get('#group_description').type('sabadou')
    cy.get('.row > .box > .box-header > h4 > .btn').click()
    //para achar isso aqui embaixo, basta entrar f12 e procurar. 
    cy.get('.active > .col-md-12 > .row > .box > .box-body > .table > tbody > .ng-scope > :nth-child(1) > :nth-child(1) > :nth-child(1)').select('All Protocols')
    //cy.get('.modal-footer > .btn-success').click()
})
