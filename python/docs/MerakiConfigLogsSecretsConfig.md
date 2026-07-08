# MerakiConfigLogsSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.meraki_config_logs_secrets_config import MerakiConfigLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MerakiConfigLogsSecretsConfig from a JSON string
meraki_config_logs_secrets_config_instance = MerakiConfigLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(MerakiConfigLogsSecretsConfig.to_json())

# convert the object into a dict
meraki_config_logs_secrets_config_dict = meraki_config_logs_secrets_config_instance.to_dict()
# create an instance of MerakiConfigLogsSecretsConfig from a dict
meraki_config_logs_secrets_config_from_dict = MerakiConfigLogsSecretsConfig.from_dict(meraki_config_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


