import getCoordinates from "../server/coordinateAPI";
import { getImage } from "../server/imageApi";

describe("Testing pixabay API call", () => {
    test("Testing getCoordinates function", () =>{
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve("test")
        }))
        let destination = ["Dallas", "TX", "US"]
        let api = 123
        return getImage(api, destination).then(data => {expect(data.toBeUndefined)})
    });
});