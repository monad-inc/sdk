# OfflineenrollmentlogsSecretsConfig

Duo Security Offline Enrollment Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.offlineenrollmentlogs_secrets_config import OfflineenrollmentlogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OfflineenrollmentlogsSecretsConfig from a JSON string
offlineenrollmentlogs_secrets_config_instance = OfflineenrollmentlogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(OfflineenrollmentlogsSecretsConfig.to_json())

# convert the object into a dict
offlineenrollmentlogs_secrets_config_dict = offlineenrollmentlogs_secrets_config_instance.to_dict()
# create an instance of OfflineenrollmentlogsSecretsConfig from a dict
offlineenrollmentlogs_secrets_config_from_dict = OfflineenrollmentlogsSecretsConfig.from_dict(offlineenrollmentlogs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


