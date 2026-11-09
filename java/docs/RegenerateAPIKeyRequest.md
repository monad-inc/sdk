

# RegenerateAPIKeyRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**expirationTime** | **String** | Omitted (nil) keeps the key&#39;s existing expiration — rotating the secret does not extend the key&#39;s term on its own. |  [optional] |
|**previousTokenExpirationTime** | **String** | The previous token stays valid until this time. Omitted revokes it immediately. At most 90 days ahead, and not past the key&#39;s current or new expiration. |  [optional] |



