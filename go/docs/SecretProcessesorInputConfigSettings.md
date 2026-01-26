# SecretProcessesorInputConfigSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FleetUrl** | Pointer to **string** | URL of the Fleet DM instance | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**Host** | Pointer to **string** | The API hostname for your Duo Security integration. | [optional] 
**ActorType** | Pointer to **string** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**CloudType** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 
**Sort** | Pointer to **string** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. | [optional] 
**TargetIndustries** | Pointer to **string** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, data from 6 months ago up till now from zoom is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**Project** | Pointer to **string** | The GCP project ID containing the BigQuery dataset | [optional] 
**Service** | Pointer to **string** | The Aiven service name | [optional] 
**AuthType** | Pointer to **string** | AuthType is the type of authentication used for the input | [optional] 
**Email** | Pointer to **string** | Email address to use to authenticate with Google Cloud (required for service_account auth). | [optional] 
**IntervalSeconds** | Pointer to **int32** | Time interval in seconds between consecutive GraphQL API calls | [optional] 
**Actions** | Pointer to **[]string** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) | [optional] 
**Actor** | Pointer to **string** | Filter by the username that initiated the action | [optional] 
**Country** | Pointer to **string** | Filter by actor&#39;s country code (e.g., US) | [optional] 
**Enterprise** | Pointer to **string** | Your GitHub enterprise slug or ID | [optional] 
**Include** | Pointer to **string** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**Organization** | Pointer to **string** | Your GitHub organization name | [optional] 
**Repository** | Pointer to **string** | Filter by repository (format: org-name/repo-name) | [optional] 
**User** | Pointer to **string** | The username of the Snowflake account used to establish the connection. | [optional] 
**Region** | Pointer to **string** | The AWS region where the security groups that are being fetched are located. | [optional] 
**RoleArn** | Pointer to **string** | RoleArn is the ARN of the IAM role to assume for accessing AWS security groups. | [optional] 
**Severity** | Pointer to **string** | Filter by alert severity (error, warning) | [optional] 
**Bucket** | Pointer to **string** | Name of the storage bucket | [optional] 
**Compression** | Pointer to **string** | Compression format of the objects | [optional] 
**Format** | Pointer to **string** | File format of the objects | [optional] 
**PartitionFormat** | Pointer to **string** | Specifies the partition format of your bucket. Select the option that matches how your data is currently organized. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. | [optional] 
**Prefix** | Pointer to **string** | Prefix that leads to the start of the expected partition. For example: \&quot;/foobar/year&#x3D;2024/month&#x3D;01/day&#x3D;01/\&quot;. The prefix is &#x60;foobar&#x60;. | [optional] 
**RecordLocation** | Pointer to **string** | JSONPath location of the records array in the GraphQL response | [optional] 
**QueueUrl** | Pointer to **string** | The URL of the SQS queue to poll for messages. | [optional] 
**WithMetadata** | Pointer to **bool** | Whether to include S3 object metadata in the output. | [optional] 
**CorrelationId** | Pointer to **string** | The correlation ID of the log | [optional] 
**ResourceGroupName** | Pointer to **string** | The name of the resource group containing the virtual network | [optional] 
**ResourceProvider** | Pointer to **string** | The provider of the resource | [optional] 
**ResourceUri** | Pointer to **string** | The URI of the resource | [optional] 
**SubscriptionId** | Pointer to **string** | The Azure subscription ID where the virtual network and storage account are located | [optional] 
**TenantId** | Pointer to **string** | The Azure Entra ID tenant (directory) ID | [optional] 
**AccountUrl** | Pointer to **string** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. | [optional] 
**Container** | Pointer to **string** | A container organizes a set of blobs, similar to a directory in a file system. | [optional] 
**ConsumerGroup** | Pointer to **string** | The consumer group name for reading events (default: &#x60;$Default&#x60;) | [optional] 
**EventHubName** | Pointer to **string** | The name of the specific Event Hub to consume from | [optional] 
**EventHubNamespace** | Pointer to **string** | The fully qualified namespace URL (e.g., &#x60;your-namespace.servicebus.windows.net&#x60;) | [optional] 
**LookbackDuration** | Pointer to **string** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;7d\&quot;). Respects API retention limits. | [optional] 
**StorageAccountUrl** | Pointer to **string** | The Azure storage account URL where flow logs are stored | [optional] 
**VirtualNetworkName** | Pointer to **string** | The name of the virtual network for which flow logs are being collected | [optional] 
**Dataset** | Pointer to **string** | The BigQuery dataset ID containing the table | [optional] 
**Query** | Pointer to **string** | Optional custom query to use instead of table (must include timestamp_column) | [optional] 
**Table** | Pointer to **string** | The name of the table in Snowflake to query data from. | [optional] 
**TimestampColumn** | Pointer to **string** | The column containing timestamp values used for incremental loading | [optional] 
**EventType** | Pointer to **string** | Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types | [optional] 
**FilterTerm** | Pointer to **string** | Limits the results to only users who&#39;s name or login start with the search term. | [optional] 
**OrgSlug** | Pointer to **string** | The ID or slug of the organization | [optional] 
**EnablePagination** | Pointer to **bool** | Enable pagination support | [optional] 
**GraphqlQuery** | Pointer to **string** | The GraphQL query to execute against the endpoint to fetch data | [optional] 
**HasNextPagePath** | Pointer to **string** | JSONPath location to check if there are more pages | [optional] 
**PaginationCursorPath** | Pointer to **string** | JSONPath location for pagination cursor/token | [optional] 
**Variables** | Pointer to [**[]MonadGraphqlInputVariable**](MonadGraphqlInputVariable.md) | GraphQL query variables to pass with each request | [optional] 
**AssetTypes** | Pointer to **[]string** | Asset types for Wiz. Ex: &#39;VIRTUAL_MACHINE&#39;, &#39;CONTAINER&#39;, etc. | [optional] 
**ResourceNames** | Pointer to **[]string** | The resources to query logs from. | [optional] 
**EndpointUrl** | Pointer to **string** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/vulnerability-findings&#39;. | [optional] 
**Result** | Pointer to **[]string** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. | [optional] 
**Status** | Pointer to **[]string** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. | [optional] 
**EnableProtoPayloadParsing** | Pointer to **bool** | Enables automatic parsing of embedded protocol buffer payloads within the input. | [optional] 
**Filter** | Pointer to [**CognitoUsersFilter**](CognitoUsersFilter.md) |  | [optional] 
**CloudPlatform** | Pointer to **[]string** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**EntityType** | Pointer to **[]string** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. | [optional] 
**FullSnapshot** | Pointer to **bool** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. | [optional] 
**Interval** | Pointer to **int32** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. | [optional] 
**AccountId** | Pointer to **string** | Account ID for the input | [optional] 
**ZoneIds** | Pointer to **[]string** | List of zone IDs (for zone-level rulesets). If empty and AccountID is not specified, fetches from all zones. | [optional] 
**IncludeBotFields** | Pointer to **bool** | Include Bot Management fields (requires Enterprise plan with Bot Management add-on) | [optional] 
**ZoneId** | Pointer to **string** | Cloudflare Zone ID | [optional] 
**Fields** | Pointer to **[]string** | Fields to include in the query. Leave empty to use default curated list. Only fields available to your account will be included (validated against API). Maximum 50 fields due to API constraints. | [optional] 
**ExcludeCdnCgi** | Pointer to **bool** | Exclude connections to Cloudflare /cdn-cgi paths. Default: true | [optional] 
**ExcludeIssueType** | Pointer to **[]string** | Filter to exclude specific issue types. Applied after the include filter. | [optional] 
**ExcludeSeverity** | Pointer to **[]string** | Filter to exclude specific severity levels. Applied after the include filter. | [optional] 
**IssueType** | Pointer to **string** | IssueType to filter issues by type e.g. issue, incident, etc. | [optional] 
**FilterMyScans** | Pointer to **bool** | Filter to only show scans created by the current API token | [optional] 
**ParentEntityId** | Pointer to **string** | The system-generated ID of the parent entity that is associated with the primary entity affected by the alert. | [optional] 
**ParentEntityType** | Pointer to **string** | The system-generated name of the parent entity that is associated with the primary entity affected by the alert. | [optional] 
**OrgId** | Pointer to **string** | URL of the organization | [optional] 
**UserPoolId** | Pointer to **string** | User Pool ID to extract users from | [optional] 
**ApiKeyId** | Pointer to **string** | API Key ID for authentication | [optional] 
**DomainName** | Pointer to **string** | TODO: Name of domain added on Polymer Hub portal | [optional] 
**AwsQueueUrl** | Pointer to **string** | AWS SQS queue URL provided to you by the CrowdStrike Falcon console | [optional] 
**AwsRegionName** | Pointer to **string** | Name of the region where the queue resides | [optional] 
**AwsS3Url** | Pointer to **string** | The URL of the S3 bucket | [optional] 
**VisibilityTimeout** | Pointer to **int32** | Time in seconds before a message is returned back to the SQS queue | [optional] 
**Environment** | Pointer to **string** | Determines the URI {environment}.docusign.com | [optional] 
**UserId** | Pointer to **string** | ID of the user to harvest audit logs for | [optional] 
**Category** | Pointer to **string** | The Category of logs to query | [optional] 
**FieldOption** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. | [optional] 
**Namespace** | Pointer to **string** | Your Endor Labs organization namespace (e.g., \&quot;your-org\&quot;) | [optional] 
**WorkspaceId** | Pointer to **string** | The workspace ID of the Log Analytics workspace | [optional] 
**AppName** | Pointer to **string** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. | [optional] 
**Cloud** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**MemberCid** | Pointer to **string** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. | [optional] 
**Repo** | Pointer to **string** | A repository slug to filter full-scans by. | [optional] 
**Confidential** | Pointer to **bool** | Confidential to filter issues by confidentiality status. Confidential &#x3D; true means only show confidential issues. | [optional] 
**GitlabUrl** | Pointer to **string** | GitLab URL (for Custom-Urls when self hosting. Defaults to https://gitlab.com.) | [optional] 
**ProjectId** | Pointer to **string** | The Google Cloud project ID to use | [optional] 
**State** | Pointer to **string** | State to filter issues by e.g. opened, closed | [optional] 
**WithLabelDetails** | Pointer to **bool** | Include label details in the response | [optional] 
**BucketName** | Pointer to **string** | The name of the Google Cloud Storage bucket to use | [optional] 
**AnalyzerArn** | Pointer to **string** | The [ARN of the analyzer] to retrieve findings from. | [optional] 
**Filters** | Pointer to [**[]SecurityGroupsFilter**](SecurityGroupsFilter.md) | Filters for the security groups | [optional] 
**AlertType** | Pointer to **string** | Filter by alert type (e.g., policy_violated, tag_conflict) | [optional] 
**Embed** | Pointer to **string** | Embed related resources in the data returned (e.g., read-consolidated-alert) | [optional] 
**PrimaryEntityType** | Pointer to **string** | Filter by primary entity type (e.g., aws_ebs_volume, vmware_vm) | [optional] 
**PrimaryEntityValue** | Pointer to **string** | Filter by primary entity value (contains search) | [optional] 
**Severities** | Pointer to **[]string** | @Description Filter Issues according to Control severity | [optional] 
**SeverityFilter** | Pointer to [**[]TypesStringFilter**](TypesStringFilter.md) |  | [optional] 
**ControlIds** | Pointer to **[]string** | @Description Filter Issues created by specific control IDs | [optional] 
**HasNote** | Pointer to **string** | @Description Filter Issues with or without a note | [optional] 
**HasRemediation** | Pointer to **string** | @Description Filter Issues with or without remediation | [optional] 
**HasServiceTicket** | Pointer to **string** | @Description Filter Issues with or without related service ticket | [optional] 
**IssueIds** | Pointer to **[]string** | @Description Filter only Issues that match these specific IDs | [optional] 
**IssueTypes** | Pointer to **[]string** | @Description Filter by Issue type | [optional] 
**ProjectIds** | Pointer to **[]string** | @Description Filter Issues associated with specific project IDs | [optional] 
**RelatedEntityId** | Pointer to **string** | @Description Filter by related entity ids | [optional] 
**ResolutionReasons** | Pointer to **[]string** | @Description Filter Issues by resolution reason | [optional] 
**RiskEqualsAll** | Pointer to **[]string** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present | [optional] 
**RiskEqualsAny** | Pointer to **[]string** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name | [optional] 
**SearchQuery** | Pointer to **string** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found | [optional] 
**SecurityScan** | Pointer to **string** | @Description Filter by security scan source | [optional] 
**StackLayers** | Pointer to **[]string** | @Description Filter Issues from specific stack layers | [optional] 
**TenantDataCenter** | Pointer to **string** | DataCenter represents the tenant&#39;s data center location. Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; | [optional] 
**KmsType** | Pointer to **string** | Type of KMS resources to list | [optional] 
**AuditLogTypes** | Pointer to **[]string** | Filter audit logs by type(s). Available types: approval_requests, devices, endpoints, extensions, firewall. Leave empty to fetch all types. | [optional] 
**BaseUrl** | Pointer to **string** | The base URL of your GraphQL endpoint including the path | [optional] 
**LogType** | Pointer to **string** |  | [optional] 
**Endpoint** | Pointer to **string** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) | [optional] 
**SkipSslVerification** | Pointer to **bool** | Skip SSL verification for self-signed certificates | [optional] 
**UsePathStyle** | Pointer to **bool** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. | [optional] 
**Subdomain** | Pointer to **string** | SubDomain is a placeholder that represents your specific OneLogin subdomain. | [optional] 
**CategoryType** | Pointer to **string** | The category of logs to pull | [optional] 
**Domain** | Pointer to **string** | Domain name for the Oracle Cloud service | [optional] 
**Username** | Pointer to **string** | Username of Oracle Cloud service user with permissions to access the resource | [optional] 
**GithubAppInstallationId** | Pointer to **string** | GitHub App Installation ID (required when using GitHub App authentication) | [optional] 
**GithubClientId** | Pointer to **string** | GitHub Client ID (alternative to personal access token) | [optional] 
**ChildType** | Pointer to **string** | Specifies whether to list AWS accounts or organizational units (OUs) as children of the parent entity. | [optional] 
**ParentId** | Pointer to **string** | Parent ID to list children for | [optional] 
**DomainUrl** | Pointer to **string** | Domain URL for the Salesforce instance | [optional] 
**Topic** | Pointer to **string** | Pub/Sub topic to subscribe to | [optional] 
**EvaluationContextIdentifier** | Pointer to **string** | Filters proactive resource evaluations for a given infrastructure deployment. | [optional] 
**IncludeInactive** | Pointer to **bool** | Include inactive users in the results | [optional] 
**IncludePlannedDeletion** | Pointer to **bool** | Whether or not to include secrets scheduled for deletion | [optional] 
**HostName** | Pointer to **string** | For self-hosted, specify your host name here. Otherwise, leave it default as sentry.io. | [optional] 
**TeamId** | Pointer to **string** | Filter by the given team. | [optional] 
**Account** | Pointer to **string** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**Database** | Pointer to **string** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**Role** | Pointer to **string** | The name of the Role your service account was granted which can access your resources. | [optional] 
**Schema** | Pointer to **string** | The schema within the Snowflake database where the target table resides. | [optional] 
**Warehouse** | Pointer to **string** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 
**Rate** | Pointer to **int32** | The rate at which to generate records (between 1 and 1000) per second | [optional] 
**RecordType** | Pointer to **string** | The type of record to generate | [optional] 
**CustomTemplate** | Pointer to **string** | A custom template using the functions we provide to generate demo data | [optional] 
**OrgUrl** | Pointer to **string** | The URL of the Okta organization | [optional] 
**UserRoleOption** | Pointer to **string** | Allows for filtering the output by user role. | [optional] 
**UserTypeOption** | Pointer to **string** | Allows for filtering the output by user type. | [optional] 
**OperationNames** | Pointer to **[]string** | Filter by specific operation names (optional) | [optional] 
**TenantDomain** | Pointer to **string** | The Tines tenant domain (e.g., your-org.tines.com) | [optional] 
**UserIds** | Pointer to **[]string** | Filter by specific user IDs (optional) | [optional] 
**StoryId** | Pointer to **string** | Filter by the given story. | [optional] 
**TenantUrl** | Pointer to **string** | Unique URL for your Tines instance | [optional] 
**ActorSid** | Pointer to **string** | Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials. | [optional] 
**ReplicationStartTime** | Pointer to **string** | Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39; | [optional] 
**ResourceSid** | Pointer to **string** | Only include events that refer to this resource. Useful for discovering the history of a specific resource. | [optional] 
**InstanceName** | Pointer to **string** | Name of the ServiceNow instance | [optional] 
**Streams** | Pointer to **[]string** | ServiceNow streams to fetch data from | [optional] 
**WithPayload** | Pointer to **bool** | Whether to include detailed payload information in the events. | [optional] 
**AssetStatus** | Pointer to **[]string** | Asset status types for Wiz. Ex: &#39;ACTIVE&#39;, &#39;INACTIVE&#39;. | [optional] 
**DetectionMethod** | Pointer to **[]string** | Detection method types for Wiz. Ex: &#39;AGENT&#39;, &#39;CLOUD&#39;, &#39;AGENT_CLOUD&#39;. | [optional] 
**VendorSeverity** | Pointer to **[]string** | Vendor severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. | [optional] 
**EmailAddress** | Pointer to **string** | This is the email address registered with your Zendesk account | [optional] 
**SubDomain** | Pointer to **string** | This is the subdomain found in your Zendesk account URL For example, if the URL is https://demo.zendesk.com then the subdomain will be demo | [optional] 

## Methods

### NewSecretProcessesorInputConfigSettings

`func NewSecretProcessesorInputConfigSettings() *SecretProcessesorInputConfigSettings`

NewSecretProcessesorInputConfigSettings instantiates a new SecretProcessesorInputConfigSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecretProcessesorInputConfigSettingsWithDefaults

`func NewSecretProcessesorInputConfigSettingsWithDefaults() *SecretProcessesorInputConfigSettings`

NewSecretProcessesorInputConfigSettingsWithDefaults instantiates a new SecretProcessesorInputConfigSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFleetUrl

`func (o *SecretProcessesorInputConfigSettings) GetFleetUrl() string`

GetFleetUrl returns the FleetUrl field if non-nil, zero value otherwise.

### GetFleetUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetFleetUrlOk() (*string, bool)`

GetFleetUrlOk returns a tuple with the FleetUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFleetUrl

`func (o *SecretProcessesorInputConfigSettings) SetFleetUrl(v string)`

SetFleetUrl sets FleetUrl field to given value.

### HasFleetUrl

`func (o *SecretProcessesorInputConfigSettings) HasFleetUrl() bool`

HasFleetUrl returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *SecretProcessesorInputConfigSettings) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *SecretProcessesorInputConfigSettings) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *SecretProcessesorInputConfigSettings) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *SecretProcessesorInputConfigSettings) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetHost

