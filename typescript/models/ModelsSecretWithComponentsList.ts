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

import { ModelsPagination } from '../models/ModelsPagination';
import { ModelsSecretWithComponents } from '../models/ModelsSecretWithComponents';
import { HttpFile } from '../http/http';

export class ModelsSecretWithComponentsList {
    'pagination'?: ModelsPagination;
    'secrets'?: Array<ModelsSecretWithComponents>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "ModelsPagination",
            "format": ""
        },
        {
            "name": "secrets",
            "baseName": "secrets",
            "type": "Array<ModelsSecretWithComponents>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelsSecretWithComponentsList.attributeTypeMap;
    }

    public constructor() {
    }
}
