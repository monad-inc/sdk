# CriblHttpSecretsConfig

Cribl HTTP Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cribl_http_secrets_config import CriblHttpSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CriblHttpSecretsConfig from a JSON string
cribl_http_secrets_config_instance = CriblHttpSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CriblHttpSecretsConfig.to_json())

# convert the object into a dict
cribl_http_secrets_config_dict = cribl_http_secrets_config_instance.to_dict()
# create an instance of CriblHttpSecretsConfig from a dict
cribl_http_secrets_config_from_dict = CriblHttpSecretsConfig.from_dict(cribl_http_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


