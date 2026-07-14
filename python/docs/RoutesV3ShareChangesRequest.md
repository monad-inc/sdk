# RoutesV3ShareChangesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_current_children** | **bool** | Share with every current direct child (future children excluded). | [optional] 
**revoke_all_not_in_use** | **bool** | Revoke every current share the target org is not using, leaving in-use shares in place (returned in skipped_in_use). Unlike revoke_organization_ids this never 409s on an in-use child — it skips it. | [optional] 
**revoke_organization_ids** | **List[str]** | Target organization ids whose share of this resource should be revoked. | [optional] 
**share_organization_ids** | **List[str]** | Explicit direct-child organizations to share with. | [optional] 
**share_with_all_new_children** | **bool** | Toggle auto-sharing with new direct children: omit to leave unchanged, true to enable, false to disable. | [optional] 

## Example

```python
from monad.models.routes_v3_share_changes_request import RoutesV3ShareChangesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3ShareChangesRequest from a JSON string
routes_v3_share_changes_request_instance = RoutesV3ShareChangesRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3ShareChangesRequest.to_json())

# convert the object into a dict
routes_v3_share_changes_request_dict = routes_v3_share_changes_request_instance.to_dict()
# create an instance of RoutesV3ShareChangesRequest from a dict
routes_v3_share_changes_request_from_dict = RoutesV3ShareChangesRequest.from_dict(routes_v3_share_changes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


