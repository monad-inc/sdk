# RoutesV2InputConfigSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActorType** | Pointer to **string** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**CloudType** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**Cron** | Pointer to **string** | Cron expression to schedule the data collection. | [optional] 
**Sort** | Pointer to **string** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. | [optional] 
**TargetIndustries** | Pointer to **string** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**AuthType** | Pointer to **string** | Authentication type (service_account or oauth) | [optional] 
**Email** | Pointer to **string** | Email address to use to authenticate with Google Cloud (required for service_account auth). | [optional] 
**Host** | Pointer to **string** |  | [optional] 
**Actions** | Pointer to **[]string** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) | [optional] 
**Actor** | Pointer to **string** | Filter by the username that initiated the action | [optional] 
**Country** | Pointer to **string** | Filter by actor&#39;s country code (e.g., US) | [optional] 
**CreatedAfter** | Pointer to **string** | Only return audit log entries after this RFC3339 formatted time stamp | [optional] 
**Enterprise** | Pointer to **string** | Your GitHub enterprise slug or ID | [optional] 
**Include** | Pointer to **string** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**Organization** | Pointer to **string** | Filter by organization name | [optional] 
**Repository** | Pointer to **string** | Filter by repository (format: org-name/repo-name) | [optional] 
**User** | Pointer to **string** | The username of the Snowflake account used to establish the connection. | [optional] 
**Bucket** | Pointer to **string** | The name of the S3 bucket | [optional] 
**Compression** | Pointer to **string** | Compression format of the S3 objects. | [optional] 
**Format** | Pointer to **string** | File format of the S3 objects. | [optional] 
**PartitionFormat** | Pointer to **string** | Role ARN to assume when reading from S3. | [optional] 
**Prefix** | Pointer to **string** | Prefix of the S3 object keys to read. | [optional] 
**RecordLocation** | Pointer to **string** | Specifies the partition format of your S3 bucket. Select the option that matches how your data is currently organized in S3. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. | [optional] 
**Region** | Pointer to **string** | The region of the S3 bucket | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the role to assume to access the bucket | [optional] 
**CorrelationId** | Pointer to **string** | The correlation ID of the log | [optional] 
**ResourceGroupName** | Pointer to **string** | The name of the resource group | [optional] 
**ResourceProvider** | Pointer to **string** | The provider of the resource | [optional] 
**ResourceUri** | Pointer to **string** | The URI of the resource | [optional] 
**SubscriptionId** | Pointer to **string** | The subscription ID of the Azure subscription | [optional] 
**TenantId** | Pointer to **string** | The tenant ID of the Azure AD application | [optional] 
**Dataset** | Pointer to **string** | The BigQuery dataset ID containing the table | [optional] 
**Project** | Pointer to **string** | The GCP project ID containing the BigQuery dataset | [optional] 
**Query** | Pointer to **string** | Optional custom query to use instead of table (must include timestamp_column) | [optional] 
**Table** | Pointer to **string** | The name of the table in Snowflake to query data from. | [optional] 
**TimestampColumn** | Pointer to **string** | The column containing timestamp values used for incremental loading | [optional] 
**EventType** | Pointer to **[]string** | A list of event types to filter by. | [optional] 
**FilterTerm** | Pointer to **string** | Limits the results to only users who&#39;s name or login start with the search term. | [optional] 
**AssetTypes** | Pointer to **[]string** | The type of assets to scan for.  If left empty, will scan all assets | [optional] 
**ResourceNames** | Pointer to **[]string** | The resources to query logs from. | [optional] 
**EndpointUrl** | Pointer to **string** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/vulnerability-findings&#39;. | [optional] 
**Result** | Pointer to **[]string** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **[]string** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. | [optional] 
**EnableProtoPayloadParsing** | Pointer to **bool** | Enables automatic parsing of embedded protocol buffer payloads within the input. | [optional] 
**Filter** | Pointer to **string** | The filter to apply to the logs. | [optional] 
**CloudPlatform** | Pointer to **[]string** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**EntityType** | Pointer to **[]string** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. | [optional] 
**FullSnapshot** | Pointer to **bool** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. | [optional] 
**Interval** | Pointer to **int32** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. | [optional] 
**AwsQueueUrl** | Pointer to **string** | AWS SQS queue URL provided to you by the CrowdStrike Falcon console | [optional] 
**AwsRegionName** | Pointer to **string** | Name of the region where the queue resides | [optional] 
**AwsS3Url** | Pointer to **string** | The URL of the S3 bucket | [optional] 
**VisibilityTimeout** | Pointer to **int32** | Time in seconds before a message is returned back to the SQS queue | [optional] 
**Category** | Pointer to **string** | The Category of logs to query | [optional] 
**Rate** | Pointer to **int32** | The rate at which to generate records (between 1 and 1000) per second | [optional] 
**RecordType** | Pointer to **string** | The type of record to generate | [optional] 
**CustomTemplate** | Pointer to **string** | A custom template using the functions we provide to generate demo data | [optional] 
**FieldOption** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. | [optional] 
**WorkspaceId** | Pointer to **string** | The workspace ID of the Log Analytics workspace | [optional] 
**AppName** | Pointer to **string** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. | [optional] 
**Cloud** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**MemberCid** | Pointer to **string** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. | [optional] 
**StoryId** | Pointer to **string** | Filter by the given story. | [optional] 
**TeamId** | Pointer to **string** | Team ID to filter user results by | [optional] 
**TenantUrl** | Pointer to **string** | Unique URL for your Tines instance | [optional] 
**OrgSlug** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**Repo** | Pointer to **string** | A repository slug to filter full-scans by. | [optional] 
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
**Severities** | Pointer to **[]string** | @Description Filter Issues according to Control severity | [optional] 
**StackLayers** | Pointer to **[]string** | @Description Filter Issues from specific stack layers | [optional] 
**TenantDataCenter** | Pointer to **string** | DataCenter represents the tenant&#39;s data center location @Description Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; @Description Find your tenant data center on the Tenant Info page in Wiz, or request it from your Wiz customer contact | [optional] 
**LogType** | Pointer to **string** |  | [optional] 
**Account** | Pointer to **string** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**Database** | Pointer to **string** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**Role** | Pointer to **string** | The name of the Role your service account was granted which can access your resources. | [optional] 
**Schema** | Pointer to **string** | The schema within the Snowflake database where the target table resides. | [optional] 
**Warehouse** | Pointer to **string** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 
**UserRoleOption** | Pointer to **string** | Allows for filtering the output by user role. | [optional] 
**UserTypeOption** | Pointer to **string** | Allows for filtering the output by user type. | [optional] 
**FullSync** | Pointer to **bool** | Boolean to control weather the input performs full syncs or incremental syncs | [optional] 
**AssetStatus** | Pointer to **[]string** | Asset status types for Wiz. Ex: &#39;ACTIVE&#39;, &#39;INACTIVE&#39;. | [optional] 
**AssetType** | Pointer to **string** | Asset types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**DetectionMethod** | Pointer to **[]string** | Detection method types for Wiz. Ex: &#39;AGENT&#39;, &#39;CLOUD&#39;, &#39;AGENT_CLOUD&#39;. | [optional] 
**VendorSeverity** | Pointer to **[]string** | Vendor severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. | [optional] 

