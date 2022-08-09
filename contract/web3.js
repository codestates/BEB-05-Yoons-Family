const { erc721Abi } = require("./erc721Abi");
const Web3 = require("web3");
const rpcURL = process.env.RPC_URL; // 원격 이더리움 노드에 접속할 수 있는 주소
const web3 = new Web3(rpcURL); // web3 객체 생성
const Contract = require("web3-eth-contract");

const account = process.env.WALLET_ADDR;
const contract_addr = process.env.CONTRACT_ADDR;
const abi = erc721Abi;
const address = contract_addr;
Contract.setProvider(rpcURL);
const contract = new Contract(abi, address);

async function totalSupply() {
    try {
        const result = await contract.methods.totalSupply().call();
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
}

async function getNftTokens() {
    try {
        const result = await contract.methods.getNftTokens(account).call();
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
}

module.exports = {
    totalSupply,
    getNftTokens,
};

// web3.eth
//     .getBalance(account)
//     .then((bal) => {
//         console.log(`지갑 ${account}의 잔액은... ${bal} wei 입니다.`);
//         return web3.utils.fromWei(bal, "ether"); //eth로 단위 변경
//     })
//     .then((eth) => {
//         console.log(`이더 단위로는 ${eth} ETH 입니다.`);
//     });
