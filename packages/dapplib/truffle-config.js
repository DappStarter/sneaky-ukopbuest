require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rival pumpkin unlock give private fresh trust'; 
let testAccounts = [
"0x2c540930861f9af46e9b442cc8faab5acd31db48e8d7fe248a331fbe551ef429",
"0x17df10d43532673b8085bb5ffa0e58f9ec9f386a9c7dc78cc621b416a06995db",
"0x5aa327231a860b7508a847ad7f5a61ca148aa5b0f35c478d9e145426dfb02dc9",
"0xd410f3692c1d45202b6950061582bc73b90c2b79df380936ff67b0570feff1c4",
"0x2e2ba23d150ae2f1a3b6be389c2cdbd0e14933fc52f8e4c35d6d1d09c8197197",
"0x8224c4e09696b3bc8a92f35dc73dfa47337bca81f03cb6ac4145de647bce0d49",
"0x4cefebfde4ab22c58958b26ab810f9962acc4238f882a987c30b40bd96936a01",
"0x4f96e72b03b5777cbed5c2b11e41a537e09b3b34dbc4391c37156c9c5ab75d11",
"0x7a04d3f382f03a019e687581c82a5b85fc1862a74e4fc7463b3c42e35bbea244",
"0x69d612fb1fe641662d9f5ff487ebff1a3b4ac5571836d8c0cab3dcec410d7be7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
