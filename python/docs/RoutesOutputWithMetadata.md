# RoutesOutputWithMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsOutputConfig**](ModelsOutputConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**managed_by** | [**ModelsManagedBy**](ModelsManagedBy.md) |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**references** | [**ModelsReferences**](ModelsReferences.md) |  | [optional] 
**resource_metadata** | [**ConnectormetaResourceMetadata**](ConnectormetaResourceMetadata.md) |  | [optional] 
**share_details** | [**ModelsShareDetails**](ModelsShareDetails.md) |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**version** | **int** |  | [optional] 

## Example

```python
from monad.models.routes_output_with_metadata import RoutesOutputWithMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesOutputWithMetadata from a JSON string
routes_output_with_metadata_instance = RoutesOutputWithMetadata.from_json(json)
# print the JSON string representation of the object
print(RoutesOutputWithMetadata.to_json())

# convert the object into a dict
routes_output_with_metadata_dict = routes_output_with_metadata_instance.to_dict()
# create an instance of RoutesOutputWithMetadata from a dict
routes_output_with_metadata_from_dict = RoutesOutputWithMetadata.from_dict(routes_output_with_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


