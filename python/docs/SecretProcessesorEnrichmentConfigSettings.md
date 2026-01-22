# SecretProcessesorEnrichmentConfigSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_path** | **str** | DestinationPath is the path where Geolocus results will be added to each record | [optional] 
**error_on_rate_limit** | **bool** | ErrorOnRateLimit determines if rate limiting should cause an error (true) or return custom response (false) | [optional] 
**ip_address_path** | **str** | IPAddressPath is the path to a field containing an IP address to look up | [optional] 
**no_match_response** | **str** | NoMatchResponse is the value to add to the record when no match is found | [optional] 
**rate_limit_response** | **str** | RateLimitResponse is the value to add when rate limited | [optional] 
**destination_key** | **str** | DestinationKey is the path where the result will be stored in the record | [optional] 
**error_on_missing_key** | **bool** | ErrorOnMissingKey If true, throw an error when key is not found in the KV store | [optional] 
**join_path** | **str** | JoinPath is the path to a field whose values will be used as the lookup keys | [optional] 
**kv_lookup_output_id** | **str** | KVLookupOutputID is the id of the KV lookup output to join with | [optional] 

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


