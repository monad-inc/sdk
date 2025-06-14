/**
 * Monad Swagger API
 * This is the monad API
 *
 * OpenAPI spec version: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ResourceQuantity {
    'format'?: ResourceQuantityFormatEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "format",
            "baseName": "Format",
            "type": "ResourceQuantityFormatEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResourceQuantity.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ResourceQuantityFormatEnum {
    DecimalExponent = 'DecimalExponent',
    BinarySI = 'BinarySI',
    DecimalSI = 'DecimalSI'
}

