# SemgrepCodeFindingsSettingsConfig

Semgrep code findings settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.semgrep_code_findings_settings_config import SemgrepCodeFindingsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SemgrepCodeFindingsSettingsConfig from a JSON string
semgrep_code_findings_settings_config_instance = SemgrepCodeFindingsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SemgrepCodeFindingsSettingsConfig.to_json())

# convert the object into a dict
semgrep_code_findings_settings_config_dict = semgrep_code_findings_settings_config_instance.to_dict()
# create an instance of SemgrepCodeFindingsSettingsConfig from a dict
semgrep_code_findings_settings_config_from_dict = SemgrepCodeFindingsSettingsConfig.from_dict(semgrep_code_findings_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


