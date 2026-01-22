

# KvLookupSettingsConfig

KVLookup enrichment settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**destinationKey** | **String** | DestinationKey is the path where the result will be stored in the record |  [optional] |
|**errorOnMissingKey** | **Boolean** | ErrorOnMissingKey If true, throw an error when key is not found in the KV store |  [optional] |
|**joinPath** | **String** | JoinPath is the path to a field whose values will be used as the lookup keys |  [optional] |
|**kvLookupOutputId** | **String** | KVLookupOutputID is the id of the KV lookup output to join with |  [optional] |
|**noMatchResponse** | **String** | NoMatchResponse is the value to add to the record when no match is found |  [optional] |



