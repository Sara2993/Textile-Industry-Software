#Title

 Textile-Industry-Software

#Description

    Textile Industry Workers perform routine tasks in fabric and textile factories, 
such as cutting canvas, upholstery and curtain fabrics, delivering materials to machines,
operating automatic machines using computerised patterns, pressing partially completed and finished garments, 
and inspecting and finishing.

#Built with

This section should list any major frameworks/libraries used to bootstrap your project.
Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

   1.Angular
   2.Node js
   3.Bootstrap

#Getting Started
 This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

Prerequisites
  This is an example of how to list things you need to use the software and how to install them.

npm
  npm install npm -g
npm version
   npm -v:6.14.8

Procedures
 1.ng new filename
 2.ng g s servicename

Packages-Angular
  1.ng g c componentname
  2.npm i bootstrap --save
  3.npm i ng2-search
  4.npm i -g@angular -cli

Packages-Nodejs
  1.npm init
  2.npm i express body-parser cors--save
  3.npm i logger
  4.npm i nodemailer
  5.npm i winsten
  6.npm i tostr

#features
 1. Need to add type(DB connectivity)
 2. username not validating
 3. after choosing supplier type : name should be defaulted and stock to be decreased automatically send the mail.
 4. promise need to be added
 5. Logger Implement
 6. end to end simple technical flow
 7.double click
 8.form validation in frontend level
 9.Toastr
 10.file system handling(insert,delete,search operations)

#Project Structure
  sign in form----> When new user regiser in the form, The username and password match to the database the user login Home  will appear in the website.
                -products
                    -->Admin form-user name and password to match the dashboard will appear in the website
                    -->Stock maintain-To enter the stock details and the stock decreased the mail automaticaly send.
                    -->Add Suppliers-To enter the supplier details and one to one relation to Materials to fetch the sup_id automatically sup name is displayed.
                    -->Add Materials-enter te materials details and fetch the suppliers details is displayed.
                 -About us-About the textile industry
                 -Contact us-To contact the textile industry details.