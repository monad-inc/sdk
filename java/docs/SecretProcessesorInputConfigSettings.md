

# SecretProcessesorInputConfigSettings


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fleetUrl** | **String** | URL of the Fleet DM instance |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |
|**host** | **String** | The API hostname for your Duo Security integration. |  [optional] |
|**actorType** | **String** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. |  [optional] |
|**cloudType** | **String** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. |  [optional] |
|**cron** | **String** | Cron string for scheduling the ingest of your input |  [optional] |
|**sort** | **String** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. |  [optional] |
|**targetIndustries** | **String** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. |  [optional] |
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, data from 6 months ago up till now from zoom is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**project** | **String** | The GCP project ID containing the BigQuery dataset |  [optional] |
|**service** | **String** | The Aiven service name |  [optional] |
|**authType** | **String** | AuthType is the type of authentication used for the input |  [optional] |
|**email** | **String** | Email address to use to authenticate with Google Cloud (required for service_account auth). |  [optional] |
|**intervalSeconds** | **Integer** | Time interval in seconds between consecutive GraphQL API calls |  [optional] |
|**actions** | **List&lt;String&gt;** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) |  [optional] |
|**actor** | **String** | Filter by the username that initiated the action |  [optional] |
|**country** | **String** | Filter by actor&#39;s country code (e.g., US) |  [optional] |
|**enterprise** | **String** | Your GitHub enterprise slug or ID |  [optional] |
|**include** | **String** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. |  [optional] |
|**organization** | **String** | Your GitHub organization name |  [optional] |
|**repository** | **String** | Filter by repository (format: org-name/repo-name) |  [optional] |
|**user** | **String** | The username of the Snowflake account used to establish the connection. |  [optional] |
|**region** | **String** | The AWS region where the security groups that are being fetched are located. |  [optional] |
|**roleArn** | **String** | RoleArn is the ARN of the IAM role to assume for accessing AWS security groups. |  [optional] |
|**severity** | **String** | Filter by alert severity (error, warning) |  [optional] |
|**accounts** | [**List&lt;AwsIamAliasesAccount&gt;**](AwsIamAliasesAccount.md) | List of AWS accounts to fetch IAM aliases from |  [optional] |
|**childType** | **String** | Specifies whether to list AWS accounts or organizational units (OUs) as children of the parent entity. |  [optional] |
|**parentId** | **String** | Parent ID to list children for |  [optional] |
|**bucket** | **String** | Name of the storage bucket |  [optional] |
|**compression** | **String** | Compression format of the objects |  [optional] |
|**format** | **String** | File format of the objects |  [optional] |
|**partitionFormat** | **String** | Specifies the partition format of your bucket. Select the option that matches how your data is currently organized. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. |  [optional] |
|**prefix** | **String** | Prefix that leads to the start of the expected partition. For example: \&quot;/foobar/year&#x3D;2024/month&#x3D;01/day&#x3D;01/\&quot;. The prefix is &#x60;foobar&#x60;. |  [optional] |
|**recordLocation** | **String** | JSONPath location of the records array in the GraphQL response |  [optional] |
|**queueUrl** | **String** | The URL of the SQS queue to poll for messages. |  [optional] |
|**withMetadata** | **Boolean** | Whether to include S3 object metadata in the output. |  [optional] |
|**correlationId** | **String** | The correlation ID of the log |  [optional] |
|**resourceGroupName** | **String** | The name of the resource group containing the virtual network |  [optional] |
|**resourceProvider** | **String** | The provider of the resource |  [optional] |
|**resourceUri** | **String** | The URI of the resource |  [optional] |
|**subscriptionId** | **String** | The Azure subscription ID where the virtual network and storage account are located |  [optional] |
|**tenantId** | **String** | The Azure Entra ID tenant (directory) ID |  [optional] |
|**accountUrl** | **String** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. |  [optional] |
|**container** | **String** | A container organizes a set of blobs, similar to a directory in a file system. |  [optional] |
|**consumerGroup** | **String** | The consumer group name for reading events (default: &#x60;$Default&#x60;) |  [optional] |
|**eventHubName** | **String** | The name of the specific Event Hub to consume from |  [optional] |
|**eventHubNamespace** | **String** | The fully qualified namespace URL (e.g., &#x60;your-namespace.servicebus.windows.net&#x60;) |  [optional] |
|**lookbackDuration** | **String** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;7d\&quot;). Respects API retention limits. |  [optional] |
|**storageAccountUrl** | **String** | The Azure storage account URL where flow logs are stored |  [optional] |
|**virtualNetworkName** | **String** | The name of the virtual network for which flow logs are being collected |  [optional] |
|**dataset** | **String** | The BigQuery dataset ID containing the table |  [optional] |
|**query** | **String** | Optional custom query to use instead of table (must include timestamp_column) |  [optional] |
|**table** | **String** | The name of the table in Snowflake to query data from. |  [optional] |
|**timestampColumn** | **String** | The column containing timestamp values used for incremental loading |  [optional] |
|**baseUrl** | **String** | Base URL of your Volt.io API instance (e.g., https://api.volt.io) |  [optional] |
|**eventType** | **String** | Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types |  [optional] |
|**filterTerm** | **String** | Limits the results to only users who&#39;s name or login start with the search term. |  [optional] |
|**hostname** | **String** | The Brinqa environment hostname (e.g., \&quot;ssb.brinqa.net\&quot;) |  [optional] |
|**organizationId** | **String** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. |  [optional] |
|**orgSlug** | **String** | The ID or slug of the organization |  [optional] |
|**enablePagination** | **Boolean** | Enable pagination support |  [optional] |
|**graphqlQuery** | **String** | The GraphQL query to execute against the endpoint to fetch data |  [optional] |
|**hasNextPagePath** | **String** | JSONPath location to check if there are more pages |  [optional] |
|**paginationCursorPath** | **String** | JSONPath location for pagination cursor/token |  [optional] |
|**variables** | [**List&lt;MonadGraphqlInputVariable&gt;**](MonadGraphqlInputVariable.md) | GraphQL query variables to pass with each request |  [optional] |
|**assetTypes** | **List&lt;String&gt;** | Asset types for Wiz. Ex: &#39;VIRTUAL_MACHINE&#39;, &#39;CONTAINER&#39;, etc. |  [optional] |
|**resourceNames** | **List&lt;String&gt;** | The resources to query logs from. |  [optional] |
|**endpointUrl** | **String** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/vulnerability-findings&#39;. |  [optional] |
|**result** | **List&lt;String&gt;** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. |  [optional] |
|**status** | **List&lt;String&gt;** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. |  [optional] |
|**enableProtoPayloadParsing** | **Boolean** | Enables automatic parsing of embedded protocol buffer payloads within the input. |  [optional] |
|**filter** | [**CognitoUsersFilter**](CognitoUsersFilter.md) |  |  [optional] |
|**cloudPlatform** | **List&lt;String&gt;** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**entityType** | **List&lt;String&gt;** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. |  [optional] |
|**fullSnapshot** | **Boolean** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. |  [optional] |
|**interval** | **Integer** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. |  [optional] |
|**accountId** | **String** | Account ID for the input |  [optional] |
|**zoneIds** | **List&lt;String&gt;** | List of zone IDs (for zone-level rulesets). If empty and AccountID is not specified, fetches from all zones. |  [optional] |
|**includeBotFields** | **Boolean** | Include Bot Management fields (requires Enterprise plan with Bot Management add-on) |  [optional] |
|**zoneId** | **String** | Cloudflare Zone ID |  [optional] |
|**fields** | **List&lt;String&gt;** | Fields to include in the query. Leave empty to use default curated list. Only fields available to your account will be included (validated against API). Maximum 50 fields due to API constraints. |  [optional] |
|**excludeCdnCgi** | **Boolean** | Exclude connections to Cloudflare /cdn-cgi paths. Default: true |  [optional] |
|**excludeIssueType** | **List&lt;String&gt;** | Filter to exclude specific issue types. Applied after the include filter. |  [optional] |
|**excludeSeverity** | **List&lt;String&gt;** | Filter to exclude specific severity levels. Applied after the include filter. |  [optional] |
|**issueType** | **String** | IssueType to filter issues by type e.g. issue, incident, etc. |  [optional] |
|**filterMyScans** | **Boolean** | Filter to only show scans created by the current API token |  [optional] |
|**parentEntityId** | **String** | The system-generated ID of the parent entity that is associated with the primary entity affected by the alert. |  [optional] |
|**parentEntityType** | **String** | The system-generated name of the parent entity that is associated with the primary entity affected by the alert. |  [optional] |
|**orgId** | **String** | URL of the organization |  [optional] |
|**userPoolId** | **String** | User Pool ID to extract users from |  [optional] |
|**apiKeyId** | **String** | API Key ID for authentication |  [optional] |
|**domainName** | **String** | TODO: Name of domain added on Polymer Hub portal |  [optional] |
|**awsQueueUrl** | **String** | AWS SQS queue URL provided to you by the CrowdStrike Falcon console |  [optional] |
|**awsRegionName** | **String** | Name of the region where the queue resides |  [optional] |
|**awsS3Url** | **String** | The URL of the S3 bucket |  [optional] |
|**visibilityTimeout** | **Integer** | Time in seconds before a message is returned back to the SQS queue |  [optional] |
|**environment** | **String** | Determines the URI {environment}.docusign.com |  [optional] |
|**userId** | **String** | ID of the user to harvest audit logs for |  [optional] |
|**category** | **String** | The Category of logs to query |  [optional] |
|**fieldOption** | **String** |  |  [optional] |
|**namespace** | **String** | Your Endor Labs organization namespace (e.g., \&quot;your-org\&quot;) |  [optional] |
|**workspaceId** | **String** | The workspace ID of the Log Analytics workspace |  [optional] |
|**appName** | **String** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. |  [optional] |
|**cloud** | **String** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. |  [optional] |
|**memberCid** | **String** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. |  [optional] |
|**repo** | **String** | A repository slug to filter full-scans by. |  [optional] |
|**confidential** | **Boolean** | Confidential to filter issues by confidentiality status. Confidential &#x3D; true means only show confidential issues. |  [optional] |
|**gitlabUrl** | **String** | GitLab URL (for Custom-Urls when self hosting. Defaults to https://gitlab.com.) |  [optional] |
|**projectId** | **String** | The Google Cloud project ID to use |  [optional] |
|**state** | **String** | State to filter issues by e.g. opened, closed |  [optional] |
|**withLabelDetails** | **Boolean** | Include label details in the response |  [optional] |
|**bucketName** | **String** | The name of the Google Cloud Storage bucket to use |  [optional] |
|**analyzerArn** | **String** | The [ARN of the analyzer] to retrieve findings from. |  [optional] |
|**filters** | [**List&lt;SecurityGroupsFilter&gt;**](SecurityGroupsFilter.md) | Filters for the security groups |  [optional] |
|**alertType** | **String** | Filter by alert type (e.g., policy_violated, tag_conflict) |  [optional] |
|**embed** | **String** | Embed related resources in the data returned (e.g., read-consolidated-alert) |  [optional] |
|**primaryEntityType** | **String** | Filter by primary entity type (e.g., aws_ebs_volume, vmware_vm) |  [optional] |
|**primaryEntityValue** | **String** | Filter by primary entity value (contains search) |  [optional] |
|**severities** | [**List&lt;SeveritiesEnum&gt;**](#List&lt;SeveritiesEnum&gt;) | @Description Filter Issues according to Control severity |  [optional] |
|**severityFilter** | [**List&lt;TypesStringFilter&gt;**](TypesStringFilter.md) |  |  [optional] |
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
|**stackLayers** | [**List&lt;StackLayersEnum&gt;**](#List&lt;StackLayersEnum&gt;) | @Description Filter Issues from specific stack layers |  [optional] |
|**tenantDataCenter** | **String** | DataCenter represents the tenant&#39;s data center location. Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; |  [optional] |
|**kmsType** | **String** | Type of KMS resources to list |  [optional] |
|**auditLogTypes** | **List&lt;String&gt;** | Filter audit logs by type(s). Available types: approval_requests, devices, endpoints, extensions, firewall. Leave empty to fetch all types. |  [optional] |
|**logType** | **String** |  |  [optional] |
|**endpoint** | **String** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) |  [optional] |
|**skipSslVerification** | **Boolean** | Skip SSL verification for self-signed certificates |  [optional] |
|**usePathStyle** | **Boolean** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. |  [optional] |
|**subdomain** | **String** | SubDomain is a placeholder that represents your specific OneLogin subdomain. |  [optional] |
|**categoryType** | **String** | The category of logs to pull |  [optional] |
|**domain** | **String** | Domain name for the Oracle Cloud service |  [optional] |
|**username** | **String** | Username of Oracle Cloud service user with permissions to access the resource |  [optional] |
|**githubAppInstallationId** | **String** | GitHub App Installation ID (required when using GitHub App authentication) |  [optional] |
|**githubClientId** | **String** | GitHub Client ID (alternative to personal access token) |  [optional] |
|**domainUrl** | **String** | Domain URL for the Salesforce instance |  [optional] |
|**topic** | **String** | Pub/Sub topic to subscribe to |  [optional] |
|**evaluationContextIdentifier** | **String** | Filters proactive resource evaluations for a given infrastructure deployment. |  [optional] |
|**includeInactive** | **Boolean** | Include inactive users in the results |  [optional] |
|**includePlannedDeletion** | **Boolean** | Whether or not to include secrets scheduled for deletion |  [optional] |
|**hostName** | **String** | For self-hosted, specify your host name here. Otherwise, leave it default as sentry.io. |  [optional] |
|**teamId** | **String** | Filter by the given team. |  [optional] |
|**account** | **String** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. |  [optional] |
|**database** | **String** | The name of the Snowflake database to connect to and perform operations on |  [optional] |
|**role** | **String** | The name of the Role your service account was granted which can access your resources. |  [optional] |
|**schema** | **String** | The schema within the Snowflake database where the target table resides. |  [optional] |
|**warehouse** | **String** | The Snowflake virtual warehouse to use for executing queries and processing data. |  [optional] |
|**rate** | **Integer** | The rate at which to generate records (between 1 and 1000) per second |  [optional] |
|**recordType** | **String** | The type of record to generate |  [optional] |
|**customTemplate** | **String** | A custom template using the functions we provide to generate demo data |  [optional] |
|**userRoleOption** | **String** | Allows for filtering the output by user role. |  [optional] |
|**userTypeOption** | **String** | Allows for filtering the output by user type. |  [optional] |
|**operationNames** | **List&lt;String&gt;** | Filter by specific operation names (optional) |  [optional] |
|**tenantDomain** | **String** | The Tines tenant domain (e.g., your-org.tines.com) |  [optional] |
|**userIds** | **List&lt;String&gt;** | Filter by specific user IDs (optional) |  [optional] |
|**storyId** | **String** | Filter by the given story. |  [optional] |
|**tenantUrl** | **String** | Unique URL for your Tines instance |  [optional] |
|**actorSid** | **String** | Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials. |  [optional] |
|**replicationStartTime** | **String** | Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39; |  [optional] |
|**resourceSid** | **String** | Only include events that refer to this resource. Useful for discovering the history of a specific resource. |  [optional] |
|**instanceName** | **String** | Name of the ServiceNow instance |  [optional] |
|**streams** | **List&lt;String&gt;** | ServiceNow streams to fetch data from |  [optional] |
|**withPayload** | **Boolean** | Whether to include detailed payload information in the events. |  [optional] |
|**customerId** | **String** | Optional: Filter audit logs by specific customer ID |  [optional] |
|**assetStatus** | **List&lt;String&gt;** | Asset status types for Wiz. Ex: &#39;ACTIVE&#39;, &#39;INACTIVE&#39;. |  [optional] |
|**detectionMethod** | **List&lt;String&gt;** | Detection method types for Wiz. Ex: &#39;AGENT&#39;, &#39;CLOUD&#39;, &#39;AGENT_CLOUD&#39;. |  [optional] |
|**vendorSeverity** | **List&lt;String&gt;** | Vendor severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. |  [optional] |
|**emailAddress** | **String** | This is the email address registered with your Zendesk account |  [optional] |
|**subDomain** | **String** | This is the subdomain found in your Zendesk account URL For example, if the URL is https://demo.zendesk.com then the subdomain will be demo |  [optional] |



## Enum: List&lt;SeveritiesEnum&gt;

| Name | Value |
|---- | -----|
| INFORMATIONAL | &quot;INFORMATIONAL&quot; |
| LOW | &quot;LOW&quot; |
| MEDIUM | &quot;MEDIUM&quot; |
| HIGH | &quot;HIGH&quot; |
| CRITICAL | &quot;CRITICAL&quot; |



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



