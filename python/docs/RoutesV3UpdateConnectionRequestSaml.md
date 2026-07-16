# RoutesV3UpdateConnectionRequestSaml

SAML holds updatable SAML fields; only metadata_url may change (entity ID is immutable).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_url** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_update_connection_request_saml import RoutesV3UpdateConnectionRequestSaml

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3UpdateConnectionRequestSaml from a JSON string
routes_v3_update_connection_request_saml_instance = RoutesV3UpdateConnectionRequestSaml.from_json(json)
# print the JSON string representation of the object
print(RoutesV3UpdateConnectionRequestSaml.to_json())

# convert the object into a dict
routes_v3_update_connection_request_saml_dict = routes_v3_update_connection_request_saml_instance.to_dict()
# create an instance of RoutesV3UpdateConnectionRequestSaml from a dict
routes_v3_update_connection_request_saml_from_dict = RoutesV3UpdateConnectionRequestSaml.from_dict(routes_v3_update_connection_request_saml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


