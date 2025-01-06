# RoutesV2SecretResponse

A secret object without sensitive data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_secret_response import RoutesV2SecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2SecretResponse from a JSON string
routes_v2_secret_response_instance = RoutesV2SecretResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2SecretResponse.to_json())

# convert the object into a dict
routes_v2_secret_response_dict = routes_v2_secret_response_instance.to_dict()
# create an instance of RoutesV2SecretResponse from a dict
routes_v2_secret_response_from_dict = RoutesV2SecretResponse.from_dict(routes_v2_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


