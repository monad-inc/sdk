# AddAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to add to the record | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from monad.models.add_add import AddAdd

# TODO update the JSON string below
json = "{}"
# create an instance of AddAdd from a JSON string
add_add_instance = AddAdd.from_json(json)
# print the JSON string representation of the object
print(AddAdd.to_json())

# convert the object into a dict
add_add_dict = add_add_instance.to_dict()
# create an instance of AddAdd from a dict
add_add_from_dict = AddAdd.from_dict(add_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


