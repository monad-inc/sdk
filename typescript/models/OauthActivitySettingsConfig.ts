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

/**
* Google Workspace OAuth Activity settings
*/
export class OauthActivitySettingsConfig {
    /**
    * Authentication type (service_account or oauth)
    */
    'authType'?: string;
    /**
    * Email address to use for authenticating with Google Cloud (required for service_account auth).
    */
    'email'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authType",
            "baseName": "auth_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OauthActivitySettingsConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
