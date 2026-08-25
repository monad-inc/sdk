# IbmQradarSettingsConfig

IBM QRadar Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | [**IbmQradarAuthConfig**](IbmQradarAuthConfig.md) |  | [optional] 
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**communication** | [**IbmQradarCommunicationConfig**](IbmQradarCommunicationConfig.md) |  | [optional] 
**event_format** | [**IbmQradarEventFormatConfig**](IbmQradarEventFormatConfig.md) |  | [optional] 
**host** | **str** | Hostname or IP of the QRadar HTTP Receiver log source. Do not include a scheme or a port here. | 
**port** | **int** | TCP port the HTTP Receiver log source listens on (configured on the QRadar log source). | 

## Example

```python
from monad.models.ibm_qradar_settings_config import IbmQradarSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IbmQradarSettingsConfig from a JSON string
ibm_qradar_settings_config_instance = IbmQradarSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(IbmQradarSettingsConfig.to_json())

# convert the object into a dict
ibm_qradar_settings_config_dict = ibm_qradar_settings_config_instance.to_dict()
# create an instance of IbmQradarSettingsConfig from a dict
ibm_qradar_settings_config_from_dict = IbmQradarSettingsConfig.from_dict(ibm_qradar_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


