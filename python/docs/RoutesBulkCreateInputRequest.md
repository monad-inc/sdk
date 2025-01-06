# RoutesBulkCreateInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[RoutesCreateInputRequest]**](RoutesCreateInputRequest.md) |  | 

## Example

```python
from monad.models.routes_bulk_create_input_request import RoutesBulkCreateInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesBulkCreateInputRequest from a JSON string
routes_bulk_create_input_request_instance = RoutesBulkCreateInputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesBulkCreateInputRequest.to_json())

# convert the object into a dict
routes_bulk_create_input_request_dict = routes_bulk_create_input_request_instance.to_dict()
# create an instance of RoutesBulkCreateInputRequest from a dict
routes_bulk_create_input_request_from_dict = RoutesBulkCreateInputRequest.from_dict(routes_bulk_create_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


