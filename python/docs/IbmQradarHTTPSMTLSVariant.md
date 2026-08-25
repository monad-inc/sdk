# IbmQradarHTTPSMTLSVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_certificate** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**insecure_skip_verify** | **bool** |  | [optional] 

## Example

```python
from monad.models.ibm_qradar_httpsmtls_variant import IbmQradarHTTPSMTLSVariant

# TODO update the JSON string below
json = "{}"
# create an instance of IbmQradarHTTPSMTLSVariant from a JSON string
ibm_qradar_httpsmtls_variant_instance = IbmQradarHTTPSMTLSVariant.from_json(json)
# print the JSON string representation of the object
print(IbmQradarHTTPSMTLSVariant.to_json())

# convert the object into a dict
ibm_qradar_httpsmtls_variant_dict = ibm_qradar_httpsmtls_variant_instance.to_dict()
# create an instance of IbmQradarHTTPSMTLSVariant from a dict
ibm_qradar_httpsmtls_variant_from_dict = IbmQradarHTTPSMTLSVariant.from_dict(ibm_qradar_httpsmtls_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


