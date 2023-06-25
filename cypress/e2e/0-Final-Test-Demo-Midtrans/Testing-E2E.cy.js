describe('Testing E2E Page', ()=>{
    it('Visit Page MidTrans', ()=>{
        cy.visit('https://demo.midtrans.com/', {timeout: 10000})
        cy.url().should('include','')
        cy.get('a.btn.buy').should('have.text','BUY NOW').click() 
        // Clear and replace price
        cy.get('input.text-right').clear()
        cy.get('input.text-right').invoke('val', '').type('49999')
        // Clear and Edit Name
        cy.get('[type="text"]').invoke('val', 'Rizki')
        // Clear and Edit Email
        cy.get('[type="email"]').invoke('val', 'Rizki@example.co.id')
        // Clear and Phone Number        
        cy.get('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]').invoke('val', '0987236267328')
        // Clear and City
        cy.get('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]').invoke('val', 'DKI Jakarta')
        // Clear and Address
        //cy.get('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]').invoke('val', 'Karang Tengah Jl.Taman Sari 2 No.66')
        cy.get('textarea').clear().type('Karang Tengah Jl.Taman Sari 2 No.66')
        // Clear and Postal Code
        cy.get('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]').clear()
        cy.get('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]').type('12440')
        // Click Checkout button
        cy.get('.cart-checkout').should('have.text','CHECKOUT').click()
        // Pop up Checkout
        cy.get('a').invoke('attr','href').then(href => {
            cy.visit(href="#/gopay-qris")
        })
    })
})