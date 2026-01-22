# PubsubSecretsConfig

Salesforce Pubsub secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.pubsub_secrets_config import PubsubSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubSecretsConfig from a JSON string
pubsub_secrets_config_instance = PubsubSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PubsubSecretsConfig.to_json())

# convert the object into a dict
pubsub_secrets_config_dict = pubsub_secrets_config_instance.to_dict()
# create an instance of PubsubSecretsConfig from a dict
pubsub_secrets_config_from_dict = PubsubSecretsConfig.from_dict(pubsub_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


