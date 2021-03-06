/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar ScalingGroup', () =>{
    loginPage()
    cy.get('.navbar-minimalize').click()
    cy.get('#liSCG > a').click()
    cy.get('[ng-click="sgsCtrl.openCreateScalingGroupModal()"]').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .form-group > #ipt_sg_name').type('testeaws2')
    cy.wait(4000)
    cy.get('#select_load-balancer').select('baalanceadortestee-4f871e0c-9b71')
    cy.wait(3000)
    cy.get('#select_launch-instance').select('awVMcardAPPdemo')
    cy.get('#ipt_sg_max').type('2')
    cy.get('#ipt_sg_min').type('1')
    cy.get('.modal-footer > .btn-success').click()
    cy.wait(4000)
    cy.get('.navbar-minimalize').click()
    cy.wait(2000)
    //cy.get('h3 > .pull-right').click()
    cy.get(`[ng-class="{active: main.activeRoute('tasks')}"] > a`).click()
    cy.get('.navbar-minimalize').click()
    cy.wait(1000)
    cy.get('#liSCG > a').click()
    cy.get('h3 > .pull-right').click()
    cy.get(`[data-title="'NAME' | translate"]`).click()
    cy.wait(100)
    cy.get('.col-xs-5 > .btn').click()
    cy.wait(300)
    cy.get('.confirm').click()
    cy.wait(300)
    cy.get('.confirm').click()
})
