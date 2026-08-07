

# ModelsReference


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** |  |  [optional] |
|**name** | **String** | Name is the referenced resource&#39;s display name, filled at read time on component responses. Never persisted: writes rebuild references from request state (the name is display sugar and would go stale), and an empty name is omitted from the stored JSON. |  [optional] |
|**organizationId** | **String** |  |  [optional] |
|**shared** | **Boolean** | Shared reports that the referenced resource is owned by an org other than the component&#39;s owner — a directly-shared secret the component pulls in. Same read-time-only contract as Name: computed on responses, never persisted (omitted when false). |  [optional] |



