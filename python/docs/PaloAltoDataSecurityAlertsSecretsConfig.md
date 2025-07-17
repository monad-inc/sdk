# PaloAltoDataSecurityAlertsSecretsConfig

Palo Alto Data Security Alerts secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.palo_alto_data_security_alerts_secrets_config import PaloAltoDataSecurityAlertsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PaloAltoDataSecurityAlertsSecretsConfig from a JSON string
palo_alto_data_security_alerts_secrets_config_instance = PaloAltoDataSecurityAlertsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PaloAltoDataSecurityAlertsSecretsConfig.to_json())

# convert the object into a dict
palo_alto_data_security_alerts_secrets_config_dict = palo_alto_data_security_alerts_secrets_config_instance.to_dict()
# create an instance of PaloAltoDataSecurityAlertsSecretsConfig from a dict
palo_alto_data_security_alerts_secrets_config_from_dict = PaloAltoDataSecurityAlertsSecretsConfig.from_dict(palo_alto_data_security_alerts_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


