// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsOutput } from '../models/ModelsOutput';
import { ModelsOutputList } from '../models/ModelsOutputList';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RoutesCreateOutputRequest } from '../models/RoutesCreateOutputRequest';
import { RoutesGetOutputResponse } from '../models/RoutesGetOutputResponse';
import { RoutesUpdateOutputRequest } from '../models/RoutesUpdateOutputRequest';
import { RoutesV2CreateOutputRequest } from '../models/RoutesV2CreateOutputRequest';
import { RoutesV2SuccessResponse } from '../models/RoutesV2SuccessResponse';
import { RoutesV2UpdateOutputRequest } from '../models/RoutesV2UpdateOutputRequest';

/**
 * no description
 */
export class OrganizationOutputsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List outputs
     * List outputs
     * @param organizationId Organization ID
     * @param limit Limit
     * @param offset Offset
     */
    public async v1OrganizationIdOutputsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsGet", "organizationId");
        }




        // Path Params
        const localVarPath = '/v1/{organization_id}/outputs'
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
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public async v1OrganizationIdOutputsOutputIdDelete(organizationId: string, outputId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsOutputIdDelete", "organizationId");
        }


        // verify required parameter 'outputId' is not null or undefined
        if (outputId === null || outputId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsOutputIdDelete", "outputId");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/outputs/{output_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'output_id' + '}', encodeURIComponent(String(outputId)));

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
     * Get output
     * Get output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public async v1OrganizationIdOutputsOutputIdGet(organizationId: string, outputId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsOutputIdGet", "organizationId");
        }


        // verify required parameter 'outputId' is not null or undefined
        if (outputId === null || outputId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsOutputIdGet", "outputId");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/outputs/{output_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'output_id' + '}', encodeURIComponent(String(outputId)));

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
     * Update output
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesUpdateOutputRequest Request body for updating an output
     */
    public async v1OrganizationIdOutputsOutputIdPatch(organizationId: string, outputId: string, routesUpdateOutputRequest: RoutesUpdateOutputRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsOutputIdPatch", "organizationId");
        }


        // verify required parameter 'outputId' is not null or undefined
        if (outputId === null || outputId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsOutputIdPatch", "outputId");
        }


        // verify required parameter 'routesUpdateOutputRequest' is not null or undefined
        if (routesUpdateOutputRequest === null || routesUpdateOutputRequest === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsOutputIdPatch", "routesUpdateOutputRequest");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/outputs/{output_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'output_id' + '}', encodeURIComponent(String(outputId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesUpdateOutputRequest, "RoutesUpdateOutputRequest", ""),
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
     * Create output
     * Create output
     * @param organizationId Organization ID
     * @param routesCreateOutputRequest Request body for creating an output
     */
    public async v1OrganizationIdOutputsPost(organizationId: string, routesCreateOutputRequest: RoutesCreateOutputRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsPost", "organizationId");
        }


        // verify required parameter 'routesCreateOutputRequest' is not null or undefined
        if (routesCreateOutputRequest === null || routesCreateOutputRequest === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v1OrganizationIdOutputsPost", "routesCreateOutputRequest");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/outputs'
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
            ObjectSerializer.serialize(routesCreateOutputRequest, "RoutesCreateOutputRequest", ""),
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
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesV2UpdateOutputRequest Output configuration update
     * @param testConnection Test connection before creating the input
     */
    public async v2OrganizationIdOutputsOutputIdPatch(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v2OrganizationIdOutputsOutputIdPatch", "organizationId");
        }


        // verify required parameter 'outputId' is not null or undefined
        if (outputId === null || outputId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v2OrganizationIdOutputsOutputIdPatch", "outputId");
        }


        // verify required parameter 'routesV2UpdateOutputRequest' is not null or undefined
        if (routesV2UpdateOutputRequest === null || routesV2UpdateOutputRequest === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v2OrganizationIdOutputsOutputIdPatch", "routesV2UpdateOutputRequest");
        }



        // Path Params
        const localVarPath = '/v2/{organization_id}/outputs/{output_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'output_id' + '}', encodeURIComponent(String(outputId)));

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
            ObjectSerializer.serialize(routesV2UpdateOutputRequest, "RoutesV2UpdateOutputRequest", ""),
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
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param routesV2CreateOutputRequest Output configuration
     * @param testConnection Test connection before creating the input
     */
    public async v2OrganizationIdOutputsPost(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v2OrganizationIdOutputsPost", "organizationId");
        }


        // verify required parameter 'routesV2CreateOutputRequest' is not null or undefined
        if (routesV2CreateOutputRequest === null || routesV2CreateOutputRequest === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v2OrganizationIdOutputsPost", "routesV2CreateOutputRequest");
        }



        // Path Params
        const localVarPath = '/v2/{organization_id}/outputs'
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
            ObjectSerializer.serialize(routesV2CreateOutputRequest, "RoutesV2CreateOutputRequest", ""),
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
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param body Output configuration to test
     */
    public async v2OrganizationIdOutputsTestConnectionPost(organizationId: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v2OrganizationIdOutputsTestConnectionPost", "organizationId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("OrganizationOutputsApi", "v2OrganizationIdOutputsTestConnectionPost", "body");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/outputs/test-connection'
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
            ObjectSerializer.serialize(body, "any", ""),
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

export class OrganizationOutputsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdOutputsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdOutputsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsOutputList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsOutputList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutputList", ""
            ) as ModelsOutputList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to marshal outputs", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsOutputList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutputList", ""
            ) as ModelsOutputList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdOutputsOutputIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to delete output", body, response.headers);
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
     * @params response Response returned by the server for a request to v1OrganizationIdOutputsOutputIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdOutputsOutputIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesGetOutputResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesGetOutputResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesGetOutputResponse", ""
            ) as RoutesGetOutputResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to get output", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoutesGetOutputResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesGetOutputResponse", ""
            ) as RoutesGetOutputResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdOutputsOutputIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdOutputsOutputIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsOutput >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutput", ""
            ) as ModelsOutput;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to update output", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutput", ""
            ) as ModelsOutput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdOutputsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdOutputsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsOutput >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutput", ""
            ) as ModelsOutput;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to create output", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutput", ""
            ) as ModelsOutput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdOutputsOutputIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsOutput >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutput", ""
            ) as ModelsOutput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, output type, configuration validation error, or secret processing error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Output not found", body, response.headers);
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
            const body: ModelsOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutput", ""
            ) as ModelsOutput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdOutputsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdOutputsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsOutput >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutput", ""
            ) as ModelsOutput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, output type, configuration validation error, or secret processing error", body, response.headers);
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
            const body: ModelsOutput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsOutput", ""
            ) as ModelsOutput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdOutputsTestConnectionPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV2SuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV2SuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2SuccessResponse", ""
            ) as RoutesV2SuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, output type, or configuration", body, response.headers);
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
            const body: RoutesV2SuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2SuccessResponse", ""
            ) as RoutesV2SuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
