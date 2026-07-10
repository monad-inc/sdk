

# SecretProcessesorInputConfigSettings


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**host** | **String** | The API hostname for your Duo Security integration. |  |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |
|**backfillStartTime** | **String** | Date to start fetching data from up to 180 days. If not specified, a sync of 180 days back is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**project** | **String** | The GCP project ID containing the BigQuery dataset |  [optional] |
|**rateLimit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  |  [optional] |
|**service** | **String** | The Aiven service name |  [optional] |
|**intervalSeconds** | **Integer** | Time interval in seconds between consecutive GraphQL API calls |  [optional] |
|**region** | **String** | AWS Region of your bucket. |  |
|**roleArn** | **String** | Role ARN to assume when reading from S3. |  [optional] |
|**severity** | **String** | Filter by alert severity (error, warning) |  [optional] |
|**bucket** | **String** | Name of the S3 bucket that receives Redshift audit logs. |  |
|**compression** | [**CompressionEnum**](#CompressionEnum) | Compression format of the objects |  |
|**format** | [**FormatEnum**](#FormatEnum) | File format of the objects |  |
|**keyFilter** | [**SqsS3BaseKeyFilter**](SqsS3BaseKeyFilter.md) |  |  [optional] |
|**partitionFormat** | [**PartitionFormatEnum**](#PartitionFormatEnum) | Partition format of your bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). |  |
|**prefix** | **String** | Prefix of the audit log keys, up to (but not including) the date partition — e.g. \&quot;AWSLogs/123456789012/redshift/us-east-1\&quot;. If you configured a custom S3 key prefix for audit logging, include it here. |  [optional] |
|**recordLocation** | **String** | JSONPath location of the records array in the GraphQL response |  [optional] |
|**schema** | **Set&lt;String&gt;** | Ordered list of column names for headerless delimited files (e.g. PSV). Applies to the \&quot;delimited\&quot; format only; the \&quot;csv\&quot; and \&quot;wsv\&quot; formats always read column names from the first row and ignore this field. |  |
|**chunkingMode** | **AwsSqsS3CloudtrailChunkingMode** |  |  [optional] |
|**excludeDigestFiles** | **Boolean** | ExcludeDigestFiles skips keys containing \&quot;/CloudTrail-Digest/\&quot; (hash signatures, not events). |  [optional] |
|**queueUrl** | **String** |  |  |
|**usesSns** | **Boolean** |  |  [optional] |
|**withMetadata** | **Boolean** |  |  [optional] |
|**correlationId** | **String** | The correlation ID of the log |  [optional] |
|**resourceGroupName** | **String** | The name of the resource group containing the virtual network |  [optional] |
|**resourceProvider** | **String** | The provider of the resource |  [optional] |
|**resourceUri** | **String** | The URI of the resource |  [optional] |
|**subscriptionId** | **String** | The Azure subscription ID where the virtual network and storage account are located |  [optional] |
|**tenantId** | **String** | The Azure Entra ID tenant (directory) ID |  |
|**accountUrl** | **String** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. |  [optional] |
|**container** | **String** | A container organizes a set of blobs, similar to a directory in a file system. |  [optional] |
|**consumerGroup** | **String** | The consumer group name for reading events (default: &#x60;$Default&#x60;) |  [optional] |
|**eventHubName** | **String** | The name of the specific Event Hub to consume from |  [optional] |
|**eventHubNamespace** | **String** | The fully qualified namespace URL (e.g., &#x60;your-namespace.servicebus.windows.net&#x60;) |  [optional] |
|**lookbackDuration** | **String** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;168h\&quot;). Respects API retention limits. |  [optional] |
|**storageAccountUrl** | **String** | The Azure storage account URL where flow logs are stored |  [optional] |
|**virtualNetworkName** | **String** | The name of the virtual network for which flow logs are being collected |  [optional] |
|**dataset** | **String** | The BigQuery dataset ID containing the table |  [optional] |
|**query** | **String** | The query to run against the Log Analytics workspace |  |
|**table** | **String** | The BigQuery table ID to query data from |  [optional] |
|**timestampColumn** | **String** | The column containing timestamp values used for incremental loading |  [optional] |
|**baseUrl** | **String** | Base URL of your Volt.io API instance (e.g., https://api.volt.io) |  |
|**eventType** | **String** | Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types |  [optional] |
|**hostname** | **String** | The Brinqa environment hostname (e.g., \&quot;ssb.brinqa.net\&quot;) |  [optional] |
|**organizationId** | **String** | Organization ID for the Salesforce instance |  [optional] |
|**orgSlug** | **String** | The ID or slug of the organization |  |
|**enablePagination** | **Boolean** | Enable pagination support |  [optional] |
|**graphqlQuery** | **String** | The GraphQL query to execute against the endpoint to fetch data |  [optional] |
|**hasNextPagePath** | **String** | JSONPath location to check if there are more pages |  [optional] |
|**paginationCursorPath** | **String** | JSONPath location for pagination cursor/token |  [optional] |
|**variables** | [**List&lt;MonadGraphqlInputVariable&gt;**](MonadGraphqlInputVariable.md) | GraphQL query variables to pass with each request |  [optional] |
|**endpointUrl** | **String** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/vulnerability-findings&#39;. |  |
|**result** | **List&lt;WizResult&gt;** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;, &#39;ERROR&#39;, &#39;NOT ASSESSED&#39;. |  [optional] |
|**status** | **List&lt;WizStatus&gt;** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. |  [optional] |
|**enableProtoPayloadParsing** | **Boolean** | Enables automatic parsing of embedded protocol buffer payloads within the input. |  [optional] |
|**filter** | **String** | The filter to apply to the logs. |  [optional] |
|**resourceNames** | **List&lt;String&gt;** | The resources to query logs from. |  [optional] |
|**cloudPlatform** | **List&lt;WizCloudPlatform&gt;** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**entityType** | **List&lt;WizEntityType&gt;** | Entity types for Wiz. |  |
|**fullSnapshot** | **Boolean** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. |  [optional] |
|**interval** | **Integer** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. |  [optional] |
|**accountId** | **String** | Account ID for the input |  [optional] |
|**includeBotFields** | **Boolean** | Include Bot Management fields (requires Enterprise plan with Bot Management add-on) |  [optional] |
|**zoneId** | **String** | Cloudflare Zone ID |  [optional] |
|**fields** | **List&lt;String&gt;** | Fields to include in the query. Leave empty to use default curated list. Only fields available to your account will be included (validated against API). Maximum 50 fields due to API constraints. |  [optional] |
|**filterMyScans** | **Boolean** | Filter to only show scans created by the current API token |  [optional] |
|**parentEntityId** | **String** | The system-generated ID of the parent entity that is associated with the primary entity affected by the alert. |  [optional] |
|**parentEntityType** | **String** | The system-generated name of the parent entity that is associated with the primary entity affected by the alert. |  [optional] |
|**orgId** | **String** | URL of the organization |  [optional] |
|**apiKeyId** | **String** | API Key ID for authentication |  |
|**domainName** | **String** | TODO: Name of domain added on Polymer Hub portal |  |
|**environment** | [**EnvironmentEnum**](#EnvironmentEnum) | Determines the URI {environment}.docusign.com |  |
|**userId** | **String** | ID of the user to harvest audit logs for |  |
|**category** | [**CategoryEnum**](#CategoryEnum) | The Category of logs to query |  |
|**clusterName** | **String** | The name of the GKE cluster. |  |
|**usesStaticCreds** | **Boolean** |  |  [optional] |
|**namespace** | **String** | Your Endor Labs organization namespace (e.g., \&quot;your-org\&quot;) |  |
|**ingestionDelay** | **Integer** | The ingestion delay in seconds for the data source |  [optional] |
|**workspaceId** | **String** | The workspace ID of the Log Analytics workspace |  |
|**appName** | **String** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. |  [optional] |
|**cloud** | **String** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. |  [optional] |
|**memberCid** | **String** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. |  [optional] |
|**repo** | **String** | A repository slug to filter full-scans by. |  [optional] |
|**authConfig** | [**CommonAuthConfig**](CommonAuthConfig.md) |  |  [optional] |
|**scope** | [**GithubActionsWorkflowLogsWebhookScopeConfig**](GithubActionsWorkflowLogsWebhookScopeConfig.md) |  |  [optional] |
|**webhookSecret** | [**ModelsSecret**](ModelsSecret.md) |  |  |
|**confidential** | **Boolean** | Confidential to filter issues by confidentiality status. Confidential &#x3D; true means only show confidential issues. |  [optional] |
|**gitlabUrl** | **String** | GitLab URL (for Custom-Urls when self hosting. Defaults to https://gitlab.com.) |  |
|**issueType** | **String** | IssueType to filter issues by type e.g. issue, incident, etc. |  [optional] |
|**projectId** | **String** | The Google Cloud project ID to use |  |
|**state** | **String** | State to filter issues by e.g. opened, closed |  [optional] |
|**withLabelDetails** | **Boolean** | Include label details in the response |  [optional] |
|**location** | **String** | The GCP location (region or zone) where the GKE cluster runs, e.g. us-central1. |  |
|**bucketName** | **String** | The name of the Google Cloud Storage bucket to use |  [optional] |
|**authType** | **ZendeskAuditLogsAuthType** |  |  |
|**email** | **String** | Email address to use for authenticating with Google Cloud (required for service_account auth). |  [optional] |
|**alertType** | **String** | Filter by alert type (e.g., policy_violated, tag_conflict) |  [optional] |
|**embed** | **String** | Embed related resources in the data returned (e.g., read-consolidated-alert) |  [optional] |
|**primaryEntityType** | **String** | Filter by primary entity type (e.g., aws_ebs_volume, vmware_vm) |  [optional] |
|**primaryEntityValue** | **String** | Filter by primary entity value (contains search) |  [optional] |
|**severities** | **List&lt;WizIssueSeverity&gt;** | @Description Filter Issues according to Control severity |  [optional] |
|**severityFilter** | [**List&lt;TypesStringFilter&gt;**](TypesStringFilter.md) |  |  [optional] |
|**controlIds** | **List&lt;String&gt;** | @Description Filter Issues created by specific control IDs |  [optional] |
|**hasNote** | **WizNoteFilter** |  |  [optional] |
|**hasRemediation** | **WizRemediationFilter** |  |  [optional] |
|**hasServiceTicket** | **WizServiceTicketFilter** |  |  [optional] |
|**issueIds** | **List&lt;String&gt;** | @Description Filter only Issues that match these specific IDs |  [optional] |
|**issueTypes** | **List&lt;WizIssueType&gt;** | @Description Filter by Issue type |  [optional] |
|**projectIds** | **List&lt;String&gt;** | The GCP project IDs hosting Looker Core instances. |  |
|**relatedEntityId** | **String** | @Description Filter by related entity ids |  [optional] |
|**resolutionReasons** | **List&lt;WizResolutionReason&gt;** | @Description Filter Issues by resolution reason |  [optional] |
|**riskEqualsAll** | **List&lt;WizRiskType&gt;** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present |  [optional] |
|**riskEqualsAny** | **List&lt;WizRiskType&gt;** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name |  [optional] |
|**searchQuery** | **String** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found |  [optional] |
|**securityScan** | **String** | @Description Filter by security scan source |  [optional] |
|**stackLayers** | **List&lt;WizStackLayer&gt;** | @Description Filter Issues from specific stack layers |  [optional] |
|**tenantDataCenter** | **String** | DataCenter represents the tenant&#39;s data center location. Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; |  |
|**auditLogTypes** | **List&lt;String&gt;** | Filter audit logs by type(s). Available types: approval_requests, devices, endpoints, extensions, firewall. Leave empty to fetch all types. |  [optional] |
|**logCategories** | **List&lt;String&gt;** | The audit log categories to ingest. |  |
|**logType** | [**LogTypeEnum**](#LogTypeEnum) | Which Redshift audit log to ingest. Must be one of the supported log types (connectionlog, userlog). |  |
|**endpoint** | **String** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) |  |
|**skipSslVerification** | **Boolean** | Skip SSL verification for self-signed certificates |  [optional] |
|**usePathStyle** | **Boolean** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. |  [optional] |
|**subdomain** | **String** | SubDomain is a placeholder that represents your specific OneLogin subdomain. |  |
|**categoryType** | **String** | The category of logs to pull |  [optional] |
|**domain** | **String** | Domain name for the Oracle Cloud service |  |
|**username** | **String** | Username of Oracle Cloud service user with permissions to access the resource |  |
|**githubAppInstallationId** | **String** | GitHub App Installation ID (required when using GitHub App authentication) |  [optional] |
|**githubClientId** | **String** | GitHub Client ID (alternative to personal access token) |  [optional] |
|**include** | **String** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. |  [optional] |
|**organization** | **String** | Your GitHub organization name |  [optional] |
|**clientId** | **String** | ClientID is the Plaid API client_id. Required only when verification is enabled. |  [optional] |
|**verifyWebhooks** | **Boolean** | VerifyWebhooks toggles Plaid signature verification. Unset defaults to true. |  [optional] |
|**webhookTypes** | **List&lt;String&gt;** | WebhookTypes restricts which webhook_type values are emitted. Empty &#x3D; keep all. |  [optional] |
|**domainUrl** | **String** | Domain URL for the Salesforce instance |  [optional] |
|**topic** | **String** | Pub/Sub topic to subscribe to |  [optional] |
|**hostName** | **String** | For self-hosted, specify your host name here. Otherwise, leave it default as sentry.io. |  |
|**rate** | **Integer** | The rate at which to generate records (between 1 and 1000) per second |  [optional] |
|**recordType** | **String** | The type of record to generate |  [optional] |
|**customTemplate** | **String** | A custom template using the functions we provide to generate demo data |  [optional] |
|**cron** | **String** | Cron expression to schedule the data collection. |  [optional] |
|**operationNames** | **List&lt;String&gt;** | Filter by specific operation names (optional) |  [optional] |
|**tenantDomain** | **String** | The Tines tenant domain (e.g., your-org.tines.com) |  |
|**userIds** | **List&lt;String&gt;** | Filter by specific user IDs (optional) |  [optional] |
|**storyId** | **String** | Filter by the given story. |  [optional] |
|**teamId** | **String** | Filter by the given team. |  [optional] |
|**tenantUrl** | **String** | Unique URL for your Tines instance |  |
|**actorSid** | **String** | Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials. |  [optional] |
|**replicationStartTime** | **String** | Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39; |  [optional] |
|**resourceSid** | **String** | Only include events that refer to this resource. Useful for discovering the history of a specific resource. |  [optional] |
|**instanceName** | **String** | Name of the ServiceNow instance |  [optional] |
|**streams** | **List&lt;String&gt;** | ServiceNow streams to fetch data from |  [optional] |
|**withPayload** | **Boolean** | Whether to include detailed payload information in the events. |  [optional] |
|**customerId** | **String** | Optional: Filter audit logs by specific customer ID |  [optional] |
|**assetStatus** | **List&lt;WizAssetStatus&gt;** | Asset status types for Wiz. Ex: &#39;ACTIVE&#39;, &#39;INACTIVE&#39;. |  [optional] |
|**assetTypes** | **List&lt;WizAssetType&gt;** | Asset types for Wiz. Ex: &#39;VIRTUAL_MACHINE&#39;, &#39;CONTAINER&#39;, etc. |  |
|**detectionMethod** | **List&lt;WizDetectionMethod&gt;** | Detection method types for Wiz. Ex: &#39;AGENT&#39;, &#39;CLOUD&#39;, &#39;AGENT_CLOUD&#39;. |  [optional] |
|**vendorSeverity** | **List&lt;WizVendorSeverity&gt;** | Vendor severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39; |  [optional] |
|**emailAddress** | **String** | This is the email address registered with your Zendesk account |  [optional] |
|**subDomain** | **String** | This is the subdomain found in your Zendesk account URL For example, if the URL is https://demo.zendesk.com then the subdomain will be demo |  |



## Enum: CompressionEnum

| Name | Value |
|---- | -----|
| AUTO | &quot;auto&quot; |
| GZIP | &quot;gzip&quot; |
| NONE | &quot;none&quot; |



## Enum: FormatEnum

| Name | Value |
|---- | -----|
| JSON | &quot;json&quot; |
| JSONL | &quot;jsonl&quot; |
| WSV | &quot;wsv&quot; |



## Enum: PartitionFormatEnum

| Name | Value |
|---- | -----|
| FLAT_HIVE_COMPLIANT | &quot;flat hive compliant&quot; |
| HIVE_COMPLIANT | &quot;hive compliant&quot; |
| SIMPLE_DATE | &quot;simple date&quot; |



## Enum: EnvironmentEnum

| Name | Value |
|---- | -----|
| PRODUCTION | &quot;production&quot; |
| DEVELOPMENT | &quot;development&quot; |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| AUDIT_LOGS | &quot;AuditLogs&quot; |
| SIGNIN_LOGS | &quot;SigninLogs&quot; |
| AAD_NON_INTERACTIVE_USER_SIGN_IN_LOGS | &quot;AADNonInteractiveUserSignInLogs&quot; |
| AAD_SERVICE_PRINCIPAL_SIGN_IN_LOGS | &quot;AADServicePrincipalSignInLogs&quot; |
| AAD_MANAGED_IDENTITY_SIGN_IN_LOGS | &quot;AADManagedIdentitySignInLogs&quot; |



## Enum: LogTypeEnum

| Name | Value |
|---- | -----|
| CONNECTIONLOG | &quot;connectionlog&quot; |
| USERLOG | &quot;userlog&quot; |



