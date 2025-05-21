# ActivityLogsSecretsConfig

Fleet DM secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.activity_logs_secrets_config import ActivityLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogsSecretsConfig from a JSON string
activity_logs_secrets_config_instance = ActivityLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ActivityLogsSecretsConfig.to_json())

# convert the object into a dict
activity_logs_secrets_config_dict = activity_logs_secrets_config_instance.to_dict()
# create an instance of ActivityLogsSecretsConfig from a dict
activity_logs_secrets_config_from_dict = ActivityLogsSecretsConfig.from_dict(activity_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


