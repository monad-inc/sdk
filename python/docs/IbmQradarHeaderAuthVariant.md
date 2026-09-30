# IbmQradarHeaderAuthVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_name** | **str** | Header name to send (e.g. &#39;Authorization&#39; or &#39;X-Api-Key&#39;). | 
**header_value** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.ibm_qradar_header_auth_variant import IbmQradarHeaderAuthVariant

# TODO update the JSON string below
json = "{}"
# create an instance of IbmQradarHeaderAuthVariant from a JSON string
ibm_qradar_header_auth_variant_instance = IbmQradarHeaderAuthVariant.from_json(json)
# print the JSON string representation of the object
print(IbmQradarHeaderAuthVariant.to_json())

# convert the object into a dict
ibm_qradar_header_auth_variant_dict = ibm_qradar_header_auth_variant_instance.to_dict()
# create an instance of IbmQradarHeaderAuthVariant from a dict
ibm_qradar_header_auth_variant_from_dict = IbmQradarHeaderAuthVariant.from_dict(ibm_qradar_header_auth_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


