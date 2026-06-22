

# IssuesReportSettingsConfig

Wiz Issues settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**controlIds** | **List&lt;String&gt;** | @Description Filter Issues created by specific control IDs |  [optional] |
|**cron** | **String** | Cron string for scheduling the ingest of your input |  [optional] |
|**hasNote** | **WizNoteFilter** |  |  [optional] |
|**hasRemediation** | **WizRemediationFilter** |  |  [optional] |
|**hasServiceTicket** | **WizServiceTicketFilter** |  |  [optional] |
|**issueIds** | **List&lt;String&gt;** | @Description Filter only Issues that match these specific IDs |  [optional] |
|**issueTypes** | **List&lt;WizIssueType&gt;** | @Description Filter by Issue type |  [optional] |
|**projectIds** | **List&lt;String&gt;** | @Description Filter Issues associated with specific project IDs |  [optional] |
|**rateLimit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  |  [optional] |
|**relatedEntityId** | **String** | @Description Filter by related entity ids |  [optional] |
|**resolutionReasons** | **List&lt;WizResolutionReason&gt;** | @Description Filter Issues by resolution reason |  [optional] |
|**riskEqualsAll** | **List&lt;WizRiskType&gt;** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present |  [optional] |
|**riskEqualsAny** | **List&lt;WizRiskType&gt;** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name |  [optional] |
|**searchQuery** | **String** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found |  [optional] |
|**securityScan** | **String** | @Description Filter by security scan source |  [optional] |
|**severities** | **List&lt;WizIssueSeverity&gt;** | @Description Filter Issues according to Control severity |  [optional] |
|**stackLayers** | **List&lt;WizStackLayer&gt;** | @Description Filter Issues from specific stack layers |  [optional] |
|**status** | **List&lt;WizIssueStatus&gt;** | @Description Filter by Issue handling status @Description Default: OPEN |  [optional] |
|**tenantDataCenter** | **String** | DataCenter represents the tenant&#39;s data center location @Description Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; @Description Find your tenant data center on the Tenant Info page in Wiz, or request it from your Wiz customer contact |  |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



