

# ElasticsearchSettingsConfig

Elasticsearch Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**authType** | **ElasticsearchAuthTypeEnum** |  |  [optional] |
|**cloudId** | **String** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. |  [optional] |
|**connectionType** | **ElasticsearchConnectionTypeEnum** |  |  [optional] |
|**index** | **String** | The name of the Elasticsearch index to write data to. If the index doesn&#39;t exist, it will be created automatically. |  [optional] |
|**insecureSkipVerify** | **Boolean** | If set to true, it skips verification of the server&#39;s TLS certificate. This is insecure and should only be used for testing purposes. |  [optional] |
|**url** | **String** | The URL of the Elasticsearch cluster. Required when connection type is set to &#39;url&#39;. |  [optional] |
|**username** | **String** | Username for authenticating with the Elasticsearch cluster. |  [optional] |



