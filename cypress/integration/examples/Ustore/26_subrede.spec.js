/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar uma Sub-rede', () =>{
    loginPage()
    // da linha 7 ate a linha 10 é o processo para entrar no menu de redes
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav > .arrow').click()
    cy.get('.navbar-minimalize').click()
    cy.get('#networksNav').click()
    // aqui ele procura a rede que vai ser criada a sub rede
    cy.get('#awsNetworksTable > tbody > :nth-child(3) > .text-center > .btn-default > .fa').click()
    cy.wait(3000)
    // botão para criar a sub rede
    cy.get('#createSubnetBtn').click()
    // nome da sub rede e cidr/região e descrição
    cy.get('#subnet-name').type('Teste01')
    cy.get('#subnetCidr').type('10.0.0.0/16')
    cy.get('#zone').select('sa-east-1a')
    cy.get('#description').type('auto')
    // botão de criar 
    cy.get('#createSubnetModalBtn').click()
    cy.wait(2000)
    // para da o refres e ve se criou 
    cy.get('.col-xs-3 > .btn').click()
    cy.wait(5000)
    // e apagar 
    cy.get('.text-center > .ng-scope').click()

})  
