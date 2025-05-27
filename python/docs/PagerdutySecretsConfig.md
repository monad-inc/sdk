# PagerdutySecretsConfig

PagerDuty Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**routing_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.pagerduty_secrets_config import PagerdutySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PagerdutySecretsConfig from a JSON string
pagerduty_secrets_config_instance = PagerdutySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PagerdutySecretsConfig.to_json())

# convert the object into a dict
pagerduty_secrets_config_dict = pagerduty_secrets_config_instance.to_dict()
# create an instance of PagerdutySecretsConfig from a dict
pagerduty_secrets_config_from_dict = PagerdutySecretsConfig.from_dict(pagerduty_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


