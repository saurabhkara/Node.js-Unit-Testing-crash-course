"# Node.js-Unit-Testing-crash-course"

### Automation Testing

Automation Testing is a software testing technique that uses automated tools and scripts to execute test cases, compare actual outcomes with expected outcomes, and report results. The main goal is to reduce manual effort, increase test coverage, speed, and reliability.

### Types of automation testing

- Unit Testing
- Integration Testing
- End to End Testing

### Unit Testing

Unit Testing is a type of software testing where individual units or components of a program are tested in isolation to ensure they work correctly. A unit is typically the smallest testable part of an application, such as a function, method, or class.

- Here Node test runner will be used, which is inbuilt test runner.
- File for test file is fileName.test.js
- Node 23 version

Test files are always written in AAA format
A- Arrange
A- Act
A- Assert

### Arrange - setup

Prepare everything needed for the test:

- Create objects
- Set initial values
- Mock dependencies

### Act- Execute

Call the method or function you want to test.

### Assert – Verify

Check that the actual output matches the expected result.

### Commands

To run JavaScript code,

```js
node fileName.js
```

To intialize or generate package.json file

```js
npm init
```

To run test file

```js
node --test
```

### test function

node:test module to write and run test cases

### suite (describe)

A test suite is a logical grouping of related tests. In the node:test module.

### Mocking

Mocking is the practice of replacing real functions, APIs, or modules with fake ones during testing, so you can:

- Control their behavior
- Avoid external dependencies (e.g., databases, APIs)
- Isolate the unit under test

### Dependencies Injection

Dependency Injection (DI) is a design pattern in which a class or function receives its dependencies from the outside rather than creating them internally. This makes your code:

- More testable
- More flexible
- Easier to maintain and mock
