# RoutesV3TransformRecommendationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**optimizer_type** | **str** |  | [optional] 
**security_data** | **List[int]** |  | [optional] 

## Example

```python
from monad.models.routes_v3_transform_recommendation_request import RoutesV3TransformRecommendationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3TransformRecommendationRequest from a JSON string
routes_v3_transform_recommendation_request_instance = RoutesV3TransformRecommendationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3TransformRecommendationRequest.to_json())

# convert the object into a dict
routes_v3_transform_recommendation_request_dict = routes_v3_transform_recommendation_request_instance.to_dict()
# create an instance of RoutesV3TransformRecommendationRequest from a dict
routes_v3_transform_recommendation_request_from_dict = RoutesV3TransformRecommendationRequest.from_dict(routes_v3_transform_recommendation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


