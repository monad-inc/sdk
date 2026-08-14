# BlastradiusFinding


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bad_value** | **object** |  | [optional] 
**code** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**severity** | [**BlastradiusSeverity**](BlastradiusSeverity.md) |  | [optional] 

## Example

```python
from monad.models.blastradius_finding import BlastradiusFinding

# TODO update the JSON string below
json = "{}"
# create an instance of BlastradiusFinding from a JSON string
blastradius_finding_instance = BlastradiusFinding.from_json(json)
# print the JSON string representation of the object
print(BlastradiusFinding.to_json())

# convert the object into a dict
blastradius_finding_dict = blastradius_finding_instance.to_dict()
# create an instance of BlastradiusFinding from a dict
blastradius_finding_from_dict = BlastradiusFinding.from_dict(blastradius_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


