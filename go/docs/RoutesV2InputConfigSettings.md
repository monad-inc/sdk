# RoutesV2InputConfigSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActorType** | Pointer to **string** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**CloudType** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 
**Sort** | Pointer to **string** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. | [optional] 
**TargetIndustries** | Pointer to **string** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**Email** | Pointer to **string** | Email address to use to authenticate with Google Cloud. | [optional] 
**Host** | Pointer to **string** |  | [optional] 
**Actions** | Pointer to **[]string** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) | [optional] 
**Actor** | Pointer to **string** | Filter by the username that initiated the action | [optional] 
**Country** | Pointer to **string** | Filter by actor&#39;s country code (e.g., US) | [optional] 
**CreatedAfter** | Pointer to **string** | Only return audit log entries after this RFC3339 formatted time stamp | [optional] 
**Enterprise** | Pointer to **string** | Your GitHub enterprise slug or ID | [optional] 
**Include** | Pointer to **string** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**Organization** | Pointer to **string** | Filter by organization name | [optional] 
**Repository** | Pointer to **string** | Filter by repository (format: org-name/repo-name) | [optional] 
**User** | Pointer to **string** | Filter by the username that was affected by the action | [optional] 
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
**EndpointUrl** | Pointer to **string** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/vulnerability-findings&#39;. | [optional] 
**Result** | Pointer to **[]string** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. | [optional] 
**Severity** | Pointer to **[]string** | Severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. | [optional] 
**Status** | Pointer to **[]string** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. | [optional] 
**Filter** | Pointer to **string** | The filter to apply to the logs. | [optional] 
**ResourceNames** | Pointer to **[]string** | The resources to query logs from. | [optional] 
**CloudPlatform** | Pointer to **[]string** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**EntityType** | Pointer to **[]string** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. | [optional] 
**Rate** | Pointer to **int32** | The rate at which to generate records (between 1 and 1000) per second | [optional] 
**RecordType** | Pointer to **string** | The type of record to generate | [optional] 
**CustomTemplate** | Pointer to **string** | A custom template using the functions we provide to generate demo data | [optional] 
**Category** | Pointer to **string** | The Category of logs to query | [optional] 
**WorkspaceId** | Pointer to **string** | The workspace ID of the Log Analytics workspace | [optional] 
**AppName** | Pointer to **string** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. | [optional] 
**Cloud** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**MemberCid** | Pointer to **string** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. | [optional] 
**StoryId** | Pointer to **string** | Filter by the given story. | [optional] 
**TeamId** | Pointer to **string** | Filter by the given team. | [optional] 
**TenantUrl** | Pointer to **string** | Unique URL for your Tines instance | [optional] 
**Query** | Pointer to **string** | The query to run against the Log Analytics workspace | [optional] 
**OrgUrl** | Pointer to **string** | URL of the organization to monitor | [optional] 
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

`func (o *RoutesV2InputConfigSettings) GetSeverity() []string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *RoutesV2InputConfigSettings) GetSeverityOk() (*[]string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *RoutesV2InputConfigSettings) SetSeverity(v []string)`

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

### GetOrgUrl

`func (o *RoutesV2InputConfigSettings) GetOrgUrl() string`

GetOrgUrl returns the OrgUrl field if non-nil, zero value otherwise.

### GetOrgUrlOk

`func (o *RoutesV2InputConfigSettings) GetOrgUrlOk() (*string, bool)`

GetOrgUrlOk returns a tuple with the OrgUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgUrl

`func (o *RoutesV2InputConfigSettings) SetOrgUrl(v string)`

SetOrgUrl sets OrgUrl field to given value.

### HasOrgUrl

`func (o *RoutesV2InputConfigSettings) HasOrgUrl() bool`

HasOrgUrl returns a boolean if a field has been set.

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