`func (o *SecretProcessesorInputConfigSettings) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *SecretProcessesorInputConfigSettings) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *SecretProcessesorInputConfigSettings) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *SecretProcessesorInputConfigSettings) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetActorType

`func (o *SecretProcessesorInputConfigSettings) GetActorType() string`

GetActorType returns the ActorType field if non-nil, zero value otherwise.

### GetActorTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetActorTypeOk() (*string, bool)`

GetActorTypeOk returns a tuple with the ActorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActorType

`func (o *SecretProcessesorInputConfigSettings) SetActorType(v string)`

SetActorType sets ActorType field to given value.

### HasActorType

`func (o *SecretProcessesorInputConfigSettings) HasActorType() bool`

HasActorType returns a boolean if a field has been set.

### GetCloudType

`func (o *SecretProcessesorInputConfigSettings) GetCloudType() string`

GetCloudType returns the CloudType field if non-nil, zero value otherwise.

### GetCloudTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetCloudTypeOk() (*string, bool)`

GetCloudTypeOk returns a tuple with the CloudType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudType

`func (o *SecretProcessesorInputConfigSettings) SetCloudType(v string)`

SetCloudType sets CloudType field to given value.

### HasCloudType

`func (o *SecretProcessesorInputConfigSettings) HasCloudType() bool`

HasCloudType returns a boolean if a field has been set.

### GetCron

`func (o *SecretProcessesorInputConfigSettings) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SecretProcessesorInputConfigSettings) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SecretProcessesorInputConfigSettings) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *SecretProcessesorInputConfigSettings) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetSort

`func (o *SecretProcessesorInputConfigSettings) GetSort() string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *SecretProcessesorInputConfigSettings) GetSortOk() (*string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *SecretProcessesorInputConfigSettings) SetSort(v string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *SecretProcessesorInputConfigSettings) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetTargetIndustries

`func (o *SecretProcessesorInputConfigSettings) GetTargetIndustries() string`

GetTargetIndustries returns the TargetIndustries field if non-nil, zero value otherwise.

### GetTargetIndustriesOk

`func (o *SecretProcessesorInputConfigSettings) GetTargetIndustriesOk() (*string, bool)`

GetTargetIndustriesOk returns a tuple with the TargetIndustries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetIndustries

`func (o *SecretProcessesorInputConfigSettings) SetTargetIndustries(v string)`

SetTargetIndustries sets TargetIndustries field to given value.

### HasTargetIndustries

`func (o *SecretProcessesorInputConfigSettings) HasTargetIndustries() bool`

HasTargetIndustries returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *SecretProcessesorInputConfigSettings) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *SecretProcessesorInputConfigSettings) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *SecretProcessesorInputConfigSettings) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *SecretProcessesorInputConfigSettings) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetProject

`func (o *SecretProcessesorInputConfigSettings) GetProject() string`

GetProject returns the Project field if non-nil, zero value otherwise.

### GetProjectOk

`func (o *SecretProcessesorInputConfigSettings) GetProjectOk() (*string, bool)`

GetProjectOk returns a tuple with the Project field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProject

`func (o *SecretProcessesorInputConfigSettings) SetProject(v string)`

SetProject sets Project field to given value.

### HasProject

`func (o *SecretProcessesorInputConfigSettings) HasProject() bool`

HasProject returns a boolean if a field has been set.

### GetService

`func (o *SecretProcessesorInputConfigSettings) GetService() string`

GetService returns the Service field if non-nil, zero value otherwise.

### GetServiceOk

`func (o *SecretProcessesorInputConfigSettings) GetServiceOk() (*string, bool)`

GetServiceOk returns a tuple with the Service field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetService

`func (o *SecretProcessesorInputConfigSettings) SetService(v string)`

SetService sets Service field to given value.

### HasService

`func (o *SecretProcessesorInputConfigSettings) HasService() bool`

HasService returns a boolean if a field has been set.

### GetAuthType

`func (o *SecretProcessesorInputConfigSettings) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *SecretProcessesorInputConfigSettings) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *SecretProcessesorInputConfigSettings) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetEmail

`func (o *SecretProcessesorInputConfigSettings) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *SecretProcessesorInputConfigSettings) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *SecretProcessesorInputConfigSettings) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *SecretProcessesorInputConfigSettings) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetIntervalSeconds

`func (o *SecretProcessesorInputConfigSettings) GetIntervalSeconds() int32`

GetIntervalSeconds returns the IntervalSeconds field if non-nil, zero value otherwise.

### GetIntervalSecondsOk

`func (o *SecretProcessesorInputConfigSettings) GetIntervalSecondsOk() (*int32, bool)`

GetIntervalSecondsOk returns a tuple with the IntervalSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervalSeconds

`func (o *SecretProcessesorInputConfigSettings) SetIntervalSeconds(v int32)`

SetIntervalSeconds sets IntervalSeconds field to given value.

### HasIntervalSeconds

`func (o *SecretProcessesorInputConfigSettings) HasIntervalSeconds() bool`

HasIntervalSeconds returns a boolean if a field has been set.

### GetActions

`func (o *SecretProcessesorInputConfigSettings) GetActions() []string`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *SecretProcessesorInputConfigSettings) GetActionsOk() (*[]string, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *SecretProcessesorInputConfigSettings) SetActions(v []string)`

SetActions sets Actions field to given value.

### HasActions

`func (o *SecretProcessesorInputConfigSettings) HasActions() bool`

HasActions returns a boolean if a field has been set.

### GetActor

`func (o *SecretProcessesorInputConfigSettings) GetActor() string`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *SecretProcessesorInputConfigSettings) GetActorOk() (*string, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *SecretProcessesorInputConfigSettings) SetActor(v string)`

SetActor sets Actor field to given value.

### HasActor

`func (o *SecretProcessesorInputConfigSettings) HasActor() bool`

HasActor returns a boolean if a field has been set.

### GetCountry

`func (o *SecretProcessesorInputConfigSettings) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *SecretProcessesorInputConfigSettings) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *SecretProcessesorInputConfigSettings) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *SecretProcessesorInputConfigSettings) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetEnterprise

`func (o *SecretProcessesorInputConfigSettings) GetEnterprise() string`

GetEnterprise returns the Enterprise field if non-nil, zero value otherwise.

### GetEnterpriseOk

`func (o *SecretProcessesorInputConfigSettings) GetEnterpriseOk() (*string, bool)`

GetEnterpriseOk returns a tuple with the Enterprise field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnterprise

`func (o *SecretProcessesorInputConfigSettings) SetEnterprise(v string)`

SetEnterprise sets Enterprise field to given value.

### HasEnterprise

`func (o *SecretProcessesorInputConfigSettings) HasEnterprise() bool`

HasEnterprise returns a boolean if a field has been set.

### GetInclude

`func (o *SecretProcessesorInputConfigSettings) GetInclude() string`

GetInclude returns the Include field if non-nil, zero value otherwise.

### GetIncludeOk

`func (o *SecretProcessesorInputConfigSettings) GetIncludeOk() (*string, bool)`

GetIncludeOk returns a tuple with the Include field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclude

`func (o *SecretProcessesorInputConfigSettings) SetInclude(v string)`

SetInclude sets Include field to given value.

### HasInclude

`func (o *SecretProcessesorInputConfigSettings) HasInclude() bool`

HasInclude returns a boolean if a field has been set.

### GetOrganization

`func (o *SecretProcessesorInputConfigSettings) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *SecretProcessesorInputConfigSettings) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *SecretProcessesorInputConfigSettings) SetOrganization(v string)`

SetOrganization sets Organization field to given value.

### HasOrganization

`func (o *SecretProcessesorInputConfigSettings) HasOrganization() bool`

HasOrganization returns a boolean if a field has been set.

### GetRepository

`func (o *SecretProcessesorInputConfigSettings) GetRepository() string`

GetRepository returns the Repository field if non-nil, zero value otherwise.

### GetRepositoryOk

`func (o *SecretProcessesorInputConfigSettings) GetRepositoryOk() (*string, bool)`

GetRepositoryOk returns a tuple with the Repository field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepository

`func (o *SecretProcessesorInputConfigSettings) SetRepository(v string)`

SetRepository sets Repository field to given value.

### HasRepository

`func (o *SecretProcessesorInputConfigSettings) HasRepository() bool`

HasRepository returns a boolean if a field has been set.

### GetUser

`func (o *SecretProcessesorInputConfigSettings) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *SecretProcessesorInputConfigSettings) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *SecretProcessesorInputConfigSettings) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *SecretProcessesorInputConfigSettings) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetRegion

`func (o *SecretProcessesorInputConfigSettings) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *SecretProcessesorInputConfigSettings) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *SecretProcessesorInputConfigSettings) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *SecretProcessesorInputConfigSettings) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *SecretProcessesorInputConfigSettings) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *SecretProcessesorInputConfigSettings) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *SecretProcessesorInputConfigSettings) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *SecretProcessesorInputConfigSettings) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetSeverity

`func (o *SecretProcessesorInputConfigSettings) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *SecretProcessesorInputConfigSettings) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *SecretProcessesorInputConfigSettings) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *SecretProcessesorInputConfigSettings) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetBucket

`func (o *SecretProcessesorInputConfigSettings) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *SecretProcessesorInputConfigSettings) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *SecretProcessesorInputConfigSettings) SetBucket(v string)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *SecretProcessesorInputConfigSettings) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetCompression

`func (o *SecretProcessesorInputConfigSettings) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *SecretProcessesorInputConfigSettings) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *SecretProcessesorInputConfigSettings) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *SecretProcessesorInputConfigSettings) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetFormat

`func (o *SecretProcessesorInputConfigSettings) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *SecretProcessesorInputConfigSettings) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *SecretProcessesorInputConfigSettings) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *SecretProcessesorInputConfigSettings) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *SecretProcessesorInputConfigSettings) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *SecretProcessesorInputConfigSettings) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *SecretProcessesorInputConfigSettings) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *SecretProcessesorInputConfigSettings) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *SecretProcessesorInputConfigSettings) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *SecretProcessesorInputConfigSettings) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *SecretProcessesorInputConfigSettings) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *SecretProcessesorInputConfigSettings) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRecordLocation

`func (o *SecretProcessesorInputConfigSettings) GetRecordLocation() string`

GetRecordLocation returns the RecordLocation field if non-nil, zero value otherwise.

### GetRecordLocationOk

`func (o *SecretProcessesorInputConfigSettings) GetRecordLocationOk() (*string, bool)`

GetRecordLocationOk returns a tuple with the RecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocation

`func (o *SecretProcessesorInputConfigSettings) SetRecordLocation(v string)`

SetRecordLocation sets RecordLocation field to given value.

### HasRecordLocation

`func (o *SecretProcessesorInputConfigSettings) HasRecordLocation() bool`

HasRecordLocation returns a boolean if a field has been set.

### GetQueueUrl

`func (o *SecretProcessesorInputConfigSettings) GetQueueUrl() string`

GetQueueUrl returns the QueueUrl field if non-nil, zero value otherwise.

### GetQueueUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetQueueUrlOk() (*string, bool)`

