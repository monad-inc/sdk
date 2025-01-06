# ElasticsearchSettingsConfig

Elasticsearch Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | The method of authentication to use with the Elasticsearch cluster. Choose between &#39;api_key&#39; or &#39;password&#39;. | [optional] 
**cloud_id** | **str** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. | [optional] 
**connection_type** | **str** | The type of connection to use with Elasticsearch. Choose between &#39;cloud_id&#39; for Elastic Cloud or &#39;url&#39; for direct connection. | [optional] 
**index** | **str** | The name of the Elasticsearch index to write data to. If the index doesn&#39;t exist, it will be created automatically. | [optional] 
**insecure_skip_verify** | **bool** | If set to true, it skips verification of the server&#39;s TLS certificate. This is insecure and should only be used for testing purposes. | [optional] 
**url** | **str** | The URL of the Elasticsearch cluster. Required when connection type is set to &#39;url&#39;. | [optional] 
**username** | **str** | Username for authenticating with the Elasticsearch cluster. | [optional] 

## Example

```python
from monad.models.elasticsearch_settings_config import ElasticsearchSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticsearchSettingsConfig from a JSON string
elasticsearch_settings_config_instance = ElasticsearchSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ElasticsearchSettingsConfig.to_json())

# convert the object into a dict
elasticsearch_settings_config_dict = elasticsearch_settings_config_instance.to_dict()
# create an instance of ElasticsearchSettingsConfig from a dict
elasticsearch_settings_config_from_dict = ElasticsearchSettingsConfig.from_dict(elasticsearch_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


