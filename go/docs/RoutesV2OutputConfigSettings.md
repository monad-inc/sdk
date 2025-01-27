# RoutesV2OutputConfigSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IngressAddress** | Pointer to **string** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. | [optional] 
**Path** | Pointer to **string** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. | [optional] 
**Port** | Pointer to **string** | The port of the Splunk instance. | [optional] 
**AuthType** | Pointer to **string** | The method of authentication to use with the Elasticsearch cluster. Choose between &#39;api_key&#39; or &#39;password&#39;. | [optional] 
**CloudId** | Pointer to **string** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. | [optional] 
**ConnectionType** | Pointer to **string** | The type of connection to use with Elasticsearch. Choose between &#39;cloud_id&#39; for Elastic Cloud or &#39;url&#39; for direct connection. | [optional] 
**Index** | Pointer to **string** | The name of the OpenSearch index to use. | [optional] 
**InsecureSkipVerify** | Pointer to **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**Url** | Pointer to **string** | The URL of the Sumo Logic instance. | [optional] 
**Username** | Pointer to **string** | The username for authenticating with OpenSearch. | [optional] 
**Endpoint** | Pointer to **string** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. | [optional] 
**Headers** | Pointer to **map[string]string** | Non secret headers | [optional] 
**MaxBatchDataSize** | Pointer to **int32** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. | [optional] 
**MaxBatchRecordCount** | Pointer to **int32** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. | [optional] 
**Method** | Pointer to **string** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). | [optional] 
**PayloadStructure** | Pointer to **string** | Determines how the payload is structured. &#39;single&#39; sends each record as a separate request, &#39;array&#39; sends multiple records as an array, &#39;wrapped&#39; sends multiple records within a wrapper object. | [optional] 
**RateLimit** | Pointer to **int32** | Maximum number of requests per second to send to the endpoint. | [optional] 
**TlsSkipVerify** | Pointer to **bool** | Skip TLS verification. | [optional] 
**WrapperKey** | Pointer to **string** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. | [optional] 
**Bucket** | Pointer to **string** | The name of the S3 bucket where data will be stored | [optional] 
**Compression** | Pointer to **string** | The compression method to be applied to the data before storing in S3 | [optional] 
**FormatConfig** | Pointer to [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**PartitionFormat** | Pointer to **string** | Specifies the format for organizing data into partitions within your S3 bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**Prefix** | Pointer to **string** | An optional prefix for S3 object keys to organize data within the bucket | [optional] 
**Region** | Pointer to **string** | The AWS region where the S3 bucket is located | [optional] 
**RoleArn** | Pointer to **string** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket | [optional] 
**RuleId** | Pointer to **string** | The unique identifier of the Data Collection Rule (DCR). | [optional] 
**StreamName** | Pointer to **string** | The name of the data stream defined in the Data Collection Rule. | [optional] 
**Account** | Pointer to **string** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**Database** | Pointer to **string** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**Role** | Pointer to **string** | The name of the Role your service account was granted which can access your resources. | [optional] 
**Schema** | Pointer to **string** | The schema within the Snowflake database where the target table resides. | [optional] 
**Stage** | Pointer to **string** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. | [optional] 
**Table** | Pointer to **string** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist Monad will create the table. | [optional] 
**User** | Pointer to **string** | The username of the Snowflake account used to establish the connection. | [optional] 
**Warehouse** | Pointer to **string** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 
**AllowInsecure** | Pointer to **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 

## Methods

### NewRoutesV2OutputConfigSettings

`func NewRoutesV2OutputConfigSettings() *RoutesV2OutputConfigSettings`

NewRoutesV2OutputConfigSettings instantiates a new RoutesV2OutputConfigSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2OutputConfigSettingsWithDefaults

`func NewRoutesV2OutputConfigSettingsWithDefaults() *RoutesV2OutputConfigSettings`

NewRoutesV2OutputConfigSettingsWithDefaults instantiates a new RoutesV2OutputConfigSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIngressAddress

`func (o *RoutesV2OutputConfigSettings) GetIngressAddress() string`

GetIngressAddress returns the IngressAddress field if non-nil, zero value otherwise.

### GetIngressAddressOk

`func (o *RoutesV2OutputConfigSettings) GetIngressAddressOk() (*string, bool)`

GetIngressAddressOk returns a tuple with the IngressAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngressAddress

`func (o *RoutesV2OutputConfigSettings) SetIngressAddress(v string)`

SetIngressAddress sets IngressAddress field to given value.

### HasIngressAddress

`func (o *RoutesV2OutputConfigSettings) HasIngressAddress() bool`

HasIngressAddress returns a boolean if a field has been set.

### GetPath

`func (o *RoutesV2OutputConfigSettings) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *RoutesV2OutputConfigSettings) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *RoutesV2OutputConfigSettings) SetPath(v string)`

SetPath sets Path field to given value.

### HasPath

`func (o *RoutesV2OutputConfigSettings) HasPath() bool`

HasPath returns a boolean if a field has been set.

### GetPort

`func (o *RoutesV2OutputConfigSettings) GetPort() string`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *RoutesV2OutputConfigSettings) GetPortOk() (*string, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *RoutesV2OutputConfigSettings) SetPort(v string)`

SetPort sets Port field to given value.

### HasPort

`func (o *RoutesV2OutputConfigSettings) HasPort() bool`

HasPort returns a boolean if a field has been set.

### GetAuthType

`func (o *RoutesV2OutputConfigSettings) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *RoutesV2OutputConfigSettings) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *RoutesV2OutputConfigSettings) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *RoutesV2OutputConfigSettings) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetCloudId

