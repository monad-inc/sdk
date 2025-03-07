# RoutesV2CreateRoleV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**permission_ids** | **List[str]** |  | 

## Example

```python
from monad.models.routes_v2_create_role_v2_request import RoutesV2CreateRoleV2Request

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateRoleV2Request from a JSON string
routes_v2_create_role_v2_request_instance = RoutesV2CreateRoleV2Request.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateRoleV2Request.to_json())

# convert the object into a dict
routes_v2_create_role_v2_request_dict = routes_v2_create_role_v2_request_instance.to_dict()
# create an instance of RoutesV2CreateRoleV2Request from a dict
routes_v2_create_role_v2_request_from_dict = RoutesV2CreateRoleV2Request.from_dict(routes_v2_create_role_v2_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


