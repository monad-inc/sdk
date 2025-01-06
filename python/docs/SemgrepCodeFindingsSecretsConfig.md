# SemgrepCodeFindingsSecretsConfig

Semgrep code findings secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | API Key for the Semgrep API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.semgrep_code_findings_secrets_config import SemgrepCodeFindingsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SemgrepCodeFindingsSecretsConfig from a JSON string
semgrep_code_findings_secrets_config_instance = SemgrepCodeFindingsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SemgrepCodeFindingsSecretsConfig.to_json())

# convert the object into a dict
semgrep_code_findings_secrets_config_dict = semgrep_code_findings_secrets_config_instance.to_dict()
# create an instance of SemgrepCodeFindingsSecretsConfig from a dict
semgrep_code_findings_secrets_config_from_dict = SemgrepCodeFindingsSecretsConfig.from_dict(semgrep_code_findings_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