GetQueueUrlOk returns a tuple with the QueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueUrl

`func (o *SecretProcessesorInputConfigSettings) SetQueueUrl(v string)`

SetQueueUrl sets QueueUrl field to given value.

### HasQueueUrl

`func (o *SecretProcessesorInputConfigSettings) HasQueueUrl() bool`

HasQueueUrl returns a boolean if a field has been set.

### GetWithMetadata

`func (o *SecretProcessesorInputConfigSettings) GetWithMetadata() bool`

GetWithMetadata returns the WithMetadata field if non-nil, zero value otherwise.

### GetWithMetadataOk

`func (o *SecretProcessesorInputConfigSettings) GetWithMetadataOk() (*bool, bool)`

GetWithMetadataOk returns a tuple with the WithMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithMetadata

`func (o *SecretProcessesorInputConfigSettings) SetWithMetadata(v bool)`

SetWithMetadata sets WithMetadata field to given value.

### HasWithMetadata

`func (o *SecretProcessesorInputConfigSettings) HasWithMetadata() bool`

HasWithMetadata returns a boolean if a field has been set.

### GetCorrelationId

`func (o *SecretProcessesorInputConfigSettings) GetCorrelationId() string`

GetCorrelationId returns the CorrelationId field if non-nil, zero value otherwise.

### GetCorrelationIdOk

`func (o *SecretProcessesorInputConfigSettings) GetCorrelationIdOk() (*string, bool)`

GetCorrelationIdOk returns a tuple with the CorrelationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationId

`func (o *SecretProcessesorInputConfigSettings) SetCorrelationId(v string)`

SetCorrelationId sets CorrelationId field to given value.

### HasCorrelationId

`func (o *SecretProcessesorInputConfigSettings) HasCorrelationId() bool`

HasCorrelationId returns a boolean if a field has been set.

### GetResourceGroupName

`func (o *SecretProcessesorInputConfigSettings) GetResourceGroupName() string`

GetResourceGroupName returns the ResourceGroupName field if non-nil, zero value otherwise.

### GetResourceGroupNameOk

`func (o *SecretProcessesorInputConfigSettings) GetResourceGroupNameOk() (*string, bool)`

GetResourceGroupNameOk returns a tuple with the ResourceGroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceGroupName

`func (o *SecretProcessesorInputConfigSettings) SetResourceGroupName(v string)`

SetResourceGroupName sets ResourceGroupName field to given value.

### HasResourceGroupName

`func (o *SecretProcessesorInputConfigSettings) HasResourceGroupName() bool`

HasResourceGroupName returns a boolean if a field has been set.

### GetResourceProvider

`func (o *SecretProcessesorInputConfigSettings) GetResourceProvider() string`

GetResourceProvider returns the ResourceProvider field if non-nil, zero value otherwise.

### GetResourceProviderOk

`func (o *SecretProcessesorInputConfigSettings) GetResourceProviderOk() (*string, bool)`

GetResourceProviderOk returns a tuple with the ResourceProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceProvider

`func (o *SecretProcessesorInputConfigSettings) SetResourceProvider(v string)`

SetResourceProvider sets ResourceProvider field to given value.

### HasResourceProvider

`func (o *SecretProcessesorInputConfigSettings) HasResourceProvider() bool`

HasResourceProvider returns a boolean if a field has been set.

### GetResourceUri

`func (o *SecretProcessesorInputConfigSettings) GetResourceUri() string`

GetResourceUri returns the ResourceUri field if non-nil, zero value otherwise.

### GetResourceUriOk

`func (o *SecretProcessesorInputConfigSettings) GetResourceUriOk() (*string, bool)`

GetResourceUriOk returns a tuple with the ResourceUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceUri

`func (o *SecretProcessesorInputConfigSettings) SetResourceUri(v string)`

SetResourceUri sets ResourceUri field to given value.

### HasResourceUri

`func (o *SecretProcessesorInputConfigSettings) HasResourceUri() bool`

HasResourceUri returns a boolean if a field has been set.

### GetSubscriptionId

`func (o *SecretProcessesorInputConfigSettings) GetSubscriptionId() string`

GetSubscriptionId returns the SubscriptionId field if non-nil, zero value otherwise.

### GetSubscriptionIdOk

`func (o *SecretProcessesorInputConfigSettings) GetSubscriptionIdOk() (*string, bool)`

GetSubscriptionIdOk returns a tuple with the SubscriptionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionId

`func (o *SecretProcessesorInputConfigSettings) SetSubscriptionId(v string)`

SetSubscriptionId sets SubscriptionId field to given value.

### HasSubscriptionId

`func (o *SecretProcessesorInputConfigSettings) HasSubscriptionId() bool`

HasSubscriptionId returns a boolean if a field has been set.

### GetTenantId

`func (o *SecretProcessesorInputConfigSettings) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *SecretProcessesorInputConfigSettings) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *SecretProcessesorInputConfigSettings) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *SecretProcessesorInputConfigSettings) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetAccountUrl

`func (o *SecretProcessesorInputConfigSettings) GetAccountUrl() string`

GetAccountUrl returns the AccountUrl field if non-nil, zero value otherwise.

### GetAccountUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetAccountUrlOk() (*string, bool)`

GetAccountUrlOk returns a tuple with the AccountUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUrl

`func (o *SecretProcessesorInputConfigSettings) SetAccountUrl(v string)`

SetAccountUrl sets AccountUrl field to given value.

### HasAccountUrl

`func (o *SecretProcessesorInputConfigSettings) HasAccountUrl() bool`

HasAccountUrl returns a boolean if a field has been set.

### GetContainer

`func (o *SecretProcessesorInputConfigSettings) GetContainer() string`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *SecretProcessesorInputConfigSettings) GetContainerOk() (*string, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *SecretProcessesorInputConfigSettings) SetContainer(v string)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *SecretProcessesorInputConfigSettings) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetConsumerGroup

`func (o *SecretProcessesorInputConfigSettings) GetConsumerGroup() string`

GetConsumerGroup returns the ConsumerGroup field if non-nil, zero value otherwise.

### GetConsumerGroupOk

`func (o *SecretProcessesorInputConfigSettings) GetConsumerGroupOk() (*string, bool)`

GetConsumerGroupOk returns a tuple with the ConsumerGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumerGroup

`func (o *SecretProcessesorInputConfigSettings) SetConsumerGroup(v string)`

SetConsumerGroup sets ConsumerGroup field to given value.

### HasConsumerGroup

`func (o *SecretProcessesorInputConfigSettings) HasConsumerGroup() bool`

HasConsumerGroup returns a boolean if a field has been set.

### GetEventHubName

`func (o *SecretProcessesorInputConfigSettings) GetEventHubName() string`

GetEventHubName returns the EventHubName field if non-nil, zero value otherwise.

### GetEventHubNameOk

`func (o *SecretProcessesorInputConfigSettings) GetEventHubNameOk() (*string, bool)`

GetEventHubNameOk returns a tuple with the EventHubName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventHubName

`func (o *SecretProcessesorInputConfigSettings) SetEventHubName(v string)`

SetEventHubName sets EventHubName field to given value.

### HasEventHubName

`func (o *SecretProcessesorInputConfigSettings) HasEventHubName() bool`

HasEventHubName returns a boolean if a field has been set.

### GetEventHubNamespace

`func (o *SecretProcessesorInputConfigSettings) GetEventHubNamespace() string`

GetEventHubNamespace returns the EventHubNamespace field if non-nil, zero value otherwise.

### GetEventHubNamespaceOk

`func (o *SecretProcessesorInputConfigSettings) GetEventHubNamespaceOk() (*string, bool)`

GetEventHubNamespaceOk returns a tuple with the EventHubNamespace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventHubNamespace

`func (o *SecretProcessesorInputConfigSettings) SetEventHubNamespace(v string)`

SetEventHubNamespace sets EventHubNamespace field to given value.

### HasEventHubNamespace

`func (o *SecretProcessesorInputConfigSettings) HasEventHubNamespace() bool`

HasEventHubNamespace returns a boolean if a field has been set.

### GetLookbackDuration

`func (o *SecretProcessesorInputConfigSettings) GetLookbackDuration() string`

GetLookbackDuration returns the LookbackDuration field if non-nil, zero value otherwise.

### GetLookbackDurationOk

`func (o *SecretProcessesorInputConfigSettings) GetLookbackDurationOk() (*string, bool)`

GetLookbackDurationOk returns a tuple with the LookbackDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLookbackDuration

`func (o *SecretProcessesorInputConfigSettings) SetLookbackDuration(v string)`

SetLookbackDuration sets LookbackDuration field to given value.

### HasLookbackDuration

`func (o *SecretProcessesorInputConfigSettings) HasLookbackDuration() bool`

HasLookbackDuration returns a boolean if a field has been set.

### GetStorageAccountUrl

`func (o *SecretProcessesorInputConfigSettings) GetStorageAccountUrl() string`

GetStorageAccountUrl returns the StorageAccountUrl field if non-nil, zero value otherwise.

### GetStorageAccountUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetStorageAccountUrlOk() (*string, bool)`

GetStorageAccountUrlOk returns a tuple with the StorageAccountUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageAccountUrl

`func (o *SecretProcessesorInputConfigSettings) SetStorageAccountUrl(v string)`

SetStorageAccountUrl sets StorageAccountUrl field to given value.

### HasStorageAccountUrl

`func (o *SecretProcessesorInputConfigSettings) HasStorageAccountUrl() bool`

HasStorageAccountUrl returns a boolean if a field has been set.

### GetVirtualNetworkName

`func (o *SecretProcessesorInputConfigSettings) GetVirtualNetworkName() string`

GetVirtualNetworkName returns the VirtualNetworkName field if non-nil, zero value otherwise.

### GetVirtualNetworkNameOk

`func (o *SecretProcessesorInputConfigSettings) GetVirtualNetworkNameOk() (*string, bool)`

GetVirtualNetworkNameOk returns a tuple with the VirtualNetworkName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualNetworkName

`func (o *SecretProcessesorInputConfigSettings) SetVirtualNetworkName(v string)`

SetVirtualNetworkName sets VirtualNetworkName field to given value.

### HasVirtualNetworkName

`func (o *SecretProcessesorInputConfigSettings) HasVirtualNetworkName() bool`

HasVirtualNetworkName returns a boolean if a field has been set.

### GetDataset

`func (o *SecretProcessesorInputConfigSettings) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *SecretProcessesorInputConfigSettings) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *SecretProcessesorInputConfigSettings) SetDataset(v string)`

SetDataset sets Dataset field to given value.

### HasDataset

`func (o *SecretProcessesorInputConfigSettings) HasDataset() bool`

HasDataset returns a boolean if a field has been set.

### GetQuery

`func (o *SecretProcessesorInputConfigSettings) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SecretProcessesorInputConfigSettings) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SecretProcessesorInputConfigSettings) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *SecretProcessesorInputConfigSettings) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetTable

`func (o *SecretProcessesorInputConfigSettings) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *SecretProcessesorInputConfigSettings) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *SecretProcessesorInputConfigSettings) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *SecretProcessesorInputConfigSettings) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetTimestampColumn

`func (o *SecretProcessesorInputConfigSettings) GetTimestampColumn() string`

GetTimestampColumn returns the TimestampColumn field if non-nil, zero value otherwise.

### GetTimestampColumnOk

`func (o *SecretProcessesorInputConfigSettings) GetTimestampColumnOk() (*string, bool)`

GetTimestampColumnOk returns a tuple with the TimestampColumn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampColumn

`func (o *SecretProcessesorInputConfigSettings) SetTimestampColumn(v string)`

SetTimestampColumn sets TimestampColumn field to given value.

### HasTimestampColumn

`func (o *SecretProcessesorInputConfigSettings) HasTimestampColumn() bool`

HasTimestampColumn returns a boolean if a field has been set.

### GetEventType

