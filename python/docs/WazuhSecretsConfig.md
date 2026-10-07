# WazuhSecretsConfig

Wazuh Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.wazuh_secrets_config import WazuhSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WazuhSecretsConfig from a JSON string
wazuh_secrets_config_instance = WazuhSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(WazuhSecretsConfig.to_json())

# convert the object into a dict
wazuh_secrets_config_dict = wazuh_secrets_config_instance.to_dict()
# create an instance of WazuhSecretsConfig from a dict
wazuh_secrets_config_from_dict = WazuhSecretsConfig.from_dict(wazuh_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


