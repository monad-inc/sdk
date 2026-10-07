# IbmQradarBasicAuthVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**ModelsSecret**](ModelsSecret.md) |  | 
**username** | **str** | Username for HTTP Basic authentication. | 

## Example

```python
from monad.models.ibm_qradar_basic_auth_variant import IbmQradarBasicAuthVariant

# TODO update the JSON string below
json = "{}"
# create an instance of IbmQradarBasicAuthVariant from a JSON string
ibm_qradar_basic_auth_variant_instance = IbmQradarBasicAuthVariant.from_json(json)
# print the JSON string representation of the object
print(IbmQradarBasicAuthVariant.to_json())

# convert the object into a dict
ibm_qradar_basic_auth_variant_dict = ibm_qradar_basic_auth_variant_instance.to_dict()
# create an instance of IbmQradarBasicAuthVariant from a dict
ibm_qradar_basic_auth_variant_from_dict = IbmQradarBasicAuthVariant.from_dict(ibm_qradar_basic_auth_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


