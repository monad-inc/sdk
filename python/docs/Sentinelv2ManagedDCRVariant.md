# Sentinelv2ManagedDCRVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dcr_resource_id** | **str** | The full ARM resource ID of the customer&#39;s DCR, cloned per pod. e.g. /subscriptions/&lt;sub&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Insights/dataCollectionRules/&lt;name&gt; | 

## Example

```python
from monad.models.sentinelv2_managed_dcr_variant import Sentinelv2ManagedDCRVariant

# TODO update the JSON string below
json = "{}"
# create an instance of Sentinelv2ManagedDCRVariant from a JSON string
sentinelv2_managed_dcr_variant_instance = Sentinelv2ManagedDCRVariant.from_json(json)
# print the JSON string representation of the object
print(Sentinelv2ManagedDCRVariant.to_json())

# convert the object into a dict
sentinelv2_managed_dcr_variant_dict = sentinelv2_managed_dcr_variant_instance.to_dict()
# create an instance of Sentinelv2ManagedDCRVariant from a dict
sentinelv2_managed_dcr_variant_from_dict = Sentinelv2ManagedDCRVariant.from_dict(sentinelv2_managed_dcr_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


