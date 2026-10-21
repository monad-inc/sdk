# KeyFilterFilterVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | [**KeyFilterKeyFilterMode**](KeyFilterKeyFilterMode.md) |  | 
**operator** | [**KeyFilterKeyFilterOperator**](KeyFilterKeyFilterOperator.md) |  | 
**value** | **str** |  | 

## Example

```python
from monad.models.key_filter_filter_variant import KeyFilterFilterVariant

# TODO update the JSON string below
json = "{}"
# create an instance of KeyFilterFilterVariant from a JSON string
key_filter_filter_variant_instance = KeyFilterFilterVariant.from_json(json)
# print the JSON string representation of the object
print(KeyFilterFilterVariant.to_json())

# convert the object into a dict
key_filter_filter_variant_dict = key_filter_filter_variant_instance.to_dict()
# create an instance of KeyFilterFilterVariant from a dict
key_filter_filter_variant_from_dict = KeyFilterFilterVariant.from_dict(key_filter_filter_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


