# BigquerySecretsConfig

BigQuery Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.bigquery_secrets_config import BigquerySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BigquerySecretsConfig from a JSON string
bigquery_secrets_config_instance = BigquerySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BigquerySecretsConfig.to_json())

# convert the object into a dict
bigquery_secrets_config_dict = bigquery_secrets_config_instance.to_dict()
# create an instance of BigquerySecretsConfig from a dict
bigquery_secrets_config_from_dict = BigquerySecretsConfig.from_dict(bigquery_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


