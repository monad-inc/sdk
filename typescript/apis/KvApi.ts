// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { KvlookupGetMetadataResponse } from '../models/KvlookupGetMetadataResponse';
import { KvlookupKVEntry } from '../models/KvlookupKVEntry';

/**
 * no description
 */
export class KvApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL
     * Get KV lookup metadata
     * @param organizationId Organization ID
     * @param componentId Component ID
     */
    public async v3OrganizationIdKvLookupMetadataGet(organizationId: string, componentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("KvApi", "v3OrganizationIdKvLookupMetadataGet", "organizationId");
        }


        // verify required parameter 'componentId' is not null or undefined
        if (componentId === null || componentId === undefined) {
            throw new RequiredError("KvApi", "v3OrganizationIdKvLookupMetadataGet", "componentId");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/kv_lookup/metadata'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (componentId !== undefined) {
            requestContext.setQueryParam("component_id", ObjectSerializer.serialize(componentId, "string", ""));
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
     * Get a sample of entries from the NATS KV lookup bucket for a given organization and component
     * Get KV lookup sample entries
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param numEntries Number of sample entries to return
     */
    public async v3OrganizationIdKvLookupSampleGet(organizationId: string, componentId: string, numEntries: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("KvApi", "v3OrganizationIdKvLookupSampleGet", "organizationId");
        }


        // verify required parameter 'componentId' is not null or undefined
        if (componentId === null || componentId === undefined) {
            throw new RequiredError("KvApi", "v3OrganizationIdKvLookupSampleGet", "componentId");
        }


        // verify required parameter 'numEntries' is not null or undefined
        if (numEntries === null || numEntries === undefined) {
            throw new RequiredError("KvApi", "v3OrganizationIdKvLookupSampleGet", "numEntries");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/kv_lookup/sample'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (componentId !== undefined) {
            requestContext.setQueryParam("component_id", ObjectSerializer.serialize(componentId, "string", ""));
        }

        // Query Params
        if (numEntries !== undefined) {
            requestContext.setQueryParam("num_entries", ObjectSerializer.serialize(numEntries, "number", ""));
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
     * Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component
     * Get value by key from KV lookup
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param key Key to look up
     */
    public async v3OrganizationIdKvLookupValueGet(organizationId: string, componentId: string, key: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("KvApi", "v3OrganizationIdKvLookupValueGet", "organizationId");
        }


        // verify required parameter 'componentId' is not null or undefined
        if (componentId === null || componentId === undefined) {
            throw new RequiredError("KvApi", "v3OrganizationIdKvLookupValueGet", "componentId");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("KvApi", "v3OrganizationIdKvLookupValueGet", "key");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/kv_lookup/value'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (componentId !== undefined) {
            requestContext.setQueryParam("component_id", ObjectSerializer.serialize(componentId, "string", ""));
        }

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
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

export class KvApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdKvLookupMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdKvLookupMetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<KvlookupGetMetadataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: KvlookupGetMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KvlookupGetMetadataResponse", ""
            ) as KvlookupGetMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get KV lookup metadata", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: KvlookupGetMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KvlookupGetMetadataResponse", ""
            ) as KvlookupGetMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdKvLookupSampleGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdKvLookupSampleGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<KvlookupKVEntry> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<KvlookupKVEntry> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<KvlookupKVEntry>", ""
            ) as Array<KvlookupKVEntry>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid num_entries parameter", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get KV lookup sample entries", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<KvlookupKVEntry> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<KvlookupKVEntry>", ""
            ) as Array<KvlookupKVEntry>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdKvLookupValueGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdKvLookupValueGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<KvlookupKVEntry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: KvlookupKVEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KvlookupKVEntry", ""
            ) as KvlookupKVEntry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get value from KV lookup", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: KvlookupKVEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KvlookupKVEntry", ""
            ) as KvlookupKVEntry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
