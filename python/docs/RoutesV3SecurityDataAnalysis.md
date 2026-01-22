# RoutesV3SecurityDataAnalysis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_msg** | **str** |  | [optional] 
**summary** | [**RoutesV3Summary**](RoutesV3Summary.md) |  | [optional] 
**transform_operations_with_rationale** | [**List[RoutesV3TransformOperationWithRationale]**](RoutesV3TransformOperationWithRationale.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_security_data_analysis import RoutesV3SecurityDataAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3SecurityDataAnalysis from a JSON string
routes_v3_security_data_analysis_instance = RoutesV3SecurityDataAnalysis.from_json(json)
# print the JSON string representation of the object
print(RoutesV3SecurityDataAnalysis.to_json())

# convert the object into a dict
routes_v3_security_data_analysis_dict = routes_v3_security_data_analysis_instance.to_dict()
# create an instance of RoutesV3SecurityDataAnalysis from a dict
routes_v3_security_data_analysis_from_dict = RoutesV3SecurityDataAnalysis.from_dict(routes_v3_security_data_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