## Methods

### NewRoutesV2InputConfigSettings

`func NewRoutesV2InputConfigSettings() *RoutesV2InputConfigSettings`

NewRoutesV2InputConfigSettings instantiates a new RoutesV2InputConfigSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2InputConfigSettingsWithDefaults

`func NewRoutesV2InputConfigSettingsWithDefaults() *RoutesV2InputConfigSettings`

NewRoutesV2InputConfigSettingsWithDefaults instantiates a new RoutesV2InputConfigSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActorType

`func (o *RoutesV2InputConfigSettings) GetActorType() string`

GetActorType returns the ActorType field if non-nil, zero value otherwise.

### GetActorTypeOk

`func (o *RoutesV2InputConfigSettings) GetActorTypeOk() (*string, bool)`

GetActorTypeOk returns a tuple with the ActorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActorType

`func (o *RoutesV2InputConfigSettings) SetActorType(v string)`

SetActorType sets ActorType field to given value.

### HasActorType

`func (o *RoutesV2InputConfigSettings) HasActorType() bool`

HasActorType returns a boolean if a field has been set.

### GetCloudType

`func (o *RoutesV2InputConfigSettings) GetCloudType() string`

GetCloudType returns the CloudType field if non-nil, zero value otherwise.

### GetCloudTypeOk

`func (o *RoutesV2InputConfigSettings) GetCloudTypeOk() (*string, bool)`

GetCloudTypeOk returns a tuple with the CloudType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudType

`func (o *RoutesV2InputConfigSettings) SetCloudType(v string)`

SetCloudType sets CloudType field to given value.

### HasCloudType

`func (o *RoutesV2InputConfigSettings) HasCloudType() bool`

HasCloudType returns a boolean if a field has been set.

### GetCron

`func (o *RoutesV2InputConfigSettings) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *RoutesV2InputConfigSettings) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *RoutesV2InputConfigSettings) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *RoutesV2InputConfigSettings) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetSort

`func (o *RoutesV2InputConfigSettings) GetSort() string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *RoutesV2InputConfigSettings) GetSortOk() (*string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *RoutesV2InputConfigSettings) SetSort(v string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *RoutesV2InputConfigSettings) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetTargetIndustries

`func (o *RoutesV2InputConfigSettings) GetTargetIndustries() string`

GetTargetIndustries returns the TargetIndustries field if non-nil, zero value otherwise.

### GetTargetIndustriesOk

`func (o *RoutesV2InputConfigSettings) GetTargetIndustriesOk() (*string, bool)`

GetTargetIndustriesOk returns a tuple with the TargetIndustries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetIndustries

`func (o *RoutesV2InputConfigSettings) SetTargetIndustries(v string)`

SetTargetIndustries sets TargetIndustries field to given value.

### HasTargetIndustries

`func (o *RoutesV2InputConfigSettings) HasTargetIndustries() bool`

HasTargetIndustries returns a boolean if a field has been set.

### GetAuthType

`func (o *RoutesV2InputConfigSettings) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *RoutesV2InputConfigSettings) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *RoutesV2InputConfigSettings) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *RoutesV2InputConfigSettings) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetEmail

`func (o *RoutesV2InputConfigSettings) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *RoutesV2InputConfigSettings) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *RoutesV2InputConfigSettings) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *RoutesV2InputConfigSettings) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetHost

`func (o *RoutesV2InputConfigSettings) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *RoutesV2InputConfigSettings) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *RoutesV2InputConfigSettings) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *RoutesV2InputConfigSettings) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetActions

`func (o *RoutesV2InputConfigSettings) GetActions() []string`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *RoutesV2InputConfigSettings) GetActionsOk() (*[]string, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *RoutesV2InputConfigSettings) SetActions(v []string)`

SetActions sets Actions field to given value.

### HasActions

`func (o *RoutesV2InputConfigSettings) HasActions() bool`

HasActions returns a boolean if a field has been set.

### GetActor

`func (o *RoutesV2InputConfigSettings) GetActor() string`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *RoutesV2InputConfigSettings) GetActorOk() (*string, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *RoutesV2InputConfigSettings) SetActor(v string)`

SetActor sets Actor field to given value.

### HasActor

`func (o *RoutesV2InputConfigSettings) HasActor() bool`

HasActor returns a boolean if a field has been set.

### GetCountry

`func (o *RoutesV2InputConfigSettings) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *RoutesV2InputConfigSettings) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *RoutesV2InputConfigSettings) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *RoutesV2InputConfigSettings) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetCreatedAfter

`func (o *RoutesV2InputConfigSettings) GetCreatedAfter() string`

GetCreatedAfter returns the CreatedAfter field if non-nil, zero value otherwise.

### GetCreatedAfterOk

`func (o *RoutesV2InputConfigSettings) GetCreatedAfterOk() (*string, bool)`

GetCreatedAfterOk returns a tuple with the CreatedAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAfter

`func (o *RoutesV2InputConfigSettings) SetCreatedAfter(v string)`

SetCreatedAfter sets CreatedAfter field to given value.

### HasCreatedAfter

`func (o *RoutesV2InputConfigSettings) HasCreatedAfter() bool`

HasCreatedAfter returns a boolean if a field has been set.

### GetEnterprise

`func (o *RoutesV2InputConfigSettings) GetEnterprise() string`

GetEnterprise returns the Enterprise field if non-nil, zero value otherwise.

### GetEnterpriseOk

`func (o *RoutesV2InputConfigSettings) GetEnterpriseOk() (*string, bool)`

GetEnterpriseOk returns a tuple with the Enterprise field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnterprise

`func (o *RoutesV2InputConfigSettings) SetEnterprise(v string)`

SetEnterprise sets Enterprise field to given value.

### HasEnterprise

`func (o *RoutesV2InputConfigSettings) HasEnterprise() bool`

HasEnterprise returns a boolean if a field has been set.

### GetInclude

`func (o *RoutesV2InputConfigSettings) GetInclude() string`

GetInclude returns the Include field if non-nil, zero value otherwise.

### GetIncludeOk

`func (o *RoutesV2InputConfigSettings) GetIncludeOk() (*string, bool)`

GetIncludeOk returns a tuple with the Include field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclude

`func (o *RoutesV2InputConfigSettings) SetInclude(v string)`

SetInclude sets Include field to given value.

### HasInclude

`func (o *RoutesV2InputConfigSettings) HasInclude() bool`

HasInclude returns a boolean if a field has been set.

### GetOrganization

`func (o *RoutesV2InputConfigSettings) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *RoutesV2InputConfigSettings) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *RoutesV2InputConfigSettings) SetOrganization(v string)`

SetOrganization sets Organization field to given value.

### HasOrganization

`func (o *RoutesV2InputConfigSettings) HasOrganization() bool`

HasOrganization returns a boolean if a field has been set.

### GetRepository

`func (o *RoutesV2InputConfigSettings) GetRepository() string`

GetRepository returns the Repository field if non-nil, zero value otherwise.

### GetRepositoryOk

`func (o *RoutesV2InputConfigSettings) GetRepositoryOk() (*string, bool)`

GetRepositoryOk returns a tuple with the Repository field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepository

`func (o *RoutesV2InputConfigSettings) SetRepository(v string)`

SetRepository sets Repository field to given value.

