/*
 * Monad API
 * This is the monad API
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.AuthenticationtypesMFAEnrollmentTicket;
import org.openapitools.client.model.GithubComMonadIncCorePkgTypesModelsUser;
import org.openapitools.client.model.RoutesUserWithRoles;
import org.openapitools.client.model.RoutesV3MFAStatusResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UsersApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public UsersApi() {
        this(Configuration.getDefaultApiClient());
    }

    public UsersApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public int getHostIndex() {
        return localHostIndex;
    }

    public void setHostIndex(int hostIndex) {
        this.localHostIndex = hostIndex;
    }

    public String getCustomBaseUrl() {
        return localCustomBaseUrl;
    }

    public void setCustomBaseUrl(String customBaseUrl) {
        this.localCustomBaseUrl = customBaseUrl;
    }

    /**
     * Build call for v1UsersGet
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> User created successfully </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Invalid JSON request body </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Error creating user </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1UsersGetCall(final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/v1/users";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "Bearer" };
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1UsersGetValidateBeforeCall(final ApiCallback _callback) throws ApiException {
        return v1UsersGetCall(_callback);

    }

    /**
     * Get your current user
     * Get your current user
     * @return RoutesUserWithRoles
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> User created successfully </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Invalid JSON request body </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Error creating user </td><td>  -  </td></tr>
     </table>
     */
    public RoutesUserWithRoles v1UsersGet() throws ApiException {
        ApiResponse<RoutesUserWithRoles> localVarResp = v1UsersGetWithHttpInfo();
        return localVarResp.getData();
    }

    /**
     * Get your current user
     * Get your current user
     * @return ApiResponse&lt;RoutesUserWithRoles&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> User created successfully </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Invalid JSON request body </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Error creating user </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<RoutesUserWithRoles> v1UsersGetWithHttpInfo() throws ApiException {
        okhttp3.Call localVarCall = v1UsersGetValidateBeforeCall(null);
        Type localVarReturnType = new TypeToken<RoutesUserWithRoles>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get your current user (asynchronously)
     * Get your current user
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> User created successfully </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Invalid JSON request body </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Error creating user </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1UsersGetAsync(final ApiCallback<RoutesUserWithRoles> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1UsersGetValidateBeforeCall(_callback);
        Type localVarReturnType = new TypeToken<RoutesUserWithRoles>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1UsersPost
     * @param body  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Get user success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Invalid JSON request body </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Error creating user </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1UsersPostCall(@javax.annotation.Nullable Object body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/v1/users";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth", "Bearer" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1UsersPostValidateBeforeCall(@javax.annotation.Nullable Object body, final ApiCallback _callback) throws ApiException {
        return v1UsersPostCall(body, _callback);

    }

    /**
     * Create user
     * Create user
     * @param body  (optional)
     * @return GithubComMonadIncCorePkgTypesModelsUser
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Get user success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Invalid JSON request body </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Error creating user </td><td>  -  </td></tr>
     </table>
     */
    public GithubComMonadIncCorePkgTypesModelsUser v1UsersPost(@javax.annotation.Nullable Object body) throws ApiException {
        ApiResponse<GithubComMonadIncCorePkgTypesModelsUser> localVarResp = v1UsersPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Create user
     * Create user
     * @param body  (optional)
     * @return ApiResponse&lt;GithubComMonadIncCorePkgTypesModelsUser&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Get user success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Invalid JSON request body </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Error creating user </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<GithubComMonadIncCorePkgTypesModelsUser> v1UsersPostWithHttpInfo(@javax.annotation.Nullable Object body) throws ApiException {
        okhttp3.Call localVarCall = v1UsersPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<GithubComMonadIncCorePkgTypesModelsUser>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create user (asynchronously)
     * Create user
     * @param body  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Get user success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Invalid JSON request body </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Error creating user </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1UsersPostAsync(@javax.annotation.Nullable Object body, final ApiCallback<GithubComMonadIncCorePkgTypesModelsUser> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1UsersPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<GithubComMonadIncCorePkgTypesModelsUser>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v3UsersMfaGet
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> MFA status retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal server error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v3UsersMfaGetCall(final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/v3/users/mfa";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth", "Bearer" };
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v3UsersMfaGetValidateBeforeCall(final ApiCallback _callback) throws ApiException {
        return v3UsersMfaGetCall(_callback);

    }

    /**
     * Get MFA status
     * Get MFA enrollment status and methods for a user
     * @return RoutesV3MFAStatusResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> MFA status retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal server error </td><td>  -  </td></tr>
     </table>
     */
    public RoutesV3MFAStatusResponse v3UsersMfaGet() throws ApiException {
        ApiResponse<RoutesV3MFAStatusResponse> localVarResp = v3UsersMfaGetWithHttpInfo();
        return localVarResp.getData();
    }

    /**
     * Get MFA status
     * Get MFA enrollment status and methods for a user
     * @return ApiResponse&lt;RoutesV3MFAStatusResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> MFA status retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal server error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<RoutesV3MFAStatusResponse> v3UsersMfaGetWithHttpInfo() throws ApiException {
        okhttp3.Call localVarCall = v3UsersMfaGetValidateBeforeCall(null);
        Type localVarReturnType = new TypeToken<RoutesV3MFAStatusResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get MFA status (asynchronously)
     * Get MFA enrollment status and methods for a user
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> MFA status retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal server error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v3UsersMfaGetAsync(final ApiCallback<RoutesV3MFAStatusResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = v3UsersMfaGetValidateBeforeCall(_callback);
        Type localVarReturnType = new TypeToken<RoutesV3MFAStatusResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v3UsersMfaPost
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> MFA enrollment ticket created successfully </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal server error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v3UsersMfaPostCall(final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/v3/users/mfa";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth", "Bearer" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v3UsersMfaPostValidateBeforeCall(final ApiCallback _callback) throws ApiException {
        return v3UsersMfaPostCall(_callback);

    }

    /**
     * Enable MFA
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * @return AuthenticationtypesMFAEnrollmentTicket
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> MFA enrollment ticket created successfully </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal server error </td><td>  -  </td></tr>
     </table>
     */
    public AuthenticationtypesMFAEnrollmentTicket v3UsersMfaPost() throws ApiException {
        ApiResponse<AuthenticationtypesMFAEnrollmentTicket> localVarResp = v3UsersMfaPostWithHttpInfo();
        return localVarResp.getData();
    }

    /**
     * Enable MFA
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * @return ApiResponse&lt;AuthenticationtypesMFAEnrollmentTicket&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> MFA enrollment ticket created successfully </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal server error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AuthenticationtypesMFAEnrollmentTicket> v3UsersMfaPostWithHttpInfo() throws ApiException {
        okhttp3.Call localVarCall = v3UsersMfaPostValidateBeforeCall(null);
        Type localVarReturnType = new TypeToken<AuthenticationtypesMFAEnrollmentTicket>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Enable MFA (asynchronously)
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> MFA enrollment ticket created successfully </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal server error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v3UsersMfaPostAsync(final ApiCallback<AuthenticationtypesMFAEnrollmentTicket> _callback) throws ApiException {

        okhttp3.Call localVarCall = v3UsersMfaPostValidateBeforeCall(_callback);
        Type localVarReturnType = new TypeToken<AuthenticationtypesMFAEnrollmentTicket>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
