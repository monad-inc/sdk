# HydrolixAuthConfig

Authentication method. Either a static service-account bearer token or a username/password pair exchanged at Init time for a 24h access token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**HydrolixPasswordAuth**](HydrolixPasswordAuth.md) |  | [optional] 
**service_account** | [**HydrolixServiceAccountAuth**](HydrolixServiceAccountAuth.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.hydrolix_auth_config import HydrolixAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HydrolixAuthConfig from a JSON string
hydrolix_auth_config_instance = HydrolixAuthConfig.from_json(json)
# print the JSON string representation of the object
print(HydrolixAuthConfig.to_json())

# convert the object into a dict
hydrolix_auth_config_dict = hydrolix_auth_config_instance.to_dict()
# create an instance of HydrolixAuthConfig from a dict
hydrolix_auth_config_from_dict = HydrolixAuthConfig.from_dict(hydrolix_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


