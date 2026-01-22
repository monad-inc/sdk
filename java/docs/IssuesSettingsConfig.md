

# IssuesSettingsConfig

Wiz Issues settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, A Wiz report is generated on the first sync. All syncs thereafter will be of incremental data. |  [optional] |
|**controlIds** | **List&lt;String&gt;** | @Description Filter Issues created by specific control IDs |  [optional] |
|**hasNote** | **String** | @Description Filter Issues with or without a note |  [optional] |
|**hasRemediation** | **String** | @Description Filter Issues with or without remediation |  [optional] |
|**hasServiceTicket** | **String** | @Description Filter Issues with or without related service ticket |  [optional] |
|**issueIds** | **List&lt;String&gt;** | @Description Filter only Issues that match these specific IDs |  [optional] |
|**issueTypes** | [**List&lt;IssueTypesEnum&gt;**](#List&lt;IssueTypesEnum&gt;) | @Description Filter by Issue type |  [optional] |
|**projectIds** | **List&lt;String&gt;** | @Description Filter Issues associated with specific project IDs |  [optional] |
|**relatedEntityId** | **String** | @Description Filter by related entity ids |  [optional] |
|**resolutionReasons** | [**List&lt;ResolutionReasonsEnum&gt;**](#List&lt;ResolutionReasonsEnum&gt;) | @Description Filter Issues by resolution reason |  [optional] |
|**riskEqualsAll** | **List&lt;String&gt;** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present |  [optional] |
|**riskEqualsAny** | **List&lt;String&gt;** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name |  [optional] |
|**searchQuery** | **String** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found |  [optional] |
|**securityScan** | **String** | @Description Filter by security scan source |  [optional] |
|**severities** | [**List&lt;SeveritiesEnum&gt;**](#List&lt;SeveritiesEnum&gt;) | @Description Filter Issues according to Control severity |  [optional] |
|**stackLayers** | [**List&lt;StackLayersEnum&gt;**](#List&lt;StackLayersEnum&gt;) | @Description Filter Issues from specific stack layers |  [optional] |
|**status** | [**List&lt;StatusEnum&gt;**](#List&lt;StatusEnum&gt;) | @Description Filter by Issue handling status @Description Default: OPEN |  [optional] |
|**tenantDataCenter** | **String** | DataCenter represents the tenant&#39;s data center location @Description Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; @Description Find your tenant data center on the Tenant Info page in Wiz, or request it from your Wiz customer contact |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



## Enum: List&lt;IssueTypesEnum&gt;

| Name | Value |
|---- | -----|
| TOXIC_COMBINATION | &quot;TOXIC_COMBINATION&quot; |
| THREAT_DETECTION | &quot;THREAT_DETECTION&quot; |
| CLOUD_CONFIGURATION | &quot;CLOUD_CONFIGURATION&quot; |



## Enum: List&lt;ResolutionReasonsEnum&gt;

| Name | Value |
|---- | -----|
| CONTROL_CHANGED | &quot;CONTROL_CHANGED&quot; |
| CONTROL_DISABLED | &quot;CONTROL_DISABLED&quot; |
| CONTROL_DELETED | &quot;CONTROL_DELETED&quot; |
| EXCEPTION | &quot;EXCEPTION&quot; |
| FALSE_POSITIVE | &quot;FALSE_POSITIVE&quot; |
| WONT_FIX | &quot;WONT_FIX&quot; |
| OBJECT_DELETED | &quot;OBJECT_DELETED&quot; |
| ISSUE_FIXED | &quot;ISSUE_FIXED&quot; |



## Enum: List&lt;SeveritiesEnum&gt;

| Name | Value |
|---- | -----|
| INFORMATIONAL | &quot;INFORMATIONAL&quot; |
| LOW | &quot;LOW&quot; |
| MEDIUM | &quot;MEDIUM&quot; |
| HIGH | &quot;HIGH&quot; |
| CRITICAL | &quot;CRITICAL&quot; |



## Enum: List&lt;StackLayersEnum&gt;

| Name | Value |
|---- | -----|
| APPLICATION_AND_DATA | &quot;APPLICATION_AND_DATA&quot; |
| CI_CD | &quot;CI_CD&quot; |
| SECURITY_AND_IDENTITY | &quot;SECURITY_AND_IDENTITY&quot; |
| COMPUTE_PLATFORMS | &quot;COMPUTE_PLATFORMS&quot; |
| CODE | &quot;CODE&quot; |
| CLOUD_ENTITLEMENTS | &quot;CLOUD_ENTITLEMENTS&quot; |
| DATA_STORES | &quot;DATA_STORES&quot; |



## Enum: List&lt;StatusEnum&gt;

| Name | Value |
|---- | -----|
| OPEN | &quot;OPEN&quot; |
| IN_PROGRESS | &quot;IN_PROGRESS&quot; |
| RESOLVED | &quot;RESOLVED&quot; |
| REJECTED | &quot;REJECTED&quot; |



