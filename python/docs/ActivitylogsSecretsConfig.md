# ActivitylogsSecretsConfig

Duo Security Activity Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.activitylogs_secrets_config import ActivitylogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ActivitylogsSecretsConfig from a JSON string
activitylogs_secrets_config_instance = ActivitylogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ActivitylogsSecretsConfig.to_json())

# convert the object into a dict
activitylogs_secrets_config_dict = activitylogs_secrets_config_instance.to_dict()
# create an instance of ActivitylogsSecretsConfig from a dict
activitylogs_secrets_config_from_dict = ActivitylogsSecretsConfig.from_dict(activitylogs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


