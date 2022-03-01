/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('deve criar/editar e apagar um Balanceador SEM MEMBRO', () =>{
    loginPage()
    // da linha 6 ate a 10 é o processo de entrar no menu redes e ir para o submenu balanceadores
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav > .arrow').click()
    cy.get('.navbar-minimalize').click()
    cy.get('#liLB > .ng-binding').click()
    // botão para abrir o balanceadores
    cy.get('h4 > .ng-binding').click()
    cy.wait(6000)
    // botão para selecionar o container
    cy.get('.col-sm-12 > :nth-child(2) > .form-control').select('Tavora - AWS')
    // botão para selecionar o tipo de VDC
    cy.get(`[ng-show="createLbCtrl.newLB.container.type == 'aws' || createLbCtrl.newLB.container.type == 'openstack' || createLbCtrl.newLB.container.type == 'azure' || createLbCtrl.newLB.container.type == 'ibm' || createLbCtrl.newLB.container.type == 'huawei' || createLbCtrl.newLB.container.type == 'google'"] > .form-control`).select('coutoaws1410')
    // botão para selecionar o tipo de Região
    cy.get('#lb-region-azure').select('sa-east-1 - South America (São Paulo)')
    // botão para selecionar o tipo de REDE
    cy.get(`[ng-show="createLbCtrl.newLB.container.type == 'huawei' || createLbCtrl.newLB.container.type == 'aws' || createLbCtrl.newLB.container.type == 'azure' || createLbCtrl.newLB.container.type == 'google' || createLbCtrl.newLB.container.type == 'ibm'"] > .form-control`).select('coutoaws2108 - 10.0.0.0/16')
    // espaço para botar o nome do balanceador
    cy.get('#groupksd_name').type('balanceadorteste')
    // botão para criar o balanceadores
    cy.get('.modal-footer > .btn-success').click()
    cy.wait(9000)
    // para recarregar a pagina
    cy.get('h4 > .pull-right').click()
    cy.wait(3000)
    cy.get('h4 > .pull-right').click()
    //editar o balanceador
    cy.get('.align-center > .btn-default > .fa').click()
    //botão de Health Check para editar algo
    cy.get(`div[ng-show="loadBalancerCtrl.loadBalancer.container.type == 'aws'"] > .box > .box-header > h4.ng-binding > .btn-default`).click()
    cy.wait(2000)
    cy.get(`[ng-show="loadBalancerCtrl.loadBalancer.container.type == 'aws'"][aria-hidden="false"] > .box > .box-body > .table > tbody > :nth-child(1) > :nth-child(2) > .form-group > select.form-control`).select('HTTP')
    cy.get(`[ng-show="loadBalancerCtrl.loadBalancer.container.type == 'aws'"][aria-hidden="false"] > .box > .box-header > h4.ng-binding > .btn-success`).click()
    //botão para voltar pro menu do balanceador
    cy.get('.container-fluid > :nth-child(1) > .btn').click()
    // para apagar o balanceador
    cy.get('.btn-danger').click()

})