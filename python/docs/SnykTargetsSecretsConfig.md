# SnykTargetsSecretsConfig

Snyk targets secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | API Key for the Snyk API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.snyk_targets_secrets_config import SnykTargetsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnykTargetsSecretsConfig from a JSON string
snyk_targets_secrets_config_instance = SnykTargetsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SnykTargetsSecretsConfig.to_json())

# convert the object into a dict
snyk_targets_secrets_config_dict = snyk_targets_secrets_config_instance.to_dict()
# create an instance of SnykTargetsSecretsConfig from a dict
snyk_targets_secrets_config_from_dict = SnykTargetsSecretsConfig.from_dict(snyk_targets_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


