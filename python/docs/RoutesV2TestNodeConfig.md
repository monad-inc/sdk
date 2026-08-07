# RoutesV2TestNodeConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | **Dict[str, Optional[object]]** |  | [optional] 
**settings** | **Dict[str, Optional[object]]** |  | [optional] 

## Example

```python
from monad.models.routes_v2_test_node_config import RoutesV2TestNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2TestNodeConfig from a JSON string
routes_v2_test_node_config_instance = RoutesV2TestNodeConfig.from_json(json)
# print the JSON string representation of the object
print(RoutesV2TestNodeConfig.to_json())

# convert the object into a dict
routes_v2_test_node_config_dict = routes_v2_test_node_config_instance.to_dict()
# create an instance of RoutesV2TestNodeConfig from a dict
routes_v2_test_node_config_from_dict = RoutesV2TestNodeConfig.from_dict(routes_v2_test_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


