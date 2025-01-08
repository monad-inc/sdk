# VulnerabilitiesSecretsConfig

CrowdStrike EDR vulnerabilities secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the CrowdStrike API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the CrowdStrike API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.vulnerabilities_secrets_config import VulnerabilitiesSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VulnerabilitiesSecretsConfig from a JSON string
vulnerabilities_secrets_config_instance = VulnerabilitiesSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(VulnerabilitiesSecretsConfig.to_json())

# convert the object into a dict
vulnerabilities_secrets_config_dict = vulnerabilities_secrets_config_instance.to_dict()
# create an instance of VulnerabilitiesSecretsConfig from a dict
vulnerabilities_secrets_config_from_dict = VulnerabilitiesSecretsConfig.from_dict(vulnerabilities_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


