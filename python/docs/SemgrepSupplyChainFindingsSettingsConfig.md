# SemgrepSupplyChainFindingsSettingsConfig

Semgrep supply chain findings settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.semgrep_supply_chain_findings_settings_config import SemgrepSupplyChainFindingsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SemgrepSupplyChainFindingsSettingsConfig from a JSON string
semgrep_supply_chain_findings_settings_config_instance = SemgrepSupplyChainFindingsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SemgrepSupplyChainFindingsSettingsConfig.to_json())

# convert the object into a dict
semgrep_supply_chain_findings_settings_config_dict = semgrep_supply_chain_findings_settings_config_instance.to_dict()
# create an instance of SemgrepSupplyChainFindingsSettingsConfig from a dict
semgrep_supply_chain_findings_settings_config_from_dict = SemgrepSupplyChainFindingsSettingsConfig.from_dict(semgrep_supply_chain_findings_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


