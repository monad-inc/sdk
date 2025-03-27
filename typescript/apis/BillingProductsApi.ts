// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsBillingProduct } from '../models/ModelsBillingProduct';
import { ModelsBillingProductList } from '../models/ModelsBillingProductList';
import { RoutesV2CreateBillingAccountSubscriptionRequest } from '../models/RoutesV2CreateBillingAccountSubscriptionRequest';
import { RoutesV2CreateBillingAccountSubscriptionResponse } from '../models/RoutesV2CreateBillingAccountSubscriptionResponse';

/**
 * no description
 */
export class BillingProductsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public async v2BillingAccountsBillingAccountIdSubscriptionDelete(billingAccountId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingProductsApi", "v2BillingAccountsBillingAccountIdSubscriptionDelete", "billingAccountId");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/subscription'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public async v2BillingAccountsBillingAccountIdSubscriptionGet(billingAccountId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingProductsApi", "v2BillingAccountsBillingAccountIdSubscriptionGet", "billingAccountId");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/subscription'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param billingAccountId Billing Account ID
     * @param routesV2CreateBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public async v2BillingAccountsBillingAccountIdSubscriptionPost(billingAccountId: string, routesV2CreateBillingAccountSubscriptionRequest: RoutesV2CreateBillingAccountSubscriptionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingProductsApi", "v2BillingAccountsBillingAccountIdSubscriptionPost", "billingAccountId");
        }


        // verify required parameter 'routesV2CreateBillingAccountSubscriptionRequest' is not null or undefined
        if (routesV2CreateBillingAccountSubscriptionRequest === null || routesV2CreateBillingAccountSubscriptionRequest === undefined) {
            throw new RequiredError("BillingProductsApi", "v2BillingAccountsBillingAccountIdSubscriptionPost", "routesV2CreateBillingAccountSubscriptionRequest");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/subscription'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV2CreateBillingAccountSubscriptionRequest, "RoutesV2CreateBillingAccountSubscriptionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * List Billing Products
     * List Billing Products
     * @param limit Limit
     * @param offset Offset
     */
    public async v2BillingProductsGet(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v2/billing/products';

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

export class BillingProductsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdSubscriptionDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdSubscriptionDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to cancel billing account subscription", body, response.headers);
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
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdSubscriptionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdSubscriptionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingProduct >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingProduct", ""
            ) as ModelsBillingProduct;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to get billing account subscription", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingProduct = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingProduct", ""
            ) as ModelsBillingProduct;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdSubscriptionPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdSubscriptionPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutesV2CreateBillingAccountSubscriptionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoutesV2CreateBillingAccountSubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2CreateBillingAccountSubscriptionResponse", ""
            ) as RoutesV2CreateBillingAccountSubscriptionResponse;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to created billing account subscription", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoutesV2CreateBillingAccountSubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutesV2CreateBillingAccountSubscriptionResponse", ""
            ) as RoutesV2CreateBillingAccountSubscriptionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingProductsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingProductsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingProductList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingProductList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingProductList", ""
            ) as ModelsBillingProductList;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to list billing products", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingProductList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingProductList", ""
            ) as ModelsBillingProductList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
