

# HttpSettingsConfig

HTTP Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**endpoint** | **String** | The full URL of the HTTP endpoint to send data to. Must include the scheme (http or https). |  [optional] |
|**headers** | [**List&lt;HttpHeaders&gt;**](HttpHeaders.md) | Non secret headers |  [optional] |
|**maxBatchDataSize** | **Integer** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. |  [optional] |
|**maxBatchRecordCount** | **Integer** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. |  [optional] |
|**method** | **String** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). |  [optional] |
|**payloadStructure** | **String** | Determines how the payload is structured. &#39;single&#39; sends each record as a separate request, &#39;array&#39; sends multiple records as an array, &#39;wrapped&#39; sends multiple records within a wrapper object. |  [optional] |
|**rateLimit** | **Integer** | Maximum number of requests per second to send to the endpoint. |  [optional] |
|**tlsSkipVerify** | **Boolean** | Skip TLS verification. |  [optional] |
|**wrapperKey** | **String** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. |  [optional] |



