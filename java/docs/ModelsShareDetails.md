

# ModelsShareDetails

ShareDetails is set when the enrichment is involved in org-to-org sharing.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**ownerOrganizationId** | **String** | OwnerOrganizationID is the org that owns the resource; set only when SharedWithMe. |  [optional] |
|**ownerOrganizationName** | **String** | OwnerOrganizationName is the owner org&#39;s friendly name, filled at read time alongside OwnerOrganizationID. Never persisted: friendly names are editable and a stored copy would go stale; omitted when unset. |  [optional] |
|**sharedWithChildren** | **Boolean** | SharedWithChildren is true when the requesting org owns the resource and has shared it out to at least one child org. |  [optional] |
|**sharedWithMe** | **Boolean** | SharedWithMe is true when the resource is shared to the requesting org by a parent org. |  [optional] |



