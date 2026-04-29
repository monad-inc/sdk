# EnrichmentSandboxRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**record** | **List[int]** |  | [optional] 
**type_id** | **str** |  | [optional] 
**use_mocked_data** | **bool** |  | [optional] 

## Example

```python
from monad.models.enrichment_sandbox_request import EnrichmentSandboxRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnrichmentSandboxRequest from a JSON string
enrichment_sandbox_request_instance = EnrichmentSandboxRequest.from_json(json)
# print the JSON string representation of the object
print(EnrichmentSandboxRequest.to_json())

# convert the object into a dict
enrichment_sandbox_request_dict = enrichment_sandbox_request_instance.to_dict()
# create an instance of EnrichmentSandboxRequest from a dict
enrichment_sandbox_request_from_dict = EnrichmentSandboxRequest.from_dict(enrichment_sandbox_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


