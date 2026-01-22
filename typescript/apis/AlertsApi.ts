// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { RoutesV3AlertList } from '../models/RoutesV3AlertList';

/**
 * no description
 */
export class AlertsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get list of recent historical alerts for an organization
     * List alerts with pagination
     * @param organizationId Organization ID
     * @param ruleIds Comma-separated alert rule IDs
     * @param severities Comma-separated severity levels
     * @param pipelineIds Comma-separated pipeline IDs
     * @param resourceType Resource type filter
     * @param resourceId Specific resource ID
     * @param since RFC3339 timestamp for start time
     * @param until RFC3339 timestamp for end time
     */
    public async v3OrganizationIdAlertsGet(organizationId: string, ruleIds?: string, severities?: string, pipelineIds?: string, resourceType?: string, resourceId?: string, since?: string, until?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("AlertsApi", "v3OrganizationIdAlertsGet", "organizationId");
        }









        // Path Params
        const localVarPath = '/v3/{organization_id}/alerts'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ruleIds !== undefined) {
            requestContext.setQueryParam("rule_ids", ObjectSerializer.serialize(ruleIds, "string", ""));
        }

        // Query Params
        if (severities !== undefined) {
            requestContext.setQueryParam("severities", ObjectSerializer.serialize(severities, "string", ""));
        }

        // Query Params
        if (pipelineIds !== undefined) {
            requestContext.setQueryParam("pipeline_ids", ObjectSerializer.serialize(pipelineIds, "string", ""));
        }

        // Query Params
        if (resourceType !== undefined) {
            requestContext.setQueryParam("resource_type", ObjectSerializer.serialize(resourceType, "string", ""));
        }

        // Query Params
        if (resourceId !== undefined) {
            requestContext.setQueryParam("resource_id", ObjectSerializer.serialize(resourceId, "string", ""));
        }

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "string", ""));
        }

        // Query Params
        if (until !== undefined) {
            requestContext.setQueryParam("until", ObjectSerializer.serialize(until, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
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
     * Stream alerts for an organization using Server-Sent Events
     * Stream alerts in real-time
     * @param organizationId Organization ID
     * @param since RFC3339 timestamp to start streaming from
     * @param last Duration to start streaming from (e.g., \&#39;5m\&#39;, \&#39;1h\&#39;, \&#39;24h\&#39;)
     * @param ruleIds Comma-separated alert rule IDs
     * @param severities Comma-separated severity levels
     * @param resourceIds Comma-separated resource IDs
     * @param resourceType Resource type filter
     */
    public async v3OrganizationIdAlertsStreamGet(organizationId: string, since?: string, last?: string, ruleIds?: string, severities?: string, resourceIds?: string, resourceType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("AlertsApi", "v3OrganizationIdAlertsStreamGet", "organizationId");
        }








        // Path Params
        const localVarPath = '/v3/{organization_id}/alerts/stream'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "string", ""));
        }

        // Query Params
        if (last !== undefined) {
            requestContext.setQueryParam("last", ObjectSerializer.serialize(last, "string", ""));
        }

        // Query Params
        if (ruleIds !== undefined) {
            requestContext.setQueryParam("rule_ids", ObjectSerializer.serialize(ruleIds, "string", ""));
        }

        // Query Params
        if (severities !== undefined) {
            requestContext.setQueryParam("severities", ObjectSerializer.serialize(severities, "string", ""));
        }

        // Query Params
        if (resourceIds !== undefined) {
            requestContext.setQueryParam("resource_ids", ObjectSerializer.serialize(resourceIds, "string", ""));
        }

        // Query Params
        if (resourceType !== undefined) {
            requestContext.setQueryParam("resource_type", ObjectSerializer.serialize(resourceType, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
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

export class AlertsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdAlertsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdAlertsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV3AlertList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV3AlertList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV3AlertList", ""
            ) as RoutesV3AlertList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid parameters", body, response.headers);
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
            const body: RoutesV3AlertList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV3AlertList", ""
            ) as RoutesV3AlertList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdAlertsStreamGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdAlertsStreamGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid parameters", body, response.headers);
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

}
