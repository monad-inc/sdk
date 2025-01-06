# RoutesV2InputConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | [**RoutesV2InputConfigSecrets**](RoutesV2InputConfigSecrets.md) |  | [optional] 
**settings** | [**RoutesV2InputConfigSettings**](RoutesV2InputConfigSettings.md) |  | [optional] 

## Example

```python
from monad.models.routes_v2_input_config import RoutesV2InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2InputConfig from a JSON string
routes_v2_input_config_instance = RoutesV2InputConfig.from_json(json)
# print the JSON string representation of the object
print(RoutesV2InputConfig.to_json())

# convert the object into a dict
routes_v2_input_config_dict = routes_v2_input_config_instance.to_dict()
# create an instance of RoutesV2InputConfig from a dict
routes_v2_input_config_from_dict = RoutesV2InputConfig.from_dict(routes_v2_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


