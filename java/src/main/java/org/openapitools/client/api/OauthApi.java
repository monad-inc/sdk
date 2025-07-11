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



import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OauthApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public OauthApi() {
        this(Configuration.getDefaultApiClient());
    }

    public OauthApi(ApiClient apiClient) {
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
     * Build call for v1OauthTypeIdCallbackGet
     * @param typeId component type ID (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Oauth callback successful </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> oauth handler not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OauthTypeIdCallbackGetCall(@javax.annotation.Nonnull String typeId, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/v1/oauth/{type_id}/callback"
            .replace("{" + "type_id" + "}", localVarApiClient.escapeString(typeId.toString()));

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
    private okhttp3.Call v1OauthTypeIdCallbackGetValidateBeforeCall(@javax.annotation.Nonnull String typeId, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'typeId' is set
        if (typeId == null) {
            throw new ApiException("Missing the required parameter 'typeId' when calling v1OauthTypeIdCallbackGet(Async)");
        }

        return v1OauthTypeIdCallbackGetCall(typeId, _callback);

    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID (required)
     * @return Object
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Oauth callback successful </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> oauth handler not found </td><td>  -  </td></tr>
     </table>
     */
    public Object v1OauthTypeIdCallbackGet(@javax.annotation.Nonnull String typeId) throws ApiException {
        ApiResponse<Object> localVarResp = v1OauthTypeIdCallbackGetWithHttpInfo(typeId);
        return localVarResp.getData();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID (required)
     * @return ApiResponse&lt;Object&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Oauth callback successful </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> oauth handler not found </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Object> v1OauthTypeIdCallbackGetWithHttpInfo(@javax.annotation.Nonnull String typeId) throws ApiException {
        okhttp3.Call localVarCall = v1OauthTypeIdCallbackGetValidateBeforeCall(typeId, null);
        Type localVarReturnType = new TypeToken<Object>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Oauth callback (asynchronously)
     * Oauth callback
     * @param typeId component type ID (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Oauth callback successful </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> oauth handler not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OauthTypeIdCallbackGetAsync(@javax.annotation.Nonnull String typeId, final ApiCallback<Object> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1OauthTypeIdCallbackGetValidateBeforeCall(typeId, _callback);
        Type localVarReturnType = new TypeToken<Object>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1OauthTypeIdOrganizationIdGet
     * @param typeId component type ID (required)
     * @param organizationId organization ID (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Oauth redirect retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> oauth handler not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OauthTypeIdOrganizationIdGetCall(@javax.annotation.Nonnull String typeId, @javax.annotation.Nonnull String organizationId, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/v1/oauth/{type_id}/{organization_id}"
            .replace("{" + "type_id" + "}", localVarApiClient.escapeString(typeId.toString()))
            .replace("{" + "organization_id" + "}", localVarApiClient.escapeString(organizationId.toString()));

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
    private okhttp3.Call v1OauthTypeIdOrganizationIdGetValidateBeforeCall(@javax.annotation.Nonnull String typeId, @javax.annotation.Nonnull String organizationId, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'typeId' is set
        if (typeId == null) {
            throw new ApiException("Missing the required parameter 'typeId' when calling v1OauthTypeIdOrganizationIdGet(Async)");
        }

        // verify the required parameter 'organizationId' is set
        if (organizationId == null) {
            throw new ApiException("Missing the required parameter 'organizationId' when calling v1OauthTypeIdOrganizationIdGet(Async)");
        }

        return v1OauthTypeIdOrganizationIdGetCall(typeId, organizationId, _callback);

    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID (required)
     * @param organizationId organization ID (required)
     * @return Object
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Oauth redirect retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> oauth handler not found </td><td>  -  </td></tr>
     </table>
     */
    public Object v1OauthTypeIdOrganizationIdGet(@javax.annotation.Nonnull String typeId, @javax.annotation.Nonnull String organizationId) throws ApiException {
        ApiResponse<Object> localVarResp = v1OauthTypeIdOrganizationIdGetWithHttpInfo(typeId, organizationId);
        return localVarResp.getData();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID (required)
     * @param organizationId organization ID (required)
     * @return ApiResponse&lt;Object&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Oauth redirect retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> oauth handler not found </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Object> v1OauthTypeIdOrganizationIdGetWithHttpInfo(@javax.annotation.Nonnull String typeId, @javax.annotation.Nonnull String organizationId) throws ApiException {
        okhttp3.Call localVarCall = v1OauthTypeIdOrganizationIdGetValidateBeforeCall(typeId, organizationId, null);
        Type localVarReturnType = new TypeToken<Object>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get oauth redirect (asynchronously)
     * Get oauth redirect
     * @param typeId component type ID (required)
     * @param organizationId organization ID (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Oauth redirect retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> oauth handler not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1OauthTypeIdOrganizationIdGetAsync(@javax.annotation.Nonnull String typeId, @javax.annotation.Nonnull String organizationId, final ApiCallback<Object> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1OauthTypeIdOrganizationIdGetValidateBeforeCall(typeId, organizationId, _callback);
        Type localVarReturnType = new TypeToken<Object>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
