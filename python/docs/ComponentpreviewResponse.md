# ComponentpreviewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blast_radius** | [**BlastradiusBlastRadius**](BlastradiusBlastRadius.md) |  | [optional] 
**changed** | **bool** |  | [optional] 

## Example

```python
from monad.models.componentpreview_response import ComponentpreviewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentpreviewResponse from a JSON string
componentpreview_response_instance = ComponentpreviewResponse.from_json(json)
# print the JSON string representation of the object
print(ComponentpreviewResponse.to_json())

# convert the object into a dict
componentpreview_response_dict = componentpreview_response_instance.to_dict()
# create an instance of ComponentpreviewResponse from a dict
componentpreview_response_from_dict = ComponentpreviewResponse.from_dict(componentpreview_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


