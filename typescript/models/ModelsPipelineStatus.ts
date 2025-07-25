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

import { ModelsDataUsage } from '../models/ModelsDataUsage';
import { ModelsPipelineNodeStatus } from '../models/ModelsPipelineNodeStatus';
import { HttpFile } from '../http/http';

export class ModelsPipelineStatus {
    'egress'?: ModelsDataUsage;
    'errors'?: number;
    'expiredMessages'?: number;
    'ingress'?: ModelsDataUsage;
    'nodes'?: Array<ModelsPipelineNodeStatus>;
    'organizationId'?: string;
    'organizationName'?: string;
    'pipelineId'?: string;
    'pipelineName'?: string;
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "egress",
            "baseName": "egress",
            "type": "ModelsDataUsage",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "number",
            "format": ""
        },
        {
            "name": "expiredMessages",
            "baseName": "expired_messages",
            "type": "number",
            "format": ""
        },
        {
            "name": "ingress",
            "baseName": "ingress",
            "type": "ModelsDataUsage",
            "format": ""
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "Array<ModelsPipelineNodeStatus>",
            "format": ""
        },
        {
            "name": "organizationId",
            "baseName": "organization_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "organizationName",
            "baseName": "organization_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pipelineId",
            "baseName": "pipeline_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "pipelineName",
            "baseName": "pipeline_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelsPipelineStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
