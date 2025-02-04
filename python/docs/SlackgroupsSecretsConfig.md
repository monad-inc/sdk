# SlackgroupsSecretsConfig

Slack Groups secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.slackgroups_secrets_config import SlackgroupsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SlackgroupsSecretsConfig from a JSON string
slackgroups_secrets_config_instance = SlackgroupsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SlackgroupsSecretsConfig.to_json())

# convert the object into a dict
slackgroups_secrets_config_dict = slackgroups_secrets_config_instance.to_dict()
# create an instance of SlackgroupsSecretsConfig from a dict
slackgroups_secrets_config_from_dict = SlackgroupsSecretsConfig.from_dict(slackgroups_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


