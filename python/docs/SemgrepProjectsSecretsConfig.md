# SemgrepProjectsSecretsConfig

Semgrep projects secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.semgrep_projects_secrets_config import SemgrepProjectsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SemgrepProjectsSecretsConfig from a JSON string
semgrep_projects_secrets_config_instance = SemgrepProjectsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SemgrepProjectsSecretsConfig.to_json())

# convert the object into a dict
semgrep_projects_secrets_config_dict = semgrep_projects_secrets_config_instance.to_dict()
# create an instance of SemgrepProjectsSecretsConfig from a dict
semgrep_projects_secrets_config_from_dict = SemgrepProjectsSecretsConfig.from_dict(semgrep_projects_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