### HasRepository

`func (o *RoutesV2InputConfigSettings) HasRepository() bool`

HasRepository returns a boolean if a field has been set.

### GetUser

`func (o *RoutesV2InputConfigSettings) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *RoutesV2InputConfigSettings) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *RoutesV2InputConfigSettings) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *RoutesV2InputConfigSettings) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetBucket

`func (o *RoutesV2InputConfigSettings) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *RoutesV2InputConfigSettings) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *RoutesV2InputConfigSettings) SetBucket(v string)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *RoutesV2InputConfigSettings) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetCompression

`func (o *RoutesV2InputConfigSettings) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *RoutesV2InputConfigSettings) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *RoutesV2InputConfigSettings) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *RoutesV2InputConfigSettings) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetFormat

`func (o *RoutesV2InputConfigSettings) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *RoutesV2InputConfigSettings) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *RoutesV2InputConfigSettings) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *RoutesV2InputConfigSettings) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *RoutesV2InputConfigSettings) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *RoutesV2InputConfigSettings) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *RoutesV2InputConfigSettings) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *RoutesV2InputConfigSettings) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *RoutesV2InputConfigSettings) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *RoutesV2InputConfigSettings) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *RoutesV2InputConfigSettings) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *RoutesV2InputConfigSettings) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRecordLocation

`func (o *RoutesV2InputConfigSettings) GetRecordLocation() string`

GetRecordLocation returns the RecordLocation field if non-nil, zero value otherwise.

### GetRecordLocationOk

`func (o *RoutesV2InputConfigSettings) GetRecordLocationOk() (*string, bool)`

GetRecordLocationOk returns a tuple with the RecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocation

`func (o *RoutesV2InputConfigSettings) SetRecordLocation(v string)`

SetRecordLocation sets RecordLocation field to given value.

### HasRecordLocation

`func (o *RoutesV2InputConfigSettings) HasRecordLocation() bool`

HasRecordLocation returns a boolean if a field has been set.

### GetRegion

`func (o *RoutesV2InputConfigSettings) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *RoutesV2InputConfigSettings) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *RoutesV2InputConfigSettings) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *RoutesV2InputConfigSettings) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *RoutesV2InputConfigSettings) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *RoutesV2InputConfigSettings) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *RoutesV2InputConfigSettings) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *RoutesV2InputConfigSettings) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetCorrelationId

`func (o *RoutesV2InputConfigSettings) GetCorrelationId() string`

GetCorrelationId returns the CorrelationId field if non-nil, zero value otherwise.

### GetCorrelationIdOk

`func (o *RoutesV2InputConfigSettings) GetCorrelationIdOk() (*string, bool)`

GetCorrelationIdOk returns a tuple with the CorrelationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationId

`func (o *RoutesV2InputConfigSettings) SetCorrelationId(v string)`

SetCorrelationId sets CorrelationId field to given value.

### HasCorrelationId

`func (o *RoutesV2InputConfigSettings) HasCorrelationId() bool`

HasCorrelationId returns a boolean if a field has been set.

### GetResourceGroupName

`func (o *RoutesV2InputConfigSettings) GetResourceGroupName() string`

GetResourceGroupName returns the ResourceGroupName field if non-nil, zero value otherwise.

### GetResourceGroupNameOk

`func (o *RoutesV2InputConfigSettings) GetResourceGroupNameOk() (*string, bool)`

GetResourceGroupNameOk returns a tuple with the ResourceGroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceGroupName

`func (o *RoutesV2InputConfigSettings) SetResourceGroupName(v string)`

SetResourceGroupName sets ResourceGroupName field to given value.

### HasResourceGroupName

`func (o *RoutesV2InputConfigSettings) HasResourceGroupName() bool`

HasResourceGroupName returns a boolean if a field has been set.

### GetResourceProvider

`func (o *RoutesV2InputConfigSettings) GetResourceProvider() string`

GetResourceProvider returns the ResourceProvider field if non-nil, zero value otherwise.

### GetResourceProviderOk

`func (o *RoutesV2InputConfigSettings) GetResourceProviderOk() (*string, bool)`

GetResourceProviderOk returns a tuple with the ResourceProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceProvider

`func (o *RoutesV2InputConfigSettings) SetResourceProvider(v string)`

SetResourceProvider sets ResourceProvider field to given value.

### HasResourceProvider

`func (o *RoutesV2InputConfigSettings) HasResourceProvider() bool`

HasResourceProvider returns a boolean if a field has been set.

### GetResourceUri

`func (o *RoutesV2InputConfigSettings) GetResourceUri() string`

GetResourceUri returns the ResourceUri field if non-nil, zero value otherwise.

### GetResourceUriOk

`func (o *RoutesV2InputConfigSettings) GetResourceUriOk() (*string, bool)`

GetResourceUriOk returns a tuple with the ResourceUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceUri

`func (o *RoutesV2InputConfigSettings) SetResourceUri(v string)`

SetResourceUri sets ResourceUri field to given value.

### HasResourceUri

`func (o *RoutesV2InputConfigSettings) HasResourceUri() bool`

HasResourceUri returns a boolean if a field has been set.

### GetSubscriptionId

`func (o *RoutesV2InputConfigSettings) GetSubscriptionId() string`

GetSubscriptionId returns the SubscriptionId field if non-nil, zero value otherwise.

### GetSubscriptionIdOk

`func (o *RoutesV2InputConfigSettings) GetSubscriptionIdOk() (*string, bool)`

GetSubscriptionIdOk returns a tuple with the SubscriptionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionId

`func (o *RoutesV2InputConfigSettings) SetSubscriptionId(v string)`

SetSubscriptionId sets SubscriptionId field to given value.

### HasSubscriptionId

`func (o *RoutesV2InputConfigSettings) HasSubscriptionId() bool`

HasSubscriptionId returns a boolean if a field has been set.

### GetTenantId

`func (o *RoutesV2InputConfigSettings) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *RoutesV2InputConfigSettings) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *RoutesV2InputConfigSettings) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *RoutesV2InputConfigSettings) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetDataset

`func (o *RoutesV2InputConfigSettings) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *RoutesV2InputConfigSettings) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *RoutesV2InputConfigSettings) SetDataset(v string)`

SetDataset sets Dataset field to given value.

### HasDataset

`func (o *RoutesV2InputConfigSettings) HasDataset() bool`

HasDataset returns a boolean if a field has been set.

### GetProject

`func (o *RoutesV2InputConfigSettings) GetProject() string`

GetProject returns the Project field if non-nil, zero value otherwise.

### GetProjectOk

`func (o *RoutesV2InputConfigSettings) GetProjectOk() (*string, bool)`

GetProjectOk returns a tuple with the Project field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProject

`func (o *RoutesV2InputConfigSettings) SetProject(v string)`

SetProject sets Project field to given value.

### HasProject

`func (o *RoutesV2InputConfigSettings) HasProject() bool`

HasProject returns a boolean if a field has been set.

### GetQuery

`func (o *RoutesV2InputConfigSettings) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *RoutesV2InputConfigSettings) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *RoutesV2InputConfigSettings) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *RoutesV2InputConfigSettings) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetTable

`func (o *RoutesV2InputConfigSettings) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *RoutesV2InputConfigSettings) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *RoutesV2InputConfigSettings) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *RoutesV2InputConfigSettings) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetTimestampColumn

