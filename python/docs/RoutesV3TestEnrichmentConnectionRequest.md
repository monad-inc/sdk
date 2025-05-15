# RoutesV3TestEnrichmentConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_test_enrichment_connection_request import RoutesV3TestEnrichmentConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3TestEnrichmentConnectionRequest from a JSON string
routes_v3_test_enrichment_connection_request_instance = RoutesV3TestEnrichmentConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3TestEnrichmentConnectionRequest.to_json())

# convert the object into a dict
routes_v3_test_enrichment_connection_request_dict = routes_v3_test_enrichment_connection_request_instance.to_dict()
# create an instance of RoutesV3TestEnrichmentConnectionRequest from a dict
routes_v3_test_enrichment_connection_request_from_dict = RoutesV3TestEnrichmentConnectionRequest.from_dict(routes_v3_test_enrichment_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


