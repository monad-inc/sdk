# IbmQradarHTTPSVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**insecure_skip_verify** | **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 

## Example

```python
from monad.models.ibm_qradar_https_variant import IbmQradarHTTPSVariant

# TODO update the JSON string below
json = "{}"
# create an instance of IbmQradarHTTPSVariant from a JSON string
ibm_qradar_https_variant_instance = IbmQradarHTTPSVariant.from_json(json)
# print the JSON string representation of the object
print(IbmQradarHTTPSVariant.to_json())

# convert the object into a dict
ibm_qradar_https_variant_dict = ibm_qradar_https_variant_instance.to_dict()
# create an instance of IbmQradarHTTPSVariant from a dict
ibm_qradar_https_variant_from_dict = IbmQradarHTTPSVariant.from_dict(ibm_qradar_https_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


