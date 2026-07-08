# SlackAuthConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot_token** | [**SlackBotTokenVariant**](SlackBotTokenVariant.md) |  | [optional] 
**type** | **str** |  | [optional] 
**webhook** | [**SlackWebhookVariant**](SlackWebhookVariant.md) |  | [optional] 

## Example

```python
from monad.models.slack_auth_config import SlackAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SlackAuthConfig from a JSON string
slack_auth_config_instance = SlackAuthConfig.from_json(json)
# print the JSON string representation of the object
print(SlackAuthConfig.to_json())

# convert the object into a dict
slack_auth_config_dict = slack_auth_config_instance.to_dict()
# create an instance of SlackAuthConfig from a dict
slack_auth_config_from_dict = SlackAuthConfig.from_dict(slack_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


