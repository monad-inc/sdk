# XsiamSettingsConfig

Palo Alto XSIAM Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_insecure** | **bool** | Skip TLS verification. Not recommended outside local testing. | [optional] 
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**enable_compression** | **bool** | By default the connector gzips the request body and sends &#x60;Content-Encoding: gzip&#x60;. Set true to send uncompressed instead. This MUST match the HTTP Log Collector&#39;s Compression setting in the XSIAM UI. | [optional] 
**tenant_fqdn** | **str** | The XSIAM tenant API FQDN, hostname only (no scheme, no path). | 

## Example

```python
from monad.models.xsiam_settings_config import XsiamSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of XsiamSettingsConfig from a JSON string
xsiam_settings_config_instance = XsiamSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(XsiamSettingsConfig.to_json())

# convert the object into a dict
xsiam_settings_config_dict = xsiam_settings_config_instance.to_dict()
# create an instance of XsiamSettingsConfig from a dict
xsiam_settings_config_from_dict = XsiamSettingsConfig.from_dict(xsiam_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