`func (o *RoutesV2InputConfigSettings) GetTimestampColumn() string`

GetTimestampColumn returns the TimestampColumn field if non-nil, zero value otherwise.

### GetTimestampColumnOk

`func (o *RoutesV2InputConfigSettings) GetTimestampColumnOk() (*string, bool)`

GetTimestampColumnOk returns a tuple with the TimestampColumn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampColumn

`func (o *RoutesV2InputConfigSettings) SetTimestampColumn(v string)`

SetTimestampColumn sets TimestampColumn field to given value.

### HasTimestampColumn

`func (o *RoutesV2InputConfigSettings) HasTimestampColumn() bool`

HasTimestampColumn returns a boolean if a field has been set.

### GetEventType

`func (o *RoutesV2InputConfigSettings) GetEventType() []string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *RoutesV2InputConfigSettings) GetEventTypeOk() (*[]string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *RoutesV2InputConfigSettings) SetEventType(v []string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *RoutesV2InputConfigSettings) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetFilterTerm

`func (o *RoutesV2InputConfigSettings) GetFilterTerm() string`

GetFilterTerm returns the FilterTerm field if non-nil, zero value otherwise.

### GetFilterTermOk

`func (o *RoutesV2InputConfigSettings) GetFilterTermOk() (*string, bool)`

GetFilterTermOk returns a tuple with the FilterTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterTerm

`func (o *RoutesV2InputConfigSettings) SetFilterTerm(v string)`

SetFilterTerm sets FilterTerm field to given value.

### HasFilterTerm

`func (o *RoutesV2InputConfigSettings) HasFilterTerm() bool`

HasFilterTerm returns a boolean if a field has been set.

### GetAssetTypes

`func (o *RoutesV2InputConfigSettings) GetAssetTypes() []string`

GetAssetTypes returns the AssetTypes field if non-nil, zero value otherwise.

### GetAssetTypesOk

`func (o *RoutesV2InputConfigSettings) GetAssetTypesOk() (*[]string, bool)`

GetAssetTypesOk returns a tuple with the AssetTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetTypes

`func (o *RoutesV2InputConfigSettings) SetAssetTypes(v []string)`

SetAssetTypes sets AssetTypes field to given value.

### HasAssetTypes

`func (o *RoutesV2InputConfigSettings) HasAssetTypes() bool`

HasAssetTypes returns a boolean if a field has been set.

### GetResourceNames

`func (o *RoutesV2InputConfigSettings) GetResourceNames() []string`

GetResourceNames returns the ResourceNames field if non-nil, zero value otherwise.

### GetResourceNamesOk

`func (o *RoutesV2InputConfigSettings) GetResourceNamesOk() (*[]string, bool)`

GetResourceNamesOk returns a tuple with the ResourceNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceNames

`func (o *RoutesV2InputConfigSettings) SetResourceNames(v []string)`

SetResourceNames sets ResourceNames field to given value.

### HasResourceNames

`func (o *RoutesV2InputConfigSettings) HasResourceNames() bool`

HasResourceNames returns a boolean if a field has been set.

### GetEndpointUrl

`func (o *RoutesV2InputConfigSettings) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *RoutesV2InputConfigSettings) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *RoutesV2InputConfigSettings) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.

### HasEndpointUrl

`func (o *RoutesV2InputConfigSettings) HasEndpointUrl() bool`

HasEndpointUrl returns a boolean if a field has been set.

### GetResult

`func (o *RoutesV2InputConfigSettings) GetResult() []string`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *RoutesV2InputConfigSettings) GetResultOk() (*[]string, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *RoutesV2InputConfigSettings) SetResult(v []string)`

SetResult sets Result field to given value.

### HasResult

`func (o *RoutesV2InputConfigSettings) HasResult() bool`

HasResult returns a boolean if a field has been set.

### GetSeverity

`func (o *RoutesV2InputConfigSettings) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *RoutesV2InputConfigSettings) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *RoutesV2InputConfigSettings) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *RoutesV2InputConfigSettings) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetStatus

`func (o *RoutesV2InputConfigSettings) GetStatus() []string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoutesV2InputConfigSettings) GetStatusOk() (*[]string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoutesV2InputConfigSettings) SetStatus(v []string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RoutesV2InputConfigSettings) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetEnableProtoPayloadParsing

`func (o *RoutesV2InputConfigSettings) GetEnableProtoPayloadParsing() bool`

GetEnableProtoPayloadParsing returns the EnableProtoPayloadParsing field if non-nil, zero value otherwise.

### GetEnableProtoPayloadParsingOk

`func (o *RoutesV2InputConfigSettings) GetEnableProtoPayloadParsingOk() (*bool, bool)`

GetEnableProtoPayloadParsingOk returns a tuple with the EnableProtoPayloadParsing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableProtoPayloadParsing

`func (o *RoutesV2InputConfigSettings) SetEnableProtoPayloadParsing(v bool)`

SetEnableProtoPayloadParsing sets EnableProtoPayloadParsing field to given value.

### HasEnableProtoPayloadParsing

`func (o *RoutesV2InputConfigSettings) HasEnableProtoPayloadParsing() bool`

HasEnableProtoPayloadParsing returns a boolean if a field has been set.

### GetFilter

`func (o *RoutesV2InputConfigSettings) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *RoutesV2InputConfigSettings) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *RoutesV2InputConfigSettings) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *RoutesV2InputConfigSettings) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetCloudPlatform

`func (o *RoutesV2InputConfigSettings) GetCloudPlatform() []string`

GetCloudPlatform returns the CloudPlatform field if non-nil, zero value otherwise.

### GetCloudPlatformOk

`func (o *RoutesV2InputConfigSettings) GetCloudPlatformOk() (*[]string, bool)`

GetCloudPlatformOk returns a tuple with the CloudPlatform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudPlatform

`func (o *RoutesV2InputConfigSettings) SetCloudPlatform(v []string)`

SetCloudPlatform sets CloudPlatform field to given value.

### HasCloudPlatform

`func (o *RoutesV2InputConfigSettings) HasCloudPlatform() bool`

HasCloudPlatform returns a boolean if a field has been set.

### GetEntityType

`func (o *RoutesV2InputConfigSettings) GetEntityType() []string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *RoutesV2InputConfigSettings) GetEntityTypeOk() (*[]string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *RoutesV2InputConfigSettings) SetEntityType(v []string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *RoutesV2InputConfigSettings) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetFullSnapshot

`func (o *RoutesV2InputConfigSettings) GetFullSnapshot() bool`

GetFullSnapshot returns the FullSnapshot field if non-nil, zero value otherwise.

### GetFullSnapshotOk

`func (o *RoutesV2InputConfigSettings) GetFullSnapshotOk() (*bool, bool)`

GetFullSnapshotOk returns a tuple with the FullSnapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullSnapshot

`func (o *RoutesV2InputConfigSettings) SetFullSnapshot(v bool)`

SetFullSnapshot sets FullSnapshot field to given value.

### HasFullSnapshot

`func (o *RoutesV2InputConfigSettings) HasFullSnapshot() bool`

HasFullSnapshot returns a boolean if a field has been set.

### GetInterval

`func (o *RoutesV2InputConfigSettings) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *RoutesV2InputConfigSettings) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *RoutesV2InputConfigSettings) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *RoutesV2InputConfigSettings) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetAwsQueueUrl

