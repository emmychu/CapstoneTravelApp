import { dateCheck } from "../client/js/validDate";

describe("Testing date validity", () => {
    test("Testing dateCheck function", () =>{
        let departDate = {
            'month': 6,
            'day': 25,
            'year': 2020
        };
        let returnDate = {
            'month': 7,
            'day': 30,
            'year': 2020
        }
        expect(dateCheck(departDate,returnDate)).toBe("invalid")     
    });
});