`func (o *RoutesV2OutputConfigSettings) GetCloudId() string`

GetCloudId returns the CloudId field if non-nil, zero value otherwise.

### GetCloudIdOk

`func (o *RoutesV2OutputConfigSettings) GetCloudIdOk() (*string, bool)`

GetCloudIdOk returns a tuple with the CloudId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudId

`func (o *RoutesV2OutputConfigSettings) SetCloudId(v string)`

SetCloudId sets CloudId field to given value.

### HasCloudId

`func (o *RoutesV2OutputConfigSettings) HasCloudId() bool`

HasCloudId returns a boolean if a field has been set.

### GetConnectionType

`func (o *RoutesV2OutputConfigSettings) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *RoutesV2OutputConfigSettings) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *RoutesV2OutputConfigSettings) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *RoutesV2OutputConfigSettings) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.

### GetIndex

`func (o *RoutesV2OutputConfigSettings) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *RoutesV2OutputConfigSettings) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *RoutesV2OutputConfigSettings) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *RoutesV2OutputConfigSettings) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetInsecureSkipVerify

`func (o *RoutesV2OutputConfigSettings) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *RoutesV2OutputConfigSettings) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *RoutesV2OutputConfigSettings) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *RoutesV2OutputConfigSettings) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.

### GetUrl

`func (o *RoutesV2OutputConfigSettings) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *RoutesV2OutputConfigSettings) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *RoutesV2OutputConfigSettings) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *RoutesV2OutputConfigSettings) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetUsername

`func (o *RoutesV2OutputConfigSettings) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *RoutesV2OutputConfigSettings) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *RoutesV2OutputConfigSettings) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *RoutesV2OutputConfigSettings) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetEndpoint

`func (o *RoutesV2OutputConfigSettings) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *RoutesV2OutputConfigSettings) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *RoutesV2OutputConfigSettings) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *RoutesV2OutputConfigSettings) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetHeaders

`func (o *RoutesV2OutputConfigSettings) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *RoutesV2OutputConfigSettings) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *RoutesV2OutputConfigSettings) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *RoutesV2OutputConfigSettings) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### GetMaxBatchDataSize

`func (o *RoutesV2OutputConfigSettings) GetMaxBatchDataSize() int32`

GetMaxBatchDataSize returns the MaxBatchDataSize field if non-nil, zero value otherwise.

### GetMaxBatchDataSizeOk

`func (o *RoutesV2OutputConfigSettings) GetMaxBatchDataSizeOk() (*int32, bool)`

GetMaxBatchDataSizeOk returns a tuple with the MaxBatchDataSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxBatchDataSize

`func (o *RoutesV2OutputConfigSettings) SetMaxBatchDataSize(v int32)`

SetMaxBatchDataSize sets MaxBatchDataSize field to given value.

### HasMaxBatchDataSize

`func (o *RoutesV2OutputConfigSettings) HasMaxBatchDataSize() bool`

HasMaxBatchDataSize returns a boolean if a field has been set.

### GetMaxBatchRecordCount

`func (o *RoutesV2OutputConfigSettings) GetMaxBatchRecordCount() int32`

GetMaxBatchRecordCount returns the MaxBatchRecordCount field if non-nil, zero value otherwise.

### GetMaxBatchRecordCountOk

`func (o *RoutesV2OutputConfigSettings) GetMaxBatchRecordCountOk() (*int32, bool)`

GetMaxBatchRecordCountOk returns a tuple with the MaxBatchRecordCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxBatchRecordCount

`func (o *RoutesV2OutputConfigSettings) SetMaxBatchRecordCount(v int32)`

SetMaxBatchRecordCount sets MaxBatchRecordCount field to given value.

### HasMaxBatchRecordCount

`func (o *RoutesV2OutputConfigSettings) HasMaxBatchRecordCount() bool`

HasMaxBatchRecordCount returns a boolean if a field has been set.

### GetMethod

`func (o *RoutesV2OutputConfigSettings) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *RoutesV2OutputConfigSettings) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *RoutesV2OutputConfigSettings) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *RoutesV2OutputConfigSettings) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetPayloadStructure

