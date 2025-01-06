# RoutesV2OrganizationOverview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **int** |  | 
**egress** | [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**healthy** | **int** |  | 
**ingress** | [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**unhealthy** | **int** |  | 

## Example

```python
from monad.models.routes_v2_organization_overview import RoutesV2OrganizationOverview

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2OrganizationOverview from a JSON string
routes_v2_organization_overview_instance = RoutesV2OrganizationOverview.from_json(json)
# print the JSON string representation of the object
print(RoutesV2OrganizationOverview.to_json())

# convert the object into a dict
routes_v2_organization_overview_dict = routes_v2_organization_overview_instance.to_dict()
# create an instance of RoutesV2OrganizationOverview from a dict
routes_v2_organization_overview_from_dict = RoutesV2OrganizationOverview.from_dict(routes_v2_organization_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


