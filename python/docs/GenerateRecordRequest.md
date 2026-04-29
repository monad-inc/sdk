# GenerateRecordRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record_type** | **str** |  | [optional] 

## Example

```python
from monad.models.generate_record_request import GenerateRecordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateRecordRequest from a JSON string
generate_record_request_instance = GenerateRecordRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateRecordRequest.to_json())

# convert the object into a dict
generate_record_request_dict = generate_record_request_instance.to_dict()
# create an instance of GenerateRecordRequest from a dict
generate_record_request_from_dict = GenerateRecordRequest.from_dict(generate_record_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


