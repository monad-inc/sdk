# ElasticsearchAuthConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ElasticsearchSecretVariant**](ElasticsearchSecretVariant.md) |  | [optional] 
**password** | [**ElasticsearchSecretVariant**](ElasticsearchSecretVariant.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.elasticsearch_auth_config import ElasticsearchAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticsearchAuthConfig from a JSON string
elasticsearch_auth_config_instance = ElasticsearchAuthConfig.from_json(json)
# print the JSON string representation of the object
print(ElasticsearchAuthConfig.to_json())

# convert the object into a dict
elasticsearch_auth_config_dict = elasticsearch_auth_config_instance.to_dict()
# create an instance of ElasticsearchAuthConfig from a dict
elasticsearch_auth_config_from_dict = ElasticsearchAuthConfig.from_dict(elasticsearch_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


