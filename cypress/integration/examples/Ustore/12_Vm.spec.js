/// <reference types="cypress" />
import { loginPage } from '../../../util.js'

it('deve criar uma maquina virtual', () =>{
    loginPage()   

    cy.intercept('GET', 'http://10.0.50.22/ucloud/rest/keyPair/listing').as('getkeyPair')

    // menu para criação ate a linha 10.
    cy.get('.navbar-minimalize').click()
    cy.get('[ng-click="main.vm = !main.vm"]').click()
    cy.get('.navbar-minimalize').click()
    cy.get('[ng-class="{active: main.vm}"] > .nav > :nth-child(1) > .ng-binding').click()
    //botão para criar a maquina virtual
    cy.get('[ng-disabled="!main.hasPermission(439822) || main.isReadOnly()"]').click()   
    //botão para escolher qual nuvem
    cy.wait(200)
    cy.get(':nth-child(5) > .button-check > .area').click() 
    //botão para ir para o proximo modal
    cy.get('#tNext').click()
    cy.get('#newVm-name').type('testeaws')
    cy.get('[ng-hide="createVM.noVDCs || createVM.newVm.cloudProvider == null"] > :nth-child(3) > .form-group > .form-control').select('AWS - COUTOMATHEUS')
    cy.get('[ng-hide="createVM.noVDCs || createVM.newVm.cloudProvider == null"] > :nth-child(4) > .form-group > .form-control').select('EU (Ireland) - eu-west-1')
    cy.get('#tNext').click()
    //cy.wait(1000)
    cy.get(`[ng-show="createVM.newVm.cloudProvider == 'huawei' || createVM.newVm.cloudProvider == 'aws' || createVM.newVm.cloudProvider == 'google'  || createVM.newVm.cloudProvider == 'ibm' || createVM.newVm.cloudProvider == 'azure' || createVM.newVm.cloudProvider == 'openstack' || createVM.newVm.cloudProvider == 'vmware' || createVM.newVm.cloudProvider == 'vcloud'"] > .form-group > .form-control`).select('Amazon Linux')
    cy.get('#step2 > .row > :nth-child(3) > .form-group > .form-control').select('m3.medium : 1 vCPUs, 3.75 GB RAM, 8.0 GB HD')
    cy.get(`[ng-hide="createVM.newVm.cloudProvider == 'hyper-v'"] > .form-group > .form-control`).select('10.0.0.0/16 / coutosubrede2911 - eu-west-1a')
    cy.wait(400)
    cy.get('#tNext').click()
    cy.get(`[ng-hide="createVM.newVm.cloudProvider == 'azure'"] > .form-group > .form-control`).select('Escolher chave existente')
    cy.wait('@getkeyPair').its('response.statusCode').should('eq', 200)
    cy.get(`[ng-show="createVM.newVm.cloudProvider != 'azure' && createVM.keyPairTypeSelected != null && createVM.keyPairTypeSelected.code == 0"] > .form-group > .ng-scope > .form-control`).select('matheuscouto0912aws')
    //escolher o grupo de segurança
    cy.get(`[ng-show="createVM.vdcChoosen.containerAllowed.type != 'hyper-v'"] > .form-group > div.ng-scope > .form-control`).select('matheuscouto - eu-west-1')
    cy.get('#tNext').click()
    //// aqui se quiser ter uma assinatura 
    //cy.get(`[ng-show="createVM.vdcChoosen.containerAllowed.type != 'hyper-v' || createVM.vdcChoosen.containerAllowed.type != 'google'"] > .form-group > div.ng-scope > .form-control`).select('1603')
    cy.get('#tNext').click()
    cy.get(`.modal-footer > .btn-success`).first().click()
    //cy.wait(10000)
    //cy.get('.navbar-minimalize').click()
    //cy.wait(2000)
    //cy.get(`[ng-class="{active: main.activeRoute('tasks')}"] > a`).click()
    //cy.wait(1000)
    //cy.get('h4 > .btn-default').click()
    //cy.get('.navbar-minimalize').click()
    //cy.get('[ng-click="main.vm = !main.vm"]').click()
    //cy.get('.navbar-minimalize').click()
    //cy.get('[ng-class="{active: main.vm}"] > .nav > :nth-child(1) > .ng-binding').click()
    //cy.get('[data-title-text="Nome"] > .filter-cell > .input-filter').type('testeaws')
    //cy.get('.no-margin').click()
    //cy.wait(7000)
    //cy.wait(3000)
    //cy.get(`[ng-disabled="vmCtrl.vm.orphan || vmCtrl.vm.vmPerformance[0].status != 1001 || main.isReadOnly() || !main.hasPermission(329847) && !main.isAdmin() || vmCtrl.vm.scalingGroup || vmCtrl.vm.vmPerformance[0].status == 1003"] > .fa`).click()
    //cy.get('.confirm').click()
    //cy.wait(8000)
    //cy.get('#notification').click()
    //cy.get('.navbar-minimalize').click()
    //cy.get(`[ng-class="{active: main.activeRoute('tasks')}"] > a`).click()
    //cy.get('.navbar-minimalize').click()
    //cy.get('[ng-class="{active: main.vm}"] > .nav > :nth-child(1) > .ng-binding').click()
    //cy.get('[data-title-text="Nome"] > .filter-cell > .input-filter').type('testeaws')
    //cy.get('.no-margin').click()
    //cy.wait(3000)
    //cy.get('.order2 > .btn').click()
    //cy.get('.confirm').click()
})

it('teste do comando Verficicar task', function(){
    cy.login('root', 'BHU&nji81q2w3e!')

    //var vm_name = 'Teste_automatizado_azure'
    var task_name = 'Criando máquina virtual '
    var task_element = '- testeaws'
    var task_response = 'Running'
    // Selecionar VM
    
    cy.verificar_task(task_name, task_element, task_response) 
})
