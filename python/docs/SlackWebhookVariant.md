# SlackWebhookVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_url** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.slack_webhook_variant import SlackWebhookVariant

# TODO update the JSON string below
json = "{}"
# create an instance of SlackWebhookVariant from a JSON string
slack_webhook_variant_instance = SlackWebhookVariant.from_json(json)
# print the JSON string representation of the object
print(SlackWebhookVariant.to_json())

# convert the object into a dict
slack_webhook_variant_dict = slack_webhook_variant_instance.to_dict()
# create an instance of SlackWebhookVariant from a dict
slack_webhook_variant_from_dict = SlackWebhookVariant.from_dict(slack_webhook_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


