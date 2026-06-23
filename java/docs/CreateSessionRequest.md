

# CreateSessionRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**organizationId** | **String** | OrganizationID, when set, pins the token to that single org via the &#x60;scoped_org&#x60; claim. Omit to inherit the parent key&#39;s org access. Not verified at mint time — the org-access middleware returns 403 at request time if the parent key has no role in it. |  [optional] |
|**ttlSeconds** | **Integer** | TTLSeconds is the requested session lifetime in seconds. Defaults to 1800 (30 min). Clamped to [300, 3600] (5 min – 1 hr); a value that would outlive the parent API key is rejected with 400. |  [optional] |



