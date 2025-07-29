# SemgrepDeploymentsSettingsConfig

Semgrep deployments settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.semgrep_deployments_settings_config import SemgrepDeploymentsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SemgrepDeploymentsSettingsConfig from a JSON string
semgrep_deployments_settings_config_instance = SemgrepDeploymentsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SemgrepDeploymentsSettingsConfig.to_json())

# convert the object into a dict
semgrep_deployments_settings_config_dict = semgrep_deployments_settings_config_instance.to_dict()
# create an instance of SemgrepDeploymentsSettingsConfig from a dict
semgrep_deployments_settings_config_from_dict = SemgrepDeploymentsSettingsConfig.from_dict(semgrep_deployments_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


