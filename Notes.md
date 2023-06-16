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
6. 