# SlackUsersSecretsConfig

Slack Users secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | Token to authenticate against the slack API | [optional] 

## Example

```python
from monad.models.slack_users_secrets_config import SlackUsersSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SlackUsersSecretsConfig from a JSON string
slack_users_secrets_config_instance = SlackUsersSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SlackUsersSecretsConfig.to_json())

# convert the object into a dict
slack_users_secrets_config_dict = slack_users_secrets_config_instance.to_dict()
# create an instance of SlackUsersSecretsConfig from a dict
slack_users_secrets_config_from_dict = SlackUsersSecretsConfig.from_dict(slack_users_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


