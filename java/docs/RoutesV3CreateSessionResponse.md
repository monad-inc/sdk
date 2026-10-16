

# RoutesV3CreateSessionResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**expiresAt** | **String** | ExpiresAt is the token expiry as an RFC 3339 timestamp. |  [optional] |
|**sessionToken** | **String** | SessionToken is the minted short-lived JWT. Send it as \&quot;Authorization: ApiKey &lt;token&gt;\&quot;, like the parent key. |  [optional] |
|**ttlSeconds** | **Integer** | TTLSeconds is the effective lifetime applied after clamping. |  [optional] |



