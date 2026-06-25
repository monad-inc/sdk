

# ModelsAPIKey


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**expirationTime** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**jwtSigningKeyId** | **String** | JWTSigningKeyID is the jwt_signing_keys row that signed the key&#39;s current token. Re-stamped on rotation. Empty when signed via the legacy HS256 path (no signing-key row), or for keys created before this was recorded. |  [optional] |
|**name** | **String** |  |  [optional] |
|**organizationId** | **String** |  |  [optional] |
|**roleId** | **String** |  |  [optional] |
|**tokenVersion** | **Integer** | TokenVersion is the current generation of the key. It is embedded in minted JWTs as the &#x60;ver&#x60; claim and bumped on rotation to invalidate previously-issued tokens without changing the key&#39;s id. |  [optional] |
|**updatedAt** | **String** |  |  [optional] |



