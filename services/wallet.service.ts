import { Address, HDAccount, PrivateKeyAccount, PublicClient, createPublicClient, http, publicActions, zeroAddress } from "viem";
import { mnemonicToAccount } from 'viem/accounts'
import { FACTORY_ADDRESS } from "../constants";
import FactoryAbi from "../assets/Factory.abi.json"

export class WalletService {
    private _signingAccount: HDAccount
    private _client: PublicClient 

    constructor(mnemonic: string, client: PublicClient) {
        this._signingAccount = mnemonicToAccount(mnemonic)
        this._client = client
    }

    async getAddress(): Promise<Address> {
        const address = await this._client.readContract({
            address: FACTORY_ADDRESS,
            abi: FactoryAbi,
            functionName: "getWalletAddress",
            args: [this._signingAccount.address]
        })

        return address as Address
    }
}