# ElasticsearchConnectionConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_id** | [**ElasticsearchCloudIdVariant**](ElasticsearchCloudIdVariant.md) |  | [optional] 
**type** | **str** |  | 
**url** | [**ElasticsearchUrlVariant**](ElasticsearchUrlVariant.md) |  | [optional] 

## Example

```python
from monad.models.elasticsearch_connection_config import ElasticsearchConnectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticsearchConnectionConfig from a JSON string
elasticsearch_connection_config_instance = ElasticsearchConnectionConfig.from_json(json)
# print the JSON string representation of the object
print(ElasticsearchConnectionConfig.to_json())

# convert the object into a dict
elasticsearch_connection_config_dict = elasticsearch_connection_config_instance.to_dict()
# create an instance of ElasticsearchConnectionConfig from a dict
elasticsearch_connection_config_from_dict = ElasticsearchConnectionConfig.from_dict(elasticsearch_connection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


