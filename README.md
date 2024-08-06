# Developer additional notes

## Documentation - rooberah

### todos

- [x] architecture guideline
- [x] using a new UI library for more challenge
- [x] tests
- [ ] welcome page
    - [ ] three.js scene
- [ ] .env
- [ ] responsiveness

### Architecture and Philosophy

on average human brain cannot process more than 5 tasks at the same time, that's why there are 5 folders or `layers`
inside `src` directory.

the `layers` are:

- `app`
- `business`
- `core`
- `shared`
- `node-modules (hidden)`

each `layer` has its own rules, and it's corresponding rules when it comes to other `layers` they generally help us
determine which high level or low level code belongs where.

#### Relationship rules

- `import` has to always happen from top (`app`) to bottom (`node-modules`) this rule prevents any **circular
  dependency,** and it gives a clear way to determine if code is meant to be **low-level** or **high-level** .
- each `layer` or `sub_layer` should **provide** not **contain** code for example a `layer` with name `component`
  or `utils` just contains/categorize code it doesn't give any idea or context.

#### Single rules

- `app` represents the starting point of the software and holds `application.tsx` almost every configuration can happen
  at this
  level such as `routing` or `layout`.
    - `app` is high-level.
    - normally frontend applications will be tested all the time by **product** and **QA team**  we can trust high-level
      code will be tested **manually**.
- `business` will provide business logic for example various features that software provides and makes money of.
    - `business` is high-level.
    - `integration testing` and `e2e` testing would be more suited for this layer.
- `core` many entities in the software have **relations**. our `service` logics will be defined here.
    - `core` is low-level but **business oriented**.
    - `integration testing` would be more suited and also `unit testing`
- `shared` should provide units of code so **abstract** and **generic** enough that we can use it for another project.
    - shared is low-level.
    - `unit testing` would be more suited.
    - there should be no `logging` done in `shared`.

### File and Folder Structures:

- follows the `LIFT` style guide from https://angular.io/guide/styleguide#lift
    - Locate
    - Identify
    - Flat
    - T-DRY (Try to be DRY)
    - sibling tests

### Paradigms

- `functional programming`
    - Stratified design
    - Straightforward implementation
    - Abstraction barrier
    - Minimal interface
    - Comfortable layers
    - `reactive programming` using `rxjs` and `svelte`
- `procedural programming`
- `OOP` and design patterns related to OOP will `NOT` be used
    - https://www.youtube.com/watch?v=QM1iUe6IofM

### Clean Code Guidelines

- immutability
    - copy-on-write
- favor `explicit argument` over `implicit argument`
- `pure functions` first approach
- naming conventions from uncle Bob's book
- number of words based on the function or value's context
- upto `3 parameters` only
- using the same level of `abstraction` in a unit of code
- `unit tests` for low level code

### Git

- commit messages follow the conventional commit guideline https://www.conventionalcommits.org/en/v1.0.0/

## The Challenge at a Glance 📖

Are you ready to showcase your React skills? We have an exciting challenge for you! You will interact with an API,
create a user-friendly interface, implement search functionality and pagination, and, optionally, write tests. Don't
hesitate to bring third-party tools to the table - there's no need to reinvent the wheel!

## Your Objective 🎯

Your task is to make sure you build an engaging and intuitive web application. To fetch product data, your application
will interact with the `https://dummyjson.com/products` API endpoint. However, we're looking for selectivity here.
You're to display only each product's `title`, `thumbnail`, `price`, and `discounted_price`.

Here's a fun twist: The `discounted_price` isn't served on a platter. You'll have to do a bit of arithmetic using
the `price` and `discountPercentage` properties from the API response to calculate it.

Above all, remember we value creativity and user-centric design. Our main goal is to offer our users a seamless and
enjoyable browsing experience. Let's create something exceptional that stands out!

## Detailed Instructions 📝

1. **Fetch and Display Products:** Connect with the `https://dummyjson.com/products` API endpoint to fetch data. Design
   an appealing UI to display these products. Ensure each card includes: `title`, `thumbnail`, `price`,
   and `discounted_price` (which should be calculated using the `price` and `discountPercentage`).

2. **Add to Cart Functionality:** Equip each product card with a button that allows users to add the product to a
   shopping cart. Once an item is added, the 'add' button could be disabled to prevent duplication (handling multiple
   additions of the same item is a plus!).

3. **Loading State:** Don't forget to implement a loading state during API calls. Providing visual feedback during data
   retrieval significantly enhances the user experience.

4. **Shopping Cart Icon:** Incorporate a shopping cart icon on your page. When clicked, a dropdown should reveal all
   items in the cart, each accompanied by an image, title, and a 'remove' button.

5. **Product Search Feature:** Include an input field for users to search for products. To implement this functionality,
   use the `https://dummyjson.com/products/search?q=<search_term>` API endpoint.

6. **Pagination:** Implement a simple pagination feature to enable users to navigate the products. You can choose the
   number of products per page, but we suggest displaying 10 for an optimal user experience. The complete set of
   products can be larger than three pages, but we suggest limiting it to three pages to provide a focused browsing
   experience. Achieve pagination by using the `https://dummyjson.com/products?limit=<number_of_products>` API endpoint,
   replacing `<number_of_products>` with the count of products you wish to display per page.

7. **Write Tests (Optional but Encouraged):** Are you up for going the extra mile? We'd love to see tests for your
   components using Vitest.

## Wireframe 🖍️

We have prepared a wireframe for the web application to help you visualize the desired layout and components. You can
access the wireframe through this link: [Web Application Wireframe](./public/product_page.png)

The wireframe visually represents the expected user interface and component arrangement. It can serve as a reference as
you build your application. Feel free to use it as a starting point or inspiration, but feel free. Feel free to add your
creativity and adjust to meet the requirements and create an outstanding user experience.

## Resources 📚

1. [Products API Documentation](https://dummyjson.com/docs/products)
2. [React Documentation](https://react.dev/)
3. [Vite Configuration Guide](https://vitejs.dev/config/)
4. [Vitest Documentation](https://vitest.dev/guide/)

Let your imagination soar, and good luck! We're eager to see your creative solutions!
