require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn purchase install arm bubble soul'; 
let testAccounts = [
"0xe986fc54edd3f2b4c20f3829e9ebbe78eee3ffceb5bde16c08e58e8fe22e4d02",
"0x5edda1f10f89cde51654e998fd42569fa9056699552e874715228ba3da50ca57",
"0x88c1e8cbc6130910b2ec6cbda2460713ede6e852e74c1c57b3e38c10698b33e4",
"0xe6dbe783c864eb60c801c61e2caf473d47a5449edad953bf2a7d128b5c7db9db",
"0x9bd4fed6ce8ea2fe228e376f7ced0244279f1e9a1afc34ea9b9fb6f11c361bf5",
"0xe226ba66fd10ef6dc2cd5ba107645b66de78b72abc4c3e509ba4e8590153f938",
"0xb1260e574c34050fd83dd32fd5ad30b616483e654a0cc73c56201de63729a621",
"0x1588b61605bb9e1f74762e6bd63aee03d1af809eb0d45486d6cbc8eb81871007",
"0xeb2d72e45772304333ff8c2b5fb03152570b047335c2f9360e59c73c8d621556",
"0x5685a8316eb863e23985e6d246f8bc9c2ffa061c183e2a1d43fe8a43c5d7c070"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