`func (o *SecretProcessesorInputConfigSettings) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *SecretProcessesorInputConfigSettings) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *SecretProcessesorInputConfigSettings) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetFilterTerm

`func (o *SecretProcessesorInputConfigSettings) GetFilterTerm() string`

GetFilterTerm returns the FilterTerm field if non-nil, zero value otherwise.

### GetFilterTermOk

`func (o *SecretProcessesorInputConfigSettings) GetFilterTermOk() (*string, bool)`

GetFilterTermOk returns a tuple with the FilterTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterTerm

`func (o *SecretProcessesorInputConfigSettings) SetFilterTerm(v string)`

SetFilterTerm sets FilterTerm field to given value.

### HasFilterTerm

`func (o *SecretProcessesorInputConfigSettings) HasFilterTerm() bool`

HasFilterTerm returns a boolean if a field has been set.

### GetOrgSlug

`func (o *SecretProcessesorInputConfigSettings) GetOrgSlug() string`

GetOrgSlug returns the OrgSlug field if non-nil, zero value otherwise.

### GetOrgSlugOk

`func (o *SecretProcessesorInputConfigSettings) GetOrgSlugOk() (*string, bool)`

GetOrgSlugOk returns a tuple with the OrgSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgSlug

`func (o *SecretProcessesorInputConfigSettings) SetOrgSlug(v string)`

SetOrgSlug sets OrgSlug field to given value.

### HasOrgSlug

`func (o *SecretProcessesorInputConfigSettings) HasOrgSlug() bool`

HasOrgSlug returns a boolean if a field has been set.

### GetEnablePagination

`func (o *SecretProcessesorInputConfigSettings) GetEnablePagination() bool`

GetEnablePagination returns the EnablePagination field if non-nil, zero value otherwise.

### GetEnablePaginationOk

`func (o *SecretProcessesorInputConfigSettings) GetEnablePaginationOk() (*bool, bool)`

GetEnablePaginationOk returns a tuple with the EnablePagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnablePagination

`func (o *SecretProcessesorInputConfigSettings) SetEnablePagination(v bool)`

SetEnablePagination sets EnablePagination field to given value.

### HasEnablePagination

`func (o *SecretProcessesorInputConfigSettings) HasEnablePagination() bool`

HasEnablePagination returns a boolean if a field has been set.

### GetGraphqlQuery

`func (o *SecretProcessesorInputConfigSettings) GetGraphqlQuery() string`

GetGraphqlQuery returns the GraphqlQuery field if non-nil, zero value otherwise.

### GetGraphqlQueryOk

`func (o *SecretProcessesorInputConfigSettings) GetGraphqlQueryOk() (*string, bool)`

GetGraphqlQueryOk returns a tuple with the GraphqlQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphqlQuery

`func (o *SecretProcessesorInputConfigSettings) SetGraphqlQuery(v string)`

SetGraphqlQuery sets GraphqlQuery field to given value.

### HasGraphqlQuery

`func (o *SecretProcessesorInputConfigSettings) HasGraphqlQuery() bool`

HasGraphqlQuery returns a boolean if a field has been set.

### GetHasNextPagePath

`func (o *SecretProcessesorInputConfigSettings) GetHasNextPagePath() string`

GetHasNextPagePath returns the HasNextPagePath field if non-nil, zero value otherwise.

### GetHasNextPagePathOk

`func (o *SecretProcessesorInputConfigSettings) GetHasNextPagePathOk() (*string, bool)`

GetHasNextPagePathOk returns a tuple with the HasNextPagePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNextPagePath

`func (o *SecretProcessesorInputConfigSettings) SetHasNextPagePath(v string)`

SetHasNextPagePath sets HasNextPagePath field to given value.

### HasHasNextPagePath

`func (o *SecretProcessesorInputConfigSettings) HasHasNextPagePath() bool`

HasHasNextPagePath returns a boolean if a field has been set.

### GetPaginationCursorPath

`func (o *SecretProcessesorInputConfigSettings) GetPaginationCursorPath() string`

GetPaginationCursorPath returns the PaginationCursorPath field if non-nil, zero value otherwise.

### GetPaginationCursorPathOk

`func (o *SecretProcessesorInputConfigSettings) GetPaginationCursorPathOk() (*string, bool)`

GetPaginationCursorPathOk returns a tuple with the PaginationCursorPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaginationCursorPath

`func (o *SecretProcessesorInputConfigSettings) SetPaginationCursorPath(v string)`

SetPaginationCursorPath sets PaginationCursorPath field to given value.

### HasPaginationCursorPath

`func (o *SecretProcessesorInputConfigSettings) HasPaginationCursorPath() bool`

HasPaginationCursorPath returns a boolean if a field has been set.

### GetVariables

`func (o *SecretProcessesorInputConfigSettings) GetVariables() []MonadGraphqlInputVariable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *SecretProcessesorInputConfigSettings) GetVariablesOk() (*[]MonadGraphqlInputVariable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *SecretProcessesorInputConfigSettings) SetVariables(v []MonadGraphqlInputVariable)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *SecretProcessesorInputConfigSettings) HasVariables() bool`

HasVariables returns a boolean if a field has been set.

### GetAssetTypes

`func (o *SecretProcessesorInputConfigSettings) GetAssetTypes() []string`

GetAssetTypes returns the AssetTypes field if non-nil, zero value otherwise.

### GetAssetTypesOk

`func (o *SecretProcessesorInputConfigSettings) GetAssetTypesOk() (*[]string, bool)`

GetAssetTypesOk returns a tuple with the AssetTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetTypes

`func (o *SecretProcessesorInputConfigSettings) SetAssetTypes(v []string)`

SetAssetTypes sets AssetTypes field to given value.

### HasAssetTypes

`func (o *SecretProcessesorInputConfigSettings) HasAssetTypes() bool`

HasAssetTypes returns a boolean if a field has been set.

### GetResourceNames

`func (o *SecretProcessesorInputConfigSettings) GetResourceNames() []string`

GetResourceNames returns the ResourceNames field if non-nil, zero value otherwise.

### GetResourceNamesOk

`func (o *SecretProcessesorInputConfigSettings) GetResourceNamesOk() (*[]string, bool)`

GetResourceNamesOk returns a tuple with the ResourceNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceNames

`func (o *SecretProcessesorInputConfigSettings) SetResourceNames(v []string)`

SetResourceNames sets ResourceNames field to given value.

### HasResourceNames

`func (o *SecretProcessesorInputConfigSettings) HasResourceNames() bool`

HasResourceNames returns a boolean if a field has been set.

### GetEndpointUrl

`func (o *SecretProcessesorInputConfigSettings) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *SecretProcessesorInputConfigSettings) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.

### HasEndpointUrl

`func (o *SecretProcessesorInputConfigSettings) HasEndpointUrl() bool`

HasEndpointUrl returns a boolean if a field has been set.

### GetResult

`func (o *SecretProcessesorInputConfigSettings) GetResult() []string`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *SecretProcessesorInputConfigSettings) GetResultOk() (*[]string, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *SecretProcessesorInputConfigSettings) SetResult(v []string)`

SetResult sets Result field to given value.

### HasResult

`func (o *SecretProcessesorInputConfigSettings) HasResult() bool`

HasResult returns a boolean if a field has been set.

### GetStatus

`func (o *SecretProcessesorInputConfigSettings) GetStatus() []string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SecretProcessesorInputConfigSettings) GetStatusOk() (*[]string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SecretProcessesorInputConfigSettings) SetStatus(v []string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SecretProcessesorInputConfigSettings) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetEnableProtoPayloadParsing

`func (o *SecretProcessesorInputConfigSettings) GetEnableProtoPayloadParsing() bool`

GetEnableProtoPayloadParsing returns the EnableProtoPayloadParsing field if non-nil, zero value otherwise.

### GetEnableProtoPayloadParsingOk

`func (o *SecretProcessesorInputConfigSettings) GetEnableProtoPayloadParsingOk() (*bool, bool)`

GetEnableProtoPayloadParsingOk returns a tuple with the EnableProtoPayloadParsing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableProtoPayloadParsing

`func (o *SecretProcessesorInputConfigSettings) SetEnableProtoPayloadParsing(v bool)`

SetEnableProtoPayloadParsing sets EnableProtoPayloadParsing field to given value.

### HasEnableProtoPayloadParsing

`func (o *SecretProcessesorInputConfigSettings) HasEnableProtoPayloadParsing() bool`

HasEnableProtoPayloadParsing returns a boolean if a field has been set.

### GetFilter

`func (o *SecretProcessesorInputConfigSettings) GetFilter() CognitoUsersFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *SecretProcessesorInputConfigSettings) GetFilterOk() (*CognitoUsersFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *SecretProcessesorInputConfigSettings) SetFilter(v CognitoUsersFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *SecretProcessesorInputConfigSettings) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetCloudPlatform

`func (o *SecretProcessesorInputConfigSettings) GetCloudPlatform() []string`

GetCloudPlatform returns the CloudPlatform field if non-nil, zero value otherwise.

### GetCloudPlatformOk

`func (o *SecretProcessesorInputConfigSettings) GetCloudPlatformOk() (*[]string, bool)`

GetCloudPlatformOk returns a tuple with the CloudPlatform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudPlatform

`func (o *SecretProcessesorInputConfigSettings) SetCloudPlatform(v []string)`

SetCloudPlatform sets CloudPlatform field to given value.

### HasCloudPlatform

`func (o *SecretProcessesorInputConfigSettings) HasCloudPlatform() bool`

HasCloudPlatform returns a boolean if a field has been set.

### GetEntityType

`func (o *SecretProcessesorInputConfigSettings) GetEntityType() []string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetEntityTypeOk() (*[]string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *SecretProcessesorInputConfigSettings) SetEntityType(v []string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *SecretProcessesorInputConfigSettings) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetFullSnapshot

`func (o *SecretProcessesorInputConfigSettings) GetFullSnapshot() bool`

GetFullSnapshot returns the FullSnapshot field if non-nil, zero value otherwise.

### GetFullSnapshotOk

`func (o *SecretProcessesorInputConfigSettings) GetFullSnapshotOk() (*bool, bool)`

GetFullSnapshotOk returns a tuple with the FullSnapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullSnapshot

`func (o *SecretProcessesorInputConfigSettings) SetFullSnapshot(v bool)`

SetFullSnapshot sets FullSnapshot field to given value.

### HasFullSnapshot

`func (o *SecretProcessesorInputConfigSettings) HasFullSnapshot() bool`

HasFullSnapshot returns a boolean if a field has been set.

### GetInterval

`func (o *SecretProcessesorInputConfigSettings) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *SecretProcessesorInputConfigSettings) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *SecretProcessesorInputConfigSettings) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *SecretProcessesorInputConfigSettings) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetAccountId

`func (o *SecretProcessesorInputConfigSettings) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *SecretProcessesorInputConfigSettings) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *SecretProcessesorInputConfigSettings) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *SecretProcessesorInputConfigSettings) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetZoneIds

`func (o *SecretProcessesorInputConfigSettings) GetZoneIds() []string`

GetZoneIds returns the ZoneIds field if non-nil, zero value otherwise.

### GetZoneIdsOk

`func (o *SecretProcessesorInputConfigSettings) GetZoneIdsOk() (*[]string, bool)`

GetZoneIdsOk returns a tuple with the ZoneIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZoneIds

`func (o *SecretProcessesorInputConfigSettings) SetZoneIds(v []string)`

SetZoneIds sets ZoneIds field to given value.

### HasZoneIds

`func (o *SecretProcessesorInputConfigSettings) HasZoneIds() bool`

HasZoneIds returns a boolean if a field has been set.

### GetIncludeBotFields

`func (o *SecretProcessesorInputConfigSettings) GetIncludeBotFields() bool`

GetIncludeBotFields returns the IncludeBotFields field if non-nil, zero value otherwise.

### GetIncludeBotFieldsOk

`func (o *SecretProcessesorInputConfigSettings) GetIncludeBotFieldsOk() (*bool, bool)`

GetIncludeBotFieldsOk returns a tuple with the IncludeBotFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeBotFields

`func (o *SecretProcessesorInputConfigSettings) SetIncludeBotFields(v bool)`

SetIncludeBotFields sets IncludeBotFields field to given value.

### HasIncludeBotFields

`func (o *SecretProcessesorInputConfigSettings) HasIncludeBotFields() bool`

HasIncludeBotFields returns a boolean if a field has been set.

### GetZoneId

`func (o *SecretProcessesorInputConfigSettings) GetZoneId() string`

GetZoneId returns the ZoneId field if non-nil, zero value otherwise.

### GetZoneIdOk

`func (o *SecretProcessesorInputConfigSettings) GetZoneIdOk() (*string, bool)`

GetZoneIdOk returns a tuple with the ZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZoneId

`func (o *SecretProcessesorInputConfigSettings) SetZoneId(v string)`

SetZoneId sets ZoneId field to given value.

### HasZoneId

`func (o *SecretProcessesorInputConfigSettings) HasZoneId() bool`

HasZoneId returns a boolean if a field has been set.

### GetFields

`func (o *SecretProcessesorInputConfigSettings) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *SecretProcessesorInputConfigSettings) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *SecretProcessesorInputConfigSettings) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *SecretProcessesorInputConfigSettings) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetExcludeCdnCgi

`func (o *SecretProcessesorInputConfigSettings) GetExcludeCdnCgi() bool`

GetExcludeCdnCgi returns the ExcludeCdnCgi field if non-nil, zero value otherwise.

### GetExcludeCdnCgiOk

`func (o *SecretProcessesorInputConfigSettings) GetExcludeCdnCgiOk() (*bool, bool)`

GetExcludeCdnCgiOk returns a tuple with the ExcludeCdnCgi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeCdnCgi

`func (o *SecretProcessesorInputConfigSettings) SetExcludeCdnCgi(v bool)`

SetExcludeCdnCgi sets ExcludeCdnCgi field to given value.

### HasExcludeCdnCgi

`func (o *SecretProcessesorInputConfigSettings) HasExcludeCdnCgi() bool`

HasExcludeCdnCgi returns a boolean if a field has been set.

### GetExcludeIssueType

`func (o *SecretProcessesorInputConfigSettings) GetExcludeIssueType() []string`

GetExcludeIssueType returns the ExcludeIssueType field if non-nil, zero value otherwise.

### GetExcludeIssueTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetExcludeIssueTypeOk() (*[]string, bool)`

GetExcludeIssueTypeOk returns a tuple with the ExcludeIssueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeIssueType

`func (o *SecretProcessesorInputConfigSettings) SetExcludeIssueType(v []string)`

SetExcludeIssueType sets ExcludeIssueType field to given value.

### HasExcludeIssueType

`func (o *SecretProcessesorInputConfigSettings) HasExcludeIssueType() bool`

HasExcludeIssueType returns a boolean if a field has been set.

### GetExcludeSeverity

`func (o *SecretProcessesorInputConfigSettings) GetExcludeSeverity() []string`

GetExcludeSeverity returns the ExcludeSeverity field if non-nil, zero value otherwise.

### GetExcludeSeverityOk

`func (o *SecretProcessesorInputConfigSettings) GetExcludeSeverityOk() (*[]string, bool)`

GetExcludeSeverityOk returns a tuple with the ExcludeSeverity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeSeverity

`func (o *SecretProcessesorInputConfigSettings) SetExcludeSeverity(v []string)`

SetExcludeSeverity sets ExcludeSeverity field to given value.

### HasExcludeSeverity

`func (o *SecretProcessesorInputConfigSettings) HasExcludeSeverity() bool`

HasExcludeSeverity returns a boolean if a field has been set.

### GetIssueType

`func (o *SecretProcessesorInputConfigSettings) GetIssueType() string`

GetIssueType returns the IssueType field if non-nil, zero value otherwise.

### GetIssueTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetIssueTypeOk() (*string, bool)`

GetIssueTypeOk returns a tuple with the IssueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueType

`func (o *SecretProcessesorInputConfigSettings) SetIssueType(v string)`

SetIssueType sets IssueType field to given value.

### HasIssueType

`func (o *SecretProcessesorInputConfigSettings) HasIssueType() bool`

HasIssueType returns a boolean if a field has been set.

### GetFilterMyScans

`func (o *SecretProcessesorInputConfigSettings) GetFilterMyScans() bool`

GetFilterMyScans returns the FilterMyScans field if non-nil, zero value otherwise.

### GetFilterMyScansOk

`func (o *SecretProcessesorInputConfigSettings) GetFilterMyScansOk() (*bool, bool)`

GetFilterMyScansOk returns a tuple with the FilterMyScans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterMyScans

`func (o *SecretProcessesorInputConfigSettings) SetFilterMyScans(v bool)`

SetFilterMyScans sets FilterMyScans field to given value.

### HasFilterMyScans

`func (o *SecretProcessesorInputConfigSettings) HasFilterMyScans() bool`

HasFilterMyScans returns a boolean if a field has been set.

### GetParentEntityId

`func (o *SecretProcessesorInputConfigSettings) GetParentEntityId() string`

GetParentEntityId returns the ParentEntityId field if non-nil, zero value otherwise.

### GetParentEntityIdOk

`func (o *SecretProcessesorInputConfigSettings) GetParentEntityIdOk() (*string, bool)`

GetParentEntityIdOk returns a tuple with the ParentEntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentEntityId

`func (o *SecretProcessesorInputConfigSettings) SetParentEntityId(v string)`

SetParentEntityId sets ParentEntityId field to given value.

### HasParentEntityId

`func (o *SecretProcessesorInputConfigSettings) HasParentEntityId() bool`

