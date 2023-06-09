/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Metadata, Uint128, SurchargeInfo } from "./Profiles.types";
export interface ProfilesMessage {
    contractAddress: string;
    sender: string;
    updateMintingFees: ({ baseMintFee, burnPercentage, shortNameSurcharge, tokenCap }: {
        baseMintFee?: Uint128;
        burnPercentage?: number;
        shortNameSurcharge?: SurchargeInfo;
        tokenCap?: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateUsernameLengthCap: ({ newLength }: {
        newLength: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateMetadata: ({ metadata, tokenId }: {
        metadata: Metadata;
        tokenId: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    burn: ({ tokenId }: {
        tokenId: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setAdminAddress: ({ adminAddress }: {
        adminAddress: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mint: ({ extension, owner, tokenId, tokenUri }: {
        extension: Metadata;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class ProfilesMessageComposer implements ProfilesMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    updateMintingFees: ({ baseMintFee, burnPercentage, shortNameSurcharge, tokenCap }: {
        baseMintFee?: Uint128;
        burnPercentage?: number;
        shortNameSurcharge?: SurchargeInfo;
        tokenCap?: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateUsernameLengthCap: ({ newLength }: {
        newLength: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateMetadata: ({ metadata, tokenId }: {
        metadata: Metadata;
        tokenId: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    burn: ({ tokenId }: {
        tokenId: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setAdminAddress: ({ adminAddress }: {
        adminAddress: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mint: ({ extension, owner, tokenId, tokenUri }: {
        extension: Metadata;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
