// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsOrganizationAuditLogList } from '../models/ModelsOrganizationAuditLogList';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';

/**
 * no description
 */
export class AuditLogsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List the organization\'s audit log, newest first, with cursor pagination. Filtering by resource_type=pipeline with a resource_id returns the pipeline\'s merged history: the pipeline\'s own changes plus changes to the components — and the secrets those components referenced — scoped to the time windows in which the pipeline actually used them. Rows self-identify via resource.type. Audit visibility is organization-wide under organization:logs:read: the merged feed surfaces nothing the caller could not query directly by resource. Gated by the resource_audit_logs feature flag.
     * List organization audit logs
     * @param organizationId Organization ID
     * @param limit Page size (default 50, max 100)
     * @param cursor Opaque cursor from a previous response; filters are carried by the cursor
     * @param resourceType Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type
     * @param resourceId Filter by resource ID; requires resource_type
     * @param actorId Filter by actor ID
     * @param action Filter by action (insert, update, delete)
     * @param _from Only rows at or after this RFC3339 timestamp
     * @param to Only rows before this RFC3339 timestamp
     */
    public async listOrganizationAuditLogs(organizationId: string, limit?: number, cursor?: string, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _from?: string, to?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("AuditLogsApi", "listOrganizationAuditLogs", "organizationId");
        }










        // Path Params
        const localVarPath = '/v3/{organization_id}/audit_logs'
            .replace('{organization_id}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
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
        if (actorId !== undefined) {
            requestContext.setQueryParam("actor_id", ObjectSerializer.serialize(actorId, "string", ""));
        }

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
        }

        // Query Params
        if (_from !== undefined) {
            requestContext.setQueryParam("from", ObjectSerializer.serialize(_from, "string", ""));
        }

        // Query Params
        if (to !== undefined) {
            requestContext.setQueryParam("to", ObjectSerializer.serialize(to, "string", ""));
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

export class AuditLogsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrganizationAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listOrganizationAuditLogsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsOrganizationAuditLogList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsOrganizationAuditLogList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOrganizationAuditLogList", ""
            ) as ModelsOrganizationAuditLogList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid query parameters or cursor", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Missing organization:logs:read permission", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsOrganizationAuditLogList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOrganizationAuditLogList", ""
            ) as ModelsOrganizationAuditLogList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
