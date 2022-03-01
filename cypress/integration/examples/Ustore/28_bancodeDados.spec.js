/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar/editar/apagar um Banco de Dados', () =>{

    loginPage()
     
cy.get('.navbar-minimalize').click()
cy.get('#liDB').click()
cy.get('h4 > .ng-binding').click()
cy.get(':nth-child(3) > .button-check > .area').click()
cy.get('[type="submit"]').click()
cy.get('#t2 > .no-opacity-img').click()
cy.get('#mysql').click()
cy.get(`[ng-show="createDbVmCtrl.newDbVm.container.type == 'ibm' || createDbVmCtrl.newDbVm.container.type == 'azure' || createDbVmCtrl.newDbVm.container.type == 'huawei' || createDbVmCtrl.newDbVm.container.type == 'google' || createDbVmCtrl.newDbVm.container.type == 'aws'"] > .form-control`).select('coutoaws1410')
cy.get(`[ng-show="createDbVmCtrl.newDbVm.container.type=='aws' || createDbVmCtrl.newDbVm.container.type=='huawei'  "] > #dbvm-region1`).select('South America (São Paulo)')
cy.get(':nth-child(9) > #lb-version').select('8.0.11')




})
