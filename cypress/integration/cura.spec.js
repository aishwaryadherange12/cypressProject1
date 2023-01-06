/// <reference types="cypress" />
describe('Cura Make An Appoinment',function(){
    it('Visit The URL',function(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        //Click On Make An Appoinment
        cy.get('#btn-make-appointment').click()
    })

    it('Login',function(){
        cy.get('#txt-username').type('John Doe');        
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
    })

    it('Make Appoinment',function(){
        //Select Facility Hongkong CURA Healthcare Center Drop Down Menu
        cy.get('select').select('Hongkong CURA Healthcare Center')

        //Click On Check Box
        cy.get('.checkbox-inline').click();

        //Click On Healthcare Program - Medicaid
        cy.get('#radio_program_medicaid').click();
        
        //Select Date From Date Picker
        cy.get('#txt_visit_date').type("08/02/2023")

        //Force To closse calender
        cy.get('#txt_comment').click({force:true})

        //Comment
        cy.get('#txt_comment').type("Hi I am aishwarya");

        //Click On Book Appoinment
        cy.get('#btn-book-appointment').click()
    })
    it('Verify Appoinment',function(){
        //Verify Appinment Book Text
        //Appointment Confirmation
        cy.get('h2').should('have.text','Appointment Confirmation')
    })
    
})