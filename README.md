# Merkletree-solidity

# MERKLE TREE

1. Clone this repo [https://github.com/AsfndAmin/Merkletree-solidity](https://github.com/AsfndAmin/Merkletree-solidity).
2. Open terminal and use command npm i.
3. In the merkletree.js file add your addresses you want to whitelist in the WhitelistAddresses[] array.
4. In ClamingAddress = leafNodes[add index of address you want to generate proof for].
5. Write node merkletree.js(filename.js) in the terminal.
6. The array of address looking like

[

 '0x9bbdccbfb7a51284c6aed5c9551580d63a0c2c7e7326dad20a2771c72b907524',

 '0x45bafa65f70395a0552f840b1265d36dea057ef1fb6c3f9a42a0c61722715929'

]  is your merkle proof make sure it returns true.

7. Add all whitelist addresses once and then generate proof for any address adding or changing any address will result in a different proof.
