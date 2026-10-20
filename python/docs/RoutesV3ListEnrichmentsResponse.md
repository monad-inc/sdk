# RoutesV3ListEnrichmentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrichments** | [**List[RoutesV3EnrichmentWithMetadata]**](RoutesV3EnrichmentWithMetadata.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_list_enrichments_response import RoutesV3ListEnrichmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3ListEnrichmentsResponse from a JSON string
routes_v3_list_enrichments_response_instance = RoutesV3ListEnrichmentsResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3ListEnrichmentsResponse.to_json())

# convert the object into a dict
routes_v3_list_enrichments_response_dict = routes_v3_list_enrichments_response_instance.to_dict()
# create an instance of RoutesV3ListEnrichmentsResponse from a dict
routes_v3_list_enrichments_response_from_dict = RoutesV3ListEnrichmentsResponse.from_dict(routes_v3_list_enrichments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


