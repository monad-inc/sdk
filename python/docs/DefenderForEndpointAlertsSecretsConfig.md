# DefenderForEndpointAlertsSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.defender_for_endpoint_alerts_secrets_config import DefenderForEndpointAlertsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DefenderForEndpointAlertsSecretsConfig from a JSON string
defender_for_endpoint_alerts_secrets_config_instance = DefenderForEndpointAlertsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DefenderForEndpointAlertsSecretsConfig.to_json())

# convert the object into a dict
defender_for_endpoint_alerts_secrets_config_dict = defender_for_endpoint_alerts_secrets_config_instance.to_dict()
# create an instance of DefenderForEndpointAlertsSecretsConfig from a dict
defender_for_endpoint_alerts_secrets_config_from_dict = DefenderForEndpointAlertsSecretsConfig.from_dict(defender_for_endpoint_alerts_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