HasParentEntityId returns a boolean if a field has been set.

### GetParentEntityType

`func (o *SecretProcessesorInputConfigSettings) GetParentEntityType() string`

GetParentEntityType returns the ParentEntityType field if non-nil, zero value otherwise.

### GetParentEntityTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetParentEntityTypeOk() (*string, bool)`

GetParentEntityTypeOk returns a tuple with the ParentEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentEntityType

`func (o *SecretProcessesorInputConfigSettings) SetParentEntityType(v string)`

SetParentEntityType sets ParentEntityType field to given value.

### HasParentEntityType

`func (o *SecretProcessesorInputConfigSettings) HasParentEntityType() bool`

HasParentEntityType returns a boolean if a field has been set.

### GetOrgId

`func (o *SecretProcessesorInputConfigSettings) GetOrgId() string`

GetOrgId returns the OrgId field if non-nil, zero value otherwise.

### GetOrgIdOk

`func (o *SecretProcessesorInputConfigSettings) GetOrgIdOk() (*string, bool)`

GetOrgIdOk returns a tuple with the OrgId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgId

`func (o *SecretProcessesorInputConfigSettings) SetOrgId(v string)`

SetOrgId sets OrgId field to given value.

### HasOrgId

`func (o *SecretProcessesorInputConfigSettings) HasOrgId() bool`

HasOrgId returns a boolean if a field has been set.

### GetUserPoolId

`func (o *SecretProcessesorInputConfigSettings) GetUserPoolId() string`

GetUserPoolId returns the UserPoolId field if non-nil, zero value otherwise.

### GetUserPoolIdOk

`func (o *SecretProcessesorInputConfigSettings) GetUserPoolIdOk() (*string, bool)`

GetUserPoolIdOk returns a tuple with the UserPoolId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserPoolId

`func (o *SecretProcessesorInputConfigSettings) SetUserPoolId(v string)`

SetUserPoolId sets UserPoolId field to given value.

### HasUserPoolId

`func (o *SecretProcessesorInputConfigSettings) HasUserPoolId() bool`

HasUserPoolId returns a boolean if a field has been set.

### GetApiKeyId

`func (o *SecretProcessesorInputConfigSettings) GetApiKeyId() string`

GetApiKeyId returns the ApiKeyId field if non-nil, zero value otherwise.

### GetApiKeyIdOk

`func (o *SecretProcessesorInputConfigSettings) GetApiKeyIdOk() (*string, bool)`

GetApiKeyIdOk returns a tuple with the ApiKeyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKeyId

`func (o *SecretProcessesorInputConfigSettings) SetApiKeyId(v string)`

SetApiKeyId sets ApiKeyId field to given value.

### HasApiKeyId

`func (o *SecretProcessesorInputConfigSettings) HasApiKeyId() bool`

HasApiKeyId returns a boolean if a field has been set.

### GetDomainName

`func (o *SecretProcessesorInputConfigSettings) GetDomainName() string`

GetDomainName returns the DomainName field if non-nil, zero value otherwise.

### GetDomainNameOk

`func (o *SecretProcessesorInputConfigSettings) GetDomainNameOk() (*string, bool)`

GetDomainNameOk returns a tuple with the DomainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainName

`func (o *SecretProcessesorInputConfigSettings) SetDomainName(v string)`

SetDomainName sets DomainName field to given value.

### HasDomainName

`func (o *SecretProcessesorInputConfigSettings) HasDomainName() bool`

HasDomainName returns a boolean if a field has been set.

### GetAwsQueueUrl

`func (o *SecretProcessesorInputConfigSettings) GetAwsQueueUrl() string`

GetAwsQueueUrl returns the AwsQueueUrl field if non-nil, zero value otherwise.

### GetAwsQueueUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetAwsQueueUrlOk() (*string, bool)`

GetAwsQueueUrlOk returns a tuple with the AwsQueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsQueueUrl

`func (o *SecretProcessesorInputConfigSettings) SetAwsQueueUrl(v string)`

SetAwsQueueUrl sets AwsQueueUrl field to given value.

### HasAwsQueueUrl

`func (o *SecretProcessesorInputConfigSettings) HasAwsQueueUrl() bool`

HasAwsQueueUrl returns a boolean if a field has been set.

### GetAwsRegionName

`func (o *SecretProcessesorInputConfigSettings) GetAwsRegionName() string`

GetAwsRegionName returns the AwsRegionName field if non-nil, zero value otherwise.

### GetAwsRegionNameOk

`func (o *SecretProcessesorInputConfigSettings) GetAwsRegionNameOk() (*string, bool)`

GetAwsRegionNameOk returns a tuple with the AwsRegionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsRegionName

`func (o *SecretProcessesorInputConfigSettings) SetAwsRegionName(v string)`

SetAwsRegionName sets AwsRegionName field to given value.

### HasAwsRegionName

`func (o *SecretProcessesorInputConfigSettings) HasAwsRegionName() bool`

HasAwsRegionName returns a boolean if a field has been set.

### GetAwsS3Url

`func (o *SecretProcessesorInputConfigSettings) GetAwsS3Url() string`

GetAwsS3Url returns the AwsS3Url field if non-nil, zero value otherwise.

### GetAwsS3UrlOk

`func (o *SecretProcessesorInputConfigSettings) GetAwsS3UrlOk() (*string, bool)`

GetAwsS3UrlOk returns a tuple with the AwsS3Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsS3Url

`func (o *SecretProcessesorInputConfigSettings) SetAwsS3Url(v string)`

SetAwsS3Url sets AwsS3Url field to given value.

### HasAwsS3Url

`func (o *SecretProcessesorInputConfigSettings) HasAwsS3Url() bool`

HasAwsS3Url returns a boolean if a field has been set.

### GetVisibilityTimeout

`func (o *SecretProcessesorInputConfigSettings) GetVisibilityTimeout() int32`

GetVisibilityTimeout returns the VisibilityTimeout field if non-nil, zero value otherwise.

### GetVisibilityTimeoutOk

`func (o *SecretProcessesorInputConfigSettings) GetVisibilityTimeoutOk() (*int32, bool)`

GetVisibilityTimeoutOk returns a tuple with the VisibilityTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisibilityTimeout

`func (o *SecretProcessesorInputConfigSettings) SetVisibilityTimeout(v int32)`

SetVisibilityTimeout sets VisibilityTimeout field to given value.

### HasVisibilityTimeout

`func (o *SecretProcessesorInputConfigSettings) HasVisibilityTimeout() bool`

HasVisibilityTimeout returns a boolean if a field has been set.

### GetEnvironment

`func (o *SecretProcessesorInputConfigSettings) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *SecretProcessesorInputConfigSettings) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *SecretProcessesorInputConfigSettings) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *SecretProcessesorInputConfigSettings) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetUserId

`func (o *SecretProcessesorInputConfigSettings) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *SecretProcessesorInputConfigSettings) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *SecretProcessesorInputConfigSettings) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *SecretProcessesorInputConfigSettings) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetCategory

`func (o *SecretProcessesorInputConfigSettings) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *SecretProcessesorInputConfigSettings) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *SecretProcessesorInputConfigSettings) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *SecretProcessesorInputConfigSettings) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetFieldOption

`func (o *SecretProcessesorInputConfigSettings) GetFieldOption() string`

GetFieldOption returns the FieldOption field if non-nil, zero value otherwise.

### GetFieldOptionOk

`func (o *SecretProcessesorInputConfigSettings) GetFieldOptionOk() (*string, bool)`

GetFieldOptionOk returns a tuple with the FieldOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOption

`func (o *SecretProcessesorInputConfigSettings) SetFieldOption(v string)`

SetFieldOption sets FieldOption field to given value.

### HasFieldOption

`func (o *SecretProcessesorInputConfigSettings) HasFieldOption() bool`

HasFieldOption returns a boolean if a field has been set.

### GetOrganizationId

`func (o *SecretProcessesorInputConfigSettings) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *SecretProcessesorInputConfigSettings) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *SecretProcessesorInputConfigSettings) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *SecretProcessesorInputConfigSettings) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetNamespace

`func (o *SecretProcessesorInputConfigSettings) GetNamespace() string`

GetNamespace returns the Namespace field if non-nil, zero value otherwise.

### GetNamespaceOk

`func (o *SecretProcessesorInputConfigSettings) GetNamespaceOk() (*string, bool)`

GetNamespaceOk returns a tuple with the Namespace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamespace

`func (o *SecretProcessesorInputConfigSettings) SetNamespace(v string)`

SetNamespace sets Namespace field to given value.

### HasNamespace

`func (o *SecretProcessesorInputConfigSettings) HasNamespace() bool`

HasNamespace returns a boolean if a field has been set.

### GetWorkspaceId

`func (o *SecretProcessesorInputConfigSettings) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *SecretProcessesorInputConfigSettings) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *SecretProcessesorInputConfigSettings) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.

### HasWorkspaceId

`func (o *SecretProcessesorInputConfigSettings) HasWorkspaceId() bool`

HasWorkspaceId returns a boolean if a field has been set.

### GetAppName

`func (o *SecretProcessesorInputConfigSettings) GetAppName() string`

GetAppName returns the AppName field if non-nil, zero value otherwise.

### GetAppNameOk

`func (o *SecretProcessesorInputConfigSettings) GetAppNameOk() (*string, bool)`

GetAppNameOk returns a tuple with the AppName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppName

`func (o *SecretProcessesorInputConfigSettings) SetAppName(v string)`

SetAppName sets AppName field to given value.

### HasAppName

`func (o *SecretProcessesorInputConfigSettings) HasAppName() bool`

HasAppName returns a boolean if a field has been set.

### GetCloud

`func (o *SecretProcessesorInputConfigSettings) GetCloud() string`

GetCloud returns the Cloud field if non-nil, zero value otherwise.

### GetCloudOk

`func (o *SecretProcessesorInputConfigSettings) GetCloudOk() (*string, bool)`

GetCloudOk returns a tuple with the Cloud field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloud

`func (o *SecretProcessesorInputConfigSettings) SetCloud(v string)`

SetCloud sets Cloud field to given value.

### HasCloud

`func (o *SecretProcessesorInputConfigSettings) HasCloud() bool`

HasCloud returns a boolean if a field has been set.

### GetMemberCid

`func (o *SecretProcessesorInputConfigSettings) GetMemberCid() string`

GetMemberCid returns the MemberCid field if non-nil, zero value otherwise.

### GetMemberCidOk

`func (o *SecretProcessesorInputConfigSettings) GetMemberCidOk() (*string, bool)`

GetMemberCidOk returns a tuple with the MemberCid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberCid

`func (o *SecretProcessesorInputConfigSettings) SetMemberCid(v string)`

SetMemberCid sets MemberCid field to given value.

### HasMemberCid

`func (o *SecretProcessesorInputConfigSettings) HasMemberCid() bool`

HasMemberCid returns a boolean if a field has been set.

### GetRepo

`func (o *SecretProcessesorInputConfigSettings) GetRepo() string`

GetRepo returns the Repo field if non-nil, zero value otherwise.

### GetRepoOk

`func (o *SecretProcessesorInputConfigSettings) GetRepoOk() (*string, bool)`

GetRepoOk returns a tuple with the Repo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepo

`func (o *SecretProcessesorInputConfigSettings) SetRepo(v string)`

SetRepo sets Repo field to given value.

### HasRepo

`func (o *SecretProcessesorInputConfigSettings) HasRepo() bool`

HasRepo returns a boolean if a field has been set.

### GetConfidential

`func (o *SecretProcessesorInputConfigSettings) GetConfidential() bool`

GetConfidential returns the Confidential field if non-nil, zero value otherwise.

### GetConfidentialOk

`func (o *SecretProcessesorInputConfigSettings) GetConfidentialOk() (*bool, bool)`

GetConfidentialOk returns a tuple with the Confidential field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfidential

`func (o *SecretProcessesorInputConfigSettings) SetConfidential(v bool)`

SetConfidential sets Confidential field to given value.

### HasConfidential

`func (o *SecretProcessesorInputConfigSettings) HasConfidential() bool`

HasConfidential returns a boolean if a field has been set.

### GetGitlabUrl

`func (o *SecretProcessesorInputConfigSettings) GetGitlabUrl() string`

GetGitlabUrl returns the GitlabUrl field if non-nil, zero value otherwise.

### GetGitlabUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetGitlabUrlOk() (*string, bool)`

GetGitlabUrlOk returns a tuple with the GitlabUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGitlabUrl

`func (o *SecretProcessesorInputConfigSettings) SetGitlabUrl(v string)`

SetGitlabUrl sets GitlabUrl field to given value.

### HasGitlabUrl

`func (o *SecretProcessesorInputConfigSettings) HasGitlabUrl() bool`

HasGitlabUrl returns a boolean if a field has been set.

### GetProjectId

`func (o *SecretProcessesorInputConfigSettings) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *SecretProcessesorInputConfigSettings) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *SecretProcessesorInputConfigSettings) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.

### HasProjectId

`func (o *SecretProcessesorInputConfigSettings) HasProjectId() bool`

HasProjectId returns a boolean if a field has been set.

### GetState

`func (o *SecretProcessesorInputConfigSettings) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SecretProcessesorInputConfigSettings) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SecretProcessesorInputConfigSettings) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SecretProcessesorInputConfigSettings) HasState() bool`

HasState returns a boolean if a field has been set.

### GetWithLabelDetails

`func (o *SecretProcessesorInputConfigSettings) GetWithLabelDetails() bool`

GetWithLabelDetails returns the WithLabelDetails field if non-nil, zero value otherwise.

### GetWithLabelDetailsOk

`func (o *SecretProcessesorInputConfigSettings) GetWithLabelDetailsOk() (*bool, bool)`

GetWithLabelDetailsOk returns a tuple with the WithLabelDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithLabelDetails

`func (o *SecretProcessesorInputConfigSettings) SetWithLabelDetails(v bool)`

SetWithLabelDetails sets WithLabelDetails field to given value.

### HasWithLabelDetails

`func (o *SecretProcessesorInputConfigSettings) HasWithLabelDetails() bool`

HasWithLabelDetails returns a boolean if a field has been set.

### GetBucketName

`func (o *SecretProcessesorInputConfigSettings) GetBucketName() string`

GetBucketName returns the BucketName field if non-nil, zero value otherwise.

### GetBucketNameOk

`func (o *SecretProcessesorInputConfigSettings) GetBucketNameOk() (*string, bool)`

GetBucketNameOk returns a tuple with the BucketName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketName

`func (o *SecretProcessesorInputConfigSettings) SetBucketName(v string)`

SetBucketName sets BucketName field to given value.

### HasBucketName

`func (o *SecretProcessesorInputConfigSettings) HasBucketName() bool`

HasBucketName returns a boolean if a field has been set.

### GetAnalyzerArn

`func (o *SecretProcessesorInputConfigSettings) GetAnalyzerArn() string`

GetAnalyzerArn returns the AnalyzerArn field if non-nil, zero value otherwise.

### GetAnalyzerArnOk

`func (o *SecretProcessesorInputConfigSettings) GetAnalyzerArnOk() (*string, bool)`

GetAnalyzerArnOk returns a tuple with the AnalyzerArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalyzerArn

`func (o *SecretProcessesorInputConfigSettings) SetAnalyzerArn(v string)`

SetAnalyzerArn sets AnalyzerArn field to given value.

### HasAnalyzerArn

`func (o *SecretProcessesorInputConfigSettings) HasAnalyzerArn() bool`

HasAnalyzerArn returns a boolean if a field has been set.

### GetFilters

`func (o *SecretProcessesorInputConfigSettings) GetFilters() []SecurityGroupsFilter`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *SecretProcessesorInputConfigSettings) GetFiltersOk() (*[]SecurityGroupsFilter, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *SecretProcessesorInputConfigSettings) SetFilters(v []SecurityGroupsFilter)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *SecretProcessesorInputConfigSettings) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetAlertType

`func (o *SecretProcessesorInputConfigSettings) GetAlertType() string`

GetAlertType returns the AlertType field if non-nil, zero value otherwise.

### GetAlertTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetAlertTypeOk() (*string, bool)`

