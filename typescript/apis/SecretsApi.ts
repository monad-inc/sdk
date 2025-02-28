// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsSecretWithComponents } from '../models/ModelsSecretWithComponents';
import { ModelsSecretWithComponentsList } from '../models/ModelsSecretWithComponentsList';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RoutesV2CreateOrUpdateSecretRequest } from '../models/RoutesV2CreateOrUpdateSecretRequest';
import { RoutesV2SecretResponse } from '../models/RoutesV2SecretResponse';

/**
 * no description
 */
export class SecretsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param organizationId Organization ID
     * @param limit Limit number of results
     * @param offset Offset results
     */
    public async v2OrganizationIdSecretsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsGet", "organizationId");
        }




        // Path Params
        const localVarPath = '/v2/{organization_id}/secrets'
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
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public async v2OrganizationIdSecretsPost(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsPost", "organizationId");
        }


        // verify required parameter 'routesV2CreateOrUpdateSecretRequest' is not null or undefined
        if (routesV2CreateOrUpdateSecretRequest === null || routesV2CreateOrUpdateSecretRequest === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsPost", "routesV2CreateOrUpdateSecretRequest");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/secrets'
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
            ObjectSerializer.serialize(routesV2CreateOrUpdateSecretRequest, "RoutesV2CreateOrUpdateSecretRequest", ""),
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
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public async v2OrganizationIdSecretsSecretIdDelete(organizationId: string, secretId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsSecretIdDelete", "organizationId");
        }


        // verify required parameter 'secretId' is not null or undefined
        if (secretId === null || secretId === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsSecretIdDelete", "secretId");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/secrets/{secret_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'secret_id' + '}', encodeURIComponent(String(secretId)));

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
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public async v2OrganizationIdSecretsSecretIdGet(organizationId: string, secretId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsSecretIdGet", "organizationId");
        }


        // verify required parameter 'secretId' is not null or undefined
        if (secretId === null || secretId === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsSecretIdGet", "secretId");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/secrets/{secret_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'secret_id' + '}', encodeURIComponent(String(secretId)));

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
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public async v2OrganizationIdSecretsSecretIdPatch(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsSecretIdPatch", "organizationId");
        }


        // verify required parameter 'secretId' is not null or undefined
        if (secretId === null || secretId === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsSecretIdPatch", "secretId");
        }


        // verify required parameter 'routesV2CreateOrUpdateSecretRequest' is not null or undefined
        if (routesV2CreateOrUpdateSecretRequest === null || routesV2CreateOrUpdateSecretRequest === undefined) {
            throw new RequiredError("SecretsApi", "v2OrganizationIdSecretsSecretIdPatch", "routesV2CreateOrUpdateSecretRequest");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/secrets/{secret_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'secret_id' + '}', encodeURIComponent(String(secretId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV2CreateOrUpdateSecretRequest, "RoutesV2CreateOrUpdateSecretRequest", ""),
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

export class SecretsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdSecretsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdSecretsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsSecretWithComponentsList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsSecretWithComponentsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsSecretWithComponentsList", ""
            ) as ModelsSecretWithComponentsList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: ModelsSecretWithComponentsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsSecretWithComponentsList", ""
            ) as ModelsSecretWithComponentsList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdSecretsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdSecretsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV2SecretResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: RoutesV2SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2SecretResponse", ""
            ) as RoutesV2SecretResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body", body, response.headers);
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
            const body: RoutesV2SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2SecretResponse", ""
            ) as RoutesV2SecretResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdSecretsSecretIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Secret not found", body, response.headers);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdSecretsSecretIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdSecretsSecretIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsSecretWithComponents >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsSecretWithComponents = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsSecretWithComponents", ""
            ) as ModelsSecretWithComponents;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Secret not found", body, response.headers);
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
            const body: ModelsSecretWithComponents = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsSecretWithComponents", ""
            ) as ModelsSecretWithComponents;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdSecretsSecretIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV2SecretResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV2SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2SecretResponse", ""
            ) as RoutesV2SecretResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Secret not found", body, response.headers);
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
            const body: RoutesV2SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2SecretResponse", ""
            ) as RoutesV2SecretResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
