# RoutesListOutputsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outputs** | [**List[RoutesOutputWithMetadata]**](RoutesOutputWithMetadata.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.routes_list_outputs_response import RoutesListOutputsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesListOutputsResponse from a JSON string
routes_list_outputs_response_instance = RoutesListOutputsResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesListOutputsResponse.to_json())

# convert the object into a dict
routes_list_outputs_response_dict = routes_list_outputs_response_instance.to_dict()
# create an instance of RoutesListOutputsResponse from a dict
routes_list_outputs_response_from_dict = RoutesListOutputsResponse.from_dict(routes_list_outputs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


