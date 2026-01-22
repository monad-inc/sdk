# RoutesV3FieldUpdation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_reason** | **str** |  | [optional] 
**field_path** | **str** |  | [optional] 
**impact_assessment** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_field_updation import RoutesV3FieldUpdation

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3FieldUpdation from a JSON string
routes_v3_field_updation_instance = RoutesV3FieldUpdation.from_json(json)
# print the JSON string representation of the object
print(RoutesV3FieldUpdation.to_json())

# convert the object into a dict
routes_v3_field_updation_dict = routes_v3_field_updation_instance.to_dict()
# create an instance of RoutesV3FieldUpdation from a dict
routes_v3_field_updation_from_dict = RoutesV3FieldUpdation.from_dict(routes_v3_field_updation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


