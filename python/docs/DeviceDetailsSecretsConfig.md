# DeviceDetailsSecretsConfig

CrowdStrike EDR device details secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the CrowdStrike API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the CrowdStrike API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.device_details_secrets_config import DeviceDetailsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceDetailsSecretsConfig from a JSON string
device_details_secrets_config_instance = DeviceDetailsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DeviceDetailsSecretsConfig.to_json())

# convert the object into a dict
device_details_secrets_config_dict = device_details_secrets_config_instance.to_dict()
# create an instance of DeviceDetailsSecretsConfig from a dict
device_details_secrets_config_from_dict = DeviceDetailsSecretsConfig.from_dict(device_details_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


