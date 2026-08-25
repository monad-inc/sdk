# IbmQradarCommunicationConfig

Transport mode: plain HTTP, HTTPS, or HTTPS with mutual TLS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**https** | [**IbmQradarHTTPSVariant**](IbmQradarHTTPSVariant.md) |  | [optional] 
**https_mtls** | [**IbmQradarHTTPSMTLSVariant**](IbmQradarHTTPSMTLSVariant.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.ibm_qradar_communication_config import IbmQradarCommunicationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IbmQradarCommunicationConfig from a JSON string
ibm_qradar_communication_config_instance = IbmQradarCommunicationConfig.from_json(json)
# print the JSON string representation of the object
print(IbmQradarCommunicationConfig.to_json())

# convert the object into a dict
ibm_qradar_communication_config_dict = ibm_qradar_communication_config_instance.to_dict()
# create an instance of IbmQradarCommunicationConfig from a dict
ibm_qradar_communication_config_from_dict = IbmQradarCommunicationConfig.from_dict(ibm_qradar_communication_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