GetAlertTypeOk returns a tuple with the AlertType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertType

`func (o *SecretProcessesorInputConfigSettings) SetAlertType(v string)`

SetAlertType sets AlertType field to given value.

### HasAlertType

`func (o *SecretProcessesorInputConfigSettings) HasAlertType() bool`

HasAlertType returns a boolean if a field has been set.

### GetEmbed

`func (o *SecretProcessesorInputConfigSettings) GetEmbed() string`

GetEmbed returns the Embed field if non-nil, zero value otherwise.

### GetEmbedOk

`func (o *SecretProcessesorInputConfigSettings) GetEmbedOk() (*string, bool)`

GetEmbedOk returns a tuple with the Embed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbed

`func (o *SecretProcessesorInputConfigSettings) SetEmbed(v string)`

SetEmbed sets Embed field to given value.

### HasEmbed

`func (o *SecretProcessesorInputConfigSettings) HasEmbed() bool`

HasEmbed returns a boolean if a field has been set.

### GetPrimaryEntityType

`func (o *SecretProcessesorInputConfigSettings) GetPrimaryEntityType() string`

GetPrimaryEntityType returns the PrimaryEntityType field if non-nil, zero value otherwise.

### GetPrimaryEntityTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetPrimaryEntityTypeOk() (*string, bool)`

GetPrimaryEntityTypeOk returns a tuple with the PrimaryEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryEntityType

`func (o *SecretProcessesorInputConfigSettings) SetPrimaryEntityType(v string)`

SetPrimaryEntityType sets PrimaryEntityType field to given value.

### HasPrimaryEntityType

`func (o *SecretProcessesorInputConfigSettings) HasPrimaryEntityType() bool`

HasPrimaryEntityType returns a boolean if a field has been set.

### GetPrimaryEntityValue

`func (o *SecretProcessesorInputConfigSettings) GetPrimaryEntityValue() string`

GetPrimaryEntityValue returns the PrimaryEntityValue field if non-nil, zero value otherwise.

### GetPrimaryEntityValueOk

`func (o *SecretProcessesorInputConfigSettings) GetPrimaryEntityValueOk() (*string, bool)`

GetPrimaryEntityValueOk returns a tuple with the PrimaryEntityValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryEntityValue

`func (o *SecretProcessesorInputConfigSettings) SetPrimaryEntityValue(v string)`

SetPrimaryEntityValue sets PrimaryEntityValue field to given value.

### HasPrimaryEntityValue

`func (o *SecretProcessesorInputConfigSettings) HasPrimaryEntityValue() bool`

HasPrimaryEntityValue returns a boolean if a field has been set.

### GetSeverities

`func (o *SecretProcessesorInputConfigSettings) GetSeverities() []string`

GetSeverities returns the Severities field if non-nil, zero value otherwise.

### GetSeveritiesOk

`func (o *SecretProcessesorInputConfigSettings) GetSeveritiesOk() (*[]string, bool)`

GetSeveritiesOk returns a tuple with the Severities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverities

`func (o *SecretProcessesorInputConfigSettings) SetSeverities(v []string)`

SetSeverities sets Severities field to given value.

### HasSeverities

`func (o *SecretProcessesorInputConfigSettings) HasSeverities() bool`

HasSeverities returns a boolean if a field has been set.

### GetSeverityFilter

`func (o *SecretProcessesorInputConfigSettings) GetSeverityFilter() []TypesStringFilter`

GetSeverityFilter returns the SeverityFilter field if non-nil, zero value otherwise.

### GetSeverityFilterOk

`func (o *SecretProcessesorInputConfigSettings) GetSeverityFilterOk() (*[]TypesStringFilter, bool)`

GetSeverityFilterOk returns a tuple with the SeverityFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverityFilter

`func (o *SecretProcessesorInputConfigSettings) SetSeverityFilter(v []TypesStringFilter)`

SetSeverityFilter sets SeverityFilter field to given value.

### HasSeverityFilter

`func (o *SecretProcessesorInputConfigSettings) HasSeverityFilter() bool`

HasSeverityFilter returns a boolean if a field has been set.

### GetControlIds

`func (o *SecretProcessesorInputConfigSettings) GetControlIds() []string`

GetControlIds returns the ControlIds field if non-nil, zero value otherwise.

### GetControlIdsOk

`func (o *SecretProcessesorInputConfigSettings) GetControlIdsOk() (*[]string, bool)`

GetControlIdsOk returns a tuple with the ControlIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControlIds

`func (o *SecretProcessesorInputConfigSettings) SetControlIds(v []string)`

SetControlIds sets ControlIds field to given value.

### HasControlIds

`func (o *SecretProcessesorInputConfigSettings) HasControlIds() bool`

HasControlIds returns a boolean if a field has been set.

### GetHasNote

`func (o *SecretProcessesorInputConfigSettings) GetHasNote() string`

GetHasNote returns the HasNote field if non-nil, zero value otherwise.

### GetHasNoteOk

`func (o *SecretProcessesorInputConfigSettings) GetHasNoteOk() (*string, bool)`

GetHasNoteOk returns a tuple with the HasNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNote

`func (o *SecretProcessesorInputConfigSettings) SetHasNote(v string)`

SetHasNote sets HasNote field to given value.

### HasHasNote

`func (o *SecretProcessesorInputConfigSettings) HasHasNote() bool`

HasHasNote returns a boolean if a field has been set.

### GetHasRemediation

`func (o *SecretProcessesorInputConfigSettings) GetHasRemediation() string`

GetHasRemediation returns the HasRemediation field if non-nil, zero value otherwise.

### GetHasRemediationOk

`func (o *SecretProcessesorInputConfigSettings) GetHasRemediationOk() (*string, bool)`

GetHasRemediationOk returns a tuple with the HasRemediation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasRemediation

`func (o *SecretProcessesorInputConfigSettings) SetHasRemediation(v string)`

SetHasRemediation sets HasRemediation field to given value.

### HasHasRemediation

`func (o *SecretProcessesorInputConfigSettings) HasHasRemediation() bool`

HasHasRemediation returns a boolean if a field has been set.

### GetHasServiceTicket

`func (o *SecretProcessesorInputConfigSettings) GetHasServiceTicket() string`

GetHasServiceTicket returns the HasServiceTicket field if non-nil, zero value otherwise.

### GetHasServiceTicketOk

`func (o *SecretProcessesorInputConfigSettings) GetHasServiceTicketOk() (*string, bool)`

GetHasServiceTicketOk returns a tuple with the HasServiceTicket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasServiceTicket

`func (o *SecretProcessesorInputConfigSettings) SetHasServiceTicket(v string)`

SetHasServiceTicket sets HasServiceTicket field to given value.

### HasHasServiceTicket

`func (o *SecretProcessesorInputConfigSettings) HasHasServiceTicket() bool`

HasHasServiceTicket returns a boolean if a field has been set.

### GetIssueIds

`func (o *SecretProcessesorInputConfigSettings) GetIssueIds() []string`

GetIssueIds returns the IssueIds field if non-nil, zero value otherwise.

### GetIssueIdsOk

`func (o *SecretProcessesorInputConfigSettings) GetIssueIdsOk() (*[]string, bool)`

GetIssueIdsOk returns a tuple with the IssueIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueIds

`func (o *SecretProcessesorInputConfigSettings) SetIssueIds(v []string)`

SetIssueIds sets IssueIds field to given value.

### HasIssueIds

`func (o *SecretProcessesorInputConfigSettings) HasIssueIds() bool`

HasIssueIds returns a boolean if a field has been set.

### GetIssueTypes

`func (o *SecretProcessesorInputConfigSettings) GetIssueTypes() []string`

GetIssueTypes returns the IssueTypes field if non-nil, zero value otherwise.

### GetIssueTypesOk

`func (o *SecretProcessesorInputConfigSettings) GetIssueTypesOk() (*[]string, bool)`

GetIssueTypesOk returns a tuple with the IssueTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueTypes

`func (o *SecretProcessesorInputConfigSettings) SetIssueTypes(v []string)`

SetIssueTypes sets IssueTypes field to given value.

### HasIssueTypes

`func (o *SecretProcessesorInputConfigSettings) HasIssueTypes() bool`

HasIssueTypes returns a boolean if a field has been set.

### GetProjectIds

`func (o *SecretProcessesorInputConfigSettings) GetProjectIds() []string`

GetProjectIds returns the ProjectIds field if non-nil, zero value otherwise.

### GetProjectIdsOk

`func (o *SecretProcessesorInputConfigSettings) GetProjectIdsOk() (*[]string, bool)`

GetProjectIdsOk returns a tuple with the ProjectIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectIds

`func (o *SecretProcessesorInputConfigSettings) SetProjectIds(v []string)`

SetProjectIds sets ProjectIds field to given value.

### HasProjectIds

`func (o *SecretProcessesorInputConfigSettings) HasProjectIds() bool`

HasProjectIds returns a boolean if a field has been set.

### GetRelatedEntityId

`func (o *SecretProcessesorInputConfigSettings) GetRelatedEntityId() string`

GetRelatedEntityId returns the RelatedEntityId field if non-nil, zero value otherwise.

### GetRelatedEntityIdOk

`func (o *SecretProcessesorInputConfigSettings) GetRelatedEntityIdOk() (*string, bool)`

GetRelatedEntityIdOk returns a tuple with the RelatedEntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedEntityId

`func (o *SecretProcessesorInputConfigSettings) SetRelatedEntityId(v string)`

SetRelatedEntityId sets RelatedEntityId field to given value.

### HasRelatedEntityId

`func (o *SecretProcessesorInputConfigSettings) HasRelatedEntityId() bool`

HasRelatedEntityId returns a boolean if a field has been set.

### GetResolutionReasons

`func (o *SecretProcessesorInputConfigSettings) GetResolutionReasons() []string`

GetResolutionReasons returns the ResolutionReasons field if non-nil, zero value otherwise.

### GetResolutionReasonsOk

`func (o *SecretProcessesorInputConfigSettings) GetResolutionReasonsOk() (*[]string, bool)`

GetResolutionReasonsOk returns a tuple with the ResolutionReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolutionReasons

`func (o *SecretProcessesorInputConfigSettings) SetResolutionReasons(v []string)`

SetResolutionReasons sets ResolutionReasons field to given value.

### HasResolutionReasons

`func (o *SecretProcessesorInputConfigSettings) HasResolutionReasons() bool`

HasResolutionReasons returns a boolean if a field has been set.

### GetRiskEqualsAll

`func (o *SecretProcessesorInputConfigSettings) GetRiskEqualsAll() []string`

GetRiskEqualsAll returns the RiskEqualsAll field if non-nil, zero value otherwise.

### GetRiskEqualsAllOk

`func (o *SecretProcessesorInputConfigSettings) GetRiskEqualsAllOk() (*[]string, bool)`

GetRiskEqualsAllOk returns a tuple with the RiskEqualsAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskEqualsAll

`func (o *SecretProcessesorInputConfigSettings) SetRiskEqualsAll(v []string)`

SetRiskEqualsAll sets RiskEqualsAll field to given value.

### HasRiskEqualsAll

`func (o *SecretProcessesorInputConfigSettings) HasRiskEqualsAll() bool`

HasRiskEqualsAll returns a boolean if a field has been set.

### GetRiskEqualsAny

`func (o *SecretProcessesorInputConfigSettings) GetRiskEqualsAny() []string`

GetRiskEqualsAny returns the RiskEqualsAny field if non-nil, zero value otherwise.

### GetRiskEqualsAnyOk

`func (o *SecretProcessesorInputConfigSettings) GetRiskEqualsAnyOk() (*[]string, bool)`

GetRiskEqualsAnyOk returns a tuple with the RiskEqualsAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskEqualsAny

`func (o *SecretProcessesorInputConfigSettings) SetRiskEqualsAny(v []string)`

SetRiskEqualsAny sets RiskEqualsAny field to given value.

### HasRiskEqualsAny

`func (o *SecretProcessesorInputConfigSettings) HasRiskEqualsAny() bool`

HasRiskEqualsAny returns a boolean if a field has been set.

### GetSearchQuery

`func (o *SecretProcessesorInputConfigSettings) GetSearchQuery() string`

GetSearchQuery returns the SearchQuery field if non-nil, zero value otherwise.

### GetSearchQueryOk

`func (o *SecretProcessesorInputConfigSettings) GetSearchQueryOk() (*string, bool)`

GetSearchQueryOk returns a tuple with the SearchQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchQuery

`func (o *SecretProcessesorInputConfigSettings) SetSearchQuery(v string)`

SetSearchQuery sets SearchQuery field to given value.

### HasSearchQuery

`func (o *SecretProcessesorInputConfigSettings) HasSearchQuery() bool`

HasSearchQuery returns a boolean if a field has been set.

### GetSecurityScan

`func (o *SecretProcessesorInputConfigSettings) GetSecurityScan() string`

GetSecurityScan returns the SecurityScan field if non-nil, zero value otherwise.

### GetSecurityScanOk

`func (o *SecretProcessesorInputConfigSettings) GetSecurityScanOk() (*string, bool)`

GetSecurityScanOk returns a tuple with the SecurityScan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecurityScan

`func (o *SecretProcessesorInputConfigSettings) SetSecurityScan(v string)`

SetSecurityScan sets SecurityScan field to given value.

### HasSecurityScan

`func (o *SecretProcessesorInputConfigSettings) HasSecurityScan() bool`

HasSecurityScan returns a boolean if a field has been set.

### GetStackLayers

`func (o *SecretProcessesorInputConfigSettings) GetStackLayers() []string`

