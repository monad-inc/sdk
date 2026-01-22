

# CustomerEventDataSettingsConfig

Docusign Customer Event Data settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from in RFC3339 format. If not specified, a full sync of data upto now would be performed on the first sync (since the previous 7 days). You must specify a backfill time to query for data for a time before 7 days. All syncs thereafter will be incremental. |  [optional] |
|**environment** | **String** | Determines the URI {environment}.docusign.com |  [optional] |
|**userId** | **String** | User id of the Docusign admin |  [optional] |



