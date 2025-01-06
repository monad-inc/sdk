# SplunkSecretsConfig

Splunk Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | The token for authenticating with Splunk. | [optional] 

## Example

```python
from monad.models.splunk_secrets_config import SplunkSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SplunkSecretsConfig from a JSON string
splunk_secrets_config_instance = SplunkSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SplunkSecretsConfig.to_json())

# convert the object into a dict
splunk_secrets_config_dict = splunk_secrets_config_instance.to_dict()
# create an instance of SplunkSecretsConfig from a dict
splunk_secrets_config_from_dict = SplunkSecretsConfig.from_dict(splunk_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