`func (o *RoutesV2InputConfigSettings) GetAwsQueueUrl() string`

GetAwsQueueUrl returns the AwsQueueUrl field if non-nil, zero value otherwise.

### GetAwsQueueUrlOk

`func (o *RoutesV2InputConfigSettings) GetAwsQueueUrlOk() (*string, bool)`

GetAwsQueueUrlOk returns a tuple with the AwsQueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsQueueUrl

`func (o *RoutesV2InputConfigSettings) SetAwsQueueUrl(v string)`

SetAwsQueueUrl sets AwsQueueUrl field to given value.

### HasAwsQueueUrl

`func (o *RoutesV2InputConfigSettings) HasAwsQueueUrl() bool`

HasAwsQueueUrl returns a boolean if a field has been set.

### GetAwsRegionName

`func (o *RoutesV2InputConfigSettings) GetAwsRegionName() string`

GetAwsRegionName returns the AwsRegionName field if non-nil, zero value otherwise.

### GetAwsRegionNameOk

`func (o *RoutesV2InputConfigSettings) GetAwsRegionNameOk() (*string, bool)`

GetAwsRegionNameOk returns a tuple with the AwsRegionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsRegionName

`func (o *RoutesV2InputConfigSettings) SetAwsRegionName(v string)`

SetAwsRegionName sets AwsRegionName field to given value.

### HasAwsRegionName

`func (o *RoutesV2InputConfigSettings) HasAwsRegionName() bool`

HasAwsRegionName returns a boolean if a field has been set.

### GetAwsS3Url

`func (o *RoutesV2InputConfigSettings) GetAwsS3Url() string`

GetAwsS3Url returns the AwsS3Url field if non-nil, zero value otherwise.

### GetAwsS3UrlOk

`func (o *RoutesV2InputConfigSettings) GetAwsS3UrlOk() (*string, bool)`

GetAwsS3UrlOk returns a tuple with the AwsS3Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsS3Url

`func (o *RoutesV2InputConfigSettings) SetAwsS3Url(v string)`

SetAwsS3Url sets AwsS3Url field to given value.

### HasAwsS3Url

`func (o *RoutesV2InputConfigSettings) HasAwsS3Url() bool`

HasAwsS3Url returns a boolean if a field has been set.

### GetVisibilityTimeout

`func (o *RoutesV2InputConfigSettings) GetVisibilityTimeout() int32`

GetVisibilityTimeout returns the VisibilityTimeout field if non-nil, zero value otherwise.

### GetVisibilityTimeoutOk

`func (o *RoutesV2InputConfigSettings) GetVisibilityTimeoutOk() (*int32, bool)`

GetVisibilityTimeoutOk returns a tuple with the VisibilityTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisibilityTimeout

`func (o *RoutesV2InputConfigSettings) SetVisibilityTimeout(v int32)`

SetVisibilityTimeout sets VisibilityTimeout field to given value.

### HasVisibilityTimeout

`func (o *RoutesV2InputConfigSettings) HasVisibilityTimeout() bool`

HasVisibilityTimeout returns a boolean if a field has been set.

### GetCategory

`func (o *RoutesV2InputConfigSettings) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *RoutesV2InputConfigSettings) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *RoutesV2InputConfigSettings) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *RoutesV2InputConfigSettings) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetRate

`func (o *RoutesV2InputConfigSettings) GetRate() int32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *RoutesV2InputConfigSettings) GetRateOk() (*int32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *RoutesV2InputConfigSettings) SetRate(v int32)`

SetRate sets Rate field to given value.

### HasRate

`func (o *RoutesV2InputConfigSettings) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetRecordType

`func (o *RoutesV2InputConfigSettings) GetRecordType() string`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *RoutesV2InputConfigSettings) GetRecordTypeOk() (*string, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *RoutesV2InputConfigSettings) SetRecordType(v string)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *RoutesV2InputConfigSettings) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### GetCustomTemplate

`func (o *RoutesV2InputConfigSettings) GetCustomTemplate() string`

GetCustomTemplate returns the CustomTemplate field if non-nil, zero value otherwise.

### GetCustomTemplateOk

`func (o *RoutesV2InputConfigSettings) GetCustomTemplateOk() (*string, bool)`

GetCustomTemplateOk returns a tuple with the CustomTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomTemplate

`func (o *RoutesV2InputConfigSettings) SetCustomTemplate(v string)`

SetCustomTemplate sets CustomTemplate field to given value.

### HasCustomTemplate

`func (o *RoutesV2InputConfigSettings) HasCustomTemplate() bool`

HasCustomTemplate returns a boolean if a field has been set.

### GetFieldOption

`func (o *RoutesV2InputConfigSettings) GetFieldOption() string`

GetFieldOption returns the FieldOption field if non-nil, zero value otherwise.

### GetFieldOptionOk

`func (o *RoutesV2InputConfigSettings) GetFieldOptionOk() (*string, bool)`

GetFieldOptionOk returns a tuple with the FieldOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOption

`func (o *RoutesV2InputConfigSettings) SetFieldOption(v string)`

SetFieldOption sets FieldOption field to given value.

### HasFieldOption

`func (o *RoutesV2InputConfigSettings) HasFieldOption() bool`

HasFieldOption returns a boolean if a field has been set.

### GetOrganizationId

`func (o *RoutesV2InputConfigSettings) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesV2InputConfigSettings) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesV2InputConfigSettings) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesV2InputConfigSettings) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetWorkspaceId

`func (o *RoutesV2InputConfigSettings) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *RoutesV2InputConfigSettings) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *RoutesV2InputConfigSettings) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.

### HasWorkspaceId

`func (o *RoutesV2InputConfigSettings) HasWorkspaceId() bool`

HasWorkspaceId returns a boolean if a field has been set.

### GetAppName

`func (o *RoutesV2InputConfigSettings) GetAppName() string`

GetAppName returns the AppName field if non-nil, zero value otherwise.

### GetAppNameOk

`func (o *RoutesV2InputConfigSettings) GetAppNameOk() (*string, bool)`

GetAppNameOk returns a tuple with the AppName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppName

`func (o *RoutesV2InputConfigSettings) SetAppName(v string)`

SetAppName sets AppName field to given value.

### HasAppName

`func (o *RoutesV2InputConfigSettings) HasAppName() bool`

HasAppName returns a boolean if a field has been set.

### GetCloud

`func (o *RoutesV2InputConfigSettings) GetCloud() string`

GetCloud returns the Cloud field if non-nil, zero value otherwise.

### GetCloudOk

`func (o *RoutesV2InputConfigSettings) GetCloudOk() (*string, bool)`

GetCloudOk returns a tuple with the Cloud field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloud

`func (o *RoutesV2InputConfigSettings) SetCloud(v string)`

SetCloud sets Cloud field to given value.

### HasCloud

`func (o *RoutesV2InputConfigSettings) HasCloud() bool`

HasCloud returns a boolean if a field has been set.

### GetMemberCid

`func (o *RoutesV2InputConfigSettings) GetMemberCid() string`