`func (o *RoutesV2OutputConfigSettings) GetPayloadStructure() string`

GetPayloadStructure returns the PayloadStructure field if non-nil, zero value otherwise.

### GetPayloadStructureOk

`func (o *RoutesV2OutputConfigSettings) GetPayloadStructureOk() (*string, bool)`

GetPayloadStructureOk returns a tuple with the PayloadStructure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayloadStructure

`func (o *RoutesV2OutputConfigSettings) SetPayloadStructure(v string)`

SetPayloadStructure sets PayloadStructure field to given value.

### HasPayloadStructure

`func (o *RoutesV2OutputConfigSettings) HasPayloadStructure() bool`

HasPayloadStructure returns a boolean if a field has been set.

### GetRateLimit

`func (o *RoutesV2OutputConfigSettings) GetRateLimit() int32`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *RoutesV2OutputConfigSettings) GetRateLimitOk() (*int32, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *RoutesV2OutputConfigSettings) SetRateLimit(v int32)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *RoutesV2OutputConfigSettings) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetTlsSkipVerify

`func (o *RoutesV2OutputConfigSettings) GetTlsSkipVerify() bool`

GetTlsSkipVerify returns the TlsSkipVerify field if non-nil, zero value otherwise.

### GetTlsSkipVerifyOk

`func (o *RoutesV2OutputConfigSettings) GetTlsSkipVerifyOk() (*bool, bool)`

GetTlsSkipVerifyOk returns a tuple with the TlsSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTlsSkipVerify

`func (o *RoutesV2OutputConfigSettings) SetTlsSkipVerify(v bool)`

SetTlsSkipVerify sets TlsSkipVerify field to given value.

### HasTlsSkipVerify

`func (o *RoutesV2OutputConfigSettings) HasTlsSkipVerify() bool`

HasTlsSkipVerify returns a boolean if a field has been set.

### GetWrapperKey

`func (o *RoutesV2OutputConfigSettings) GetWrapperKey() string`

GetWrapperKey returns the WrapperKey field if non-nil, zero value otherwise.

### GetWrapperKeyOk

`func (o *RoutesV2OutputConfigSettings) GetWrapperKeyOk() (*string, bool)`

GetWrapperKeyOk returns a tuple with the WrapperKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWrapperKey

`func (o *RoutesV2OutputConfigSettings) SetWrapperKey(v string)`

SetWrapperKey sets WrapperKey field to given value.

### HasWrapperKey

`func (o *RoutesV2OutputConfigSettings) HasWrapperKey() bool`

HasWrapperKey returns a boolean if a field has been set.

### GetBucket

`func (o *RoutesV2OutputConfigSettings) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *RoutesV2OutputConfigSettings) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *RoutesV2OutputConfigSettings) SetBucket(v string)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *RoutesV2OutputConfigSettings) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetCompression

`func (o *RoutesV2OutputConfigSettings) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *RoutesV2OutputConfigSettings) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *RoutesV2OutputConfigSettings) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *RoutesV2OutputConfigSettings) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetFormatConfig

`func (o *RoutesV2OutputConfigSettings) GetFormatConfig() FormatterFormatConfig`

GetFormatConfig returns the FormatConfig field if non-nil, zero value otherwise.

### GetFormatConfigOk

`func (o *RoutesV2OutputConfigSettings) GetFormatConfigOk() (*FormatterFormatConfig, bool)`

GetFormatConfigOk returns a tuple with the FormatConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormatConfig

`func (o *RoutesV2OutputConfigSettings) SetFormatConfig(v FormatterFormatConfig)`

SetFormatConfig sets FormatConfig field to given value.

### HasFormatConfig

`func (o *RoutesV2OutputConfigSettings) HasFormatConfig() bool`

HasFormatConfig returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *RoutesV2OutputConfigSettings) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *RoutesV2OutputConfigSettings) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *RoutesV2OutputConfigSettings) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *RoutesV2OutputConfigSettings) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *RoutesV2OutputConfigSettings) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *RoutesV2OutputConfigSettings) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *RoutesV2OutputConfigSettings) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *RoutesV2OutputConfigSettings) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRegion

