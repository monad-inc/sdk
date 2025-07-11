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


import org.openapitools.client.model.OperationInformation;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TransformsApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public TransformsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public TransformsApi(ApiClient apiClient) {
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
     * Build call for v1TransformsGet
     * @param body  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Operation information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TransformsGetCall(@javax.annotation.Nullable Object body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/v1/transforms";

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
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1TransformsGetValidateBeforeCall(@javax.annotation.Nullable Object body, final ApiCallback _callback) throws ApiException {
        return v1TransformsGetCall(body, _callback);

    }

    /**
     * List transforms
     * List transforms
     * @param body  (optional)
     * @return OperationInformation
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Operation information </td><td>  -  </td></tr>
     </table>
     */
    public OperationInformation v1TransformsGet(@javax.annotation.Nullable Object body) throws ApiException {
        ApiResponse<OperationInformation> localVarResp = v1TransformsGetWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * List transforms
     * List transforms
     * @param body  (optional)
     * @return ApiResponse&lt;OperationInformation&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Operation information </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<OperationInformation> v1TransformsGetWithHttpInfo(@javax.annotation.Nullable Object body) throws ApiException {
        okhttp3.Call localVarCall = v1TransformsGetValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<OperationInformation>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * List transforms (asynchronously)
     * List transforms
     * @param body  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Operation information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TransformsGetAsync(@javax.annotation.Nullable Object body, final ApiCallback<OperationInformation> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1TransformsGetValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<OperationInformation>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1TransformsTransformTypeIdGet
     * @param transformTypeId Transform type ID (required)
     * @param body  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Transform metadata </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Transform not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TransformsTransformTypeIdGetCall(@javax.annotation.Nonnull String transformTypeId, @javax.annotation.Nullable Object body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/v1/transforms/{transform_type_id}"
            .replace("{" + "transform_type_id" + "}", localVarApiClient.escapeString(transformTypeId.toString()));

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
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1TransformsTransformTypeIdGetValidateBeforeCall(@javax.annotation.Nonnull String transformTypeId, @javax.annotation.Nullable Object body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'transformTypeId' is set
        if (transformTypeId == null) {
            throw new ApiException("Missing the required parameter 'transformTypeId' when calling v1TransformsTransformTypeIdGet(Async)");
        }

        return v1TransformsTransformTypeIdGetCall(transformTypeId, body, _callback);

    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID (required)
     * @param body  (optional)
     * @return Object
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Transform metadata </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Transform not found </td><td>  -  </td></tr>
     </table>
     */
    public Object v1TransformsTransformTypeIdGet(@javax.annotation.Nonnull String transformTypeId, @javax.annotation.Nullable Object body) throws ApiException {
        ApiResponse<Object> localVarResp = v1TransformsTransformTypeIdGetWithHttpInfo(transformTypeId, body);
        return localVarResp.getData();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID (required)
     * @param body  (optional)
     * @return ApiResponse&lt;Object&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Transform metadata </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Transform not found </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Object> v1TransformsTransformTypeIdGetWithHttpInfo(@javax.annotation.Nonnull String transformTypeId, @javax.annotation.Nullable Object body) throws ApiException {
        okhttp3.Call localVarCall = v1TransformsTransformTypeIdGetValidateBeforeCall(transformTypeId, body, null);
        Type localVarReturnType = new TypeToken<Object>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get transform metadata (asynchronously)
     * Get transform metadata
     * @param transformTypeId Transform type ID (required)
     * @param body  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Transform metadata </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Transform not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TransformsTransformTypeIdGetAsync(@javax.annotation.Nonnull String transformTypeId, @javax.annotation.Nullable Object body, final ApiCallback<Object> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1TransformsTransformTypeIdGetValidateBeforeCall(transformTypeId, body, _callback);
        Type localVarReturnType = new TypeToken<Object>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
