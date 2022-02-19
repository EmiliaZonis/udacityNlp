// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"


// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the handleSubmit() function to not accept only numbers", () => {
        expect(handleSubmit("678")).toBe(false)
      })

      test("Testing handleSubmit() function to accept letters", () => {
          expect(handleSubmit("abc 678")).toBe(true)
      })
          expect(handleSubmit).toBeDefined();
});
