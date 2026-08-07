# RegenerateAPIKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_time** | **str** | Omitted (nil) keeps the key&#39;s existing expiration — rotating the secret does not extend the key&#39;s term on its own. | [optional] 

## Example

```python
from monad.models.regenerate_api_key_request import RegenerateAPIKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateAPIKeyRequest from a JSON string
regenerate_api_key_request_instance = RegenerateAPIKeyRequest.from_json(json)
# print the JSON string representation of the object
print(RegenerateAPIKeyRequest.to_json())

# convert the object into a dict
regenerate_api_key_request_dict = regenerate_api_key_request_instance.to_dict()
# create an instance of RegenerateAPIKeyRequest from a dict
regenerate_api_key_request_from_dict = RegenerateAPIKeyRequest.from_dict(regenerate_api_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


