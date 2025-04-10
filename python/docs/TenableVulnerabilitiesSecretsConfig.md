# TenableVulnerabilitiesSecretsConfig

Tenable assets secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.tenable_vulnerabilities_secrets_config import TenableVulnerabilitiesSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TenableVulnerabilitiesSecretsConfig from a JSON string
tenable_vulnerabilities_secrets_config_instance = TenableVulnerabilitiesSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TenableVulnerabilitiesSecretsConfig.to_json())

# convert the object into a dict
tenable_vulnerabilities_secrets_config_dict = tenable_vulnerabilities_secrets_config_instance.to_dict()
# create an instance of TenableVulnerabilitiesSecretsConfig from a dict
tenable_vulnerabilities_secrets_config_from_dict = TenableVulnerabilitiesSecretsConfig.from_dict(tenable_vulnerabilities_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


