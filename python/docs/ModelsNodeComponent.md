# ModelsNodeComponent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_config** | **Dict[str, Optional[object]]** | The blocks below are populated only for a node carrying an override delta, so the UI can derive per-field overridden markers client-side without a server-built per-field structure (R-1). A node with no delta leaves them empty, and BaseConfig &#x3D;&#x3D; Config.  BaseConfig is the component&#39;s config before the override delta is applied. | [optional] 
**config** | **Dict[str, Optional[object]]** | Config is the node&#39;s effective config: for a node carrying an override delta it is the base merged with that delta (RFC 0017 §3); otherwise it is the component&#39;s base config unchanged. | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**overrides** | **Dict[str, Optional[object]]** | Overrides is the node&#39;s sparse override delta (secrets as {id} refs only). | [optional] 
**references** | [**ModelsReferences**](ModelsReferences.md) |  | [optional] 
**share_details** | [**ModelsShareDetails**](ModelsShareDetails.md) |  | [optional] 
**type** | **str** |  | [optional] 
**version** | **int** |  | [optional] 

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


