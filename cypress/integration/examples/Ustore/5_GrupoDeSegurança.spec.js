/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('deve criar uma Grupo de Segurança', () =>{
    loginPage() 

    cy.intercept('GET', 'http://10.0.50.22/ucloud/rest/container/name').as('getContainer')
    cy.intercept('GET', 'http://10.0.50.22/ucloud/rest/network').as('getNetwork')
    cy.intercept('GET', 'http://10.0.50.22/ucloud/rest/vdc/listLight').as('getlistLight')

    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav > .arrow').click()
    cy.get('.navbar-minimalize').click()
    cy.get('.active > .nav > :nth-child(3) > .ng-binding').click()
    cy.get('h4 > .ng-binding').click()
    cy.wait('@getContainer').its('response.statusCode').should('eq', 200)
    cy.wait(200)
    cy.get('.col-sm-12 > :nth-child(2) > .form-control').select('AWS - CoutoMatheus')
    cy.wait('@getlistLight').its('response.statusCode').should('eq', 200)
    cy.get('#network-vdcs').select('AWS - COUTOMATHEUS')
    cy.get(':nth-child(4) > .form-control').select('EU (Ireland) - eu-west-1')
    //cy.wait(600)
    cy.wait('@getNetwork').its('response.statusCode').should('eq', 200)
    cy.get(':nth-child(6) > .form-control').select('coutoaws2208')
    cy.get('#group_name').type('matheus')
    cy.get('#group_description').type('text')
    cy.get('.active > .box > .box-header > h4 > .btn').click()
    cy.get('.active > .box > .box-body > .table > tbody > .ng-scope > :nth-child(1) > .input-group > .form-control').select('All Protocols')
    cy.get('.modal-footer > .btn-success').click()
    
})

it('teste do comando Verficicar task', function(){
    cy.login('root', 'BHU&nji81q2w3e!')

    //var vm_name = 'Teste_automatizado_azure'
    var task_name = 'Criando grupo de segurança '
    var task_element = '- '
    var task_response = 'Failed'
    // Selecionar VM

    cy.verificar_task(task_name, task_element, task_response) 
})

