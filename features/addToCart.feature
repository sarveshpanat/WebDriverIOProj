Feature: Add product to cart functionality

Background: Navigate to homepage
Given I am on a homepage

Scenario Outline: As a customer, I can add product to cart
When I search for a <product> and add product <productName> to cart
Then I should see product added to cart

Examples:
    | product  |         productName                                   | 
    | iphone   |         New Apple iPhone 12 Pro Max (128GB) - Pacific Blue  |
    | books    |         Sapiens: A Brief History of Humankind               |

Scenario Outline: Verify search functionality for invalid product search
When I search for invalid product <name>
Then I should see error message on screen

Examples:
| name           |
| gggopup[[6\\i\ |

        
