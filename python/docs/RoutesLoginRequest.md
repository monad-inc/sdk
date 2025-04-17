# RoutesLoginRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_login_request import RoutesLoginRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesLoginRequest from a JSON string
routes_login_request_instance = RoutesLoginRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesLoginRequest.to_json())

# convert the object into a dict
routes_login_request_dict = routes_login_request_instance.to_dict()
# create an instance of RoutesLoginRequest from a dict
routes_login_request_from_dict = RoutesLoginRequest.from_dict(routes_login_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


