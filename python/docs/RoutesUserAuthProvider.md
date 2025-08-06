# RoutesUserAuthProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **str** |  | [optional] 
**provider_id** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_user_auth_provider import RoutesUserAuthProvider

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUserAuthProvider from a JSON string
routes_user_auth_provider_instance = RoutesUserAuthProvider.from_json(json)
# print the JSON string representation of the object
print(RoutesUserAuthProvider.to_json())

# convert the object into a dict
routes_user_auth_provider_dict = routes_user_auth_provider_instance.to_dict()
# create an instance of RoutesUserAuthProvider from a dict
routes_user_auth_provider_from_dict = RoutesUserAuthProvider.from_dict(routes_user_auth_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


