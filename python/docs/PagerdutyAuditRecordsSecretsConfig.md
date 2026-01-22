# PagerdutyAuditRecordsSecretsConfig

Pagerduty Audit Records secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.pagerduty_audit_records_secrets_config import PagerdutyAuditRecordsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PagerdutyAuditRecordsSecretsConfig from a JSON string
pagerduty_audit_records_secrets_config_instance = PagerdutyAuditRecordsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PagerdutyAuditRecordsSecretsConfig.to_json())

# convert the object into a dict
pagerduty_audit_records_secrets_config_dict = pagerduty_audit_records_secrets_config_instance.to_dict()
# create an instance of PagerdutyAuditRecordsSecretsConfig from a dict
pagerduty_audit_records_secrets_config_from_dict = PagerdutyAuditRecordsSecretsConfig.from_dict(pagerduty_audit_records_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


