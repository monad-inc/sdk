# TestEnrichmentConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.test_enrichment_connection_request import TestEnrichmentConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestEnrichmentConnectionRequest from a JSON string
test_enrichment_connection_request_instance = TestEnrichmentConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(TestEnrichmentConnectionRequest.to_json())

# convert the object into a dict
test_enrichment_connection_request_dict = test_enrichment_connection_request_instance.to_dict()
# create an instance of TestEnrichmentConnectionRequest from a dict
test_enrichment_connection_request_from_dict = TestEnrichmentConnectionRequest.from_dict(test_enrichment_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


