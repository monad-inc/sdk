# PlaidWebhooksSettingsConfig

Plaid Webhooks settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | ClientID is the Plaid API client_id. Required only when verification is enabled. | [optional] 
**verify_webhooks** | **bool** | VerifyWebhooks toggles Plaid signature verification. Unset defaults to true. | [optional] 
**webhook_types** | **List[str]** | WebhookTypes restricts which webhook_type values are emitted. Empty &#x3D; keep all. | [optional] 

## Example

```python
from monad.models.plaid_webhooks_settings_config import PlaidWebhooksSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PlaidWebhooksSettingsConfig from a JSON string
plaid_webhooks_settings_config_instance = PlaidWebhooksSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PlaidWebhooksSettingsConfig.to_json())

# convert the object into a dict
plaid_webhooks_settings_config_dict = plaid_webhooks_settings_config_instance.to_dict()
# create an instance of PlaidWebhooksSettingsConfig from a dict
plaid_webhooks_settings_config_from_dict = PlaidWebhooksSettingsConfig.from_dict(plaid_webhooks_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


