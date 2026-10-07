# PlaidWebhooksSecretsConfig

Plaid Webhooks secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.plaid_webhooks_secrets_config import PlaidWebhooksSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PlaidWebhooksSecretsConfig from a JSON string
plaid_webhooks_secrets_config_instance = PlaidWebhooksSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PlaidWebhooksSecretsConfig.to_json())

# convert the object into a dict
plaid_webhooks_secrets_config_dict = plaid_webhooks_secrets_config_instance.to_dict()
# create an instance of PlaidWebhooksSecretsConfig from a dict
plaid_webhooks_secrets_config_from_dict = PlaidWebhooksSecretsConfig.from_dict(plaid_webhooks_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


