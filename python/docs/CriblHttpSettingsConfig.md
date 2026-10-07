# CriblHttpSettingsConfig

Cribl HTTP Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingress_address** | **str** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. | [optional] 
**path** | **str** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. | [optional] 
**port** | **int** | The port you&#39;ve set your HTTP Source to listen on. This should be the port number where your Cribl HTTP Source is configured to receive data. | [optional] 

## Example

```python
from monad.models.cribl_http_settings_config import CriblHttpSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CriblHttpSettingsConfig from a JSON string
cribl_http_settings_config_instance = CriblHttpSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CriblHttpSettingsConfig.to_json())

# convert the object into a dict
cribl_http_settings_config_dict = cribl_http_settings_config_instance.to_dict()
# create an instance of CriblHttpSettingsConfig from a dict
cribl_http_settings_config_from_dict = CriblHttpSettingsConfig.from_dict(cribl_http_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


