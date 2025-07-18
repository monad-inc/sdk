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
* CrowdStrike EDR event stream settings
*/
export class EventSettingsConfig {
    /**
    * The application name monad uses to connect to the CrowdStrike data stream. It\'s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You\'re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named \'monad\'.
    */
    'appName'?: string;
    /**
    * Your cloud type for CrowdStrike. Ex: \'autodiscover\', \'us-1\', \'us-2\', \'eu-1\', \'us-gov-1\'.
    */
    'cloud'?: string;
    /**
    * In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer\'s environment. This is crucial for scenarios where operational isolation between different clients\' data and configurations is necessary.
    */
    'memberCid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appName",
            "baseName": "app_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "cloud",
            "baseName": "cloud",
            "type": "string",
            "format": ""
        },
        {
            "name": "memberCid",
            "baseName": "member_cid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventSettingsConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
