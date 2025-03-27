# FlattenallFlattenAll


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **str** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 | [optional] 

## Example

```python
from monad.models.flattenall_flatten_all import FlattenallFlattenAll

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenallFlattenAll from a JSON string
flattenall_flatten_all_instance = FlattenallFlattenAll.from_json(json)
# print the JSON string representation of the object
print(FlattenallFlattenAll.to_json())

# convert the object into a dict
flattenall_flatten_all_dict = flattenall_flatten_all_instance.to_dict()
# create an instance of FlattenallFlattenAll from a dict
flattenall_flatten_all_from_dict = FlattenallFlattenAll.from_dict(flattenall_flatten_all_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


