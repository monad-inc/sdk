# TsugaSecretsConfig

Tsuga Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingestion_key** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.tsuga_secrets_config import TsugaSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TsugaSecretsConfig from a JSON string
tsuga_secrets_config_instance = TsugaSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TsugaSecretsConfig.to_json())

# convert the object into a dict
tsuga_secrets_config_dict = tsuga_secrets_config_instance.to_dict()
# create an instance of TsugaSecretsConfig from a dict
tsuga_secrets_config_from_dict = TsugaSecretsConfig.from_dict(tsuga_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


