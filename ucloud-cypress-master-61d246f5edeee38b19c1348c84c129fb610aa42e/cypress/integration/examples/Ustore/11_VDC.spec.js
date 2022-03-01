/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

const findAccordion = (number) => {
    return `#resources_accordion > .panel-group > :nth-child(${number+1}) > :nth-child(1) > :nth-child(1) > a`;
}

it('deve criar um VDC', () =>{
    loginPage()   
    cy.get(`[ng-class="{active: main.activeRoute('virtual-datacenters')}"] > a`).click()
    cy.get('h4 > .btn').click()
    cy.wait(300)
    cy.get('#vdc-name').type('VdcTeste')
    cy.server()
    cy.get('#vdc-container').select('Openstack 8')
    cy.route('ucloud/rest/config/SHARE_NETWORK').as('SHARE_NETWORK')
    cy.wait('@SHARE_NETWORK', {
        requestTimeout: 40000
    })
    cy.wait(2000)
    cy.get(findAccordion(1)).click()
    cy.get('#template_table > .col-md-12 > .row > .table > tbody > :nth-child(14) > [width="30"] > .check').click()
    cy.get('#template_table > .col-md-12 > .row > .table > tbody > :nth-child(15) > [width="30"] > .check').click()
    cy.get('#template_table > .col-md-12 > .row > .ng-isolate-scope > [ng-include="templateUrl"] > .ng-table-pager > .ng-table-counts > :nth-child(2) > .ng-binding').click()
    cy.get(':nth-child(21) > [width="30"] > .check').click()
    cy.get(findAccordion(2)).click()
    cy.get('#network_table > .col-md-12 > .row > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    cy.get(findAccordion(3)).click()
    cy.get('#storage_table > .col-md-12 > .row > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    cy.get(findAccordion(4)).click()
    cy.get('#flavor_table > .col-md-12 > .row > .ng-isolate-scope > [ng-include="templateUrl"] > .ng-table-pager > .ng-table-counts > :nth-child(2) > .ng-binding').click()
    cy.get('#flavor_table > .col-md-12 > .row > .table > tbody > :nth-child(22) > [width="30"] > .check').click()
    cy.get('#flavor_table > .col-md-12 > .row > .table > tbody > :nth-child(23) > [width="30"] > .check').click()
    // cy.get(findAccordion(5)).click()
    // cy.get('#host_table > .col-md-12 > .row > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    // cy.get('.btn-success').click()




   
})

