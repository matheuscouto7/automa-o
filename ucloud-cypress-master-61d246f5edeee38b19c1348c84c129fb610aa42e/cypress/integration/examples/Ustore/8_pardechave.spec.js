/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um Par de chave', () =>{
    loginPage()
    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(4) > .ng-binding').click()
    cy.server()
    cy.route('/ucloud/rest/container').as('container')
    cy.get('[ng-disabled="main.isReadOnly() || !main.hasPermission(257011)"]').click()
    cy.wait('@container' , {
        responseTimeout: 50000
    })
    cy.route('/ucloud/rest/vdc').as('vdc')
    cy.get('.col-md-8 > :nth-child(2) > .form-control').select('Openstack 8')
    cy.wait('@vdc' , {
        responseTimeout: 50000
    })
    cy.get('#network-vdcs').select('matheus1603Open')
    cy.get('#key_name').type('couto03')
    cy.get('.btn-success').click()
    

}) 