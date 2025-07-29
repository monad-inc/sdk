# DetectSummariesSettingsConfig

CrowdStrike EDR detect summaries settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_type** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.detect_summaries_settings_config import DetectSummariesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DetectSummariesSettingsConfig from a JSON string
detect_summaries_settings_config_instance = DetectSummariesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DetectSummariesSettingsConfig.to_json())

# convert the object into a dict
detect_summaries_settings_config_dict = detect_summaries_settings_config_instance.to_dict()
# create an instance of DetectSummariesSettingsConfig from a dict
detect_summaries_settings_config_from_dict = DetectSummariesSettingsConfig.from_dict(detect_summaries_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


