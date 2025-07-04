/**
 * Monad API
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

export class EnrichmentConnectorMeta {
    'config'?: any | null;
    'description'?: string;
    'house'?: string;
    'internal'?: boolean;
    'logoKey'?: string;
    'name'?: string;
    'tier'?: number;
    'typeId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "any",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "house",
            "baseName": "house",
            "type": "string",
            "format": ""
        },
        {
            "name": "internal",
            "baseName": "internal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "logoKey",
            "baseName": "logo_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "number",
            "format": ""
        },
        {
            "name": "typeId",
            "baseName": "type_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnrichmentConnectorMeta.attributeTypeMap;
    }

    public constructor() {
    }
}