GetMemberCid returns the MemberCid field if non-nil, zero value otherwise.

### GetMemberCidOk

`func (o *RoutesV2InputConfigSettings) GetMemberCidOk() (*string, bool)`

GetMemberCidOk returns a tuple with the MemberCid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberCid

`func (o *RoutesV2InputConfigSettings) SetMemberCid(v string)`

SetMemberCid sets MemberCid field to given value.

### HasMemberCid

`func (o *RoutesV2InputConfigSettings) HasMemberCid() bool`

HasMemberCid returns a boolean if a field has been set.

### GetStoryId

`func (o *RoutesV2InputConfigSettings) GetStoryId() string`

GetStoryId returns the StoryId field if non-nil, zero value otherwise.

### GetStoryIdOk

`func (o *RoutesV2InputConfigSettings) GetStoryIdOk() (*string, bool)`

GetStoryIdOk returns a tuple with the StoryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoryId

`func (o *RoutesV2InputConfigSettings) SetStoryId(v string)`

SetStoryId sets StoryId field to given value.

### HasStoryId

`func (o *RoutesV2InputConfigSettings) HasStoryId() bool`

HasStoryId returns a boolean if a field has been set.

### GetTeamId

`func (o *RoutesV2InputConfigSettings) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *RoutesV2InputConfigSettings) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *RoutesV2InputConfigSettings) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.

### HasTeamId

`func (o *RoutesV2InputConfigSettings) HasTeamId() bool`

HasTeamId returns a boolean if a field has been set.

### GetTenantUrl

`func (o *RoutesV2InputConfigSettings) GetTenantUrl() string`

GetTenantUrl returns the TenantUrl field if non-nil, zero value otherwise.

### GetTenantUrlOk

`func (o *RoutesV2InputConfigSettings) GetTenantUrlOk() (*string, bool)`

GetTenantUrlOk returns a tuple with the TenantUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantUrl

`func (o *RoutesV2InputConfigSettings) SetTenantUrl(v string)`

SetTenantUrl sets TenantUrl field to given value.

### HasTenantUrl

`func (o *RoutesV2InputConfigSettings) HasTenantUrl() bool`

HasTenantUrl returns a boolean if a field has been set.

### GetOrgSlug

`func (o *RoutesV2InputConfigSettings) GetOrgSlug() string`

GetOrgSlug returns the OrgSlug field if non-nil, zero value otherwise.

### GetOrgSlugOk

`func (o *RoutesV2InputConfigSettings) GetOrgSlugOk() (*string, bool)`

GetOrgSlugOk returns a tuple with the OrgSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgSlug

`func (o *RoutesV2InputConfigSettings) SetOrgSlug(v string)`

SetOrgSlug sets OrgSlug field to given value.

### HasOrgSlug

`func (o *RoutesV2InputConfigSettings) HasOrgSlug() bool`

HasOrgSlug returns a boolean if a field has been set.

### GetRepo

`func (o *RoutesV2InputConfigSettings) GetRepo() string`

GetRepo returns the Repo field if non-nil, zero value otherwise.

### GetRepoOk

`func (o *RoutesV2InputConfigSettings) GetRepoOk() (*string, bool)`

GetRepoOk returns a tuple with the Repo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepo

`func (o *RoutesV2InputConfigSettings) SetRepo(v string)`

SetRepo sets Repo field to given value.

### HasRepo

`func (o *RoutesV2InputConfigSettings) HasRepo() bool`

HasRepo returns a boolean if a field has been set.

### GetControlIds

`func (o *RoutesV2InputConfigSettings) GetControlIds() []string`

GetControlIds returns the ControlIds field if non-nil, zero value otherwise.

### GetControlIdsOk

`func (o *RoutesV2InputConfigSettings) GetControlIdsOk() (*[]string, bool)`

GetControlIdsOk returns a tuple with the ControlIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControlIds

`func (o *RoutesV2InputConfigSettings) SetControlIds(v []string)`

SetControlIds sets ControlIds field to given value.

### HasControlIds

`func (o *RoutesV2InputConfigSettings) HasControlIds() bool`

HasControlIds returns a boolean if a field has been set.

### GetHasNote

`func (o *RoutesV2InputConfigSettings) GetHasNote() string`

GetHasNote returns the HasNote field if non-nil, zero value otherwise.

### GetHasNoteOk

`func (o *RoutesV2InputConfigSettings) GetHasNoteOk() (*string, bool)`

GetHasNoteOk returns a tuple with the HasNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNote

`func (o *RoutesV2InputConfigSettings) SetHasNote(v string)`

SetHasNote sets HasNote field to given value.

### HasHasNote

`func (o *RoutesV2InputConfigSettings) HasHasNote() bool`

HasHasNote returns a boolean if a field has been set.

### GetHasRemediation

`func (o *RoutesV2InputConfigSettings) GetHasRemediation() string`

GetHasRemediation returns the HasRemediation field if non-nil, zero value otherwise.

### GetHasRemediationOk

`func (o *RoutesV2InputConfigSettings) GetHasRemediationOk() (*string, bool)`

GetHasRemediationOk returns a tuple with the HasRemediation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasRemediation

`func (o *RoutesV2InputConfigSettings) SetHasRemediation(v string)`

SetHasRemediation sets HasRemediation field to given value.

### HasHasRemediation

`func (o *RoutesV2InputConfigSettings) HasHasRemediation() bool`

HasHasRemediation returns a boolean if a field has been set.

### GetHasServiceTicket

`func (o *RoutesV2InputConfigSettings) GetHasServiceTicket() string`

GetHasServiceTicket returns the HasServiceTicket field if non-nil, zero value otherwise.

### GetHasServiceTicketOk

`func (o *RoutesV2InputConfigSettings) GetHasServiceTicketOk() (*string, bool)`

GetHasServiceTicketOk returns a tuple with the HasServiceTicket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasServiceTicket

`func (o *RoutesV2InputConfigSettings) SetHasServiceTicket(v string)`

SetHasServiceTicket sets HasServiceTicket field to given value.

### HasHasServiceTicket

`func (o *RoutesV2InputConfigSettings) HasHasServiceTicket() bool`

HasHasServiceTicket returns a boolean if a field has been set.

### GetIssueIds

`func (o *RoutesV2InputConfigSettings) GetIssueIds() []string`

GetIssueIds returns the IssueIds field if non-nil, zero value otherwise.

### GetIssueIdsOk

`func (o *RoutesV2InputConfigSettings) GetIssueIdsOk() (*[]string, bool)`

GetIssueIdsOk returns a tuple with the IssueIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueIds

`func (o *RoutesV2InputConfigSettings) SetIssueIds(v []string)`

SetIssueIds sets IssueIds field to given value.

### HasIssueIds

`func (o *RoutesV2InputConfigSettings) HasIssueIds() bool`

HasIssueIds returns a boolean if a field has been set.

### GetIssueTypes

`func (o *RoutesV2InputConfigSettings) GetIssueTypes() []string`

GetIssueTypes returns the IssueTypes field if non-nil, zero value otherwise.

### GetIssueTypesOk

`func (o *RoutesV2InputConfigSettings) GetIssueTypesOk() (*[]string, bool)`

GetIssueTypesOk returns a tuple with the IssueTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueTypes

`func (o *RoutesV2InputConfigSettings) SetIssueTypes(v []string)`

SetIssueTypes sets IssueTypes field to given value.

### HasIssueTypes

`func (o *RoutesV2InputConfigSettings) HasIssueTypes() bool`

HasIssueTypes returns a boolean if a field has been set.

### GetProjectIds

`func (o *RoutesV2InputConfigSettings) GetProjectIds() []string`

GetProjectIds returns the ProjectIds field if non-nil, zero value otherwise.

### GetProjectIdsOk

`func (o *RoutesV2InputConfigSettings) GetProjectIdsOk() (*[]string, bool)`

GetProjectIdsOk returns a tuple with the ProjectIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectIds

`func (o *RoutesV2InputConfigSettings) SetProjectIds(v []string)`

SetProjectIds sets ProjectIds field to given value.

### HasProjectIds

`func (o *RoutesV2InputConfigSettings) HasProjectIds() bool`

HasProjectIds returns a boolean if a field has been set.

### GetRelatedEntityId

`func (o *RoutesV2InputConfigSettings) GetRelatedEntityId() string`

GetRelatedEntityId returns the RelatedEntityId field if non-nil, zero value otherwise.

### GetRelatedEntityIdOk

`func (o *RoutesV2InputConfigSettings) GetRelatedEntityIdOk() (*string, bool)`

GetRelatedEntityIdOk returns a tuple with the RelatedEntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedEntityId

`func (o *RoutesV2InputConfigSettings) SetRelatedEntityId(v string)`

SetRelatedEntityId sets RelatedEntityId field to given value.

### HasRelatedEntityId

`func (o *RoutesV2InputConfigSettings) HasRelatedEntityId() bool`

HasRelatedEntityId returns a boolean if a field has been set.

### GetResolutionReasons

`func (o *RoutesV2InputConfigSettings) GetResolutionReasons() []string`

GetResolutionReasons returns the ResolutionReasons field if non-nil, zero value otherwise.

### GetResolutionReasonsOk

`func (o *RoutesV2InputConfigSettings) GetResolutionReasonsOk() (*[]string, bool)`

GetResolutionReasonsOk returns a tuple with the ResolutionReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolutionReasons

`func (o *RoutesV2InputConfigSettings) SetResolutionReasons(v []string)`

SetResolutionReasons sets ResolutionReasons field to given value.

### HasResolutionReasons

`func (o *RoutesV2InputConfigSettings) HasResolutionReasons() bool`

HasResolutionReasons returns a boolean if a field has been set.

### GetRiskEqualsAll

`func (o *RoutesV2InputConfigSettings) GetRiskEqualsAll() []string`

GetRiskEqualsAll returns the RiskEqualsAll field if non-nil, zero value otherwise.

### GetRiskEqualsAllOk

`func (o *RoutesV2InputConfigSettings) GetRiskEqualsAllOk() (*[]string, bool)`

GetRiskEqualsAllOk returns a tuple with the RiskEqualsAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskEqualsAll

`func (o *RoutesV2InputConfigSettings) SetRiskEqualsAll(v []string)`

SetRiskEqualsAll sets RiskEqualsAll field to given value.

### HasRiskEqualsAll

`func (o *RoutesV2InputConfigSettings) HasRiskEqualsAll() bool`

HasRiskEqualsAll returns a boolean if a field has been set.

### GetRiskEqualsAny

`func (o *RoutesV2InputConfigSettings) GetRiskEqualsAny() []string`

GetRiskEqualsAny returns the RiskEqualsAny field if non-nil, zero value otherwise.

### GetRiskEqualsAnyOk

`func (o *RoutesV2InputConfigSettings) GetRiskEqualsAnyOk() (*[]string, bool)`

GetRiskEqualsAnyOk returns a tuple with the RiskEqualsAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskEqualsAny

`func (o *RoutesV2InputConfigSettings) SetRiskEqualsAny(v []string)`

SetRiskEqualsAny sets RiskEqualsAny field to given value.

### HasRiskEqualsAny

`func (o *RoutesV2InputConfigSettings) HasRiskEqualsAny() bool`

HasRiskEqualsAny returns a boolean if a field has been set.

### GetSearchQuery

`func (o *RoutesV2InputConfigSettings) GetSearchQuery() string`

GetSearchQuery returns the SearchQuery field if non-nil, zero value otherwise.

### GetSearchQueryOk

`func (o *RoutesV2InputConfigSettings) GetSearchQueryOk() (*string, bool)`

GetSearchQueryOk returns a tuple with the SearchQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchQuery

`func (o *RoutesV2InputConfigSettings) SetSearchQuery(v string)`

SetSearchQuery sets SearchQuery field to given value.

### HasSearchQuery

`func (o *RoutesV2InputConfigSettings) HasSearchQuery() bool`

HasSearchQuery returns a boolean if a field has been set.

### GetSecurityScan

`func (o *RoutesV2InputConfigSettings) GetSecurityScan() string`

GetSecurityScan returns the SecurityScan field if non-nil, zero value otherwise.

### GetSecurityScanOk

`func (o *RoutesV2InputConfigSettings) GetSecurityScanOk() (*string, bool)`

GetSecurityScanOk returns a tuple with the SecurityScan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecurityScan

`func (o *RoutesV2InputConfigSettings) SetSecurityScan(v string)`

SetSecurityScan sets SecurityScan field to given value.

### HasSecurityScan

`func (o *RoutesV2InputConfigSettings) HasSecurityScan() bool`

HasSecurityScan returns a boolean if a field has been set.

### GetSeverities

`func (o *RoutesV2InputConfigSettings) GetSeverities() []string`

GetSeverities returns the Severities field if non-nil, zero value otherwise.

### GetSeveritiesOk

`func (o *RoutesV2InputConfigSettings) GetSeveritiesOk() (*[]string, bool)`

GetSeveritiesOk returns a tuple with the Severities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverities

`func (o *RoutesV2InputConfigSettings) SetSeverities(v []string)`

SetSeverities sets Severities field to given value.

### HasSeverities

`func (o *RoutesV2InputConfigSettings) HasSeverities() bool`

HasSeverities returns a boolean if a field has been set.

### GetStackLayers

`func (o *RoutesV2InputConfigSettings) GetStackLayers() []string`

GetStackLayers returns the StackLayers field if non-nil, zero value otherwise.

### GetStackLayersOk

`func (o *RoutesV2InputConfigSettings) GetStackLayersOk() (*[]string, bool)`

GetStackLayersOk returns a tuple with the StackLayers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStackLayers

`func (o *RoutesV2InputConfigSettings) SetStackLayers(v []string)`

SetStackLayers sets StackLayers field to given value.

### HasStackLayers

`func (o *RoutesV2InputConfigSettings) HasStackLayers() bool`

HasStackLayers returns a boolean if a field has been set.

### GetTenantDataCenter

`func (o *RoutesV2InputConfigSettings) GetTenantDataCenter() string`

GetTenantDataCenter returns the TenantDataCenter field if non-nil, zero value otherwise.

### GetTenantDataCenterOk

`func (o *RoutesV2InputConfigSettings) GetTenantDataCenterOk() (*string, bool)`

GetTenantDataCenterOk returns a tuple with the TenantDataCenter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantDataCenter

`func (o *RoutesV2InputConfigSettings) SetTenantDataCenter(v string)`

SetTenantDataCenter sets TenantDataCenter field to given value.

### HasTenantDataCenter

`func (o *RoutesV2InputConfigSettings) HasTenantDataCenter() bool`

HasTenantDataCenter returns a boolean if a field has been set.

### GetLogType

`func (o *RoutesV2InputConfigSettings) GetLogType() string`

GetLogType returns the LogType field if non-nil, zero value otherwise.

### GetLogTypeOk

`func (o *RoutesV2InputConfigSettings) GetLogTypeOk() (*string, bool)`

GetLogTypeOk returns a tuple with the LogType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogType

`func (o *RoutesV2InputConfigSettings) SetLogType(v string)`

SetLogType sets LogType field to given value.

### HasLogType

`func (o *RoutesV2InputConfigSettings) HasLogType() bool`

HasLogType returns a boolean if a field has been set.

### GetAccount

`func (o *RoutesV2InputConfigSettings) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *RoutesV2InputConfigSettings) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *RoutesV2InputConfigSettings) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *RoutesV2InputConfigSettings) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetDatabase

