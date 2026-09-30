# ElasticsearchSecretVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.elasticsearch_secret_variant import ElasticsearchSecretVariant

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticsearchSecretVariant from a JSON string
elasticsearch_secret_variant_instance = ElasticsearchSecretVariant.from_json(json)
# print the JSON string representation of the object
print(ElasticsearchSecretVariant.to_json())

# convert the object into a dict
elasticsearch_secret_variant_dict = elasticsearch_secret_variant_instance.to_dict()
# create an instance of ElasticsearchSecretVariant from a dict
elasticsearch_secret_variant_from_dict = ElasticsearchSecretVariant.from_dict(elasticsearch_secret_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


