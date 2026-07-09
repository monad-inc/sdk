# CreateResourceSharesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_current_children** | **bool** | Share with every current direct child (future children excluded). | [optional] 
**revoke_organization_ids** | **List[str]** | Target organization ids whose share of this resource should be revoked. | [optional] 
**share_organization_ids** | **List[str]** | Explicit direct-child organizations to share with. | [optional] 
**share_with_all_new_children** | **bool** | Toggle auto-sharing with new direct children: omit to leave unchanged, true to enable, false to disable. | [optional] 

## Example

```python
from monad.models.create_resource_shares_request import CreateResourceSharesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateResourceSharesRequest from a JSON string
create_resource_shares_request_instance = CreateResourceSharesRequest.from_json(json)
# print the JSON string representation of the object
print(CreateResourceSharesRequest.to_json())

# convert the object into a dict
create_resource_shares_request_dict = create_resource_shares_request_instance.to_dict()
# create an instance of CreateResourceSharesRequest from a dict
create_resource_shares_request_from_dict = CreateResourceSharesRequest.from_dict(create_resource_shares_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


