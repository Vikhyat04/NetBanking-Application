# NetBanking-Application
## Abstract
Online banking is the current trend, especially during the pandemic. With the help of programming, we make this a possibility where users can perform online transaction in the comfort of their homes. However, several popular banking companies like HDFC, SBI bank, etc have incorporated this type of banking in their website. To have a good online banking experience, we created EzFunds which helps employ users with an attractive UI. The aim of EzFunds is to bring easy transactions to users in a matter of seconds.
## Introduction
EzFunds is an electronic payment system that enables users to conduct a range of financial transactions.  As mentioned before, its objective is to bring easy transaction transactions to users in a matter of seconds. With the help of this interactive web application, we bring online banking to a whole new level. With an account in EzFunds, one can look at their transaction history details, their bank amount, etc.  The user can make an account through our Net-Banking Application and after that, they have a plethora of options to choose from. 
## Architecture
This section deals with the components of the architecture. The main architecture flow can be observed from Figure 1.


![image](https://user-images.githubusercontent.com/84954548/131594508-ecc4fc91-8eca-4f94-8686-443481f6df69.png)

                     Figure 1: Architecture of our system

Our web application integrates 3 programming languages- namely SQL, Node JS and React JS. With the help of axios, we connect Node JS to React JS and with the help of Node JS (our API), we create a connection between SQL and React JS. Now, let’s expand on how we used these languages.

### FRONTEND- REACT
React is one of the most popular programming language in today’s modern world. With the help of it, we can build powerful, interactive webpages. React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. With the help of its powerful features, we were able to implement an interactive UI.

### SERVER IMPLEMENTATION –NODE JS
We used Node Js backend for producing API’s. Whenever a user logs in from web application React.js in our case we call Node Js backend API and check authentication. If authentication is successful we generate JWT token and send token along with response. For each request after login/signup, token needs to be passed for authorization. In simple words, it is the bridge between the frontend and the backend.

### Database – SQL
SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system. It gives developers a fast and powerful way to store and retrieve data. 

## Future Enhancement
Following are the enhancements that we look forward to implement in the near future.
•	Allow payments of bills
•	Add a check query
•	Add different types of graphs and data visualization options.

## Conclusions
With our GUI application, we were able to make an online banking app with an interactive UI with effective functioning. This application would be very helpful to companies who want to implement an online banking system in their website. 

## Contributions

Vikhyat: Student who worked on the UI, API and backend

Bharat: Mentor who guided this whole project. Assisted to fix minute errors and helped teach the programming languages required for this extensive project.

I would also like to thank BANYAN (my internship company) who have inspired me to make this project. Appreciate their support and guidance.

## Screenshots of Application

This section contains the images of the product in action. Following is an index to follow each of the image:

 • Figure 2 consists of Landing Page 
 
 • Figure 3 consists of Login Page
 
 • Figure 4 consists of Signup Page
 
 • Figure 5 consists of Dashboard Page
 
 • Figure 6 consists of Bank Enquiry page
 
 • Figure 7 consists of Transaction page
 
 • Figure 8 consists of the Profile page
