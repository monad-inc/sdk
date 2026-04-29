# CreateTransformRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**RoutesTransformConfig**](RoutesTransformConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.create_transform_request import CreateTransformRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTransformRequest from a JSON string
create_transform_request_instance = CreateTransformRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTransformRequest.to_json())

# convert the object into a dict
create_transform_request_dict = create_transform_request_instance.to_dict()
# create an instance of CreateTransformRequest from a dict
create_transform_request_from_dict = CreateTransformRequest.from_dict(create_transform_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


