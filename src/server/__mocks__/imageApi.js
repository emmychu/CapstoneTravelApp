// jest.mock("./imageAPI.js", () => [
//     {
//         keyword: "Dallas",
//         image: "thisisaurl.com"
//     }
// ])
const imageApi = jest.createMockFromModule('imageApi');

const getImage = jest.fn(() => console.log("does this work"))

module.exports = imageApi