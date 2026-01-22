

# CloudConfigurationFindingsSettingsConfig

Wiz cloud configuration findings settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**endpointUrl** | **String** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-configuration-findings&#39;. |  [optional] |
|**result** | **List&lt;String&gt;** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. |  [optional] |
|**severity** | **List&lt;String&gt;** | Severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. |  [optional] |
|**status** | **List&lt;String&gt;** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



