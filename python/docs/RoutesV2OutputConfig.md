# RoutesV2OutputConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | [**RoutesV2OutputConfigSecrets**](RoutesV2OutputConfigSecrets.md) |  | [optional] 
**settings** | [**RoutesV2OutputConfigSettings**](RoutesV2OutputConfigSettings.md) |  | [optional] 

## Example

```python
from monad.models.routes_v2_output_config import RoutesV2OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2OutputConfig from a JSON string
routes_v2_output_config_instance = RoutesV2OutputConfig.from_json(json)
# print the JSON string representation of the object
print(RoutesV2OutputConfig.to_json())

# convert the object into a dict
routes_v2_output_config_dict = routes_v2_output_config_instance.to_dict()
# create an instance of RoutesV2OutputConfig from a dict
routes_v2_output_config_from_dict = RoutesV2OutputConfig.from_dict(routes_v2_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


