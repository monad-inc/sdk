

# ElasticsearchSettingsConfig

Elasticsearch Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**authConfig** | [**ElasticsearchAuthConfig**](ElasticsearchAuthConfig.md) |  |  [optional] |
|**authType** | **String** | DEPRECATED: use AuthConfig &amp; ConnectionConfig instead |  [optional] |
|**cloudId** | **String** |  |  [optional] |
|**connectionConfig** | [**ElasticsearchConnectionConfig**](ElasticsearchConnectionConfig.md) |  |  [optional] |
|**connectionType** | **String** |  |  [optional] |
|**index** | **String** | The name of the Elasticsearch index to write data to. If the index doesn&#39;t exist, it will be created automatically. |  |
|**insecureSkipVerify** | **Boolean** | If set to true, it skips verification of the server&#39;s TLS certificate. This is insecure and should only be used for testing purposes. |  [optional] |
|**url** | **String** |  |  [optional] |
|**username** | **String** | Username for authenticating with the Elasticsearch cluster. |  |



