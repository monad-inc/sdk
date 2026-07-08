# BackblazeB2SecretsConfig

Backblaze B2 secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**application_key_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.backblaze_b2_secrets_config import BackblazeB2SecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackblazeB2SecretsConfig from a JSON string
backblaze_b2_secrets_config_instance = BackblazeB2SecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BackblazeB2SecretsConfig.to_json())

# convert the object into a dict
backblaze_b2_secrets_config_dict = backblaze_b2_secrets_config_instance.to_dict()
# create an instance of BackblazeB2SecretsConfig from a dict
backblaze_b2_secrets_config_from_dict = BackblazeB2SecretsConfig.from_dict(backblaze_b2_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


