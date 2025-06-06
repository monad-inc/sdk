// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsEnrichment } from '../models/ModelsEnrichment';
import { ModelsEnrichmentList } from '../models/ModelsEnrichmentList';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RoutesV3CreateEnrichmentRequest } from '../models/RoutesV3CreateEnrichmentRequest';
import { RoutesV3GetEnrichmentResponse } from '../models/RoutesV3GetEnrichmentResponse';
import { RoutesV3PutEnrichmentRequest } from '../models/RoutesV3PutEnrichmentRequest';
import { RoutesV3SuccessResponse } from '../models/RoutesV3SuccessResponse';
import { RoutesV3TestEnrichmentConnectionRequest } from '../models/RoutesV3TestEnrichmentConnectionRequest';
import { RoutesV3UpdateEnrichmentRequest } from '../models/RoutesV3UpdateEnrichmentRequest';

/**
 * no description
 */
export class OrganizationEnrichmentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public async v3OrganizationIdEnrichmentsEnrichmentIdDelete(organizationId: string, enrichmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdDelete", "organizationId");
        }


        // verify required parameter 'enrichmentId' is not null or undefined
        if (enrichmentId === null || enrichmentId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdDelete", "enrichmentId");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments/{enrichment_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'enrichment_id' + '}', encodeURIComponent(String(enrichmentId)));

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
     * Get an enrichment by ID
     * Get enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public async v3OrganizationIdEnrichmentsEnrichmentIdGet(organizationId: string, enrichmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdGet", "organizationId");
        }


        // verify required parameter 'enrichmentId' is not null or undefined
        if (enrichmentId === null || enrichmentId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdGet", "enrichmentId");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments/{enrichment_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'enrichment_id' + '}', encodeURIComponent(String(enrichmentId)));

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
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param routesV3UpdateEnrichmentRequest Enrichment configuration update
     * @param testConnection Test connection before updating the enrichment
     */
    public async v3OrganizationIdEnrichmentsEnrichmentIdPatch(organizationId: string, enrichmentId: string, routesV3UpdateEnrichmentRequest: RoutesV3UpdateEnrichmentRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdPatch", "organizationId");
        }


        // verify required parameter 'enrichmentId' is not null or undefined
        if (enrichmentId === null || enrichmentId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdPatch", "enrichmentId");
        }


        // verify required parameter 'routesV3UpdateEnrichmentRequest' is not null or undefined
        if (routesV3UpdateEnrichmentRequest === null || routesV3UpdateEnrichmentRequest === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdPatch", "routesV3UpdateEnrichmentRequest");
        }



        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments/{enrichment_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'enrichment_id' + '}', encodeURIComponent(String(enrichmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (testConnection !== undefined) {
            requestContext.setQueryParam("test_connection", ObjectSerializer.serialize(testConnection, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV3UpdateEnrichmentRequest, "RoutesV3UpdateEnrichmentRequest", ""),
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
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param routesV3PutEnrichmentRequest Enrichment configuration update
     * @param testConnection Test connection before updating the enrichment
     */
    public async v3OrganizationIdEnrichmentsEnrichmentIdPut(organizationId: string, enrichmentId: string, routesV3PutEnrichmentRequest: RoutesV3PutEnrichmentRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdPut", "organizationId");
        }


        // verify required parameter 'enrichmentId' is not null or undefined
        if (enrichmentId === null || enrichmentId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdPut", "enrichmentId");
        }


        // verify required parameter 'routesV3PutEnrichmentRequest' is not null or undefined
        if (routesV3PutEnrichmentRequest === null || routesV3PutEnrichmentRequest === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsEnrichmentIdPut", "routesV3PutEnrichmentRequest");
        }



        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments/{enrichment_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'enrichment_id' + '}', encodeURIComponent(String(enrichmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (testConnection !== undefined) {
            requestContext.setQueryParam("test_connection", ObjectSerializer.serialize(testConnection, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV3PutEnrichmentRequest, "RoutesV3PutEnrichmentRequest", ""),
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
     * List all enrichments for an organization
     * List enrichments
     * @param organizationId Organization ID
     * @param limit Number of results to return (default 100)
     * @param offset Number of results to skip (default 0)
     */
    public async v3OrganizationIdEnrichmentsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsGet", "organizationId");
        }




        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments'
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
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param organizationId Organization ID
     * @param routesV3CreateEnrichmentRequest Enrichment configuration
     * @param testConnection Test connection before creating the enrichment
     */
    public async v3OrganizationIdEnrichmentsPost(organizationId: string, routesV3CreateEnrichmentRequest: RoutesV3CreateEnrichmentRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsPost", "organizationId");
        }


        // verify required parameter 'routesV3CreateEnrichmentRequest' is not null or undefined
        if (routesV3CreateEnrichmentRequest === null || routesV3CreateEnrichmentRequest === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsPost", "routesV3CreateEnrichmentRequest");
        }



        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (testConnection !== undefined) {
            requestContext.setQueryParam("test_connection", ObjectSerializer.serialize(testConnection, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV3CreateEnrichmentRequest, "RoutesV3CreateEnrichmentRequest", ""),
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
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param routesV3TestEnrichmentConnectionRequest Enrichment configuration to test
     */
    public async v3OrganizationIdEnrichmentsTestConnectionPost(organizationId: string, routesV3TestEnrichmentConnectionRequest: RoutesV3TestEnrichmentConnectionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsTestConnectionPost", "organizationId");
        }


        // verify required parameter 'routesV3TestEnrichmentConnectionRequest' is not null or undefined
        if (routesV3TestEnrichmentConnectionRequest === null || routesV3TestEnrichmentConnectionRequest === undefined) {
            throw new RequiredError("OrganizationEnrichmentsApi", "v3OrganizationIdEnrichmentsTestConnectionPost", "routesV3TestEnrichmentConnectionRequest");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments/test-connection'
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
            ObjectSerializer.serialize(routesV3TestEnrichmentConnectionRequest, "RoutesV3TestEnrichmentConnectionRequest", ""),
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

export class OrganizationEnrichmentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsEnrichmentIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsEnrichmentIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV3SuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV3SuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV3SuccessResponse", ""
            ) as RoutesV3SuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Enrichment not found", body, response.headers);
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
            const body: RoutesV3SuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV3SuccessResponse", ""
            ) as RoutesV3SuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsEnrichmentIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsEnrichmentIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV3GetEnrichmentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV3GetEnrichmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV3GetEnrichmentResponse", ""
            ) as RoutesV3GetEnrichmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Enrichment not found", body, response.headers);
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
            const body: RoutesV3GetEnrichmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV3GetEnrichmentResponse", ""
            ) as RoutesV3GetEnrichmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsEnrichmentIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsEnrichmentIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsEnrichment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsEnrichment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsEnrichment", ""
            ) as ModelsEnrichment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, enrichment type, configuration validation error, or secret processing error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Enrichment not found", body, response.headers);
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
            const body: ModelsEnrichment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsEnrichment", ""
            ) as ModelsEnrichment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsEnrichmentIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsEnrichmentIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsEnrichment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsEnrichment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsEnrichment", ""
            ) as ModelsEnrichment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, enrichment type, configuration validation error, or secret processing error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Enrichment not found", body, response.headers);
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
            const body: ModelsEnrichment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsEnrichment", ""
            ) as ModelsEnrichment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsEnrichmentList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsEnrichmentList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsEnrichmentList", ""
            ) as ModelsEnrichmentList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request", body, response.headers);
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
            const body: ModelsEnrichmentList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsEnrichmentList", ""
            ) as ModelsEnrichmentList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsEnrichment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsEnrichment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsEnrichment", ""
            ) as ModelsEnrichment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, enrichment type, configuration validation error, or secret processing error", body, response.headers);
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
            const body: ModelsEnrichment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsEnrichment", ""
            ) as ModelsEnrichment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsTestConnectionPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsTestConnectionPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV3SuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV3SuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV3SuccessResponse", ""
            ) as RoutesV3SuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, enrichment type, or configuration", body, response.headers);
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
            const body: RoutesV3SuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV3SuccessResponse", ""
            ) as RoutesV3SuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
