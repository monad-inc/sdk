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


import org.openapitools.client.model.EnrichmentConnectorMeta;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EnrichmentsApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public EnrichmentsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public EnrichmentsApi(ApiClient apiClient) {
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
     * Build call for v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet
     * @param organizationId Organization ID (required)
     * @param enrichmentTypeId Enrichment type ID (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Enrichment config meta retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Enrichment type not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetCall(@javax.annotation.Nonnull String organizationId, @javax.annotation.Nonnull String enrichmentTypeId, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/v3/{organization_id}/enrichments_meta/{enrichment_type_id}"
            .replace("{" + "organization_id" + "}", localVarApiClient.escapeString(organizationId.toString()))
            .replace("{" + "enrichment_type_id" + "}", localVarApiClient.escapeString(enrichmentTypeId.toString()));

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
    private okhttp3.Call v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetValidateBeforeCall(@javax.annotation.Nonnull String organizationId, @javax.annotation.Nonnull String enrichmentTypeId, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'organizationId' is set
        if (organizationId == null) {
            throw new ApiException("Missing the required parameter 'organizationId' when calling v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(Async)");
        }

        // verify the required parameter 'enrichmentTypeId' is set
        if (enrichmentTypeId == null) {
            throw new ApiException("Missing the required parameter 'enrichmentTypeId' when calling v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(Async)");
        }

        return v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetCall(organizationId, enrichmentTypeId, _callback);

    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param organizationId Organization ID (required)
     * @param enrichmentTypeId Enrichment type ID (required)
     * @return EnrichmentConnectorMeta
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Enrichment config meta retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Enrichment type not found </td><td>  -  </td></tr>
     </table>
     */
    public EnrichmentConnectorMeta v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(@javax.annotation.Nonnull String organizationId, @javax.annotation.Nonnull String enrichmentTypeId) throws ApiException {
        ApiResponse<EnrichmentConnectorMeta> localVarResp = v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetWithHttpInfo(organizationId, enrichmentTypeId);
        return localVarResp.getData();
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param organizationId Organization ID (required)
     * @param enrichmentTypeId Enrichment type ID (required)
     * @return ApiResponse&lt;EnrichmentConnectorMeta&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Enrichment config meta retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Enrichment type not found </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<EnrichmentConnectorMeta> v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetWithHttpInfo(@javax.annotation.Nonnull String organizationId, @javax.annotation.Nonnull String enrichmentTypeId) throws ApiException {
        okhttp3.Call localVarCall = v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetValidateBeforeCall(organizationId, enrichmentTypeId, null);
        Type localVarReturnType = new TypeToken<EnrichmentConnectorMeta>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get enrichment config meta (asynchronously)
     * Get enrichment config meta
     * @param organizationId Organization ID (required)
     * @param enrichmentTypeId Enrichment type ID (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Enrichment config meta retrieved successfully </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Enrichment type not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetAsync(@javax.annotation.Nonnull String organizationId, @javax.annotation.Nonnull String enrichmentTypeId, final ApiCallback<EnrichmentConnectorMeta> _callback) throws ApiException {

        okhttp3.Call localVarCall = v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetValidateBeforeCall(organizationId, enrichmentTypeId, _callback);
        Type localVarReturnType = new TypeToken<EnrichmentConnectorMeta>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v3OrganizationIdEnrichmentsMetaGet
     * @param organizationId Organization ID (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Enrichments retrieved successfully </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v3OrganizationIdEnrichmentsMetaGetCall(@javax.annotation.Nonnull String organizationId, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/v3/{organization_id}/enrichments_meta"
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
    private okhttp3.Call v3OrganizationIdEnrichmentsMetaGetValidateBeforeCall(@javax.annotation.Nonnull String organizationId, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'organizationId' is set
        if (organizationId == null) {
            throw new ApiException("Missing the required parameter 'organizationId' when calling v3OrganizationIdEnrichmentsMetaGet(Async)");
        }

        return v3OrganizationIdEnrichmentsMetaGetCall(organizationId, _callback);

    }

    /**
     * List enrichments
     * List available enrichment types
     * @param organizationId Organization ID (required)
     * @return List&lt;EnrichmentConnectorMeta&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Enrichments retrieved successfully </td><td>  -  </td></tr>
     </table>
     */
    public List<EnrichmentConnectorMeta> v3OrganizationIdEnrichmentsMetaGet(@javax.annotation.Nonnull String organizationId) throws ApiException {
        ApiResponse<List<EnrichmentConnectorMeta>> localVarResp = v3OrganizationIdEnrichmentsMetaGetWithHttpInfo(organizationId);
        return localVarResp.getData();
    }

    /**
     * List enrichments
     * List available enrichment types
     * @param organizationId Organization ID (required)
     * @return ApiResponse&lt;List&lt;EnrichmentConnectorMeta&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Enrichments retrieved successfully </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<List<EnrichmentConnectorMeta>> v3OrganizationIdEnrichmentsMetaGetWithHttpInfo(@javax.annotation.Nonnull String organizationId) throws ApiException {
        okhttp3.Call localVarCall = v3OrganizationIdEnrichmentsMetaGetValidateBeforeCall(organizationId, null);
        Type localVarReturnType = new TypeToken<List<EnrichmentConnectorMeta>>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * List enrichments (asynchronously)
     * List available enrichment types
     * @param organizationId Organization ID (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Enrichments retrieved successfully </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v3OrganizationIdEnrichmentsMetaGetAsync(@javax.annotation.Nonnull String organizationId, final ApiCallback<List<EnrichmentConnectorMeta>> _callback) throws ApiException {

        okhttp3.Call localVarCall = v3OrganizationIdEnrichmentsMetaGetValidateBeforeCall(organizationId, _callback);
        Type localVarReturnType = new TypeToken<List<EnrichmentConnectorMeta>>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
