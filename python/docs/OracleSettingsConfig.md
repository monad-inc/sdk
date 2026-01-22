# OracleSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**domain** | **str** | Domain name for the Oracle Cloud service | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**username** | **str** | Username of Oracle Cloud service user with permissions to access the resource | [optional] 

## Example

```python
from monad.models.oracle_settings_config import OracleSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OracleSettingsConfig from a JSON string
oracle_settings_config_instance = OracleSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OracleSettingsConfig.to_json())

# convert the object into a dict
oracle_settings_config_dict = oracle_settings_config_instance.to_dict()
# create an instance of OracleSettingsConfig from a dict
oracle_settings_config_from_dict = OracleSettingsConfig.from_dict(oracle_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


