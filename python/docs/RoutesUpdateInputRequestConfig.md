# RoutesUpdateInputRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | **Dict[str, object]** |  | [optional] 
**settings** | **Dict[str, object]** |  | [optional] 

## Example

```python
from monad.models.routes_update_input_request_config import RoutesUpdateInputRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdateInputRequestConfig from a JSON string
routes_update_input_request_config_instance = RoutesUpdateInputRequestConfig.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdateInputRequestConfig.to_json())

# convert the object into a dict
routes_update_input_request_config_dict = routes_update_input_request_config_instance.to_dict()
# create an instance of RoutesUpdateInputRequestConfig from a dict
routes_update_input_request_config_from_dict = RoutesUpdateInputRequestConfig.from_dict(routes_update_input_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