GetStackLayers returns the StackLayers field if non-nil, zero value otherwise.

### GetStackLayersOk

`func (o *SecretProcessesorInputConfigSettings) GetStackLayersOk() (*[]string, bool)`

GetStackLayersOk returns a tuple with the StackLayers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStackLayers

`func (o *SecretProcessesorInputConfigSettings) SetStackLayers(v []string)`

SetStackLayers sets StackLayers field to given value.

### HasStackLayers

`func (o *SecretProcessesorInputConfigSettings) HasStackLayers() bool`

HasStackLayers returns a boolean if a field has been set.

### GetTenantDataCenter

`func (o *SecretProcessesorInputConfigSettings) GetTenantDataCenter() string`

GetTenantDataCenter returns the TenantDataCenter field if non-nil, zero value otherwise.

### GetTenantDataCenterOk

`func (o *SecretProcessesorInputConfigSettings) GetTenantDataCenterOk() (*string, bool)`

GetTenantDataCenterOk returns a tuple with the TenantDataCenter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantDataCenter

`func (o *SecretProcessesorInputConfigSettings) SetTenantDataCenter(v string)`

SetTenantDataCenter sets TenantDataCenter field to given value.

### HasTenantDataCenter

`func (o *SecretProcessesorInputConfigSettings) HasTenantDataCenter() bool`

HasTenantDataCenter returns a boolean if a field has been set.

### GetKmsType

`func (o *SecretProcessesorInputConfigSettings) GetKmsType() string`

GetKmsType returns the KmsType field if non-nil, zero value otherwise.

### GetKmsTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetKmsTypeOk() (*string, bool)`

GetKmsTypeOk returns a tuple with the KmsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKmsType

`func (o *SecretProcessesorInputConfigSettings) SetKmsType(v string)`

SetKmsType sets KmsType field to given value.

### HasKmsType

`func (o *SecretProcessesorInputConfigSettings) HasKmsType() bool`

HasKmsType returns a boolean if a field has been set.

### GetAuditLogTypes

`func (o *SecretProcessesorInputConfigSettings) GetAuditLogTypes() []string`

GetAuditLogTypes returns the AuditLogTypes field if non-nil, zero value otherwise.

### GetAuditLogTypesOk

`func (o *SecretProcessesorInputConfigSettings) GetAuditLogTypesOk() (*[]string, bool)`

GetAuditLogTypesOk returns a tuple with the AuditLogTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuditLogTypes

`func (o *SecretProcessesorInputConfigSettings) SetAuditLogTypes(v []string)`

SetAuditLogTypes sets AuditLogTypes field to given value.

### HasAuditLogTypes

`func (o *SecretProcessesorInputConfigSettings) HasAuditLogTypes() bool`

HasAuditLogTypes returns a boolean if a field has been set.

### GetBaseUrl

`func (o *SecretProcessesorInputConfigSettings) GetBaseUrl() string`

GetBaseUrl returns the BaseUrl field if non-nil, zero value otherwise.

### GetBaseUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetBaseUrlOk() (*string, bool)`

GetBaseUrlOk returns a tuple with the BaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseUrl

`func (o *SecretProcessesorInputConfigSettings) SetBaseUrl(v string)`

SetBaseUrl sets BaseUrl field to given value.

### HasBaseUrl

`func (o *SecretProcessesorInputConfigSettings) HasBaseUrl() bool`

HasBaseUrl returns a boolean if a field has been set.

### GetLogType

`func (o *SecretProcessesorInputConfigSettings) GetLogType() string`

GetLogType returns the LogType field if non-nil, zero value otherwise.

### GetLogTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetLogTypeOk() (*string, bool)`

GetLogTypeOk returns a tuple with the LogType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogType

`func (o *SecretProcessesorInputConfigSettings) SetLogType(v string)`

SetLogType sets LogType field to given value.

### HasLogType

`func (o *SecretProcessesorInputConfigSettings) HasLogType() bool`

HasLogType returns a boolean if a field has been set.

### GetEndpoint

`func (o *SecretProcessesorInputConfigSettings) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *SecretProcessesorInputConfigSettings) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *SecretProcessesorInputConfigSettings) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *SecretProcessesorInputConfigSettings) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetSkipSslVerification

`func (o *SecretProcessesorInputConfigSettings) GetSkipSslVerification() bool`

GetSkipSslVerification returns the SkipSslVerification field if non-nil, zero value otherwise.

### GetSkipSslVerificationOk

`func (o *SecretProcessesorInputConfigSettings) GetSkipSslVerificationOk() (*bool, bool)`

GetSkipSslVerificationOk returns a tuple with the SkipSslVerification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipSslVerification

`func (o *SecretProcessesorInputConfigSettings) SetSkipSslVerification(v bool)`

SetSkipSslVerification sets SkipSslVerification field to given value.

### HasSkipSslVerification

`func (o *SecretProcessesorInputConfigSettings) HasSkipSslVerification() bool`

HasSkipSslVerification returns a boolean if a field has been set.

### GetUsePathStyle

`func (o *SecretProcessesorInputConfigSettings) GetUsePathStyle() bool`

GetUsePathStyle returns the UsePathStyle field if non-nil, zero value otherwise.

### GetUsePathStyleOk

`func (o *SecretProcessesorInputConfigSettings) GetUsePathStyleOk() (*bool, bool)`

GetUsePathStyleOk returns a tuple with the UsePathStyle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsePathStyle

`func (o *SecretProcessesorInputConfigSettings) SetUsePathStyle(v bool)`

SetUsePathStyle sets UsePathStyle field to given value.

### HasUsePathStyle

`func (o *SecretProcessesorInputConfigSettings) HasUsePathStyle() bool`

HasUsePathStyle returns a boolean if a field has been set.

### GetSubdomain

`func (o *SecretProcessesorInputConfigSettings) GetSubdomain() string`

GetSubdomain returns the Subdomain field if non-nil, zero value otherwise.

### GetSubdomainOk

`func (o *SecretProcessesorInputConfigSettings) GetSubdomainOk() (*string, bool)`

GetSubdomainOk returns a tuple with the Subdomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubdomain

`func (o *SecretProcessesorInputConfigSettings) SetSubdomain(v string)`

SetSubdomain sets Subdomain field to given value.

### HasSubdomain

`func (o *SecretProcessesorInputConfigSettings) HasSubdomain() bool`

HasSubdomain returns a boolean if a field has been set.

### GetCategoryType

`func (o *SecretProcessesorInputConfigSettings) GetCategoryType() string`

GetCategoryType returns the CategoryType field if non-nil, zero value otherwise.

### GetCategoryTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetCategoryTypeOk() (*string, bool)`

GetCategoryTypeOk returns a tuple with the CategoryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategoryType

`func (o *SecretProcessesorInputConfigSettings) SetCategoryType(v string)`

SetCategoryType sets CategoryType field to given value.

### HasCategoryType

`func (o *SecretProcessesorInputConfigSettings) HasCategoryType() bool`

HasCategoryType returns a boolean if a field has been set.

### GetDomain

`func (o *SecretProcessesorInputConfigSettings) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SecretProcessesorInputConfigSettings) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SecretProcessesorInputConfigSettings) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *SecretProcessesorInputConfigSettings) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetUsername

`func (o *SecretProcessesorInputConfigSettings) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *SecretProcessesorInputConfigSettings) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *SecretProcessesorInputConfigSettings) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *SecretProcessesorInputConfigSettings) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetGithubAppInstallationId

`func (o *SecretProcessesorInputConfigSettings) GetGithubAppInstallationId() string`

GetGithubAppInstallationId returns the GithubAppInstallationId field if non-nil, zero value otherwise.

### GetGithubAppInstallationIdOk

`func (o *SecretProcessesorInputConfigSettings) GetGithubAppInstallationIdOk() (*string, bool)`

GetGithubAppInstallationIdOk returns a tuple with the GithubAppInstallationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGithubAppInstallationId

`func (o *SecretProcessesorInputConfigSettings) SetGithubAppInstallationId(v string)`

SetGithubAppInstallationId sets GithubAppInstallationId field to given value.

### HasGithubAppInstallationId

`func (o *SecretProcessesorInputConfigSettings) HasGithubAppInstallationId() bool`

HasGithubAppInstallationId returns a boolean if a field has been set.

### GetGithubClientId

`func (o *SecretProcessesorInputConfigSettings) GetGithubClientId() string`

GetGithubClientId returns the GithubClientId field if non-nil, zero value otherwise.

### GetGithubClientIdOk

`func (o *SecretProcessesorInputConfigSettings) GetGithubClientIdOk() (*string, bool)`

GetGithubClientIdOk returns a tuple with the GithubClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGithubClientId

`func (o *SecretProcessesorInputConfigSettings) SetGithubClientId(v string)`

SetGithubClientId sets GithubClientId field to given value.

### HasGithubClientId

`func (o *SecretProcessesorInputConfigSettings) HasGithubClientId() bool`

HasGithubClientId returns a boolean if a field has been set.

### GetChildType

`func (o *SecretProcessesorInputConfigSettings) GetChildType() string`

GetChildType returns the ChildType field if non-nil, zero value otherwise.

### GetChildTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetChildTypeOk() (*string, bool)`

GetChildTypeOk returns a tuple with the ChildType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildType

`func (o *SecretProcessesorInputConfigSettings) SetChildType(v string)`

SetChildType sets ChildType field to given value.

### HasChildType

`func (o *SecretProcessesorInputConfigSettings) HasChildType() bool`

HasChildType returns a boolean if a field has been set.

### GetParentId

`func (o *SecretProcessesorInputConfigSettings) GetParentId() string`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *SecretProcessesorInputConfigSettings) GetParentIdOk() (*string, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *SecretProcessesorInputConfigSettings) SetParentId(v string)`

SetParentId sets ParentId field to given value.

### HasParentId

`func (o *SecretProcessesorInputConfigSettings) HasParentId() bool`

HasParentId returns a boolean if a field has been set.

### GetDomainUrl

`func (o *SecretProcessesorInputConfigSettings) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *SecretProcessesorInputConfigSettings) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.

### HasDomainUrl

`func (o *SecretProcessesorInputConfigSettings) HasDomainUrl() bool`

HasDomainUrl returns a boolean if a field has been set.

### GetTopic

`func (o *SecretProcessesorInputConfigSettings) GetTopic() string`

GetTopic returns the Topic field if non-nil, zero value otherwise.

### GetTopicOk

`func (o *SecretProcessesorInputConfigSettings) GetTopicOk() (*string, bool)`

GetTopicOk returns a tuple with the Topic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopic

`func (o *SecretProcessesorInputConfigSettings) SetTopic(v string)`

SetTopic sets Topic field to given value.

### HasTopic

`func (o *SecretProcessesorInputConfigSettings) HasTopic() bool`

HasTopic returns a boolean if a field has been set.

### GetEvaluationContextIdentifier

`func (o *SecretProcessesorInputConfigSettings) GetEvaluationContextIdentifier() string`

GetEvaluationContextIdentifier returns the EvaluationContextIdentifier field if non-nil, zero value otherwise.

### GetEvaluationContextIdentifierOk

`func (o *SecretProcessesorInputConfigSettings) GetEvaluationContextIdentifierOk() (*string, bool)`

GetEvaluationContextIdentifierOk returns a tuple with the EvaluationContextIdentifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvaluationContextIdentifier

`func (o *SecretProcessesorInputConfigSettings) SetEvaluationContextIdentifier(v string)`

SetEvaluationContextIdentifier sets EvaluationContextIdentifier field to given value.

### HasEvaluationContextIdentifier

`func (o *SecretProcessesorInputConfigSettings) HasEvaluationContextIdentifier() bool`

HasEvaluationContextIdentifier returns a boolean if a field has been set.

### GetIncludeInactive

`func (o *SecretProcessesorInputConfigSettings) GetIncludeInactive() bool`

GetIncludeInactive returns the IncludeInactive field if non-nil, zero value otherwise.

### GetIncludeInactiveOk

`func (o *SecretProcessesorInputConfigSettings) GetIncludeInactiveOk() (*bool, bool)`

GetIncludeInactiveOk returns a tuple with the IncludeInactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeInactive

`func (o *SecretProcessesorInputConfigSettings) SetIncludeInactive(v bool)`

SetIncludeInactive sets IncludeInactive field to given value.

### HasIncludeInactive

`func (o *SecretProcessesorInputConfigSettings) HasIncludeInactive() bool`

HasIncludeInactive returns a boolean if a field has been set.

### GetIncludePlannedDeletion

`func (o *SecretProcessesorInputConfigSettings) GetIncludePlannedDeletion() bool`

GetIncludePlannedDeletion returns the IncludePlannedDeletion field if non-nil, zero value otherwise.

### GetIncludePlannedDeletionOk

`func (o *SecretProcessesorInputConfigSettings) GetIncludePlannedDeletionOk() (*bool, bool)`

GetIncludePlannedDeletionOk returns a tuple with the IncludePlannedDeletion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludePlannedDeletion

`func (o *SecretProcessesorInputConfigSettings) SetIncludePlannedDeletion(v bool)`

SetIncludePlannedDeletion sets IncludePlannedDeletion field to given value.

### HasIncludePlannedDeletion

`func (o *SecretProcessesorInputConfigSettings) HasIncludePlannedDeletion() bool`

HasIncludePlannedDeletion returns a boolean if a field has been set.

### GetHostName

`func (o *SecretProcessesorInputConfigSettings) GetHostName() string`

GetHostName returns the HostName field if non-nil, zero value otherwise.

### GetHostNameOk

`func (o *SecretProcessesorInputConfigSettings) GetHostNameOk() (*string, bool)`

GetHostNameOk returns a tuple with the HostName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostName

`func (o *SecretProcessesorInputConfigSettings) SetHostName(v string)`

SetHostName sets HostName field to given value.

### HasHostName

`func (o *SecretProcessesorInputConfigSettings) HasHostName() bool`

HasHostName returns a boolean if a field has been set.

### GetTeamId

`func (o *SecretProcessesorInputConfigSettings) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *SecretProcessesorInputConfigSettings) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *SecretProcessesorInputConfigSettings) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.

### HasTeamId

`func (o *SecretProcessesorInputConfigSettings) HasTeamId() bool`

HasTeamId returns a boolean if a field has been set.

### GetAccount

`func (o *SecretProcessesorInputConfigSettings) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *SecretProcessesorInputConfigSettings) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *SecretProcessesorInputConfigSettings) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *SecretProcessesorInputConfigSettings) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetDatabase

`func (o *SecretProcessesorInputConfigSettings) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *SecretProcessesorInputConfigSettings) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *SecretProcessesorInputConfigSettings) SetDatabase(v string)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *SecretProcessesorInputConfigSettings) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetRole

`func (o *SecretProcessesorInputConfigSettings) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SecretProcessesorInputConfigSettings) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SecretProcessesorInputConfigSettings) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *SecretProcessesorInputConfigSettings) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetSchema

