# ElasticsearchSecretsConfig

Elasticsearch Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.elasticsearch_secrets_config import ElasticsearchSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticsearchSecretsConfig from a JSON string
elasticsearch_secrets_config_instance = ElasticsearchSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ElasticsearchSecretsConfig.to_json())

# convert the object into a dict
elasticsearch_secrets_config_dict = elasticsearch_secrets_config_instance.to_dict()
# create an instance of ElasticsearchSecretsConfig from a dict
elasticsearch_secrets_config_from_dict = ElasticsearchSecretsConfig.from_dict(elasticsearch_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