`func (o *RoutesV2OutputConfigSettings) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *RoutesV2OutputConfigSettings) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *RoutesV2OutputConfigSettings) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *RoutesV2OutputConfigSettings) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *RoutesV2OutputConfigSettings) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *RoutesV2OutputConfigSettings) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *RoutesV2OutputConfigSettings) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *RoutesV2OutputConfigSettings) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetRuleId

`func (o *RoutesV2OutputConfigSettings) GetRuleId() string`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *RoutesV2OutputConfigSettings) GetRuleIdOk() (*string, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *RoutesV2OutputConfigSettings) SetRuleId(v string)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *RoutesV2OutputConfigSettings) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetStreamName

`func (o *RoutesV2OutputConfigSettings) GetStreamName() string`

GetStreamName returns the StreamName field if non-nil, zero value otherwise.

### GetStreamNameOk

`func (o *RoutesV2OutputConfigSettings) GetStreamNameOk() (*string, bool)`

GetStreamNameOk returns a tuple with the StreamName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamName

`func (o *RoutesV2OutputConfigSettings) SetStreamName(v string)`

SetStreamName sets StreamName field to given value.

### HasStreamName

`func (o *RoutesV2OutputConfigSettings) HasStreamName() bool`

HasStreamName returns a boolean if a field has been set.

### GetAccount

`func (o *RoutesV2OutputConfigSettings) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *RoutesV2OutputConfigSettings) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *RoutesV2OutputConfigSettings) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *RoutesV2OutputConfigSettings) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetDatabase

`func (o *RoutesV2OutputConfigSettings) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *RoutesV2OutputConfigSettings) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *RoutesV2OutputConfigSettings) SetDatabase(v string)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *RoutesV2OutputConfigSettings) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetRole

`func (o *RoutesV2OutputConfigSettings) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *RoutesV2OutputConfigSettings) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *RoutesV2OutputConfigSettings) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *RoutesV2OutputConfigSettings) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetSchema

`func (o *RoutesV2OutputConfigSettings) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *RoutesV2OutputConfigSettings) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *RoutesV2OutputConfigSettings) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *RoutesV2OutputConfigSettings) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetStage

`func (o *RoutesV2OutputConfigSettings) GetStage() string`

GetStage returns the Stage field if non-nil, zero value otherwise.

### GetStageOk

`func (o *RoutesV2OutputConfigSettings) GetStageOk() (*string, bool)`

GetStageOk returns a tuple with the Stage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStage

`func (o *RoutesV2OutputConfigSettings) SetStage(v string)`

SetStage sets Stage field to given value.

### HasStage

`func (o *RoutesV2OutputConfigSettings) HasStage() bool`

HasStage returns a boolean if a field has been set.

### GetTable

`func (o *RoutesV2OutputConfigSettings) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *RoutesV2OutputConfigSettings) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *RoutesV2OutputConfigSettings) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *RoutesV2OutputConfigSettings) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetUser

`func (o *RoutesV2OutputConfigSettings) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *RoutesV2OutputConfigSettings) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *RoutesV2OutputConfigSettings) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *RoutesV2OutputConfigSettings) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetWarehouse

`func (o *RoutesV2OutputConfigSettings) GetWarehouse() string`

GetWarehouse returns the Warehouse field if non-nil, zero value otherwise.

### GetWarehouseOk

`func (o *RoutesV2OutputConfigSettings) GetWarehouseOk() (*string, bool)`

GetWarehouseOk returns a tuple with the Warehouse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarehouse

`func (o *RoutesV2OutputConfigSettings) SetWarehouse(v string)`

SetWarehouse sets Warehouse field to given value.

### HasWarehouse

`func (o *RoutesV2OutputConfigSettings) HasWarehouse() bool`

HasWarehouse returns a boolean if a field has been set.

### GetAllowInsecure

`func (o *RoutesV2OutputConfigSettings) GetAllowInsecure() bool`

GetAllowInsecure returns the AllowInsecure field if non-nil, zero value otherwise.

### GetAllowInsecureOk

`func (o *RoutesV2OutputConfigSettings) GetAllowInsecureOk() (*bool, bool)`

GetAllowInsecureOk returns a tuple with the AllowInsecure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowInsecure

`func (o *RoutesV2OutputConfigSettings) SetAllowInsecure(v bool)`

SetAllowInsecure sets AllowInsecure field to given value.

### HasAllowInsecure

`func (o *RoutesV2OutputConfigSettings) HasAllowInsecure() bool`

HasAllowInsecure returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


