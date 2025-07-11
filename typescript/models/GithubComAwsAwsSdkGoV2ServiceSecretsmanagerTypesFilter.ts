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

import { TypesFilterNameStringType } from '../models/TypesFilterNameStringType';
import { HttpFile } from '../http/http';

export class GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter {
    'key'?: TypesFilterNameStringType;
    /**
    * The keyword to filter for.  You can prefix your search value with an exclamation mark ( ! ) in order to perform negation filters.
    */
    'values'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "TypesFilterNameStringType",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


