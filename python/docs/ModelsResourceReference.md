# ModelsResourceReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_id** | **str** | e.g., pipeline ID if resource is a node | [optional] 
**parent_type** | **str** | For hierarchical resources | [optional] 
**resource_id** | **str** |  | [optional] 
**resource_type** | **str** | \&quot;pipeline\&quot;, \&quot;node\&quot;, \&quot;organization\&quot; | [optional] 

## Example

```python
from monad.models.models_resource_reference import ModelsResourceReference

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceReference from a JSON string
models_resource_reference_instance = ModelsResourceReference.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceReference.to_json())

# convert the object into a dict
models_resource_reference_dict = models_resource_reference_instance.to_dict()
# create an instance of ModelsResourceReference from a dict
models_resource_reference_from_dict = ModelsResourceReference.from_dict(models_resource_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


