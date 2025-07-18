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

export class RoutesUpdateRoleRequest {
    'description'?: string;
    'name'?: string;
    'pipelineCreate'?: boolean;
    'pipelineDelete'?: boolean;
    'pipelineRead'?: boolean;
    'pipelineUpdate'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
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
            "name": "pipelineCreate",
            "baseName": "pipeline_create",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pipelineDelete",
            "baseName": "pipeline_delete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pipelineRead",
            "baseName": "pipeline_read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pipelineUpdate",
            "baseName": "pipeline_update",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RoutesUpdateRoleRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
