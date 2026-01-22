# AddIdAddIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to add to the record with id value | [optional] 
**type** | **str** | The type of the identifier | [optional] 

## Example

```python
from monad.models.add_id_add_identifier import AddIdAddIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of AddIdAddIdentifier from a JSON string
add_id_add_identifier_instance = AddIdAddIdentifier.from_json(json)
# print the JSON string representation of the object
print(AddIdAddIdentifier.to_json())

# convert the object into a dict
add_id_add_identifier_dict = add_id_add_identifier_instance.to_dict()
# create an instance of AddIdAddIdentifier from a dict
add_id_add_identifier_from_dict = AddIdAddIdentifier.from_dict(add_id_add_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