`func (o *SecretProcessesorInputConfigSettings) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *SecretProcessesorInputConfigSettings) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *SecretProcessesorInputConfigSettings) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *SecretProcessesorInputConfigSettings) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetWarehouse

`func (o *SecretProcessesorInputConfigSettings) GetWarehouse() string`

GetWarehouse returns the Warehouse field if non-nil, zero value otherwise.

### GetWarehouseOk

`func (o *SecretProcessesorInputConfigSettings) GetWarehouseOk() (*string, bool)`

GetWarehouseOk returns a tuple with the Warehouse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarehouse

`func (o *SecretProcessesorInputConfigSettings) SetWarehouse(v string)`

SetWarehouse sets Warehouse field to given value.

### HasWarehouse

`func (o *SecretProcessesorInputConfigSettings) HasWarehouse() bool`

HasWarehouse returns a boolean if a field has been set.

### GetRate

`func (o *SecretProcessesorInputConfigSettings) GetRate() int32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *SecretProcessesorInputConfigSettings) GetRateOk() (*int32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *SecretProcessesorInputConfigSettings) SetRate(v int32)`

SetRate sets Rate field to given value.

### HasRate

`func (o *SecretProcessesorInputConfigSettings) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetRecordType

`func (o *SecretProcessesorInputConfigSettings) GetRecordType() string`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *SecretProcessesorInputConfigSettings) GetRecordTypeOk() (*string, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *SecretProcessesorInputConfigSettings) SetRecordType(v string)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *SecretProcessesorInputConfigSettings) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### GetCustomTemplate

`func (o *SecretProcessesorInputConfigSettings) GetCustomTemplate() string`

GetCustomTemplate returns the CustomTemplate field if non-nil, zero value otherwise.

### GetCustomTemplateOk

`func (o *SecretProcessesorInputConfigSettings) GetCustomTemplateOk() (*string, bool)`

GetCustomTemplateOk returns a tuple with the CustomTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomTemplate

`func (o *SecretProcessesorInputConfigSettings) SetCustomTemplate(v string)`

SetCustomTemplate sets CustomTemplate field to given value.

### HasCustomTemplate

`func (o *SecretProcessesorInputConfigSettings) HasCustomTemplate() bool`

HasCustomTemplate returns a boolean if a field has been set.

### GetOrgUrl

`func (o *SecretProcessesorInputConfigSettings) GetOrgUrl() string`

GetOrgUrl returns the OrgUrl field if non-nil, zero value otherwise.

### GetOrgUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetOrgUrlOk() (*string, bool)`

GetOrgUrlOk returns a tuple with the OrgUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgUrl

`func (o *SecretProcessesorInputConfigSettings) SetOrgUrl(v string)`

SetOrgUrl sets OrgUrl field to given value.

### HasOrgUrl

`func (o *SecretProcessesorInputConfigSettings) HasOrgUrl() bool`

HasOrgUrl returns a boolean if a field has been set.

### GetUserRoleOption

`func (o *SecretProcessesorInputConfigSettings) GetUserRoleOption() string`

GetUserRoleOption returns the UserRoleOption field if non-nil, zero value otherwise.

### GetUserRoleOptionOk

`func (o *SecretProcessesorInputConfigSettings) GetUserRoleOptionOk() (*string, bool)`

GetUserRoleOptionOk returns a tuple with the UserRoleOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserRoleOption

`func (o *SecretProcessesorInputConfigSettings) SetUserRoleOption(v string)`

SetUserRoleOption sets UserRoleOption field to given value.

### HasUserRoleOption

`func (o *SecretProcessesorInputConfigSettings) HasUserRoleOption() bool`

HasUserRoleOption returns a boolean if a field has been set.

### GetUserTypeOption

`func (o *SecretProcessesorInputConfigSettings) GetUserTypeOption() string`

GetUserTypeOption returns the UserTypeOption field if non-nil, zero value otherwise.

### GetUserTypeOptionOk

`func (o *SecretProcessesorInputConfigSettings) GetUserTypeOptionOk() (*string, bool)`

GetUserTypeOptionOk returns a tuple with the UserTypeOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserTypeOption

`func (o *SecretProcessesorInputConfigSettings) SetUserTypeOption(v string)`

SetUserTypeOption sets UserTypeOption field to given value.

### HasUserTypeOption

`func (o *SecretProcessesorInputConfigSettings) HasUserTypeOption() bool`

HasUserTypeOption returns a boolean if a field has been set.

### GetOperationNames

`func (o *SecretProcessesorInputConfigSettings) GetOperationNames() []string`

GetOperationNames returns the OperationNames field if non-nil, zero value otherwise.

### GetOperationNamesOk

`func (o *SecretProcessesorInputConfigSettings) GetOperationNamesOk() (*[]string, bool)`

GetOperationNamesOk returns a tuple with the OperationNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationNames

`func (o *SecretProcessesorInputConfigSettings) SetOperationNames(v []string)`

SetOperationNames sets OperationNames field to given value.

### HasOperationNames

`func (o *SecretProcessesorInputConfigSettings) HasOperationNames() bool`

HasOperationNames returns a boolean if a field has been set.

### GetTenantDomain

`func (o *SecretProcessesorInputConfigSettings) GetTenantDomain() string`

GetTenantDomain returns the TenantDomain field if non-nil, zero value otherwise.

### GetTenantDomainOk

`func (o *SecretProcessesorInputConfigSettings) GetTenantDomainOk() (*string, bool)`

GetTenantDomainOk returns a tuple with the TenantDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantDomain

`func (o *SecretProcessesorInputConfigSettings) SetTenantDomain(v string)`

SetTenantDomain sets TenantDomain field to given value.

### HasTenantDomain

`func (o *SecretProcessesorInputConfigSettings) HasTenantDomain() bool`

HasTenantDomain returns a boolean if a field has been set.

### GetUserIds

`func (o *SecretProcessesorInputConfigSettings) GetUserIds() []string`

GetUserIds returns the UserIds field if non-nil, zero value otherwise.

### GetUserIdsOk

`func (o *SecretProcessesorInputConfigSettings) GetUserIdsOk() (*[]string, bool)`

GetUserIdsOk returns a tuple with the UserIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserIds

`func (o *SecretProcessesorInputConfigSettings) SetUserIds(v []string)`

SetUserIds sets UserIds field to given value.

### HasUserIds

`func (o *SecretProcessesorInputConfigSettings) HasUserIds() bool`

HasUserIds returns a boolean if a field has been set.

### GetStoryId

`func (o *SecretProcessesorInputConfigSettings) GetStoryId() string`

GetStoryId returns the StoryId field if non-nil, zero value otherwise.

### GetStoryIdOk

`func (o *SecretProcessesorInputConfigSettings) GetStoryIdOk() (*string, bool)`

GetStoryIdOk returns a tuple with the StoryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoryId

`func (o *SecretProcessesorInputConfigSettings) SetStoryId(v string)`

SetStoryId sets StoryId field to given value.

### HasStoryId

`func (o *SecretProcessesorInputConfigSettings) HasStoryId() bool`

HasStoryId returns a boolean if a field has been set.

### GetTenantUrl

`func (o *SecretProcessesorInputConfigSettings) GetTenantUrl() string`

GetTenantUrl returns the TenantUrl field if non-nil, zero value otherwise.

### GetTenantUrlOk

`func (o *SecretProcessesorInputConfigSettings) GetTenantUrlOk() (*string, bool)`

GetTenantUrlOk returns a tuple with the TenantUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantUrl

`func (o *SecretProcessesorInputConfigSettings) SetTenantUrl(v string)`

SetTenantUrl sets TenantUrl field to given value.

### HasTenantUrl

`func (o *SecretProcessesorInputConfigSettings) HasTenantUrl() bool`

HasTenantUrl returns a boolean if a field has been set.

### GetActorSid

`func (o *SecretProcessesorInputConfigSettings) GetActorSid() string`

GetActorSid returns the ActorSid field if non-nil, zero value otherwise.

### GetActorSidOk

`func (o *SecretProcessesorInputConfigSettings) GetActorSidOk() (*string, bool)`

GetActorSidOk returns a tuple with the ActorSid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActorSid

`func (o *SecretProcessesorInputConfigSettings) SetActorSid(v string)`

SetActorSid sets ActorSid field to given value.

### HasActorSid

`func (o *SecretProcessesorInputConfigSettings) HasActorSid() bool`

HasActorSid returns a boolean if a field has been set.

### GetReplicationStartTime

`func (o *SecretProcessesorInputConfigSettings) GetReplicationStartTime() string`

GetReplicationStartTime returns the ReplicationStartTime field if non-nil, zero value otherwise.

### GetReplicationStartTimeOk

`func (o *SecretProcessesorInputConfigSettings) GetReplicationStartTimeOk() (*string, bool)`

GetReplicationStartTimeOk returns a tuple with the ReplicationStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplicationStartTime

`func (o *SecretProcessesorInputConfigSettings) SetReplicationStartTime(v string)`

SetReplicationStartTime sets ReplicationStartTime field to given value.

### HasReplicationStartTime

`func (o *SecretProcessesorInputConfigSettings) HasReplicationStartTime() bool`

HasReplicationStartTime returns a boolean if a field has been set.

### GetResourceSid

`func (o *SecretProcessesorInputConfigSettings) GetResourceSid() string`

GetResourceSid returns the ResourceSid field if non-nil, zero value otherwise.

### GetResourceSidOk

`func (o *SecretProcessesorInputConfigSettings) GetResourceSidOk() (*string, bool)`

GetResourceSidOk returns a tuple with the ResourceSid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceSid

`func (o *SecretProcessesorInputConfigSettings) SetResourceSid(v string)`

SetResourceSid sets ResourceSid field to given value.

### HasResourceSid

`func (o *SecretProcessesorInputConfigSettings) HasResourceSid() bool`

HasResourceSid returns a boolean if a field has been set.

### GetInstanceName

`func (o *SecretProcessesorInputConfigSettings) GetInstanceName() string`

GetInstanceName returns the InstanceName field if non-nil, zero value otherwise.

### GetInstanceNameOk

`func (o *SecretProcessesorInputConfigSettings) GetInstanceNameOk() (*string, bool)`

GetInstanceNameOk returns a tuple with the InstanceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceName

`func (o *SecretProcessesorInputConfigSettings) SetInstanceName(v string)`

SetInstanceName sets InstanceName field to given value.

### HasInstanceName

`func (o *SecretProcessesorInputConfigSettings) HasInstanceName() bool`

HasInstanceName returns a boolean if a field has been set.

### GetStreams

`func (o *SecretProcessesorInputConfigSettings) GetStreams() []string`

GetStreams returns the Streams field if non-nil, zero value otherwise.

### GetStreamsOk

`func (o *SecretProcessesorInputConfigSettings) GetStreamsOk() (*[]string, bool)`

GetStreamsOk returns a tuple with the Streams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreams

`func (o *SecretProcessesorInputConfigSettings) SetStreams(v []string)`

SetStreams sets Streams field to given value.

### HasStreams

`func (o *SecretProcessesorInputConfigSettings) HasStreams() bool`

HasStreams returns a boolean if a field has been set.

### GetWithPayload

`func (o *SecretProcessesorInputConfigSettings) GetWithPayload() bool`

GetWithPayload returns the WithPayload field if non-nil, zero value otherwise.

### GetWithPayloadOk

`func (o *SecretProcessesorInputConfigSettings) GetWithPayloadOk() (*bool, bool)`

GetWithPayloadOk returns a tuple with the WithPayload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithPayload

`func (o *SecretProcessesorInputConfigSettings) SetWithPayload(v bool)`

SetWithPayload sets WithPayload field to given value.

### HasWithPayload

`func (o *SecretProcessesorInputConfigSettings) HasWithPayload() bool`

HasWithPayload returns a boolean if a field has been set.

### GetAssetStatus

`func (o *SecretProcessesorInputConfigSettings) GetAssetStatus() []string`

GetAssetStatus returns the AssetStatus field if non-nil, zero value otherwise.

### GetAssetStatusOk

`func (o *SecretProcessesorInputConfigSettings) GetAssetStatusOk() (*[]string, bool)`

GetAssetStatusOk returns a tuple with the AssetStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetStatus

`func (o *SecretProcessesorInputConfigSettings) SetAssetStatus(v []string)`

SetAssetStatus sets AssetStatus field to given value.

### HasAssetStatus

`func (o *SecretProcessesorInputConfigSettings) HasAssetStatus() bool`

HasAssetStatus returns a boolean if a field has been set.

### GetDetectionMethod

`func (o *SecretProcessesorInputConfigSettings) GetDetectionMethod() []string`

GetDetectionMethod returns the DetectionMethod field if non-nil, zero value otherwise.

### GetDetectionMethodOk

`func (o *SecretProcessesorInputConfigSettings) GetDetectionMethodOk() (*[]string, bool)`

GetDetectionMethodOk returns a tuple with the DetectionMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetectionMethod

`func (o *SecretProcessesorInputConfigSettings) SetDetectionMethod(v []string)`

SetDetectionMethod sets DetectionMethod field to given value.

### HasDetectionMethod

`func (o *SecretProcessesorInputConfigSettings) HasDetectionMethod() bool`

HasDetectionMethod returns a boolean if a field has been set.

### GetVendorSeverity

`func (o *SecretProcessesorInputConfigSettings) GetVendorSeverity() []string`

GetVendorSeverity returns the VendorSeverity field if non-nil, zero value otherwise.

### GetVendorSeverityOk

`func (o *SecretProcessesorInputConfigSettings) GetVendorSeverityOk() (*[]string, bool)`

GetVendorSeverityOk returns a tuple with the VendorSeverity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorSeverity

`func (o *SecretProcessesorInputConfigSettings) SetVendorSeverity(v []string)`

SetVendorSeverity sets VendorSeverity field to given value.

### HasVendorSeverity

`func (o *SecretProcessesorInputConfigSettings) HasVendorSeverity() bool`

HasVendorSeverity returns a boolean if a field has been set.

### GetEmailAddress

`func (o *SecretProcessesorInputConfigSettings) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *SecretProcessesorInputConfigSettings) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *SecretProcessesorInputConfigSettings) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *SecretProcessesorInputConfigSettings) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetSubDomain

`func (o *SecretProcessesorInputConfigSettings) GetSubDomain() string`

GetSubDomain returns the SubDomain field if non-nil, zero value otherwise.

### GetSubDomainOk

`func (o *SecretProcessesorInputConfigSettings) GetSubDomainOk() (*string, bool)`

GetSubDomainOk returns a tuple with the SubDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubDomain

`func (o *SecretProcessesorInputConfigSettings) SetSubDomain(v string)`

SetSubDomain sets SubDomain field to given value.

### HasSubDomain

`func (o *SecretProcessesorInputConfigSettings) HasSubDomain() bool`

HasSubDomain returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


