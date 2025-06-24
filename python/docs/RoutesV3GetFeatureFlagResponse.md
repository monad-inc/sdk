# RoutesV3GetFeatureFlagResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**List[FlagsmithFlag]**](FlagsmithFlag.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_get_feature_flag_response import RoutesV3GetFeatureFlagResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3GetFeatureFlagResponse from a JSON string
routes_v3_get_feature_flag_response_instance = RoutesV3GetFeatureFlagResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3GetFeatureFlagResponse.to_json())

# convert the object into a dict
routes_v3_get_feature_flag_response_dict = routes_v3_get_feature_flag_response_instance.to_dict()
# create an instance of RoutesV3GetFeatureFlagResponse from a dict
routes_v3_get_feature_flag_response_from_dict = RoutesV3GetFeatureFlagResponse.from_dict(routes_v3_get_feature_flag_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


