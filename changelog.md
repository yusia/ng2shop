# Changelog

## [1.0.0] - 2019-07-09
### Added
product service
product component with ability to get date from service
### added
 product list with chil product
data from product service
### added
 styles 
### added  [1.0.1] - 2019-07-15
 cart component
output to productList
cart service (can add, clean products)
### added
 cart component to cart module

 ##[2.0.0]
 ### added
 cart-list component to cart module
 ### modified
 -cartService: added new methods
 -added ngClass - disabled class when product isn't available
 -cart->cartItem - only representaion component
 -added appTitle
 - added directive for changing color -coolBackground
 ###
 -added CartModel
 -changed total/ count
 ###[2.0.1]
 - fixed comments task 1: added getter for count
 ###[3.0.0]
 - added services
 - added directive waysize-click by small in footer text make them bigger 
###[4.0.0] pipes
-currency for price, uppercase for category
- async for getting products 
- orderPipe in cart

###[5.0.0]
-updated layout module (added path not found and about)
- changed loading products  to load ROOT route /home
- added routes about, home, details

###[5.0.1]
-added loading bootstrap styles using style option in angular.json
- added route details/:productID with resolveGuard 
- added feedback componnet, service and route feedbacks/:prodID by prodID
###[5.0.2]
-added cartservice
added addToCart component which get ability to write count of products
routes: cart
         add/id 
- productFormComponent
- added route admin/products/edit
- added route /order - which save order in localStorage
- manage-order - get Orders from local storage
