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
* Twilio Events settings
*/
export class EventsSettingsConfig {
    /**
    * Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials.
    */
    'actorSid'?: string;
    /**
    * Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types
    */
    'eventType'?: string;
    /**
    * Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd\'T\'HH:mm:ss\'Z\'
    */
    'replicationStartTime'?: string;
    /**
    * Only include events that refer to this resource. Useful for discovering the history of a specific resource.
    */
    'resourceSid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "actorSid",
            "baseName": "actor_sid",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "replicationStartTime",
            "baseName": "replication_start_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceSid",
            "baseName": "resource_sid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventsSettingsConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
