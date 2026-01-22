# CodaAuditEventsSecretsConfig

Coda Audit Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.coda_audit_events_secrets_config import CodaAuditEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CodaAuditEventsSecretsConfig from a JSON string
coda_audit_events_secrets_config_instance = CodaAuditEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CodaAuditEventsSecretsConfig.to_json())

# convert the object into a dict
coda_audit_events_secrets_config_dict = coda_audit_events_secrets_config_instance.to_dict()
# create an instance of CodaAuditEventsSecretsConfig from a dict
coda_audit_events_secrets_config_from_dict = CodaAuditEventsSecretsConfig.from_dict(coda_audit_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


