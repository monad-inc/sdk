# InspectorSettingsConfig

AWS Inspector settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**region** | **str** | The AWS region where Inspector is enabled. | [optional] 
**role_arn** | **str** | The ARN of the IAM role to assume for accessing Inspector. | [optional] 
**severities** | **List[str]** | Minimum severity level of findings to fetch. | [optional] 
**severity_filter** | [**List[TypesStringFilter]**](TypesStringFilter.md) |  | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.inspector_settings_config import InspectorSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InspectorSettingsConfig from a JSON string
inspector_settings_config_instance = InspectorSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(InspectorSettingsConfig.to_json())

# convert the object into a dict
inspector_settings_config_dict = inspector_settings_config_instance.to_dict()
# create an instance of InspectorSettingsConfig from a dict
inspector_settings_config_from_dict = InspectorSettingsConfig.from_dict(inspector_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


