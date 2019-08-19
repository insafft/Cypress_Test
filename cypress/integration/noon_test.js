describe('Noon Test by Insaf',function() {
    beforeEach(function(){
        cy.visit('https://www.noon.com/');
    });
    it('contains "noon.com" in the title then navigate to login', function(){            
               
        cy.get('#dd_header_signInOrUp').click();        
        cy.get('#btn_header_signin').click();
        cy.get('#tf_signin_email').type('insafft@gmail.com'); 
        cy.get('#tf_signin_password').type('test@123');   
        cy.get('#btn_signin_signin').click(); 
        cy.wait(500);       
        cy.visit('https://www.noon.com/');
        cy.title().should('contain','noon.com');
        cy.get(':nth-child(1) > .menuTrigger > a').click();
        cy.wait(1000);

        cy.get('div.swiper-wrapper > div:first-child > div.wrapper > a.product.View > div.imageContainer > div.container.undefined.loaded > div.mediaContainer > img').click();
        cy.wait(100);
        cy.get('.addToCartLabel').click();
        cy.wait(100);
        cy.get(':nth-child(1) > .addedToCartLabel > .jsx-1312260583').click();
        cy.wait(1000);

        cy.get('.invoiceColumn > .cartCtaWrapper > .jsx-3223881857').click();
     


        // cy.get(':nth-child(1) > .menuTrigger > a').click();
        // cy.get('.ul.nav > li:first-child > span.menuTrigger > a').click();

        //div.swiper-wrapper > div:first-child > div.wrapper > div.actionContainer > button.action

    });

    // it('Noon home',() =>{
    //     cy.url().should('contain', 'https://www.noon.com/uae-en/')
    // // cy.contains('Electronics').click();
    // cy.get(':nth-child(1) > .menuTrigger > a').click();
    // })

        // it('Navigate to Electronics',() => {
            
        //     cy.get('jsx-1187918855 mainCategories').contains('Electronics').click();

        // })



});