// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsBillingAccount } from '../models/ModelsBillingAccount';
import { ModelsBillingAccountList } from '../models/ModelsBillingAccountList';
import { ModelsBillingAccountPermission } from '../models/ModelsBillingAccountPermission';
import { ModelsBillingAccountRole } from '../models/ModelsBillingAccountRole';
import { RoutesV2CreateBillingAccountRequest } from '../models/RoutesV2CreateBillingAccountRequest';
import { RoutesV2CreateBillingAccountRoleRequest } from '../models/RoutesV2CreateBillingAccountRoleRequest';
import { RoutesV2CreatebillingAccountUserRoleRequest } from '../models/RoutesV2CreatebillingAccountUserRoleRequest';
import { RoutesV2UpdateBillingAccountRequest } from '../models/RoutesV2UpdateBillingAccountRequest';
import { RoutesV2UpdateBillingAccountRoleRequest } from '../models/RoutesV2UpdateBillingAccountRoleRequest';

/**
 * no description
 */
export class BillingAccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param billingAccountId Billing Account ID
     * @param body 
     */
    public async v2BillingAccountsBillingAccountIdDelete(billingAccountId: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdDelete", "billingAccountId");
        }



        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Get Billing Account
     * Get Billing Account
     * @param billingAccountId Billing Account ID
     */
    public async v2BillingAccountsBillingAccountIdGet(billingAccountId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdGet", "billingAccountId");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}'
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
     * Update Billing Account
     * Update Billing Account
     * @param billingAccountId Billing Account ID
     * @param routesV2UpdateBillingAccountRequest Request body for updating a billing account
     */
    public async v2BillingAccountsBillingAccountIdPatch(billingAccountId: string, routesV2UpdateBillingAccountRequest: RoutesV2UpdateBillingAccountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdPatch", "billingAccountId");
        }


        // verify required parameter 'routesV2UpdateBillingAccountRequest' is not null or undefined
        if (routesV2UpdateBillingAccountRequest === null || routesV2UpdateBillingAccountRequest === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdPatch", "routesV2UpdateBillingAccountRequest");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV2UpdateBillingAccountRequest, "RoutesV2UpdateBillingAccountRequest", ""),
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
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param billingAccountId Billing Account ID
     */
    public async v2BillingAccountsBillingAccountIdRolesGet(billingAccountId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesGet", "billingAccountId");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/roles'
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
     * Create Billing Account Role
     * Create Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param routesV2CreateBillingAccountRoleRequest Create Billing Account Role Request
     */
    public async v2BillingAccountsBillingAccountIdRolesPost(billingAccountId: string, routesV2CreateBillingAccountRoleRequest: RoutesV2CreateBillingAccountRoleRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesPost", "billingAccountId");
        }


        // verify required parameter 'routesV2CreateBillingAccountRoleRequest' is not null or undefined
        if (routesV2CreateBillingAccountRoleRequest === null || routesV2CreateBillingAccountRoleRequest === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesPost", "routesV2CreateBillingAccountRoleRequest");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/roles'
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
            ObjectSerializer.serialize(routesV2CreateBillingAccountRoleRequest, "RoutesV2CreateBillingAccountRoleRequest", ""),
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
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public async v2BillingAccountsBillingAccountIdRolesRoleIdDelete(billingAccountId: string, roleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdDelete", "billingAccountId");
        }


        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdDelete", "roleId");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/roles/{role_id}'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)))
            .replace('{' + 'role_id' + '}', encodeURIComponent(String(roleId)));

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
     * Get Billing Account Role
     * Get Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public async v2BillingAccountsBillingAccountIdRolesRoleIdGet(billingAccountId: string, roleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdGet", "billingAccountId");
        }


        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdGet", "roleId");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/roles/{role_id}'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)))
            .replace('{' + 'role_id' + '}', encodeURIComponent(String(roleId)));

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
     * Update Billing Account Role
     * Update Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2UpdateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public async v2BillingAccountsBillingAccountIdRolesRoleIdPatch(billingAccountId: string, roleId: string, routesV2UpdateBillingAccountRoleRequest: RoutesV2UpdateBillingAccountRoleRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdPatch", "billingAccountId");
        }


        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdPatch", "roleId");
        }


        // verify required parameter 'routesV2UpdateBillingAccountRoleRequest' is not null or undefined
        if (routesV2UpdateBillingAccountRoleRequest === null || routesV2UpdateBillingAccountRoleRequest === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdPatch", "routesV2UpdateBillingAccountRoleRequest");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/roles/{role_id}'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)))
            .replace('{' + 'role_id' + '}', encodeURIComponent(String(roleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV2UpdateBillingAccountRoleRequest, "RoutesV2UpdateBillingAccountRoleRequest", ""),
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
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2CreatebillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public async v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(billingAccountId: string, roleId: string, routesV2CreatebillingAccountUserRoleRequest: RoutesV2CreatebillingAccountUserRoleRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost", "billingAccountId");
        }


        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost", "roleId");
        }


        // verify required parameter 'routesV2CreatebillingAccountUserRoleRequest' is not null or undefined
        if (routesV2CreatebillingAccountUserRoleRequest === null || routesV2CreatebillingAccountUserRoleRequest === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost", "routesV2CreatebillingAccountUserRoleRequest");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/roles/{role_id}/users'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)))
            .replace('{' + 'role_id' + '}', encodeURIComponent(String(roleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV2CreatebillingAccountUserRoleRequest, "RoutesV2CreatebillingAccountUserRoleRequest", ""),
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
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param userId User ID
     */
    public async v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(billingAccountId: string, roleId: string, userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'billingAccountId' is not null or undefined
        if (billingAccountId === null || billingAccountId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete", "billingAccountId");
        }


        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete", "roleId");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete", "userId");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id}'
            .replace('{' + 'billing_account_id' + '}', encodeURIComponent(String(billingAccountId)))
            .replace('{' + 'role_id' + '}', encodeURIComponent(String(roleId)))
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
     * List Billing Accounts
     * List Billing Accounts
     * @param limit Limit
     * @param offset Offset
     */
    public async v2BillingAccountsGet(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v2/billing/accounts';

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

    /**
     * Create Billing Account
     * Create Billing Account
     * @param routesV2CreateBillingAccountRequest Request body for creating a billing account
     */
    public async v2BillingAccountsPost(routesV2CreateBillingAccountRequest: RoutesV2CreateBillingAccountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'routesV2CreateBillingAccountRequest' is not null or undefined
        if (routesV2CreateBillingAccountRequest === null || routesV2CreateBillingAccountRequest === undefined) {
            throw new RequiredError("BillingAccountsApi", "v2BillingAccountsPost", "routesV2CreateBillingAccountRequest");
        }


        // Path Params
        const localVarPath = '/v2/billing/accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(routesV2CreateBillingAccountRequest, "RoutesV2CreateBillingAccountRequest", ""),
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
     * Get Billing Permissions
     * Get Billing Permissions
     */
    public async v2BillingPermissionsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v2/billing/permissions';

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

}

export class BillingAccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to delete Billing Account", body, response.headers);
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
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccount", ""
            ) as ModelsBillingAccount;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to get Billing Account", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccount", ""
            ) as ModelsBillingAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccount", ""
            ) as ModelsBillingAccount;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to update Billing Account", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccount", ""
            ) as ModelsBillingAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdRolesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdRolesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ModelsBillingAccountRole> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ModelsBillingAccountRole> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ModelsBillingAccountRole>", ""
            ) as Array<ModelsBillingAccountRole>;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to get Billing Account Roles", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ModelsBillingAccountRole> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ModelsBillingAccountRole>", ""
            ) as Array<ModelsBillingAccountRole>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdRolesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdRolesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingAccountRole >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingAccountRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccountRole", ""
            ) as ModelsBillingAccountRole;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to create Billing Account Role", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingAccountRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccountRole", ""
            ) as ModelsBillingAccountRole;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdRolesRoleIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdRolesRoleIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid JSON request body", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to delete Billing Account Role", body, response.headers);
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
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdRolesRoleIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdRolesRoleIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingAccountRole >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingAccountRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccountRole", ""
            ) as ModelsBillingAccountRole;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to get Billing Account Role", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingAccountRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccountRole", ""
            ) as ModelsBillingAccountRole;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdRolesRoleIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdRolesRoleIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingAccountRole >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingAccountRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccountRole", ""
            ) as ModelsBillingAccountRole;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to update Billing Account Role", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingAccountRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccountRole", ""
            ) as ModelsBillingAccountRole;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdRolesRoleIdUsersPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid JSON request body", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to create Billing Account User Role", body, response.headers);
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
     * @params response Response returned by the server for a request to v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid JSON request body", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Failed to delete Billing Account User Role", body, response.headers);
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
     * @params response Response returned by the server for a request to v2BillingAccountsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingAccountList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingAccountList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccountList", ""
            ) as ModelsBillingAccountList;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to list Billing Accounts", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingAccountList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccountList", ""
            ) as ModelsBillingAccountList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingAccountsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingAccountsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelsBillingAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsBillingAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccount", ""
            ) as ModelsBillingAccount;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to create Billing Account", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsBillingAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsBillingAccount", ""
            ) as ModelsBillingAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2BillingPermissionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2BillingPermissionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ModelsBillingAccountPermission> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ModelsBillingAccountPermission> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ModelsBillingAccountPermission>", ""
            ) as Array<ModelsBillingAccountPermission>;
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
            throw new ApiException<string>(response.httpStatusCode, "Failed to get Billing Account Permissions", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ModelsBillingAccountPermission> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ModelsBillingAccountPermission>", ""
            ) as Array<ModelsBillingAccountPermission>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
