# IbmQradarEventFormatConfig

How events are framed in the request body. Must match the QRadar log source's Event Parsing Method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array** | **object** |  | [optional] 
**line** | **object** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.ibm_qradar_event_format_config import IbmQradarEventFormatConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IbmQradarEventFormatConfig from a JSON string
ibm_qradar_event_format_config_instance = IbmQradarEventFormatConfig.from_json(json)
# print the JSON string representation of the object
print(IbmQradarEventFormatConfig.to_json())

# convert the object into a dict
ibm_qradar_event_format_config_dict = ibm_qradar_event_format_config_instance.to_dict()
# create an instance of IbmQradarEventFormatConfig from a dict
ibm_qradar_event_format_config_from_dict = IbmQradarEventFormatConfig.from_dict(ibm_qradar_event_format_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


