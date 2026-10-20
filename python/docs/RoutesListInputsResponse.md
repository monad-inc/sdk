# RoutesListInputsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[RoutesInputWithMetadata]**](RoutesInputWithMetadata.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.routes_list_inputs_response import RoutesListInputsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesListInputsResponse from a JSON string
routes_list_inputs_response_instance = RoutesListInputsResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesListInputsResponse.to_json())

# convert the object into a dict
routes_list_inputs_response_dict = routes_list_inputs_response_instance.to_dict()
# create an instance of RoutesListInputsResponse from a dict
routes_list_inputs_response_from_dict = RoutesListInputsResponse.from_dict(routes_list_inputs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


