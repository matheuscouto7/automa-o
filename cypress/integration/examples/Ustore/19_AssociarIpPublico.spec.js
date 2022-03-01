/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve associar um Ip Publico', () =>{
    loginPage()
  
         // da linha 7 ate a linha 11 é o processo para entrar no menu de ip publico
         cy.get('.navbar-minimalize').click()
         cy.get('#networkNav > .arrow').click()
         cy.get('.navbar-minimalize').click()
         cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(2) > .ng-binding').click()
         // para selecionar o container
         cy.get('.filter-cell > .filter').select('Tavora - AWS')
         cy.get('.btn-success').click()
         cy.wait(3000)
         // seleciona a vm 
         cy.get('#selectVm > .form-control').select('rivaldo-teste2-rivaldo-teste2-ng-Node')
         // seleciona o ip privado
         cy.get('#selectPrivateIp > .form-control').select('192.168.242.200')
         // botão para associar Ip Publico
         cy.wait(2000)
        cy.get('.modal-footer > .btn-success').click()
        cy.wait(2000)
        cy.get('.confirm').click()
        cy.wait(5000)
        // botão para procurar o ip publico associado 
        cy.get('.filter-cell > .filter').select('Tavora - AWS')
        // botão para desassociar o ip publico
        cy.get('.text-center > .btn-warning').click()
        cy.wait(1000)
        cy.get('.confirm').click()
        cy.get('.text-center > .btn-danger').click()

         




})
