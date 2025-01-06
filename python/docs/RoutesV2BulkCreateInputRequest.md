# RoutesV2BulkCreateInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[RoutesV2CreateInputRequest]**](RoutesV2CreateInputRequest.md) |  | [optional] 

## Example

```python
from monad.models.routes_v2_bulk_create_input_request import RoutesV2BulkCreateInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2BulkCreateInputRequest from a JSON string
routes_v2_bulk_create_input_request_instance = RoutesV2BulkCreateInputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2BulkCreateInputRequest.to_json())

# convert the object into a dict
routes_v2_bulk_create_input_request_dict = routes_v2_bulk_create_input_request_instance.to_dict()
# create an instance of RoutesV2BulkCreateInputRequest from a dict
routes_v2_bulk_create_input_request_from_dict = RoutesV2BulkCreateInputRequest.from_dict(routes_v2_bulk_create_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


