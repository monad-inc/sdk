# RoutesV3CreateConnectionRequestSaml

SAML is the configuration for SAML connections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | EntityID is the unique identifier for the SAML connection | [optional] 
**metadata_url** | **str** | MetadataURL is the URL to IDPs SAML metadata | [optional] 

## Example

```python
from monad.models.routes_v3_create_connection_request_saml import RoutesV3CreateConnectionRequestSaml

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3CreateConnectionRequestSaml from a JSON string
routes_v3_create_connection_request_saml_instance = RoutesV3CreateConnectionRequestSaml.from_json(json)
# print the JSON string representation of the object
print(RoutesV3CreateConnectionRequestSaml.to_json())

# convert the object into a dict
routes_v3_create_connection_request_saml_dict = routes_v3_create_connection_request_saml_instance.to_dict()
# create an instance of RoutesV3CreateConnectionRequestSaml from a dict
routes_v3_create_connection_request_saml_from_dict = RoutesV3CreateConnectionRequestSaml.from_dict(routes_v3_create_connection_request_saml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


