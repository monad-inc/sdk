// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsPipeline } from '../models/ModelsPipeline';
import { ModelsPipelineConfigV2 } from '../models/ModelsPipelineConfigV2';
import { ModelsPipelineList } from '../models/ModelsPipelineList';
import { ModelsPipelineNodeMetrics } from '../models/ModelsPipelineNodeMetrics';
import { ModelsPipelineNodeStatus } from '../models/ModelsPipelineNodeStatus';
import { ModelsPipelineStatus } from '../models/ModelsPipelineStatus';
import { RoutesUpdatePipelineRequest } from '../models/RoutesUpdatePipelineRequest';
import { RoutesV2CreatePipelineRequest } from '../models/RoutesV2CreatePipelineRequest';
import { RoutesV2GetOrganizationSummaryResponse } from '../models/RoutesV2GetOrganizationSummaryResponse';
import { RoutesV2MetricsResponse } from '../models/RoutesV2MetricsResponse';
import { RoutesV2PipelineWithStatus } from '../models/RoutesV2PipelineWithStatus';
import { RoutesV2UpdatePipelineRequest } from '../models/RoutesV2UpdatePipelineRequest';

/**
 * no description
 */
export class PipelinesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param limit Limit
     * @param offset Offset
     */
    public async v1OrganizationIdPipelinesGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v1OrganizationIdPipelinesGet", "organizationId");
        }




        // Path Params
        const localVarPath = '/v1/{organization_id}/pipelines'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public async v1OrganizationIdPipelinesPipelineIdDelete(organizationId: string, pipelineId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v1OrganizationIdPipelinesPipelineIdDelete", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v1OrganizationIdPipelinesPipelineIdDelete", "pipelineId");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/pipelines/{pipeline_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public async v1OrganizationIdPipelinesPipelineIdGet(organizationId: string, pipelineId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v1OrganizationIdPipelinesPipelineIdGet", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v1OrganizationIdPipelinesPipelineIdGet", "pipelineId");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/pipelines/{pipeline_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public async v1OrganizationIdPipelinesPipelineIdPatch(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v1OrganizationIdPipelinesPipelineIdPatch", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v1OrganizationIdPipelinesPipelineIdPatch", "pipelineId");
        }


        // verify required parameter 'routesUpdatePipelineRequest' is not null or undefined
        if (routesUpdatePipelineRequest === null || routesUpdatePipelineRequest === undefined) {
            throw new RequiredError("PipelinesApi", "v1OrganizationIdPipelinesPipelineIdPatch", "routesUpdatePipelineRequest");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/pipelines/{pipeline_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesUpdatePipelineRequest, "RoutesUpdatePipelineRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param start ISO3339 start time, default 24 hours ago
     * @param end ISO3339 end time, default now
     */
    public async v2OrganizationIdPipelineSummaryGet(organizationId: string, start?: string, end?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelineSummaryGet", "organizationId");
        }




        // Path Params
        const localVarPath = '/v2/{organization_id}/pipeline_summary'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "string", ""));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param limit Limit
     * @param offset Offset
     */
    public async v2OrganizationIdPipelinesGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesGet", "organizationId");
        }




        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param organizationId Organization ID
     * @param pipelineIds Comma-separated list of pipeline IDs
     * @param resolution Resolution for metrics (default: 5m)
     */
    public async v2OrganizationIdPipelinesMetricsGet(organizationId: string, pipelineIds: string, resolution?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesMetricsGet", "organizationId");
        }


        // verify required parameter 'pipelineIds' is not null or undefined
        if (pipelineIds === null || pipelineIds === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesMetricsGet", "pipelineIds");
        }



        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/metrics'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pipelineIds !== undefined) {
            requestContext.setQueryParam("pipeline_ids", ObjectSerializer.serialize(pipelineIds, "string", ""));
        }

        // Query Params
        if (resolution !== undefined) {
            requestContext.setQueryParam("resolution", ObjectSerializer.serialize(resolution, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public async v2OrganizationIdPipelinesPipelineIdDelete(organizationId: string, pipelineId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdDelete", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdDelete", "pipelineId");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/{pipeline_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public async v2OrganizationIdPipelinesPipelineIdGet(organizationId: string, pipelineId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdGet", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdGet", "pipelineId");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/{pipeline_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param start ISO3339 start time, default 6 hours ago
     * @param end ISO3339 end time, default now
     * @param resolution Resolution of the data, default 15m
     */
    public async v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet", "pipelineId");
        }


        // verify required parameter 'nodeId' is not null or undefined
        if (nodeId === null || nodeId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet", "nodeId");
        }


        // verify required parameter 'metric' is not null or undefined
        if (metric === null || metric === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet", "metric");
        }





        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)))
            .replace('{' + 'node_id' + '}', encodeURIComponent(String(nodeId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (metric !== undefined) {
            requestContext.setQueryParam("metric", ObjectSerializer.serialize(metric, "string", ""));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "string", ""));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "string", ""));
        }

        // Query Params
        if (resolution !== undefined) {
            requestContext.setQueryParam("resolution", ObjectSerializer.serialize(resolution, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public async v2OrganizationIdPipelinesPipelineIdPatch(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdPatch", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdPatch", "pipelineId");
        }


        // verify required parameter 'routesV2UpdatePipelineRequest' is not null or undefined
        if (routesV2UpdatePipelineRequest === null || routesV2UpdatePipelineRequest === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdPatch", "routesV2UpdatePipelineRequest");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/{pipeline_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV2UpdatePipelineRequest, "RoutesV2UpdatePipelineRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param metrics Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param start ISO3339 start time, default 24 hours ago
     * @param end ISO3339 end time, default now
     */
    public async v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdStatusGet", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdStatusGet", "pipelineId");
        }





        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/{pipeline_id}/status'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (metrics !== undefined) {
            const serializedParams = ObjectSerializer.serialize(metrics, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("metrics", serializedParam);
            }
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "string", ""));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param metrics Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param start ISO3339 start time, default 24 hours ago
     * @param end ISO3339 end time, default now
     */
    public async v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet", "pipelineId");
        }


        // verify required parameter 'nodeId' is not null or undefined
        if (nodeId === null || nodeId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet", "nodeId");
        }





        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)))
            .replace('{' + 'node_id' + '}', encodeURIComponent(String(nodeId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (metrics !== undefined) {
            const serializedParams = ObjectSerializer.serialize(metrics, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("metrics", serializedParam);
            }
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "string", ""));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public async v2OrganizationIdPipelinesPipelineIdTriggerPost(organizationId: string, pipelineId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdTriggerPost", "organizationId");
        }


        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPipelineIdTriggerPost", "pipelineId");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/{pipeline_id}/trigger'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipeline_id' + '}', encodeURIComponent(String(pipelineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public async v2OrganizationIdPipelinesPost(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPost", "organizationId");
        }


        // verify required parameter 'routesV2CreatePipelineRequest' is not null or undefined
        if (routesV2CreatePipelineRequest === null || routesV2CreatePipelineRequest === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesPost", "routesV2CreatePipelineRequest");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV2CreatePipelineRequest, "RoutesV2CreatePipelineRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the status of pipelines within an organization for a specified time period.
     * Get pipeline status
     * @param organizationId Organization ID
     * @param limit Maximum number of pipelines to return (default is 10)
     * @param offset Offset for pagination (default is 0)
     * @param start Start time (RFC3339 format) for status metrics (default: 24 hours ago)
     * @param end End time (RFC3339 format) for status metrics (default: now)
     */
    public async v2OrganizationIdPipelinesStatusesGet(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("PipelinesApi", "v2OrganizationIdPipelinesStatusesGet", "organizationId");
        }






        // Path Params
        const localVarPath = '/v2/{organization_id}/pipelines/statuses'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "string", ""));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PipelinesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdPipelinesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdPipelinesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipelineList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipelineList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineList", ""
            ) as ModelsPipelineList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid limit or offset", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to list pipelines", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipelineList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineList", ""
            ) as ModelsPipelineList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdPipelinesPipelineIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to delete pipeline", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdPipelinesPipelineIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipeline >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipeline = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipeline", ""
            ) as ModelsPipeline;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get pipeline", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipeline = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipeline", ""
            ) as ModelsPipeline;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdPipelinesPipelineIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipeline >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipeline = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipeline", ""
            ) as ModelsPipeline;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid JSON request body", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to update pipeline", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipeline = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipeline", ""
            ) as ModelsPipeline;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelineSummaryGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelineSummaryGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV2GetOrganizationSummaryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV2GetOrganizationSummaryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2GetOrganizationSummaryResponse", ""
            ) as RoutesV2GetOrganizationSummaryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get pipelines for organization", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoutesV2GetOrganizationSummaryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2GetOrganizationSummaryResponse", ""
            ) as RoutesV2GetOrganizationSummaryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipelineList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipelineList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineList", ""
            ) as ModelsPipelineList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid limit or offset", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to list pipelines", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipelineList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineList", ""
            ) as ModelsPipelineList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesMetricsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesMetricsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV2MetricsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV2MetricsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2MetricsResponse", ""
            ) as RoutesV2MetricsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoutesV2MetricsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2MetricsResponse", ""
            ) as RoutesV2MetricsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesPipelineIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to delete pipeline", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesPipelineIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipelineConfigV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipelineConfigV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineConfigV2", ""
            ) as ModelsPipelineConfigV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get pipeline", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipelineConfigV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineConfigV2", ""
            ) as ModelsPipelineConfigV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipelineNodeMetrics >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipelineNodeMetrics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineNodeMetrics", ""
            ) as ModelsPipelineNodeMetrics;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get node", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipelineNodeMetrics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineNodeMetrics", ""
            ) as ModelsPipelineNodeMetrics;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesPipelineIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipelineConfigV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipelineConfigV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineConfigV2", ""
            ) as ModelsPipelineConfigV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid JSON request body", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to update pipeline", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipelineConfigV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineConfigV2", ""
            ) as ModelsPipelineConfigV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesPipelineIdStatusGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipelineStatus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipelineStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineStatus", ""
            ) as ModelsPipelineStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get pipeline", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipelineStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineStatus", ""
            ) as ModelsPipelineStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipelineNodeStatus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsPipelineNodeStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineNodeStatus", ""
            ) as ModelsPipelineNodeStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get pipeline node status", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipelineNodeStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineNodeStatus", ""
            ) as ModelsPipelineNodeStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesPipelineIdTriggerPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesPipelineIdTriggerPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid request or pipeline not cron-based", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Insufficient permissions", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Pipeline not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsPipelineConfigV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ModelsPipelineConfigV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineConfigV2", ""
            ) as ModelsPipelineConfigV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid JSON request body or Failed to create pipeline", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsPipelineConfigV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsPipelineConfigV2", ""
            ) as ModelsPipelineConfigV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdPipelinesStatusesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdPipelinesStatusesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RoutesV2PipelineWithStatus> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RoutesV2PipelineWithStatus> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RoutesV2PipelineWithStatus>", ""
            ) as Array<RoutesV2PipelineWithStatus>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid query parameters or time range", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to retrieve pipeline status", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RoutesV2PipelineWithStatus> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RoutesV2PipelineWithStatus>", ""
            ) as Array<RoutesV2PipelineWithStatus>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
