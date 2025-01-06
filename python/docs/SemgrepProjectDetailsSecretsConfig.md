# SemgrepProjectDetailsSecretsConfig

Semgrep project details secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | API Key for the Semgrep API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.semgrep_project_details_secrets_config import SemgrepProjectDetailsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SemgrepProjectDetailsSecretsConfig from a JSON string
semgrep_project_details_secrets_config_instance = SemgrepProjectDetailsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SemgrepProjectDetailsSecretsConfig.to_json())

# convert the object into a dict
semgrep_project_details_secrets_config_dict = semgrep_project_details_secrets_config_instance.to_dict()
# create an instance of SemgrepProjectDetailsSecretsConfig from a dict
semgrep_project_details_secrets_config_from_dict = SemgrepProjectDetailsSecretsConfig.from_dict(semgrep_project_details_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


