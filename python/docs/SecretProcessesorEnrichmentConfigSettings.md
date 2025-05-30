# SecretProcessesorEnrichmentConfigSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_path** | **str** | DestinationPath is the path where the GreyNoise data will be stored | [optional] 
**error_on_rate_limit** | **bool** | ErrorOnRateLimit determines if rate limiting should cause an error (true) or return custom response (false) | [optional] 
**ip_field_path** | **str** | IPFieldPath is the path to the IP address field in the record | [optional] 
**no_match_response** | **str** | NoMatchResponse is the value to add when no match is found | [optional] 
**rate_limit_response** | **str** | RateLimitResponse is the value to add when rate limited | [optional] 

## Example

```python
from monad.models.secret_processesor_enrichment_config_settings import SecretProcessesorEnrichmentConfigSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProcessesorEnrichmentConfigSettings from a JSON string
secret_processesor_enrichment_config_settings_instance = SecretProcessesorEnrichmentConfigSettings.from_json(json)
# print the JSON string representation of the object
print(SecretProcessesorEnrichmentConfigSettings.to_json())

# convert the object into a dict
secret_processesor_enrichment_config_settings_dict = secret_processesor_enrichment_config_settings_instance.to_dict()
# create an instance of SecretProcessesorEnrichmentConfigSettings from a dict
secret_processesor_enrichment_config_settings_from_dict = SecretProcessesorEnrichmentConfigSettings.from_dict(secret_processesor_enrichment_config_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


