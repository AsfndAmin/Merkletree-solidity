const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddresses = [
  "0xaC8901a209c63eD86B03A4DE17dE67CF8575b20B",
  "0xdaF60d937a200b36688e4BfBA68Ef026231570Ef",
  "0xe3649bb23B3f658b5Ee86a7FfD9A4d05462483a2",
 
  
];


const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
const rootHash = merkleTree.getRoot();
console.log('Whitelist Merkle Tree\n', merkleTree.toString());
console.log("Root Hash: ", rootHash);
const claimingAddress = leafNodes[0];
const hexProof = merkleTree.getHexProof(claimingAddress);
console.log(hexProof);
console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));