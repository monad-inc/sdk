# HttpSettingsConfig

HTTP Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | The full URL of the HTTP endpoint to send data to. Must include the scheme (http or https). | [optional] 
**headers** | **Dict[str, str]** | Non secret headers | [optional] 
**max_batch_data_size** | **int** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. | [optional] 
**max_batch_record_count** | **int** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. | [optional] 
**method** | **str** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). | [optional] 
**payload_structure** | **str** | Determines how the payload is structured. &#39;single&#39; sends each record as a separate request, &#39;array&#39; sends multiple records as an array, &#39;wrapped&#39; sends multiple records within a wrapper object. | [optional] 
**rate_limit** | **int** | Maximum number of requests per second to send to the endpoint. | [optional] 
**tls_skip_verify** | **bool** | Skip TLS verification. | [optional] 
**wrapper_key** | **str** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. | [optional] 

## Example

```python
from monad.models.http_settings_config import HttpSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HttpSettingsConfig from a JSON string
http_settings_config_instance = HttpSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(HttpSettingsConfig.to_json())

# convert the object into a dict
http_settings_config_dict = http_settings_config_instance.to_dict()
# create an instance of HttpSettingsConfig from a dict
http_settings_config_from_dict = HttpSettingsConfig.from_dict(http_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


