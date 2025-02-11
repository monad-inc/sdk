// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsInput } from '../models/ModelsInput';
import { ModelsInputList } from '../models/ModelsInputList';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RoutesBulkCreateInputRequest } from '../models/RoutesBulkCreateInputRequest';
import { RoutesCreateInputRequest } from '../models/RoutesCreateInputRequest';
import { RoutesGetInputResponse } from '../models/RoutesGetInputResponse';
import { RoutesUpdateInputRequest } from '../models/RoutesUpdateInputRequest';
import { RoutesV2CreateInputRequest } from '../models/RoutesV2CreateInputRequest';
import { RoutesV2SuccessResponse } from '../models/RoutesV2SuccessResponse';
import { RoutesV2TestInputConnectionRequest } from '../models/RoutesV2TestInputConnectionRequest';
import { RoutesV2UpdateInputRequest } from '../models/RoutesV2UpdateInputRequest';
import { V1OrganizationIdInputsBulkPost400Response } from '../models/V1OrganizationIdInputsBulkPost400Response';
import { V1OrganizationIdInputsPost400Response } from '../models/V1OrganizationIdInputsPost400Response';

/**
 * no description
 */
export class OrganizationInputsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create multiple inputs in a single request
     * Bulk create inputs
     * @param organizationId Organization ID
     * @param routesBulkCreateInputRequest Request body for creating multiple inputs
     * @param testConnection Test connection before creating the input
     */
    public async v1OrganizationIdInputsBulkPost(organizationId: string, routesBulkCreateInputRequest: RoutesBulkCreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsBulkPost", "organizationId");
        }


        // verify required parameter 'routesBulkCreateInputRequest' is not null or undefined
        if (routesBulkCreateInputRequest === null || routesBulkCreateInputRequest === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsBulkPost", "routesBulkCreateInputRequest");
        }



        // Path Params
        const localVarPath = '/v1/{organization_id}/inputs/bulk'
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
            ObjectSerializer.serialize(routesBulkCreateInputRequest, "RoutesBulkCreateInputRequest", ""),
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List inputs
     * List inputs
     * @param organizationId Organization ID
     * @param limit Limit the number of organizations returned (default: DefaultLimit)
     * @param offset Offset the organizations returned (default: 0)
     */
    public async v1OrganizationIdInputsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsGet", "organizationId");
        }




        // Path Params
        const localVarPath = '/v1/{organization_id}/inputs'
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public async v1OrganizationIdInputsInputIdDelete(organizationId: string, inputId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsInputIdDelete", "organizationId");
        }


        // verify required parameter 'inputId' is not null or undefined
        if (inputId === null || inputId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsInputIdDelete", "inputId");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/inputs/{input_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'input_id' + '}', encodeURIComponent(String(inputId)));

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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get input
     * Get input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public async v1OrganizationIdInputsInputIdGet(organizationId: string, inputId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsInputIdGet", "organizationId");
        }


        // verify required parameter 'inputId' is not null or undefined
        if (inputId === null || inputId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsInputIdGet", "inputId");
        }


        // Path Params
        const localVarPath = '/v1/{organization_id}/inputs/{input_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'input_id' + '}', encodeURIComponent(String(inputId)));

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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update input
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesUpdateInputRequest Request body for updating an input
     * @param testConnection Test connection before creating the input
     */
    public async v1OrganizationIdInputsInputIdPatch(organizationId: string, inputId: string, routesUpdateInputRequest: RoutesUpdateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsInputIdPatch", "organizationId");
        }


        // verify required parameter 'inputId' is not null or undefined
        if (inputId === null || inputId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsInputIdPatch", "inputId");
        }


        // verify required parameter 'routesUpdateInputRequest' is not null or undefined
        if (routesUpdateInputRequest === null || routesUpdateInputRequest === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsInputIdPatch", "routesUpdateInputRequest");
        }



        // Path Params
        const localVarPath = '/v1/{organization_id}/inputs/{input_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'input_id' + '}', encodeURIComponent(String(inputId)));

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
            ObjectSerializer.serialize(routesUpdateInputRequest, "RoutesUpdateInputRequest", ""),
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create input
     * Create input
     * @param organizationId Organization ID
     * @param routesCreateInputRequest Request body for creating an input
     * @param testConnection Test connection before creating the input
     */
    public async v1OrganizationIdInputsPost(organizationId: string, routesCreateInputRequest: RoutesCreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsPost", "organizationId");
        }


        // verify required parameter 'routesCreateInputRequest' is not null or undefined
        if (routesCreateInputRequest === null || routesCreateInputRequest === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v1OrganizationIdInputsPost", "routesCreateInputRequest");
        }



        // Path Params
        const localVarPath = '/v1/{organization_id}/inputs'
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
            ObjectSerializer.serialize(routesCreateInputRequest, "RoutesCreateInputRequest", ""),
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesV2UpdateInputRequest Input configuration update
     * @param testConnection Test connection before creating the input
     */
    public async v2OrganizationIdInputsInputIdPatch(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v2OrganizationIdInputsInputIdPatch", "organizationId");
        }


        // verify required parameter 'inputId' is not null or undefined
        if (inputId === null || inputId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v2OrganizationIdInputsInputIdPatch", "inputId");
        }


        // verify required parameter 'routesV2UpdateInputRequest' is not null or undefined
        if (routesV2UpdateInputRequest === null || routesV2UpdateInputRequest === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v2OrganizationIdInputsInputIdPatch", "routesV2UpdateInputRequest");
        }



        // Path Params
        const localVarPath = '/v2/{organization_id}/inputs/{input_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'input_id' + '}', encodeURIComponent(String(inputId)));

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
            ObjectSerializer.serialize(routesV2UpdateInputRequest, "RoutesV2UpdateInputRequest", ""),
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param routesV2CreateInputRequest Input configuration
     * @param testConnection Test connection before creating the input
     */
    public async v2OrganizationIdInputsPost(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v2OrganizationIdInputsPost", "organizationId");
        }


        // verify required parameter 'routesV2CreateInputRequest' is not null or undefined
        if (routesV2CreateInputRequest === null || routesV2CreateInputRequest === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v2OrganizationIdInputsPost", "routesV2CreateInputRequest");
        }



        // Path Params
        const localVarPath = '/v2/{organization_id}/inputs'
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
            ObjectSerializer.serialize(routesV2CreateInputRequest, "RoutesV2CreateInputRequest", ""),
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public async v2OrganizationIdInputsTestConnectionPost(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v2OrganizationIdInputsTestConnectionPost", "organizationId");
        }


        // verify required parameter 'routesV2TestInputConnectionRequest' is not null or undefined
        if (routesV2TestInputConnectionRequest === null || routesV2TestInputConnectionRequest === undefined) {
            throw new RequiredError("OrganizationInputsApi", "v2OrganizationIdInputsTestConnectionPost", "routesV2TestInputConnectionRequest");
        }


        // Path Params
        const localVarPath = '/v2/{organization_id}/inputs/test-connection'
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
            ObjectSerializer.serialize(routesV2TestInputConnectionRequest, "RoutesV2TestInputConnectionRequest", ""),
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OrganizationInputsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdInputsBulkPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdInputsBulkPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ModelsInput> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ModelsInput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ModelsInput>", ""
            ) as Array<ModelsInput>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: V1OrganizationIdInputsBulkPost400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1OrganizationIdInputsBulkPost400Response", ""
            ) as V1OrganizationIdInputsBulkPost400Response;
            throw new ApiException<V1OrganizationIdInputsBulkPost400Response>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to create inputs", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ModelsInput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ModelsInput>", ""
            ) as Array<ModelsInput>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdInputsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdInputsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsInputList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsInputList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInputList", ""
            ) as ModelsInputList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsInputList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInputList", ""
            ) as ModelsInputList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdInputsInputIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdInputsInputIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to delete input", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdInputsInputIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdInputsInputIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesGetInputResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesGetInputResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesGetInputResponse", ""
            ) as RoutesGetInputResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoutesGetInputResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesGetInputResponse", ""
            ) as RoutesGetInputResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdInputsInputIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdInputsInputIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsInput >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsInput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInput", ""
            ) as ModelsInput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: V1OrganizationIdInputsBulkPost400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1OrganizationIdInputsBulkPost400Response", ""
            ) as V1OrganizationIdInputsBulkPost400Response;
            throw new ApiException<V1OrganizationIdInputsBulkPost400Response>(response.httpStatusCode, "Invalid JSON config in body", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to update input", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsInput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInput", ""
            ) as ModelsInput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrganizationIdInputsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrganizationIdInputsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsInput >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsInput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInput", ""
            ) as ModelsInput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: V1OrganizationIdInputsPost400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1OrganizationIdInputsPost400Response", ""
            ) as V1OrganizationIdInputsPost400Response;
            throw new ApiException<V1OrganizationIdInputsPost400Response>(response.httpStatusCode, "Failed to create input", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsInput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInput", ""
            ) as ModelsInput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdInputsInputIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdInputsInputIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsInput >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsInput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInput", ""
            ) as ModelsInput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, input type, configuration validation error, or secret processing error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Input not found", body, response.headers);
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
            const body: ModelsInput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInput", ""
            ) as ModelsInput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdInputsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdInputsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsInput >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsInput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInput", ""
            ) as ModelsInput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponderErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponderErrorResponse", ""
            ) as ResponderErrorResponse;
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, input type, configuration validation error, or secret processing error", body, response.headers);
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
            const body: ModelsInput = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsInput", ""
            ) as ModelsInput;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2OrganizationIdInputsTestConnectionPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2OrganizationIdInputsTestConnectionPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV2SuccessResponse >> {
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
            throw new ApiException<ResponderErrorResponse>(response.httpStatusCode, "Invalid request body, input type, or configuration", body, response.headers);
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
