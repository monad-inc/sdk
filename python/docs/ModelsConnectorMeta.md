# ModelsConnectorMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** |  | [optional] 
**config** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**internal** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.models_connector_meta import ModelsConnectorMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConnectorMeta from a JSON string
models_connector_meta_instance = ModelsConnectorMeta.from_json(json)
# print the JSON string representation of the object
print(ModelsConnectorMeta.to_json())

# convert the object into a dict
models_connector_meta_dict = models_connector_meta_instance.to_dict()
# create an instance of ModelsConnectorMeta from a dict
models_connector_meta_from_dict = ModelsConnectorMeta.from_dict(models_connector_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


