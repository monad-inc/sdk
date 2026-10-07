# IbmQradarAuthConfig

Optional authentication for the HTTP Receiver. Leave unset for an unauthenticated log source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic** | [**IbmQradarBasicAuthVariant**](IbmQradarBasicAuthVariant.md) |  | [optional] 
**header** | [**IbmQradarHeaderAuthVariant**](IbmQradarHeaderAuthVariant.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.ibm_qradar_auth_config import IbmQradarAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IbmQradarAuthConfig from a JSON string
ibm_qradar_auth_config_instance = IbmQradarAuthConfig.from_json(json)
# print the JSON string representation of the object
print(IbmQradarAuthConfig.to_json())

# convert the object into a dict
ibm_qradar_auth_config_dict = ibm_qradar_auth_config_instance.to_dict()
# create an instance of IbmQradarAuthConfig from a dict
ibm_qradar_auth_config_from_dict = IbmQradarAuthConfig.from_dict(ibm_qradar_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


