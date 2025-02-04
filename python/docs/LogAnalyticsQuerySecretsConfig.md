# LogAnalyticsQuerySecretsConfig

Microsoft Log Analytics Query secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.log_analytics_query_secrets_config import LogAnalyticsQuerySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsQuerySecretsConfig from a JSON string
log_analytics_query_secrets_config_instance = LogAnalyticsQuerySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsQuerySecretsConfig.to_json())

# convert the object into a dict
log_analytics_query_secrets_config_dict = log_analytics_query_secrets_config_instance.to_dict()
# create an instance of LogAnalyticsQuerySecretsConfig from a dict
log_analytics_query_secrets_config_from_dict = LogAnalyticsQuerySecretsConfig.from_dict(log_analytics_query_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


