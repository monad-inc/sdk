# ModelsNodeSharedResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_organization_id** | **str** |  | [optional] 
**resource_id** | **str** |  | [optional] 
**resource_type** | **str** | ResourceShareTypeComponent | ResourceShareTypeSecret | [optional] 

## Example

```python
from monad.models.models_node_shared_resource import ModelsNodeSharedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsNodeSharedResource from a JSON string
models_node_shared_resource_instance = ModelsNodeSharedResource.from_json(json)
# print the JSON string representation of the object
print(ModelsNodeSharedResource.to_json())

# convert the object into a dict
models_node_shared_resource_dict = models_node_shared_resource_instance.to_dict()
# create an instance of ModelsNodeSharedResource from a dict
models_node_shared_resource_from_dict = ModelsNodeSharedResource.from_dict(models_node_shared_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


