const { isEmpty, validateGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });

    test("should return false if label length is less than 8 characters", () => {
        expect(validateGamerTag("Poring")).toBe(false);
    });
});

// TODO: Create tests suite for validation function
