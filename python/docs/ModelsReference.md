# ModelsReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** | Name is the referenced resource&#39;s display name, filled at read time on component responses. Never persisted: writes rebuild references from request state (the name is display sugar and would go stale), and an empty name is omitted from the stored JSON. | [optional] 
**organization_id** | **str** |  | [optional] 
**shared** | **bool** | Shared reports that the referenced resource is owned by an org other than the component&#39;s owner — a directly-shared secret the component pulls in. Same read-time-only contract as Name: computed on responses, never persisted (omitted when false). | [optional] 

## Example

```python
from monad.models.models_reference import ModelsReference

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsReference from a JSON string
models_reference_instance = ModelsReference.from_json(json)
# print the JSON string representation of the object
print(ModelsReference.to_json())

# convert the object into a dict
models_reference_dict = models_reference_instance.to_dict()
# create an instance of ModelsReference from a dict
models_reference_from_dict = ModelsReference.from_dict(models_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


