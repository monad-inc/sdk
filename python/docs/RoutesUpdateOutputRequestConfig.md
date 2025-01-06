# RoutesUpdateOutputRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | **Dict[str, object]** |  | [optional] 
**settings** | **Dict[str, object]** |  | [optional] 

## Example

```python
from monad.models.routes_update_output_request_config import RoutesUpdateOutputRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdateOutputRequestConfig from a JSON string
routes_update_output_request_config_instance = RoutesUpdateOutputRequestConfig.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdateOutputRequestConfig.to_json())

# convert the object into a dict
routes_update_output_request_config_dict = routes_update_output_request_config_instance.to_dict()
# create an instance of RoutesUpdateOutputRequestConfig from a dict
routes_update_output_request_config_from_dict = RoutesUpdateOutputRequestConfig.from_dict(routes_update_output_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


