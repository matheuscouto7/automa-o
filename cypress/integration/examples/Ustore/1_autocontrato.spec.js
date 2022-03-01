/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um auto contrato', () =>{
    loginPage()
cy.get('[ng-click="main.admin = !main.admin"]').click()
cy.get('[ng-show="main.userCanSeeCompanyAdmin()"] > .ng-binding').click()
cy.get('.col-md-2 > .btn').click()
cy.get('#group_name').type('matheus2020')
cy.get('#group_contactname').type('contratoteste')
cy.get('#group_cpfCnpj').type('46.494.542/0001-69')
cy.get('#company_invoice_day').type('10')
cy.get('[ng-checked="createcompanyCtrl.newCompany.autoAdmin"]').click()
cy.wait(500)
// NÃO TO CONSEGUINDO PUXAR O CONTAINER
cy.get('[ng-model="form-control ng-pristine ng-untouched ng-valid"]').select('Openstack d')
})

// cy.get('.box-body > :nth-child(1) > :nth-child(1) > :nth-child(8)')

// cy.get('#select-containers > :nth-child(2) > .col-md-3').select('Openstack d')
// cy.get('[ng-model="createcompanyCtrl.containerToAdd. createcompanyCtrl.containers"]').select('Openstack d')
// cy.get('#select-containers > ng-model="createcompanyCtrl.containerToAdd. > class="form-control ng-pristine ng-untouched ng-valid""]').select('Opentack d')
// ng-model="createcompanyCtrl.containerToAdd"
// select.form-control
// ('[ng-model="form-control ng-pristine ng-untouched ng-valid"]')