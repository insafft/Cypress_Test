describe('Noon Test by Insaf',function() {  //Test Name
    beforeEach(function(){              //beforeEach to load fresh site each time
        cy.visit('https://www.noon.com/');      //Visit the website to test
    });
    it('contains "noon.com" in the title then navigate to login', function(){            
               
        //Navigate to sign in page
        cy.get('#dd_header_signInOrUp').click();        
        cy.get('#btn_header_signin').click();

        //signing in with existing user account
        cy.get('#tf_signin_email').type('insafft@gmail.com'); 
        cy.get('#tf_signin_password').type('test@123');   
        cy.get('#btn_signin_signin').click(); 
        cy.wait(500);       

        //Reload the website to make sure we are in home page
        cy.visit('https://www.noon.com/');
        cy.title().should('contain','noon.com');   //making sure the page loaded succesfully 

        //Find and click Electronics from nav bar
        cy.get(':nth-child(1) > .menuTrigger > a').click();
        cy.wait(1000); //wait for the page to load all elements

        //Click first item on the result page
        cy.get('div.swiper-wrapper > div:first-child > div.wrapper > a.product.View > div.imageContainer > div.container.undefined.loaded > div.mediaContainer > img').click();
        cy.wait(100);

        //Click Add to cart
        cy.get('.addToCartLabel').click();
        cy.wait(100);

        //Click checkout from side panel
        cy.get(':nth-child(1) > .addedToCartLabel > .jsx-1312260583').click();
        cy.wait(1000);

        //Click check out from order summary 
        cy.get('.invoiceColumn > .cartCtaWrapper > .jsx-3223881857').click();

        //Type address in the map search box
        cy.get('#searchBox').type('Dubai Gold Souk - Dubai - United Arab Emirates{enter}');


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