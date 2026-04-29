# CreateTransformRecommendationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**optimizer_type** | **str** |  | [optional] 
**security_data** | **List[int]** |  | [optional] 

## Example

```python
from monad.models.create_transform_recommendation_request import CreateTransformRecommendationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTransformRecommendationRequest from a JSON string
create_transform_recommendation_request_instance = CreateTransformRecommendationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTransformRecommendationRequest.to_json())

# convert the object into a dict
create_transform_recommendation_request_dict = create_transform_recommendation_request_instance.to_dict()
# create an instance of CreateTransformRecommendationRequest from a dict
create_transform_recommendation_request_from_dict = CreateTransformRecommendationRequest.from_dict(create_transform_recommendation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


