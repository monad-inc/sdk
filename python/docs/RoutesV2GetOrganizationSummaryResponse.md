# RoutesV2GetOrganizationSummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **str** |  | 
**pipelines** | [**List[RoutesV2PipelineStatus]**](RoutesV2PipelineStatus.md) |  | [optional] 
**summary** | [**RoutesV2OrganizationOverview**](RoutesV2OrganizationOverview.md) |  | [optional] 

## Example

```python
from monad.models.routes_v2_get_organization_summary_response import RoutesV2GetOrganizationSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2GetOrganizationSummaryResponse from a JSON string
routes_v2_get_organization_summary_response_instance = RoutesV2GetOrganizationSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2GetOrganizationSummaryResponse.to_json())

# convert the object into a dict
routes_v2_get_organization_summary_response_dict = routes_v2_get_organization_summary_response_instance.to_dict()
# create an instance of RoutesV2GetOrganizationSummaryResponse from a dict
routes_v2_get_organization_summary_response_from_dict = RoutesV2GetOrganizationSummaryResponse.from_dict(routes_v2_get_organization_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


