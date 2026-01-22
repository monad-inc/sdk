# CustomerEventDataSecretsConfig

Docusign Customer Event Data secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**rsa_private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.customer_event_data_secrets_config import CustomerEventDataSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerEventDataSecretsConfig from a JSON string
customer_event_data_secrets_config_instance = CustomerEventDataSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CustomerEventDataSecretsConfig.to_json())

# convert the object into a dict
customer_event_data_secrets_config_dict = customer_event_data_secrets_config_instance.to_dict()
# create an instance of CustomerEventDataSecretsConfig from a dict
customer_event_data_secrets_config_from_dict = CustomerEventDataSecretsConfig.from_dict(customer_event_data_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