`func (o *RoutesV2InputConfigSettings) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *RoutesV2InputConfigSettings) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *RoutesV2InputConfigSettings) SetDatabase(v string)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *RoutesV2InputConfigSettings) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetRole

`func (o *RoutesV2InputConfigSettings) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *RoutesV2InputConfigSettings) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *RoutesV2InputConfigSettings) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *RoutesV2InputConfigSettings) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetSchema

`func (o *RoutesV2InputConfigSettings) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *RoutesV2InputConfigSettings) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *RoutesV2InputConfigSettings) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *RoutesV2InputConfigSettings) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetWarehouse

`func (o *RoutesV2InputConfigSettings) GetWarehouse() string`

GetWarehouse returns the Warehouse field if non-nil, zero value otherwise.

### GetWarehouseOk

`func (o *RoutesV2InputConfigSettings) GetWarehouseOk() (*string, bool)`

GetWarehouseOk returns a tuple with the Warehouse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarehouse

`func (o *RoutesV2InputConfigSettings) SetWarehouse(v string)`

SetWarehouse sets Warehouse field to given value.

### HasWarehouse

`func (o *RoutesV2InputConfigSettings) HasWarehouse() bool`

HasWarehouse returns a boolean if a field has been set.

### GetUserRoleOption

`func (o *RoutesV2InputConfigSettings) GetUserRoleOption() string`

GetUserRoleOption returns the UserRoleOption field if non-nil, zero value otherwise.

### GetUserRoleOptionOk

`func (o *RoutesV2InputConfigSettings) GetUserRoleOptionOk() (*string, bool)`

GetUserRoleOptionOk returns a tuple with the UserRoleOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserRoleOption

`func (o *RoutesV2InputConfigSettings) SetUserRoleOption(v string)`

SetUserRoleOption sets UserRoleOption field to given value.

### HasUserRoleOption

`func (o *RoutesV2InputConfigSettings) HasUserRoleOption() bool`

HasUserRoleOption returns a boolean if a field has been set.

### GetUserTypeOption

`func (o *RoutesV2InputConfigSettings) GetUserTypeOption() string`

GetUserTypeOption returns the UserTypeOption field if non-nil, zero value otherwise.

### GetUserTypeOptionOk

`func (o *RoutesV2InputConfigSettings) GetUserTypeOptionOk() (*string, bool)`

GetUserTypeOptionOk returns a tuple with the UserTypeOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserTypeOption

`func (o *RoutesV2InputConfigSettings) SetUserTypeOption(v string)`

SetUserTypeOption sets UserTypeOption field to given value.

### HasUserTypeOption

`func (o *RoutesV2InputConfigSettings) HasUserTypeOption() bool`

HasUserTypeOption returns a boolean if a field has been set.

### GetFullSync

`func (o *RoutesV2InputConfigSettings) GetFullSync() bool`

GetFullSync returns the FullSync field if non-nil, zero value otherwise.

### GetFullSyncOk

`func (o *RoutesV2InputConfigSettings) GetFullSyncOk() (*bool, bool)`

GetFullSyncOk returns a tuple with the FullSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullSync

`func (o *RoutesV2InputConfigSettings) SetFullSync(v bool)`

SetFullSync sets FullSync field to given value.

### HasFullSync

`func (o *RoutesV2InputConfigSettings) HasFullSync() bool`

HasFullSync returns a boolean if a field has been set.

### GetAssetStatus

`func (o *RoutesV2InputConfigSettings) GetAssetStatus() []string`

GetAssetStatus returns the AssetStatus field if non-nil, zero value otherwise.

### GetAssetStatusOk

`func (o *RoutesV2InputConfigSettings) GetAssetStatusOk() (*[]string, bool)`

GetAssetStatusOk returns a tuple with the AssetStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetStatus

`func (o *RoutesV2InputConfigSettings) SetAssetStatus(v []string)`

SetAssetStatus sets AssetStatus field to given value.

### HasAssetStatus

`func (o *RoutesV2InputConfigSettings) HasAssetStatus() bool`

HasAssetStatus returns a boolean if a field has been set.

### GetAssetType

`func (o *RoutesV2InputConfigSettings) GetAssetType() string`

GetAssetType returns the AssetType field if non-nil, zero value otherwise.

### GetAssetTypeOk

`func (o *RoutesV2InputConfigSettings) GetAssetTypeOk() (*string, bool)`

GetAssetTypeOk returns a tuple with the AssetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetType

`func (o *RoutesV2InputConfigSettings) SetAssetType(v string)`

SetAssetType sets AssetType field to given value.

### HasAssetType

`func (o *RoutesV2InputConfigSettings) HasAssetType() bool`

HasAssetType returns a boolean if a field has been set.

### GetDetectionMethod

`func (o *RoutesV2InputConfigSettings) GetDetectionMethod() []string`

GetDetectionMethod returns the DetectionMethod field if non-nil, zero value otherwise.

### GetDetectionMethodOk

`func (o *RoutesV2InputConfigSettings) GetDetectionMethodOk() (*[]string, bool)`

GetDetectionMethodOk returns a tuple with the DetectionMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetectionMethod

`func (o *RoutesV2InputConfigSettings) SetDetectionMethod(v []string)`

SetDetectionMethod sets DetectionMethod field to given value.

### HasDetectionMethod

`func (o *RoutesV2InputConfigSettings) HasDetectionMethod() bool`

HasDetectionMethod returns a boolean if a field has been set.

### GetVendorSeverity

`func (o *RoutesV2InputConfigSettings) GetVendorSeverity() []string`

GetVendorSeverity returns the VendorSeverity field if non-nil, zero value otherwise.

### GetVendorSeverityOk

`func (o *RoutesV2InputConfigSettings) GetVendorSeverityOk() (*[]string, bool)`

GetVendorSeverityOk returns a tuple with the VendorSeverity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorSeverity

`func (o *RoutesV2InputConfigSettings) SetVendorSeverity(v []string)`

SetVendorSeverity sets VendorSeverity field to given value.

### HasVendorSeverity

`func (o *RoutesV2InputConfigSettings) HasVendorSeverity() bool`

HasVendorSeverity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


