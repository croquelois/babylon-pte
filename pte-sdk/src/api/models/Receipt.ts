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
/**
 * 
 * @export
 * @interface Receipt
 */
export interface Receipt {
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    transactionHash: string;
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    status: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Receipt
     */
    outputs: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Receipt
     */
    logs: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Receipt
     */
    newPackages: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Receipt
     */
    newComponents: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Receipt
     */
    newResources: Array<string>;
}

export function ReceiptFromJSON(json: any): Receipt {
    return ReceiptFromJSONTyped(json, false);
}

export function ReceiptFromJSONTyped(json: any, ignoreDiscriminator: boolean): Receipt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionHash': json['transaction_hash'],
        'status': json['status'],
        'outputs': json['outputs'],
        'logs': json['logs'],
        'newPackages': json['new_packages'],
        'newComponents': json['new_components'],
        'newResources': json['new_resources'],
    };
}

export function ReceiptToJSON(value?: Receipt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction_hash': value.transactionHash,
        'status': value.status,
        'outputs': value.outputs,
        'logs': value.logs,
        'new_packages': value.newPackages,
        'new_components': value.newComponents,
        'new_resources': value.newResources,
    };
}

