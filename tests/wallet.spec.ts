import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { english, generateMnemonic } from 'viem/accounts'
import { WalletService } from "../services/wallet.service"

describe("Wallet service test",() => {
    let wallet: WalletService

    before(async () => {
        const publicClient = createPublicClient({
            chain: mainnet,
            transport: http("https://rpc.viction-qcnet.tforce.dev")
        })
        const mnemonic = generateMnemonic(english)
        wallet = new WalletService(generateMnemonic(english), publicClient)
    })

    it("get address",async () => {
        const address = await wallet.getAddress()
        console.log("Wallet address", address)
    })
})