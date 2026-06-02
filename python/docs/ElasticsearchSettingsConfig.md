# ElasticsearchSettingsConfig

Elasticsearch Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_config** | [**ElasticsearchAuthConfig**](ElasticsearchAuthConfig.md) |  | [optional] 
**auth_type** | **str** | DEPRECATED: use AuthConfig &amp; ConnectionConfig instead | [optional] 
**cloud_id** | **str** |  | [optional] 
**connection_config** | [**ElasticsearchConnectionConfig**](ElasticsearchConnectionConfig.md) |  | [optional] 
**connection_type** | **str** |  | [optional] 
**index** | **str** | The name of the Elasticsearch index to write data to. If the index doesn&#39;t exist, it will be created automatically. | 
**insecure_skip_verify** | **bool** | If set to true, it skips verification of the server&#39;s TLS certificate. This is insecure and should only be used for testing purposes. | [optional] 
**url** | **str** |  | [optional] 
**username** | **str** | Username for authenticating with the Elasticsearch cluster. | 

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


