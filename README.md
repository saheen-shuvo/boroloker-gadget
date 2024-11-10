# Boroloker Gadget Application

A web application built with React that allows users to view products, add them to their cart, and proceed to checkout. The app features sorting, total cost calculation, and a purchase confirmation modal. 

## Live Demo

[Live Website Link](https://your-live-website-url.com)

## Requirement Document

[Requirement Document Link](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven?tab=readme-ov-file#follow-requerment-pdf)

## React Fundamentals Used

This project utilizes several key React concepts, including:

1. Functional Components: The app is structured using functional components, allowing for modular and reusable code.
2. State Management (useState): Used to manage local states for handling cart items, sorted items, and total cost.
3. Effect Hook (useEffect): Used to recalculate the total cost whenever items in the cart change.
4. Context API: Provides a global state for the cart, so any component in the app can access and update the cart items without prop drilling.
5. Ref Hook (useRef): Used for managing the modal element, allowing direct interaction with DOM elements.

## Data Management

- Context API: The Context API is used to handle the cart state globally across components. This enables seamless data sharing and updating between the cart and other components without passing props.

## Key Features

1. Add to Cart Functionality: Users can add products to their cart, and the cart automatically updates with the selected items.
2. Sort Items by Price: Items in the cart can be sorted by price in descending order.
3. Total Cost Calculation: The total cost of all items in the cart is automatically calculated and displayed.
4. Purchase Confirmation Modal: A modal pops up upon clicking "Purchase," showing the total bill and a success message. The cart is cleared after the purchase.
5. Redirect After Purchase: Upon confirming the purchase, the app automatically redirects users to the homepage.