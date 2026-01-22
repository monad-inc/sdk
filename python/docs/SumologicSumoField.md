# SumologicSumoField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** | Name of the field to reference. | [optional] 
**field_value** | **str** | Value of the field to reference. | [optional] 

## Example

```python
from monad.models.sumologic_sumo_field import SumologicSumoField

# TODO update the JSON string below
json = "{}"
# create an instance of SumologicSumoField from a JSON string
sumologic_sumo_field_instance = SumologicSumoField.from_json(json)
# print the JSON string representation of the object
print(SumologicSumoField.to_json())

# convert the object into a dict
sumologic_sumo_field_dict = sumologic_sumo_field_instance.to_dict()
# create an instance of SumologicSumoField from a dict
sumologic_sumo_field_from_dict = SumologicSumoField.from_dict(sumologic_sumo_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


