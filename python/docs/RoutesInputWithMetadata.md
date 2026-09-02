# RoutesInputWithMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsInputConfig**](ModelsInputConfig.md) |  | [optional] 
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
from monad.models.routes_input_with_metadata import RoutesInputWithMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesInputWithMetadata from a JSON string
routes_input_with_metadata_instance = RoutesInputWithMetadata.from_json(json)
# print the JSON string representation of the object
print(RoutesInputWithMetadata.to_json())

# convert the object into a dict
routes_input_with_metadata_dict = routes_input_with_metadata_instance.to_dict()
# create an instance of RoutesInputWithMetadata from a dict
routes_input_with_metadata_from_dict = RoutesInputWithMetadata.from_dict(routes_input_with_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


