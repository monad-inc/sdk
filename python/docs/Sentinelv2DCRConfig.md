# Sentinelv2DCRConfig

How the destination DCR is provided: a single manual DCR, or a Monad-managed pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed** | [**Sentinelv2ManagedDCRVariant**](Sentinelv2ManagedDCRVariant.md) |  | [optional] 
**manual** | [**Sentinelv2ManualDCRVariant**](Sentinelv2ManualDCRVariant.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.sentinelv2_dcr_config import Sentinelv2DCRConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Sentinelv2DCRConfig from a JSON string
sentinelv2_dcr_config_instance = Sentinelv2DCRConfig.from_json(json)
# print the JSON string representation of the object
print(Sentinelv2DCRConfig.to_json())

# convert the object into a dict
sentinelv2_dcr_config_dict = sentinelv2_dcr_config_instance.to_dict()
# create an instance of Sentinelv2DCRConfig from a dict
sentinelv2_dcr_config_from_dict = Sentinelv2DCRConfig.from_dict(sentinelv2_dcr_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


