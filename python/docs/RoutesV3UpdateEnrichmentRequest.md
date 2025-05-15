# RoutesV3UpdateEnrichmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_update_enrichment_request import RoutesV3UpdateEnrichmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3UpdateEnrichmentRequest from a JSON string
routes_v3_update_enrichment_request_instance = RoutesV3UpdateEnrichmentRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3UpdateEnrichmentRequest.to_json())

# convert the object into a dict
routes_v3_update_enrichment_request_dict = routes_v3_update_enrichment_request_instance.to_dict()
# create an instance of RoutesV3UpdateEnrichmentRequest from a dict
routes_v3_update_enrichment_request_from_dict = RoutesV3UpdateEnrichmentRequest.from_dict(routes_v3_update_enrichment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


