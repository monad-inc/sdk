

# SecretProcessesorEnrichmentConfigSettings


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**destinationPath** | **String** | DestinationPath is the path where Geolocus results will be added to each record |  [optional] |
|**errorOnRateLimit** | **Boolean** | ErrorOnRateLimit determines if rate limiting should cause an error (true) or return custom response (false) |  [optional] |
|**ipAddressPath** | **String** | IPAddressPath is the path to a field containing an IP address to look up |  [optional] |
|**noMatchResponse** | **String** | NoMatchResponse is the value to add to the record when no match is found |  [optional] |
|**rateLimitResponse** | **String** | RateLimitResponse is the value to add when rate limited |  [optional] |
|**destinationKey** | **String** | DestinationKey is the path where the result will be stored in the record |  [optional] |
|**errorOnMissingKey** | **Boolean** | ErrorOnMissingKey If true, throw an error when key is not found in the KV store |  [optional] |
|**joinPath** | **String** | JoinPath is the path to a field whose values will be used as the lookup keys |  [optional] |
|**kvLookupOutputId** | **String** | KVLookupOutputID is the id of the KV lookup output to join with |  [optional] |



