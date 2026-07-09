// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateResourceSharesRequest } from '../models/CreateResourceSharesRequest';
import { ModelsResourceShareChangeSet } from '../models/ModelsResourceShareChangeSet';
import { ModelsResourceShareWithUsageList } from '../models/ModelsResourceShareWithUsageList';
import { ModelsSharedResourceList } from '../models/ModelsSharedResourceList';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';

/**
 * no description
 */
export class ResourceSharesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource\'s auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.
     * Share a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share request
     */
    public async createResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ResourceSharesApi", "createResourceShares", "organizationId");
        }


        // verify required parameter 'resourceType' is not null or undefined
        if (resourceType === null || resourceType === undefined) {
            throw new RequiredError("ResourceSharesApi", "createResourceShares", "resourceType");
        }


        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new RequiredError("ResourceSharesApi", "createResourceShares", "resourceId");
        }


        // verify required parameter 'createResourceSharesRequest' is not null or undefined
        if (createResourceSharesRequest === null || createResourceSharesRequest === undefined) {
            throw new RequiredError("ResourceSharesApi", "createResourceShares", "createResourceSharesRequest");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/resource_shares/{resource_type}/{resource_id}'
            .replace('{organization_id}', encodeURIComponent(String(organizationId)))
            .replace('{resource_type}', encodeURIComponent(String(resourceType)))
            .replace('{resource_id}', encodeURIComponent(String(resourceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createResourceSharesRequest, "CreateResourceSharesRequest", ""),
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
     * List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource\'s policy auto-shares it with new children.
     * List a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public async listResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ResourceSharesApi", "listResourceShares", "organizationId");
        }


        // verify required parameter 'resourceType' is not null or undefined
        if (resourceType === null || resourceType === undefined) {
            throw new RequiredError("ResourceSharesApi", "listResourceShares", "resourceType");
        }


        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new RequiredError("ResourceSharesApi", "listResourceShares", "resourceId");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/resource_shares/{resource_type}/{resource_id}'
            .replace('{organization_id}', encodeURIComponent(String(organizationId)))
            .replace('{resource_type}', encodeURIComponent(String(resourceType)))
            .replace('{resource_id}', encodeURIComponent(String(resourceId)));

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
     * List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.
     * List shared resources
     * @param organizationId Owner organization ID
     * @param limit Page size (default: 10)
     * @param offset Offset (default: 0)
     * @param resourceType Filter by resource type
     */
    public async listSharedResources(organizationId: string, limit?: number, offset?: number, resourceType?: 'secret' | 'component', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ResourceSharesApi", "listSharedResources", "organizationId");
        }





        // Path Params
        const localVarPath = '/v3/{organization_id}/resource_shares'
            .replace('{organization_id}', encodeURIComponent(String(organizationId)));

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
        if (resourceType !== undefined) {
            requestContext.setQueryParam("resource_type", ObjectSerializer.serialize(resourceType, "'secret' | 'component'", ""));
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
     * Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.
     * Unshare a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public async unshareResource(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ResourceSharesApi", "unshareResource", "organizationId");
        }


        // verify required parameter 'resourceType' is not null or undefined
        if (resourceType === null || resourceType === undefined) {
            throw new RequiredError("ResourceSharesApi", "unshareResource", "resourceType");
        }


        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new RequiredError("ResourceSharesApi", "unshareResource", "resourceId");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/resource_shares/{resource_type}/{resource_id}'
            .replace('{organization_id}', encodeURIComponent(String(organizationId)))
            .replace('{resource_type}', encodeURIComponent(String(resourceType)))
            .replace('{resource_id}', encodeURIComponent(String(resourceId)));

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
     * Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a share that the target organization is actively using is rejected with 409.
     * Update a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share delta request
     */
    public async updateResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ResourceSharesApi", "updateResourceShares", "organizationId");
        }


        // verify required parameter 'resourceType' is not null or undefined
        if (resourceType === null || resourceType === undefined) {
            throw new RequiredError("ResourceSharesApi", "updateResourceShares", "resourceType");
        }


        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new RequiredError("ResourceSharesApi", "updateResourceShares", "resourceId");
        }


        // verify required parameter 'createResourceSharesRequest' is not null or undefined
        if (createResourceSharesRequest === null || createResourceSharesRequest === undefined) {
            throw new RequiredError("ResourceSharesApi", "updateResourceShares", "createResourceSharesRequest");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/resource_shares/{resource_type}/{resource_id}'
            .replace('{organization_id}', encodeURIComponent(String(organizationId)))
            .replace('{resource_type}', encodeURIComponent(String(resourceType)))
            .replace('{resource_id}', encodeURIComponent(String(resourceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createResourceSharesRequest, "CreateResourceSharesRequest", ""),
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

}

export class ResourceSharesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createResourceShares
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createResourceSharesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsResourceShareChangeSet >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsResourceShareChangeSet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsResourceShareChangeSet", ""
            ) as ModelsResourceShareChangeSet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Missing resource_sharing:write permission", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "A revoked share is in use by the target organization", body, response.headers);
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
            const body: ModelsResourceShareChangeSet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsResourceShareChangeSet", ""
            ) as ModelsResourceShareChangeSet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listResourceShares
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listResourceSharesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsResourceShareWithUsageList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsResourceShareWithUsageList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsResourceShareWithUsageList", ""
            ) as ModelsResourceShareWithUsageList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid resource_type", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Missing resource_sharing:read permission", body, response.headers);
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
            const body: ModelsResourceShareWithUsageList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsResourceShareWithUsageList", ""
            ) as ModelsResourceShareWithUsageList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSharedResources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSharedResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsSharedResourceList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsSharedResourceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsSharedResourceList", ""
            ) as ModelsSharedResourceList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid query parameters", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Missing resource_sharing:read permission", body, response.headers);
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
            const body: ModelsSharedResourceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsSharedResourceList", ""
            ) as ModelsSharedResourceList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unshareResource
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unshareResourceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsResourceShareChangeSet >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsResourceShareChangeSet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsResourceShareChangeSet", ""
            ) as ModelsResourceShareChangeSet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid resource_type", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Missing resource_sharing:write permission", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "A share is in use by a target organization", body, response.headers);
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
            const body: ModelsResourceShareChangeSet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsResourceShareChangeSet", ""
            ) as ModelsResourceShareChangeSet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateResourceShares
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateResourceSharesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsResourceShareChangeSet >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsResourceShareChangeSet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsResourceShareChangeSet", ""
            ) as ModelsResourceShareChangeSet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Missing resource_sharing:write permission", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "A revoked share is in use by the target organization", body, response.headers);
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
            const body: ModelsResourceShareChangeSet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsResourceShareChangeSet", ""
            ) as ModelsResourceShareChangeSet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
