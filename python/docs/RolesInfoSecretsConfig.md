# RolesInfoSecretsConfig

CrowdStrike EDR roles info secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the CrowdStrike API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the CrowdStrike API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.roles_info_secrets_config import RolesInfoSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RolesInfoSecretsConfig from a JSON string
roles_info_secrets_config_instance = RolesInfoSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(RolesInfoSecretsConfig.to_json())

# convert the object into a dict
roles_info_secrets_config_dict = roles_info_secrets_config_instance.to_dict()
# create an instance of RolesInfoSecretsConfig from a dict
roles_info_secrets_config_from_dict = RolesInfoSecretsConfig.from_dict(roles_info_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


