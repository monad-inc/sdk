# RoutesV3GetEnrichmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_of** | [**List[ModelsPipeline]**](ModelsPipeline.md) |  | [optional] 
**config** | [**ModelsEnrichmentConfig**](ModelsEnrichmentConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_get_enrichment_response import RoutesV3GetEnrichmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3GetEnrichmentResponse from a JSON string
routes_v3_get_enrichment_response_instance = RoutesV3GetEnrichmentResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3GetEnrichmentResponse.to_json())

# convert the object into a dict
routes_v3_get_enrichment_response_dict = routes_v3_get_enrichment_response_instance.to_dict()
# create an instance of RoutesV3GetEnrichmentResponse from a dict
routes_v3_get_enrichment_response_from_dict = RoutesV3GetEnrichmentResponse.from_dict(routes_v3_get_enrichment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


