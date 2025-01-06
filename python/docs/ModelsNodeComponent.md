# ModelsNodeComponent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **Dict[str, object]** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.models_node_component import ModelsNodeComponent

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsNodeComponent from a JSON string
models_node_component_instance = ModelsNodeComponent.from_json(json)
# print the JSON string representation of the object
print(ModelsNodeComponent.to_json())

# convert the object into a dict
models_node_component_dict = models_node_component_instance.to_dict()
# create an instance of ModelsNodeComponent from a dict
models_node_component_from_dict = ModelsNodeComponent.from_dict(models_node_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


