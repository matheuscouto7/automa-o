/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('deve criar um Balanceador SEM MEMBRO', () =>{
    loginPage()
    cy.server()
    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('#liLB > .ng-binding').click()
    cy.get('h4 > .ng-binding').click()
    cy.wait('@container' , {
        responseTimeout: 50000
    })
    cy.route('/ucloud/rest/vdc').as('vdc')
    cy.get('.col-md-8 > :nth-child(2) > .form-control').select('Openstack 8')
    cy.wait(500)
    cy.get(`[ng-show="createLbCtrl.newLB.container.type == 'openstack' || createLbCtrl.newLB.container.type == 'azure'"] > .form-control`).select('matheus1603open')
    cy.get('#grousd_name').type('0106')
    cy.get('#selectPort > .form-control').select('HTTP')
    cy.get('#selectMethod > .form-control').select('Round Robin')
    cy.get('#selectSubnet > .form-control').select('172.19.29.128/25 / 1703 -')
    cy.get('#group_name').type('80')
    // cy.get('.modal-footer > .btn-success').click()
})