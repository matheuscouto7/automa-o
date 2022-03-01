/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar uma Rede', () =>{
    loginPage()
    cy.wait(400)
    // aqui ele aperta para abrir o menu
    cy.get('.navbar-minimalize').click()
    cy.wait(5000)
    // botão para abrir o menu de redes
    cy.get('#networkNav').click()
    cy.wait(5000)
    // por algum motivo o menu fecha e ele precisa clicar dnv. 
    cy.get('.navbar-minimalize').click()
    // aqui ele seleciona REDES
    cy.get('#networksNav').click()
    // botão para criar rede
    cy.get('#createNetworkBtn').click()
    cy.wait(3000)
    // seleciona o container
    cy.get('#network-container').select('Tavora - AWS')
    cy.wait(10000)
    // seleciona o VDC
    cy.get('#network-vdcs').select('coutoaws1410')
    // nome da rede
    cy.get('#network-name').type('RedeTeste')
    // CIDR da rede
    cy.get('#network-cidr1').type('10.0.0.0/16')
    // Região da rede
    cy.get('#network-region').select('Asia Pacific (Tokyo) - ap-northeast-1')
    // botão de criar rede
    cy.get('.modal-footer > #createNetworkBtn').click()
    cy.wait(20000)
    // depois ele espera um tempo, e clica no botão de refres 
    cy.get(`[ng-click="main.goto('/networks/')"]`).click()
    cy.wait(5000)
    // procura a rede criada
    cy.get('#awsNetworksTable > thead.ng-scope > .ng-table-filters > [data-title-text="Nome"] > .filter-cell > .input-filter').type('RedeTeste')
    cy.wait(3000)
    // entra na rede criada 
    cy.get(':nth-child(4) > #awsNetworkNameRow').click()
    // e apaga a rede
    cy.get('[style="margin-bottom:1em;margin-right:10px"] > .btn-danger').click()
    cy.get('.confirm').click()




})