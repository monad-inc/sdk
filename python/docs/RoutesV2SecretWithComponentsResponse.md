# RoutesV2SecretWithComponentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**enrichments** | [**List[ModelsComponentReference]**](ModelsComponentReference.md) |  | [optional] 
**id** | **str** |  | [optional] 
**inputs** | [**List[ModelsComponentReference]**](ModelsComponentReference.md) |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**outputs** | [**List[ModelsComponentReference]**](ModelsComponentReference.md) |  | [optional] 
**share_details** | [**ModelsShareDetails**](ModelsShareDetails.md) |  | [optional] 
**transforms** | [**List[ModelsComponentReference]**](ModelsComponentReference.md) |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_secret_with_components_response import RoutesV2SecretWithComponentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2SecretWithComponentsResponse from a JSON string
routes_v2_secret_with_components_response_instance = RoutesV2SecretWithComponentsResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2SecretWithComponentsResponse.to_json())

# convert the object into a dict
routes_v2_secret_with_components_response_dict = routes_v2_secret_with_components_response_instance.to_dict()
# create an instance of RoutesV2SecretWithComponentsResponse from a dict
routes_v2_secret_with_components_response_from_dict = RoutesV2SecretWithComponentsResponse.from_dict(routes_v2_secret_with_components_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


