# Benifits of Test-Driven Development (TDD)
1. It helps you understand the benifits for the your function and others understand your code
2. It helps you relax when code doesn't work 
3. Helps you think more clearly when debugging 
4. Helps you improve your code 
5. Makes writing code more enjoyable 

# Adding TDD to your functions 
1. Determine inputs, outputs, and the function name
    -  What does the function do? 
2. Determine the happy path
    - What  is the common scenario for using the function? 
3. Write the smallest test possible
    - Ex: Writing a test to see if the function exits
4. Write code to make the test pass
    - If testing to see if the function exits you may just write the function
5. Repeat stpes three and four, updating the test to check for the next step on the toad to the happy path
    - Ex: After testing that the function exits then the next step could be returning a value. 
6. Consider alternative cases and exceptions
    - Ex: What should happen if a parameter is missing
7. Repeat steps three and four for the alternative cases

# Using Unit Testing 
## Mocha and Chai
1. Start by navagating to the directory that your writing your code and test in 
2. Run npm init -y to create a package.json file with default values 
3. Install Mocha and Chai using npm install --save-dev mocha chai 
4. Create a folder for your source code (in this case its called src) 
5. Create a main.js file for your code include module.exports = name-of-function;  so the function will be available globally. 

## More About Chai
- Eqaul vs Eql
    - Equal checks to see if the two values/entries are strcictly equal. 
        - Meaning that the values are the same as well as their datatypes. 
        - Ex: 
            - `expect(8).to.equal(8);` => results in a passed test
            - `expect(9).to.equal(8);` => results in a failed test
    - Eql checks to see if the two values/entries are deeply equal. 
        - Meaning that the values share the same proberties and values. 
        - Used when working with objects
        - Ex:
            - `expect({name: "Guy", score: 9.8}).to.eql({name: "Guy", score: 9.8});` => results in a passed test
            - `expect({name: "Other Guy", score: 8.8}).to.eql({name: "Guy", score: 9.8});` => results in a failed test 
            - `expect({name: "Guy", score: 9.8}).to.equal({name: "Guy", score: 9.8});` => results in a failed test because the two values are not the same object
- `to.be.a()` method
    - Allows you to test if the tested value result matches the datatype of the expected value.
    - Ex:
        - `expect("Score").to.be.a("string");` Checks to see if the tested value is a string
        - `expect(10).to.be.a("number");` Checks to see if the tested value is a number
        - `expect({}).to.be.an("object");` Checks to see if the tested value is an object

## Working with Jest
- Jest is a JavaScript testing framework developed by Facebook. 
- Jest works very similarly to the Mocha and Chai
- You can create and use `describe()` and `it()` functions. 
    - Note: 
        - `describe()` function allows you to grup a set of related tests together. 
        - `it()` function is usually nested within the `describe()` which describes the steps for testing your function. 
        - `test()` function can be used instead of the `it()` function. Both are vaild. 
- Jest uses a `expect()` to test values
    - Ex:
        - `expect(1 + 1).to.equal(2);` => Tests to see if 1 + 1 equals 2. 
        - `expect(1 + 1).toBe(2);` => Also tests to see if 1 +1 equals 2. 