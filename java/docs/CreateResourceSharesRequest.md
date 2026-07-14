

# CreateResourceSharesRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**allCurrentChildren** | **Boolean** | Share with every current direct child (future children excluded). |  [optional] |
|**revokeAllNotInUse** | **Boolean** | Revoke every current share the target org is not using, leaving in-use shares in place (returned in skipped_in_use). Unlike revoke_organization_ids this never 409s on an in-use child — it skips it. |  [optional] |
|**revokeOrganizationIds** | **List&lt;String&gt;** | Target organization ids whose share of this resource should be revoked. |  [optional] |
|**shareOrganizationIds** | **List&lt;String&gt;** | Explicit direct-child organizations to share with. |  [optional] |
|**shareWithAllNewChildren** | **Boolean** | Toggle auto-sharing with new direct children: omit to leave unchanged, true to enable, false to disable. |  [optional] |



