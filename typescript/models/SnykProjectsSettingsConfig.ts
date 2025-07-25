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
* Snyk projects settings
*/
export class SnykProjectsSettingsConfig {
    /**
    * Cron string for scheduling the ingest of your input.
    */
    'cron'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cron",
            "baseName": "cron",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SnykProjectsSettingsConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
