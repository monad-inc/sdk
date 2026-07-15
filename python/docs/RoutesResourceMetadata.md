# RoutesResourceMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**house** | **str** |  | [optional] 
**in_beta** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**tier** | **int** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_resource_metadata import RoutesResourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesResourceMetadata from a JSON string
routes_resource_metadata_instance = RoutesResourceMetadata.from_json(json)
# print the JSON string representation of the object
print(RoutesResourceMetadata.to_json())

# convert the object into a dict
routes_resource_metadata_dict = routes_resource_metadata_instance.to_dict()
# create an instance of RoutesResourceMetadata from a dict
routes_resource_metadata_from_dict = RoutesResourceMetadata.from_dict(routes_resource_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


