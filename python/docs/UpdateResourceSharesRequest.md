# UpdateResourceSharesRequest


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
from monad.models.update_resource_shares_request import UpdateResourceSharesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateResourceSharesRequest from a JSON string
update_resource_shares_request_instance = UpdateResourceSharesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateResourceSharesRequest.to_json())

# convert the object into a dict
update_resource_shares_request_dict = update_resource_shares_request_instance.to_dict()
# create an instance of UpdateResourceSharesRequest from a dict
update_resource_shares_request_from_dict = UpdateResourceSharesRequest.from_dict(update_resource_shares_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


