# AwssecurityhubSecretsConfig

Aws Security Hub Findings secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.awssecurityhub_secrets_config import AwssecurityhubSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwssecurityhubSecretsConfig from a JSON string
awssecurityhub_secrets_config_instance = AwssecurityhubSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AwssecurityhubSecretsConfig.to_json())

# convert the object into a dict
awssecurityhub_secrets_config_dict = awssecurityhub_secrets_config_instance.to_dict()
# create an instance of AwssecurityhubSecretsConfig from a dict
awssecurityhub_secrets_config_from_dict = AwssecurityhubSecretsConfig.from_dict(awssecurityhub_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


