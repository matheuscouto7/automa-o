
export const loginPage = () => {
    cy.visit('http://10.0.50.22')
    cy.get('#login-page > .middle-box > :nth-child(1) > form.ng-pristine > :nth-child(1) > .form-control').type('root')
    cy.get('.ng-invalid.ng-dirty > :nth-child(2) > .form-control').type('BHU&nji81q2w3e!')
    cy.server()
    cy.route('POST', '/ucloud/rest/users/login').as('login')
    cy.get('#btn_login > .ng-binding').click();
    cy.wait('@login')
    cy.wait(3000)
    // valeu!
}

