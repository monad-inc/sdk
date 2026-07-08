# AzureEventHubsSecretsConfig

Microsoft Event Hubs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.azure_event_hubs_secrets_config import AzureEventHubsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureEventHubsSecretsConfig from a JSON string
azure_event_hubs_secrets_config_instance = AzureEventHubsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureEventHubsSecretsConfig.to_json())

# convert the object into a dict
azure_event_hubs_secrets_config_dict = azure_event_hubs_secrets_config_instance.to_dict()
# create an instance of AzureEventHubsSecretsConfig from a dict
azure_event_hubs_secrets_config_from_dict = AzureEventHubsSecretsConfig.from_dict(azure_event_hubs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


