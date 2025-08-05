# ModelsConnection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**saml_entity_id** | **str** |  | [optional] 
**saml_metadata_url** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_connection import ModelsConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConnection from a JSON string
models_connection_instance = ModelsConnection.from_json(json)
# print the JSON string representation of the object
print(ModelsConnection.to_json())

# convert the object into a dict
models_connection_dict = models_connection_instance.to_dict()
# create an instance of ModelsConnection from a dict
models_connection_from_dict = ModelsConnection.from_dict(models_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


