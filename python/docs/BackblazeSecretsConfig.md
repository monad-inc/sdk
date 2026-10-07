# BackblazeSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**application_key_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.backblaze_secrets_config import BackblazeSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackblazeSecretsConfig from a JSON string
backblaze_secrets_config_instance = BackblazeSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BackblazeSecretsConfig.to_json())

# convert the object into a dict
backblaze_secrets_config_dict = backblaze_secrets_config_instance.to_dict()
# create an instance of BackblazeSecretsConfig from a dict
backblaze_secrets_config_from_dict = BackblazeSecretsConfig.from_dict(backblaze_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


