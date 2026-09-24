# DatastoreTaggedResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**kind** | [**DatastoreResourceKind**](DatastoreResourceKind.md) |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** | connector sub_type; empty for pipelines | [optional] 

## Example

```python
from monad.models.datastore_tagged_resource import DatastoreTaggedResource

# TODO update the JSON string below
json = "{}"
# create an instance of DatastoreTaggedResource from a JSON string
datastore_tagged_resource_instance = DatastoreTaggedResource.from_json(json)
# print the JSON string representation of the object
print(DatastoreTaggedResource.to_json())

# convert the object into a dict
datastore_tagged_resource_dict = datastore_tagged_resource_instance.to_dict()
# create an instance of DatastoreTaggedResource from a dict
datastore_tagged_resource_from_dict = DatastoreTaggedResource.from_dict(datastore_tagged_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


