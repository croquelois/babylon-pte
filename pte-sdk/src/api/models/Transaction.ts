/* tslint:disable */
/* eslint-disable */
/**
 * Babylon PTE API
 * Babylon Public Test Environment (PTE) API specification.
 *
 * The version of the OpenAPI document: 0.1.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Nonce,
    NonceFromJSON,
    NonceFromJSONTyped,
    NonceToJSON,
} from './Nonce';
import {
    Signature,
    SignatureFromJSON,
    SignatureFromJSONTyped,
    SignatureToJSON,
} from './Signature';

/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    manifest: string;
    /**
     * 
     * @type {Nonce}
     * @memberof Transaction
     */
    nonce: Nonce;
    /**
     * 
     * @type {Array<Signature>}
     * @memberof Transaction
     */
    signatures: Array<Signature>;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'manifest': json['manifest'],
        'nonce': NonceFromJSON(json['nonce']),
        'signatures': ((json['signatures'] as Array<any>).map(SignatureFromJSON)),
    };
}

export function TransactionToJSON(value?: Transaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'manifest': value.manifest,
        'nonce': NonceToJSON(value.nonce),
        'signatures': ((value.signatures as Array<any>).map(SignatureToJSON)),
    };
}

