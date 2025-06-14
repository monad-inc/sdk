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

import { CommunityEditionSettingsConfig } from '../models/CommunityEditionSettingsConfig';
import { HttpFile } from '../http/http';

/**
 * @type SecretProcessesorEnrichmentConfigSettings
 * Type
 * @export
 */
export type SecretProcessesorEnrichmentConfigSettings = CommunityEditionSettingsConfig | { [key: string]: any; };

/**
* @type SecretProcessesorEnrichmentConfigSettingsClass
* @export
*/
export class SecretProcessesorEnrichmentConfigSettingsClass {
    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;
}

