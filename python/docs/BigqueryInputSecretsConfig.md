# BigqueryInputSecretsConfig

BigQuery Input Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.bigquery_input_secrets_config import BigqueryInputSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BigqueryInputSecretsConfig from a JSON string
bigquery_input_secrets_config_instance = BigqueryInputSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BigqueryInputSecretsConfig.to_json())

# convert the object into a dict
bigquery_input_secrets_config_dict = bigquery_input_secrets_config_instance.to_dict()
# create an instance of BigqueryInputSecretsConfig from a dict
bigquery_input_secrets_config_from_dict = BigqueryInputSecretsConfig.from_dict(bigquery_input_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


