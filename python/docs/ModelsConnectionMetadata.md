# ModelsConnectionMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 
**issuer** | **str** |  | [optional] 
**jwks_uri** | **str** |  | [optional] 
**scope** | **str** |  | [optional] 

## Example

```python
from monad.models.models_connection_metadata import ModelsConnectionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConnectionMetadata from a JSON string
models_connection_metadata_instance = ModelsConnectionMetadata.from_json(json)
# print the JSON string representation of the object
print(ModelsConnectionMetadata.to_json())

# convert the object into a dict
models_connection_metadata_dict = models_connection_metadata_instance.to_dict()
# create an instance of ModelsConnectionMetadata from a dict
models_connection_metadata_from_dict = ModelsConnectionMetadata.from_dict(models_connection_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


