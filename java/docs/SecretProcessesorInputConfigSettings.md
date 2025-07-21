

# SecretProcessesorInputConfigSettings


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fleetUrl** | **String** | URL of the Fleet DM instance |  [optional] |
|**actorType** | **String** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. |  [optional] |
|**cloudType** | **String** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. |  [optional] |
|**cron** | **String** | Cron expression to schedule the data collection. |  [optional] |
|**sort** | **String** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. |  [optional] |
|**targetIndustries** | **String** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. |  [optional] |
|**authType** | **String** | Authentication type (service_account or oauth) |  [optional] |
|**email** | **String** | Email address to use to authenticate with Google Cloud (required for service_account auth). |  [optional] |
|**host** | **String** |  |  [optional] |
|**actions** | **List&lt;String&gt;** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) |  [optional] |
|**actor** | **String** | Filter by the username that initiated the action |  [optional] |
|**country** | **String** | Filter by actor&#39;s country code (e.g., US) |  [optional] |
|**createdAfter** | **String** | Only return audit log entries after this RFC3339 formatted time stamp |  [optional] |
|**enterprise** | **String** | Your GitHub enterprise slug or ID |  [optional] |
|**include** | **String** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. |  [optional] |
|**organization** | **String** | Filter by organization name |  [optional] |
|**repository** | **String** | Filter by repository (format: org-name/repo-name) |  [optional] |
|**user** | **String** | The username of the Snowflake account used to establish the connection. |  [optional] |
|**region** | **String** | The AWS region where the security groups that are being fetched are located. |  [optional] |
|**roleArn** | **String** | RoleArn is the ARN of the IAM role to assume for accessing AWS security groups. |  [optional] |
|**severity** | **String** |  |  [optional] |
|**bucket** | **String** | Name of the storage bucket |  [optional] |
|**compression** | **String** | Compression format of the objects |  [optional] |
|**format** | **String** | File format of the objects |  [optional] |
|**partitionFormat** | **String** | Specifies the partition format of your bucket. Select the option that matches how your data is currently organized. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. |  [optional] |
|**prefix** | **String** | Prefix that leads to the start of the expected partition. For example: \&quot;/foobar/year&#x3D;2024/month&#x3D;01/day&#x3D;01/\&quot;. The prefix is &#x60;foobar&#x60;. |  [optional] |
|**recordLocation** | **String** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. If the records are not nested in the JSON, you can use &#39;@this&#39; to indicate that the file contains the record at the root or an array of records. |  [optional] |
|**queueUrl** | **String** | The URL of the SQS queue to poll for messages. |  [optional] |
|**correlationId** | **String** | The correlation ID of the log |  [optional] |
|**resourceGroupName** | **String** | The name of the resource group containing the virtual network |  [optional] |
|**resourceProvider** | **String** | The provider of the resource |  [optional] |
|**resourceUri** | **String** | The URI of the resource |  [optional] |
|**subscriptionId** | **String** | The Azure subscription ID where the virtual network and storage account are located |  [optional] |
|**tenantId** | **String** | The tenant ID of the Azure AD application |  [optional] |
|**accountUrl** | **String** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. |  [optional] |
|**container** | **String** | A container organizes a set of blobs, similar to a directory in a file system. |  [optional] |
|**storageAccountUrl** | **String** | The Azure storage account URL where flow logs are stored |  [optional] |
|**virtualNetworkName** | **String** | The name of the virtual network for which flow logs are being collected |  [optional] |
|**dataset** | **String** | The BigQuery dataset ID containing the table |  [optional] |
|**project** | **String** | The GCP project ID containing the BigQuery dataset |  [optional] |
|**query** | **String** | Optional custom query to use instead of table (must include timestamp_column) |  [optional] |
|**table** | **String** | The name of the table in Snowflake to query data from. |  [optional] |
|**timestampColumn** | **String** | The column containing timestamp values used for incremental loading |  [optional] |
|**eventType** | **List&lt;String&gt;** | A list of event types to filter by. |  [optional] |
|**filterTerm** | **String** | Limits the results to only users who&#39;s name or login start with the search term. |  [optional] |
|**assetTypes** | **List&lt;String&gt;** | The type of assets to scan for.  If left empty, will scan all assets |  [optional] |
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
|**userPoolId** | **String** | User Pool ID to extract users from |  [optional] |
|**awsQueueUrl** | **String** | AWS SQS queue URL provided to you by the CrowdStrike Falcon console |  [optional] |
|**awsRegionName** | **String** | Name of the region where the queue resides |  [optional] |
|**awsS3Url** | **String** | The URL of the S3 bucket |  [optional] |
|**visibilityTimeout** | **Integer** | Time in seconds before a message is returned back to the SQS queue |  [optional] |
|**category** | **String** | The Category of logs to query |  [optional] |
|**rate** | **Integer** | The rate at which to generate records (between 1 and 1000) per second |  [optional] |
|**recordType** | **String** | The type of record to generate |  [optional] |
|**customTemplate** | **String** | A custom template using the functions we provide to generate demo data |  [optional] |
|**fieldOption** | **String** |  |  [optional] |
|**organizationId** | **String** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. |  [optional] |
|**workspaceId** | **String** | The workspace ID of the Log Analytics workspace |  [optional] |
|**appName** | **String** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. |  [optional] |
|**cloud** | **String** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. |  [optional] |
|**memberCid** | **String** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. |  [optional] |
|**storyId** | **String** | Filter by the given story. |  [optional] |
|**teamId** | **String** | Team ID to filter user results by |  [optional] |
|**tenantUrl** | **String** | Unique URL for your Tines instance |  [optional] |
|**orgSlug** | **String** | Cron expression for scheduling the input |  [optional] |
|**repo** | **String** | A repository slug to filter full-scans by. |  [optional] |
|**confidential** | **Boolean** | Confidential to filter issues by confidentiality status. Confidential &#x3D; true means only show confidential issues. |  [optional] |
|**gitlabUrl** | **String** | GitLab URL (for Custom-Urls when self hosting. Defaults to https://gitlab.com.) |  [optional] |
|**issueType** | **String** | IssueType to filter issues by type e.g. issue, incident, etc. |  [optional] |
|**projectId** | **String** | The Google Cloud project ID to use |  [optional] |
|**state** | **String** | State to filter issues by e.g. opened, closed |  [optional] |
|**withLabelDetails** | **Boolean** | Include label details in the response |  [optional] |
|**bucketName** | **String** | The name of the Google Cloud Storage bucket to use |  [optional] |
|**analyzerArn** | **String** | The [ARN of the analyzer] to retrieve findings from. |  [optional] |
|**filters** | [**List&lt;SecurityGroupsFilter&gt;**](SecurityGroupsFilter.md) | Filters for the security groups |  [optional] |
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
|**tenantDataCenter** | **String** | DataCenter represents the tenant&#39;s data center location @Description Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; @Description Find your tenant data center on the Tenant Info page in Wiz, or request it from your Wiz customer contact |  [optional] |
|**kmsType** | **String** | Type of KMS resources to list |  [optional] |
|**logType** | **String** |  |  [optional] |
|**endpoint** | **String** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) |  [optional] |
|**skipSslVerification** | **Boolean** | Skip SSL verification for self-signed certificates |  [optional] |
|**usePathStyle** | **Boolean** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. |  [optional] |
|**subdomain** | **String** | SubDomain is a placeholder that represents your specific OneLogin subdomain. |  [optional] |
|**childType** | **String** | Specifies whether to list AWS accounts or organizational units (OUs) as children of the parent entity. |  [optional] |
|**parentId** | **String** | Parent ID to list children for |  [optional] |
|**baseUrl** | **String** | URL of the organization |  [optional] |
|**evaluationContextIdentifier** | **String** | Filters proactive resource evaluations for a given infrastructure deployment. |  [optional] |
|**includePlannedDeletion** | **Boolean** | Whether or not to include secrets scheduled for deletion |  [optional] |
|**account** | **String** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. |  [optional] |
|**database** | **String** | The name of the Snowflake database to connect to and perform operations on |  [optional] |
|**role** | **String** | The name of the Role your service account was granted which can access your resources. |  [optional] |
|**schema** | **String** | The schema within the Snowflake database where the target table resides. |  [optional] |
|**warehouse** | **String** | The Snowflake virtual warehouse to use for executing queries and processing data. |  [optional] |
|**userRoleOption** | **String** | Allows for filtering the output by user role. |  [optional] |
|**userTypeOption** | **String** | Allows for filtering the output by user type. |  [optional] |
|**assetStatus** | **List&lt;String&gt;** | Asset status types for Wiz. Ex: &#39;ACTIVE&#39;, &#39;INACTIVE&#39;. |  [optional] |
|**assetType** | **String** | Asset types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**detectionMethod** | **List&lt;String&gt;** | Detection method types for Wiz. Ex: &#39;AGENT&#39;, &#39;CLOUD&#39;, &#39;AGENT_CLOUD&#39;. |  [optional] |
|**vendorSeverity** | **List&lt;String&gt;** | Vendor severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. |  [optional] |



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



