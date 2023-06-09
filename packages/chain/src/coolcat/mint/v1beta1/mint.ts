import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */

export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  phase: Long;
  startPhaseBlock: Long;
  /** current annual expected provisions */

  annualProvisions: string;
}
/** Params holds parameters for the mint module. */

export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** expected blocks per year */

  blocksPerYear: Long;
}

function createBaseMinter(): Minter {
  return {
    inflation: "",
    phase: Long.UZERO,
    startPhaseBlock: Long.UZERO,
    annualProvisions: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }

    if (!message.phase.isZero()) {
      writer.uint32(16).uint64(message.phase);
    }

    if (!message.startPhaseBlock.isZero()) {
      writer.uint32(24).uint64(message.startPhaseBlock);
    }

    if (message.annualProvisions !== "") {
      writer.uint32(34).string(message.annualProvisions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;

        case 2:
          message.phase = (reader.uint64() as Long);
          break;

        case 3:
          message.startPhaseBlock = (reader.uint64() as Long);
          break;

        case 4:
          message.annualProvisions = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Minter {
    return {
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      phase: isSet(object.phase) ? Long.fromValue(object.phase) : Long.UZERO,
      startPhaseBlock: isSet(object.startPhaseBlock) ? Long.fromValue(object.startPhaseBlock) : Long.UZERO,
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : ""
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.phase !== undefined && (obj.phase = (message.phase || Long.UZERO).toString());
    message.startPhaseBlock !== undefined && (obj.startPhaseBlock = (message.startPhaseBlock || Long.UZERO).toString());
    message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.phase = object.phase !== undefined && object.phase !== null ? Long.fromValue(object.phase) : Long.UZERO;
    message.startPhaseBlock = object.startPhaseBlock !== undefined && object.startPhaseBlock !== null ? Long.fromValue(object.startPhaseBlock) : Long.UZERO;
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mintDenom: "",
    blocksPerYear: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (!message.blocksPerYear.isZero()) {
      writer.uint32(16).uint64(message.blocksPerYear);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;

        case 2:
          message.blocksPerYear = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      blocksPerYear: isSet(object.blocksPerYear) ? Long.fromValue(object.blocksPerYear) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.blocksPerYear !== undefined && (obj.blocksPerYear = (message.blocksPerYear || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? Long.fromValue(object.blocksPerYear) : Long.UZERO;
    return message;
  }

};