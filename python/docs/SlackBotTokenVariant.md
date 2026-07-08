# SlackBotTokenVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**channel_id** | **str** |  | [optional] 

## Example

```python
from monad.models.slack_bot_token_variant import SlackBotTokenVariant

# TODO update the JSON string below
json = "{}"
# create an instance of SlackBotTokenVariant from a JSON string
slack_bot_token_variant_instance = SlackBotTokenVariant.from_json(json)
# print the JSON string representation of the object
print(SlackBotTokenVariant.to_json())

# convert the object into a dict
slack_bot_token_variant_dict = slack_bot_token_variant_instance.to_dict()
# create an instance of SlackBotTokenVariant from a dict
slack_bot_token_variant_from_dict = SlackBotTokenVariant.from_dict(slack_bot_token_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


