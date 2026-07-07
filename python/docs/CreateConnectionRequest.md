# CreateConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the connection | [optional] 
**email_domains** | **List[str]** | EmailDomains associated with the connection for SP-initiated SSO discovery. Optional; empty/unset falls through to the column default (empty array). | [optional] 
**name** | **str** | Name of the connection | [optional] 
**public_name** | **str** | PublicName is the customer-controlled label shown to end users in the SSO discovery picker. Optional; empty/unset falls through to the column default (an auto-generated &#x60;sso-&lt;hex&gt;&#x60; value). | [optional] 
**saml** | [**RoutesV3CreateConnectionRequestSaml**](RoutesV3CreateConnectionRequestSaml.md) |  | [optional] 
**session_settings** | [**ModelsConnectionSessionSettings**](ModelsConnectionSessionSettings.md) |  | [optional] 

## Example

```python
from monad.models.create_connection_request import CreateConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateConnectionRequest from a JSON string
create_connection_request_instance = CreateConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateConnectionRequest.to_json())

# convert the object into a dict
create_connection_request_dict = create_connection_request_instance.to_dict()
# create an instance of CreateConnectionRequest from a dict
create_connection_request_from_dict = CreateConnectionRequest.from_dict(create_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


