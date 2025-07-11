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

import { ModelsSecret } from '../models/ModelsSecret';
import { HttpFile } from '../http/http';

/**
* PagerDuty Output Secrets
*/
export class PagerdutySecretsConfig {
    'authToken'?: ModelsSecret;
    'routingKey'?: ModelsSecret;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authToken",
            "baseName": "auth_token",
            "type": "ModelsSecret",
            "format": ""
        },
        {
            "name": "routingKey",
            "baseName": "routing_key",
            "type": "ModelsSecret",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PagerdutySecretsConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
