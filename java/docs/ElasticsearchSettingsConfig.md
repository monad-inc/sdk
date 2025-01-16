

# ElasticsearchSettingsConfig

Elasticsearch Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**authType** | **String** | The method of authentication to use with the Elasticsearch cluster. Choose between &#39;api_key&#39; or &#39;password&#39;. |  [optional] |
|**cloudId** | **String** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. |  [optional] |
|**connectionType** | **String** | The type of connection to use with Elasticsearch. Choose between &#39;cloud_id&#39; for Elastic Cloud or &#39;url&#39; for direct connection. |  [optional] |
|**index** | **String** | The name of the Elasticsearch index to write data to. If the index doesn&#39;t exist, it will be created automatically. |  [optional] |
|**insecureSkipVerify** | **Boolean** | If set to true, it skips verification of the server&#39;s TLS certificate. This is insecure and should only be used for testing purposes. |  [optional] |
|**url** | **String** | The URL of the Elasticsearch cluster. Required when connection type is set to &#39;url&#39;. |  [optional] |
|**username** | **String** | Username for authenticating with the Elasticsearch cluster. |  [optional] |



