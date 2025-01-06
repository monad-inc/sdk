# RoutesV2CreateOrUpdateSecretRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from monad.models.routes_v2_create_or_update_secret_request import RoutesV2CreateOrUpdateSecretRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateOrUpdateSecretRequest from a JSON string
routes_v2_create_or_update_secret_request_instance = RoutesV2CreateOrUpdateSecretRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateOrUpdateSecretRequest.to_json())

# convert the object into a dict
routes_v2_create_or_update_secret_request_dict = routes_v2_create_or_update_secret_request_instance.to_dict()
# create an instance of RoutesV2CreateOrUpdateSecretRequest from a dict
routes_v2_create_or_update_secret_request_from_dict = RoutesV2CreateOrUpdateSecretRequest.from_dict(routes_v2_create_or_update_secret_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


