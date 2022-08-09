require("dotenv/config");
const { totalSupply, getNftTokens } = require("./web3");
const { expect } = require("chai");

describe("web3 test", function () {
    this.timeout(10 * 1000);
    it("totalSupply success case", async function () {
        const count = await totalSupply();
        expect(count > 0).to.be.true;
    });

    it("getNftTokens success case", async function () {
        const result = await getNftTokens();
        expect(result.length > 0).to.be.true;
    });
});
