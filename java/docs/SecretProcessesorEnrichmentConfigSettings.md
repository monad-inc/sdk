

# SecretProcessesorEnrichmentConfigSettings


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**destinationKey** | **String** | DestinationKey the path where the result will be stored in the record. Use &#39;.&#39; for the root object, &#39;field.subfield&#39; for nested properties, &#39;array[0]&#39; for array elements, or combined paths like &#39;users[0].name&#39;. |  [optional] |
|**errorOnMissingKey** | **Boolean** | ErrorOnMissingKey if true, will throw an error if the key is not found in the KV lookup output |  [optional] |
|**joinKey** | **String** | JoinKey is the key in the record whose value will be used to join with the KV lookup output |  [optional] |
|**kvLookupOutputId** | **String** | KVLookupOutputID is the ID of the KV lookup output to join with |  [optional] |



