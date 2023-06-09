import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { ClaimRecord } from "./claim_record";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    /**
     * this line is used by starport scaffolding # genesis/proto/state
     * balance of the claim module's account
     */
    moduleAccountBalance?: Coin;
    /** params defines all the parameters of the module. */
    params?: Params;
    /** list of claim records, one for every airdrop recipient */
    claimRecords: ClaimRecord[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
