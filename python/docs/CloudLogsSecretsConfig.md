# CloudLogsSecretsConfig

Google Cloud Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloud_logs_secrets_config import CloudLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudLogsSecretsConfig from a JSON string
cloud_logs_secrets_config_instance = CloudLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudLogsSecretsConfig.to_json())

# convert the object into a dict
cloud_logs_secrets_config_dict = cloud_logs_secrets_config_instance.to_dict()
# create an instance of CloudLogsSecretsConfig from a dict
cloud_logs_secrets_config_from_dict = CloudLogsSecretsConfig.from_dict(cloud_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


