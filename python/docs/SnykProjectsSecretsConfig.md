# SnykProjectsSecretsConfig

Snyk projects secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.snyk_projects_secrets_config import SnykProjectsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnykProjectsSecretsConfig from a JSON string
snyk_projects_secrets_config_instance = SnykProjectsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SnykProjectsSecretsConfig.to_json())

# convert the object into a dict
snyk_projects_secrets_config_dict = snyk_projects_secrets_config_instance.to_dict()
# create an instance of SnykProjectsSecretsConfig from a dict
snyk_projects_secrets_config_from_dict = SnykProjectsSecretsConfig.from_dict(snyk_projects_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


