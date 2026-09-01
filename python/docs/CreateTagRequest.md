# CreateTagRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | Color is an optional hex color (e.g. \&quot;#1a2b3c\&quot;). | [optional] 
**description** | **str** | Description is an optional free-text description. | [optional] 
**name** | **str** | Name of the tag: lowercase letters, numbers, hyphens, underscores; &lt;&#x3D;128 chars. | [optional] 

## Example

```python
from monad.models.create_tag_request import CreateTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTagRequest from a JSON string
create_tag_request_instance = CreateTagRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTagRequest.to_json())

# convert the object into a dict
create_tag_request_dict = create_tag_request_instance.to_dict()
# create an instance of CreateTagRequest from a dict
create_tag_request_from_dict = CreateTagRequest.from_dict(create_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


