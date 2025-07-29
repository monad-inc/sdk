# CloudConfigurationFindingsSettingsConfig

Wiz cloud configuration findings settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_url** | **str** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-configuration-findings&#39;. | [optional] 
**result** | **List[str]** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. | [optional] 
**severity** | **List[str]** | Severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. | [optional] 
**status** | **List[str]** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.cloud_configuration_findings_settings_config import CloudConfigurationFindingsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudConfigurationFindingsSettingsConfig from a JSON string
cloud_configuration_findings_settings_config_instance = CloudConfigurationFindingsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudConfigurationFindingsSettingsConfig.to_json())

# convert the object into a dict
cloud_configuration_findings_settings_config_dict = cloud_configuration_findings_settings_config_instance.to_dict()
# create an instance of CloudConfigurationFindingsSettingsConfig from a dict
cloud_configuration_findings_settings_config_from_dict = CloudConfigurationFindingsSettingsConfig.from_dict(cloud_configuration_findings_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


