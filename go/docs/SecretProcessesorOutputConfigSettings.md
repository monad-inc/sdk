# SecretProcessesorOutputConfigSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MessageGroupId** | Pointer to **string** | The message group ID for FIFO queues. This is required for FIFO queues. | [optional] 
**QueueType** | Pointer to **string** | The type of SQS queue to use. Can be either \&quot;standard\&quot; or \&quot;fifo\&quot;. | [optional] 
**QueueUrl** | Pointer to **string** | The URL of the SQS queue to poll for messages. | [optional] 
**Region** | Pointer to **string** | The AWS region where the S3 bucket is located | [optional] 
**RoleArn** | Pointer to **string** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket | [optional] 
**Dataset** | Pointer to **string** | The name of the BigQuery dataset where the table resides | [optional] 
**ProjectId** | Pointer to **string** | The Google Cloud Project ID where the BigQuery instance is located | [optional] 
**Table** | Pointer to **string** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist Monad will create the table. | [optional] 
**IngressAddress** | Pointer to **string** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. | [optional] 
**Path** | Pointer to **string** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. | [optional] 
**Port** | Pointer to **string** | The port of the Splunk instance. | [optional] 
**AuthType** | Pointer to **string** |  | [optional] 
**CloudId** | Pointer to **string** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. | [optional] 
**ConnectionType** | Pointer to **string** | The type of connection to use with Elasticsearch. Choose between &#39;cloud_id&#39; for Elastic Cloud or &#39;url&#39; for direct connection. | [optional] 
**Index** | Pointer to **string** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**InsecureSkipVerify** | Pointer to **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**Url** | Pointer to **string** | The URL of the Sumo Logic instance. | [optional] 
**Username** | Pointer to **string** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. | [optional] 
**Endpoint** | Pointer to **string** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. | [optional] 
**Headers** | Pointer to **map[string]string** | Non secret headers | [optional] 
**MaxBatchDataSize** | Pointer to **int32** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. | [optional] 
**MaxBatchRecordCount** | Pointer to **int32** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. | [optional] 
**Method** | Pointer to **string** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). | [optional] 
**PayloadStructure** | Pointer to **string** | Determines how the payload is structured. &#39;single&#39; sends each record as a separate request, &#39;array&#39; sends multiple records as an array, &#39;wrapped&#39; sends multiple records within a wrapper object. | [optional] 
**RateLimit** | Pointer to **int32** | Maximum number of requests per second to send to the endpoint. | [optional] 
**TlsSkipVerify** | Pointer to **bool** | Skip TLS verification. | [optional] 
**WrapperKey** | Pointer to **string** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. | [optional] 
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Bucket** | Pointer to **string** | The name of the S3 bucket where data will be stored | [optional] 
**Compression** | Pointer to **string** | The compression method to be applied to the data before storing in S3 | [optional] 
**FormatConfig** | Pointer to [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**PartitionFormat** | Pointer to **string** | Specifies the format for organizing data into partitions within your S3 bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**Prefix** | Pointer to **string** | An optional prefix for S3 object keys to organize data within the bucket | [optional] 
**SkipSslVerification** | Pointer to **bool** | Whether to skip SSL certificate verification (useful for self-signed certificates or development environments) | [optional] 
**UsePathStyle** | Pointer to **bool** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. | [optional] 
**AuthMode** | Pointer to **string** | The authentication mode (basic, aws_role) | [optional] 
**AlertsConfig** | Pointer to [**PagerdutyAlertsConfig**](PagerdutyAlertsConfig.md) |  | [optional] 
**DefaultEventType** | Pointer to **string** | EventType determines whether events are sent as &#39;change&#39; or &#39;alert&#39; events. We recommend reading the docs for this output before making this choice. | [optional] 
**SummaryConfig** | Pointer to [**PagerdutySummaryConfig**](PagerdutySummaryConfig.md) |  | [optional] 
**ColumnNames** | Pointer to **[]string** | The column names to write data to, must match the root fields of the data If not provided all root fields will be used | [optional] 
**Database** | Pointer to **string** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**Host** | Pointer to **string** | The host of the PostgreSQL database | [optional] 
**User** | Pointer to **string** | The username of the Snowflake account used to establish the connection. | [optional] 
**BucketName** | Pointer to **string** | Bucket Name | [optional] 
**BucketUrl** | Pointer to **string** | The name of the S3 bucket where data will be stored | [optional] 
**Key** | Pointer to **string** | S3 Key | [optional] 
**ParquetFormat** | Pointer to [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  | [optional] 
**SourceAccountDetails** | Pointer to [**SecurityLakeSourceAccountDetails**](SecurityLakeSourceAccountDetails.md) |  | [optional] 
**RuleId** | Pointer to **string** | The unique identifier of the Data Collection Rule (DCR). | [optional] 
**StreamName** | Pointer to **string** | The name of the data stream defined in the Data Collection Rule. | [optional] 
**Account** | Pointer to **string** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**CaseInsensitivity** | Pointer to **bool** | Treat column names as case-insensitive (convert to uppercase) to match Snowflake&#39;s default behavior. | [optional] 
**Role** | Pointer to **string** | The name of the Role your service account was granted which can access your resources. | [optional] 
**Schema** | Pointer to **string** | The schema within the Snowflake database where the target table resides. | [optional] 
**Stage** | Pointer to **string** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. | [optional] 
**Warehouse** | Pointer to **string** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 
**AllowInsecure** | Pointer to **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 
**ToCreate** | Pointer to **bool** | Ensure this is selected if you want Monad to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. | [optional] 

## Methods

### NewSecretProcessesorOutputConfigSettings

`func NewSecretProcessesorOutputConfigSettings() *SecretProcessesorOutputConfigSettings`

NewSecretProcessesorOutputConfigSettings instantiates a new SecretProcessesorOutputConfigSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecretProcessesorOutputConfigSettingsWithDefaults

`func NewSecretProcessesorOutputConfigSettingsWithDefaults() *SecretProcessesorOutputConfigSettings`

NewSecretProcessesorOutputConfigSettingsWithDefaults instantiates a new SecretProcessesorOutputConfigSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessageGroupId

`func (o *SecretProcessesorOutputConfigSettings) GetMessageGroupId() string`

GetMessageGroupId returns the MessageGroupId field if non-nil, zero value otherwise.

### GetMessageGroupIdOk

`func (o *SecretProcessesorOutputConfigSettings) GetMessageGroupIdOk() (*string, bool)`

GetMessageGroupIdOk returns a tuple with the MessageGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageGroupId

`func (o *SecretProcessesorOutputConfigSettings) SetMessageGroupId(v string)`

SetMessageGroupId sets MessageGroupId field to given value.

### HasMessageGroupId

`func (o *SecretProcessesorOutputConfigSettings) HasMessageGroupId() bool`

HasMessageGroupId returns a boolean if a field has been set.

### GetQueueType

`func (o *SecretProcessesorOutputConfigSettings) GetQueueType() string`

GetQueueType returns the QueueType field if non-nil, zero value otherwise.

### GetQueueTypeOk

`func (o *SecretProcessesorOutputConfigSettings) GetQueueTypeOk() (*string, bool)`

GetQueueTypeOk returns a tuple with the QueueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueType

`func (o *SecretProcessesorOutputConfigSettings) SetQueueType(v string)`

SetQueueType sets QueueType field to given value.

### HasQueueType

`func (o *SecretProcessesorOutputConfigSettings) HasQueueType() bool`

HasQueueType returns a boolean if a field has been set.

### GetQueueUrl

`func (o *SecretProcessesorOutputConfigSettings) GetQueueUrl() string`

GetQueueUrl returns the QueueUrl field if non-nil, zero value otherwise.

### GetQueueUrlOk

`func (o *SecretProcessesorOutputConfigSettings) GetQueueUrlOk() (*string, bool)`

GetQueueUrlOk returns a tuple with the QueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueUrl

`func (o *SecretProcessesorOutputConfigSettings) SetQueueUrl(v string)`

SetQueueUrl sets QueueUrl field to given value.

### HasQueueUrl

`func (o *SecretProcessesorOutputConfigSettings) HasQueueUrl() bool`

HasQueueUrl returns a boolean if a field has been set.

### GetRegion

`func (o *SecretProcessesorOutputConfigSettings) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *SecretProcessesorOutputConfigSettings) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *SecretProcessesorOutputConfigSettings) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *SecretProcessesorOutputConfigSettings) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *SecretProcessesorOutputConfigSettings) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *SecretProcessesorOutputConfigSettings) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *SecretProcessesorOutputConfigSettings) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *SecretProcessesorOutputConfigSettings) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetDataset

`func (o *SecretProcessesorOutputConfigSettings) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *SecretProcessesorOutputConfigSettings) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *SecretProcessesorOutputConfigSettings) SetDataset(v string)`

SetDataset sets Dataset field to given value.

### HasDataset

`func (o *SecretProcessesorOutputConfigSettings) HasDataset() bool`

HasDataset returns a boolean if a field has been set.

### GetProjectId

`func (o *SecretProcessesorOutputConfigSettings) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *SecretProcessesorOutputConfigSettings) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *SecretProcessesorOutputConfigSettings) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.

### HasProjectId

`func (o *SecretProcessesorOutputConfigSettings) HasProjectId() bool`

HasProjectId returns a boolean if a field has been set.

### GetTable

`func (o *SecretProcessesorOutputConfigSettings) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *SecretProcessesorOutputConfigSettings) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *SecretProcessesorOutputConfigSettings) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *SecretProcessesorOutputConfigSettings) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetIngressAddress

`func (o *SecretProcessesorOutputConfigSettings) GetIngressAddress() string`

GetIngressAddress returns the IngressAddress field if non-nil, zero value otherwise.

### GetIngressAddressOk

`func (o *SecretProcessesorOutputConfigSettings) GetIngressAddressOk() (*string, bool)`

GetIngressAddressOk returns a tuple with the IngressAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngressAddress

`func (o *SecretProcessesorOutputConfigSettings) SetIngressAddress(v string)`

SetIngressAddress sets IngressAddress field to given value.

### HasIngressAddress

`func (o *SecretProcessesorOutputConfigSettings) HasIngressAddress() bool`

HasIngressAddress returns a boolean if a field has been set.

### GetPath

`func (o *SecretProcessesorOutputConfigSettings) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *SecretProcessesorOutputConfigSettings) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *SecretProcessesorOutputConfigSettings) SetPath(v string)`

SetPath sets Path field to given value.

### HasPath

`func (o *SecretProcessesorOutputConfigSettings) HasPath() bool`

HasPath returns a boolean if a field has been set.

### GetPort

`func (o *SecretProcessesorOutputConfigSettings) GetPort() string`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *SecretProcessesorOutputConfigSettings) GetPortOk() (*string, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *SecretProcessesorOutputConfigSettings) SetPort(v string)`

SetPort sets Port field to given value.

### HasPort

`func (o *SecretProcessesorOutputConfigSettings) HasPort() bool`

HasPort returns a boolean if a field has been set.

### GetAuthType

`func (o *SecretProcessesorOutputConfigSettings) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *SecretProcessesorOutputConfigSettings) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *SecretProcessesorOutputConfigSettings) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *SecretProcessesorOutputConfigSettings) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetCloudId

`func (o *SecretProcessesorOutputConfigSettings) GetCloudId() string`

GetCloudId returns the CloudId field if non-nil, zero value otherwise.

### GetCloudIdOk

`func (o *SecretProcessesorOutputConfigSettings) GetCloudIdOk() (*string, bool)`

GetCloudIdOk returns a tuple with the CloudId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudId

`func (o *SecretProcessesorOutputConfigSettings) SetCloudId(v string)`

SetCloudId sets CloudId field to given value.

### HasCloudId

`func (o *SecretProcessesorOutputConfigSettings) HasCloudId() bool`

HasCloudId returns a boolean if a field has been set.

### GetConnectionType

`func (o *SecretProcessesorOutputConfigSettings) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *SecretProcessesorOutputConfigSettings) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *SecretProcessesorOutputConfigSettings) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *SecretProcessesorOutputConfigSettings) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.

### GetIndex

`func (o *SecretProcessesorOutputConfigSettings) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *SecretProcessesorOutputConfigSettings) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *SecretProcessesorOutputConfigSettings) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *SecretProcessesorOutputConfigSettings) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetInsecureSkipVerify

`func (o *SecretProcessesorOutputConfigSettings) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *SecretProcessesorOutputConfigSettings) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *SecretProcessesorOutputConfigSettings) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *SecretProcessesorOutputConfigSettings) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.

### GetUrl

`func (o *SecretProcessesorOutputConfigSettings) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *SecretProcessesorOutputConfigSettings) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *SecretProcessesorOutputConfigSettings) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *SecretProcessesorOutputConfigSettings) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetUsername

`func (o *SecretProcessesorOutputConfigSettings) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *SecretProcessesorOutputConfigSettings) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *SecretProcessesorOutputConfigSettings) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *SecretProcessesorOutputConfigSettings) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetEndpoint

`func (o *SecretProcessesorOutputConfigSettings) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *SecretProcessesorOutputConfigSettings) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *SecretProcessesorOutputConfigSettings) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *SecretProcessesorOutputConfigSettings) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetHeaders

`func (o *SecretProcessesorOutputConfigSettings) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *SecretProcessesorOutputConfigSettings) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *SecretProcessesorOutputConfigSettings) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *SecretProcessesorOutputConfigSettings) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### GetMaxBatchDataSize

`func (o *SecretProcessesorOutputConfigSettings) GetMaxBatchDataSize() int32`

GetMaxBatchDataSize returns the MaxBatchDataSize field if non-nil, zero value otherwise.

### GetMaxBatchDataSizeOk

`func (o *SecretProcessesorOutputConfigSettings) GetMaxBatchDataSizeOk() (*int32, bool)`

GetMaxBatchDataSizeOk returns a tuple with the MaxBatchDataSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxBatchDataSize

`func (o *SecretProcessesorOutputConfigSettings) SetMaxBatchDataSize(v int32)`

SetMaxBatchDataSize sets MaxBatchDataSize field to given value.

### HasMaxBatchDataSize

`func (o *SecretProcessesorOutputConfigSettings) HasMaxBatchDataSize() bool`

HasMaxBatchDataSize returns a boolean if a field has been set.

### GetMaxBatchRecordCount

`func (o *SecretProcessesorOutputConfigSettings) GetMaxBatchRecordCount() int32`

GetMaxBatchRecordCount returns the MaxBatchRecordCount field if non-nil, zero value otherwise.

### GetMaxBatchRecordCountOk

`func (o *SecretProcessesorOutputConfigSettings) GetMaxBatchRecordCountOk() (*int32, bool)`

GetMaxBatchRecordCountOk returns a tuple with the MaxBatchRecordCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxBatchRecordCount

`func (o *SecretProcessesorOutputConfigSettings) SetMaxBatchRecordCount(v int32)`

SetMaxBatchRecordCount sets MaxBatchRecordCount field to given value.

### HasMaxBatchRecordCount

`func (o *SecretProcessesorOutputConfigSettings) HasMaxBatchRecordCount() bool`

HasMaxBatchRecordCount returns a boolean if a field has been set.

### GetMethod

`func (o *SecretProcessesorOutputConfigSettings) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *SecretProcessesorOutputConfigSettings) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *SecretProcessesorOutputConfigSettings) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *SecretProcessesorOutputConfigSettings) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetPayloadStructure

`func (o *SecretProcessesorOutputConfigSettings) GetPayloadStructure() string`

GetPayloadStructure returns the PayloadStructure field if non-nil, zero value otherwise.

### GetPayloadStructureOk

`func (o *SecretProcessesorOutputConfigSettings) GetPayloadStructureOk() (*string, bool)`

GetPayloadStructureOk returns a tuple with the PayloadStructure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayloadStructure

`func (o *SecretProcessesorOutputConfigSettings) SetPayloadStructure(v string)`

SetPayloadStructure sets PayloadStructure field to given value.

### HasPayloadStructure

`func (o *SecretProcessesorOutputConfigSettings) HasPayloadStructure() bool`

HasPayloadStructure returns a boolean if a field has been set.

### GetRateLimit

`func (o *SecretProcessesorOutputConfigSettings) GetRateLimit() int32`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *SecretProcessesorOutputConfigSettings) GetRateLimitOk() (*int32, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *SecretProcessesorOutputConfigSettings) SetRateLimit(v int32)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *SecretProcessesorOutputConfigSettings) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetTlsSkipVerify

`func (o *SecretProcessesorOutputConfigSettings) GetTlsSkipVerify() bool`

GetTlsSkipVerify returns the TlsSkipVerify field if non-nil, zero value otherwise.

### GetTlsSkipVerifyOk

`func (o *SecretProcessesorOutputConfigSettings) GetTlsSkipVerifyOk() (*bool, bool)`

GetTlsSkipVerifyOk returns a tuple with the TlsSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTlsSkipVerify

`func (o *SecretProcessesorOutputConfigSettings) SetTlsSkipVerify(v bool)`

SetTlsSkipVerify sets TlsSkipVerify field to given value.

### HasTlsSkipVerify

`func (o *SecretProcessesorOutputConfigSettings) HasTlsSkipVerify() bool`

HasTlsSkipVerify returns a boolean if a field has been set.

### GetWrapperKey

`func (o *SecretProcessesorOutputConfigSettings) GetWrapperKey() string`

GetWrapperKey returns the WrapperKey field if non-nil, zero value otherwise.

### GetWrapperKeyOk

`func (o *SecretProcessesorOutputConfigSettings) GetWrapperKeyOk() (*string, bool)`

GetWrapperKeyOk returns a tuple with the WrapperKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWrapperKey

`func (o *SecretProcessesorOutputConfigSettings) SetWrapperKey(v string)`

SetWrapperKey sets WrapperKey field to given value.

### HasWrapperKey

`func (o *SecretProcessesorOutputConfigSettings) HasWrapperKey() bool`

HasWrapperKey returns a boolean if a field has been set.

### GetBatchConfig

`func (o *SecretProcessesorOutputConfigSettings) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *SecretProcessesorOutputConfigSettings) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *SecretProcessesorOutputConfigSettings) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *SecretProcessesorOutputConfigSettings) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetBucket

`func (o *SecretProcessesorOutputConfigSettings) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *SecretProcessesorOutputConfigSettings) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *SecretProcessesorOutputConfigSettings) SetBucket(v string)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *SecretProcessesorOutputConfigSettings) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetCompression

`func (o *SecretProcessesorOutputConfigSettings) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *SecretProcessesorOutputConfigSettings) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *SecretProcessesorOutputConfigSettings) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *SecretProcessesorOutputConfigSettings) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetFormatConfig

`func (o *SecretProcessesorOutputConfigSettings) GetFormatConfig() FormatterFormatConfig`

GetFormatConfig returns the FormatConfig field if non-nil, zero value otherwise.

### GetFormatConfigOk

`func (o *SecretProcessesorOutputConfigSettings) GetFormatConfigOk() (*FormatterFormatConfig, bool)`

GetFormatConfigOk returns a tuple with the FormatConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormatConfig

`func (o *SecretProcessesorOutputConfigSettings) SetFormatConfig(v FormatterFormatConfig)`

SetFormatConfig sets FormatConfig field to given value.

### HasFormatConfig

`func (o *SecretProcessesorOutputConfigSettings) HasFormatConfig() bool`

HasFormatConfig returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *SecretProcessesorOutputConfigSettings) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *SecretProcessesorOutputConfigSettings) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *SecretProcessesorOutputConfigSettings) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *SecretProcessesorOutputConfigSettings) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *SecretProcessesorOutputConfigSettings) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *SecretProcessesorOutputConfigSettings) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *SecretProcessesorOutputConfigSettings) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *SecretProcessesorOutputConfigSettings) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetSkipSslVerification

`func (o *SecretProcessesorOutputConfigSettings) GetSkipSslVerification() bool`

GetSkipSslVerification returns the SkipSslVerification field if non-nil, zero value otherwise.

### GetSkipSslVerificationOk

`func (o *SecretProcessesorOutputConfigSettings) GetSkipSslVerificationOk() (*bool, bool)`

GetSkipSslVerificationOk returns a tuple with the SkipSslVerification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipSslVerification

`func (o *SecretProcessesorOutputConfigSettings) SetSkipSslVerification(v bool)`

SetSkipSslVerification sets SkipSslVerification field to given value.

### HasSkipSslVerification

`func (o *SecretProcessesorOutputConfigSettings) HasSkipSslVerification() bool`

HasSkipSslVerification returns a boolean if a field has been set.

### GetUsePathStyle

`func (o *SecretProcessesorOutputConfigSettings) GetUsePathStyle() bool`

GetUsePathStyle returns the UsePathStyle field if non-nil, zero value otherwise.

### GetUsePathStyleOk

`func (o *SecretProcessesorOutputConfigSettings) GetUsePathStyleOk() (*bool, bool)`

GetUsePathStyleOk returns a tuple with the UsePathStyle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsePathStyle

`func (o *SecretProcessesorOutputConfigSettings) SetUsePathStyle(v bool)`

SetUsePathStyle sets UsePathStyle field to given value.

### HasUsePathStyle

`func (o *SecretProcessesorOutputConfigSettings) HasUsePathStyle() bool`

HasUsePathStyle returns a boolean if a field has been set.

### GetAuthMode

`func (o *SecretProcessesorOutputConfigSettings) GetAuthMode() string`

GetAuthMode returns the AuthMode field if non-nil, zero value otherwise.

### GetAuthModeOk

`func (o *SecretProcessesorOutputConfigSettings) GetAuthModeOk() (*string, bool)`

GetAuthModeOk returns a tuple with the AuthMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthMode

`func (o *SecretProcessesorOutputConfigSettings) SetAuthMode(v string)`

SetAuthMode sets AuthMode field to given value.

### HasAuthMode

`func (o *SecretProcessesorOutputConfigSettings) HasAuthMode() bool`

HasAuthMode returns a boolean if a field has been set.

### GetAlertsConfig

`func (o *SecretProcessesorOutputConfigSettings) GetAlertsConfig() PagerdutyAlertsConfig`

GetAlertsConfig returns the AlertsConfig field if non-nil, zero value otherwise.

### GetAlertsConfigOk

`func (o *SecretProcessesorOutputConfigSettings) GetAlertsConfigOk() (*PagerdutyAlertsConfig, bool)`

GetAlertsConfigOk returns a tuple with the AlertsConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertsConfig

`func (o *SecretProcessesorOutputConfigSettings) SetAlertsConfig(v PagerdutyAlertsConfig)`

SetAlertsConfig sets AlertsConfig field to given value.

### HasAlertsConfig

`func (o *SecretProcessesorOutputConfigSettings) HasAlertsConfig() bool`

HasAlertsConfig returns a boolean if a field has been set.

### GetDefaultEventType

`func (o *SecretProcessesorOutputConfigSettings) GetDefaultEventType() string`

GetDefaultEventType returns the DefaultEventType field if non-nil, zero value otherwise.

### GetDefaultEventTypeOk

`func (o *SecretProcessesorOutputConfigSettings) GetDefaultEventTypeOk() (*string, bool)`

GetDefaultEventTypeOk returns a tuple with the DefaultEventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultEventType

`func (o *SecretProcessesorOutputConfigSettings) SetDefaultEventType(v string)`

SetDefaultEventType sets DefaultEventType field to given value.

### HasDefaultEventType

`func (o *SecretProcessesorOutputConfigSettings) HasDefaultEventType() bool`

HasDefaultEventType returns a boolean if a field has been set.

### GetSummaryConfig

`func (o *SecretProcessesorOutputConfigSettings) GetSummaryConfig() PagerdutySummaryConfig`

GetSummaryConfig returns the SummaryConfig field if non-nil, zero value otherwise.

### GetSummaryConfigOk

`func (o *SecretProcessesorOutputConfigSettings) GetSummaryConfigOk() (*PagerdutySummaryConfig, bool)`

GetSummaryConfigOk returns a tuple with the SummaryConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryConfig

`func (o *SecretProcessesorOutputConfigSettings) SetSummaryConfig(v PagerdutySummaryConfig)`

SetSummaryConfig sets SummaryConfig field to given value.

### HasSummaryConfig

`func (o *SecretProcessesorOutputConfigSettings) HasSummaryConfig() bool`

HasSummaryConfig returns a boolean if a field has been set.

### GetColumnNames

`func (o *SecretProcessesorOutputConfigSettings) GetColumnNames() []string`

GetColumnNames returns the ColumnNames field if non-nil, zero value otherwise.

### GetColumnNamesOk

`func (o *SecretProcessesorOutputConfigSettings) GetColumnNamesOk() (*[]string, bool)`

GetColumnNamesOk returns a tuple with the ColumnNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnNames

`func (o *SecretProcessesorOutputConfigSettings) SetColumnNames(v []string)`

SetColumnNames sets ColumnNames field to given value.

### HasColumnNames

`func (o *SecretProcessesorOutputConfigSettings) HasColumnNames() bool`

HasColumnNames returns a boolean if a field has been set.

### GetDatabase

`func (o *SecretProcessesorOutputConfigSettings) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *SecretProcessesorOutputConfigSettings) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *SecretProcessesorOutputConfigSettings) SetDatabase(v string)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *SecretProcessesorOutputConfigSettings) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetHost

`func (o *SecretProcessesorOutputConfigSettings) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *SecretProcessesorOutputConfigSettings) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *SecretProcessesorOutputConfigSettings) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *SecretProcessesorOutputConfigSettings) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetUser

`func (o *SecretProcessesorOutputConfigSettings) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *SecretProcessesorOutputConfigSettings) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *SecretProcessesorOutputConfigSettings) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *SecretProcessesorOutputConfigSettings) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetBucketName

`func (o *SecretProcessesorOutputConfigSettings) GetBucketName() string`

GetBucketName returns the BucketName field if non-nil, zero value otherwise.

### GetBucketNameOk

`func (o *SecretProcessesorOutputConfigSettings) GetBucketNameOk() (*string, bool)`

GetBucketNameOk returns a tuple with the BucketName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketName

`func (o *SecretProcessesorOutputConfigSettings) SetBucketName(v string)`

SetBucketName sets BucketName field to given value.

### HasBucketName

`func (o *SecretProcessesorOutputConfigSettings) HasBucketName() bool`

HasBucketName returns a boolean if a field has been set.

### GetBucketUrl

`func (o *SecretProcessesorOutputConfigSettings) GetBucketUrl() string`

GetBucketUrl returns the BucketUrl field if non-nil, zero value otherwise.

### GetBucketUrlOk

`func (o *SecretProcessesorOutputConfigSettings) GetBucketUrlOk() (*string, bool)`

GetBucketUrlOk returns a tuple with the BucketUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketUrl

`func (o *SecretProcessesorOutputConfigSettings) SetBucketUrl(v string)`

SetBucketUrl sets BucketUrl field to given value.

### HasBucketUrl

`func (o *SecretProcessesorOutputConfigSettings) HasBucketUrl() bool`

HasBucketUrl returns a boolean if a field has been set.

### GetKey

`func (o *SecretProcessesorOutputConfigSettings) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *SecretProcessesorOutputConfigSettings) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *SecretProcessesorOutputConfigSettings) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *SecretProcessesorOutputConfigSettings) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetParquetFormat

`func (o *SecretProcessesorOutputConfigSettings) GetParquetFormat() ParquetParquetFormatter`

GetParquetFormat returns the ParquetFormat field if non-nil, zero value otherwise.

### GetParquetFormatOk

`func (o *SecretProcessesorOutputConfigSettings) GetParquetFormatOk() (*ParquetParquetFormatter, bool)`

GetParquetFormatOk returns a tuple with the ParquetFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParquetFormat

`func (o *SecretProcessesorOutputConfigSettings) SetParquetFormat(v ParquetParquetFormatter)`

SetParquetFormat sets ParquetFormat field to given value.

### HasParquetFormat

`func (o *SecretProcessesorOutputConfigSettings) HasParquetFormat() bool`

HasParquetFormat returns a boolean if a field has been set.

### GetSourceAccountDetails

`func (o *SecretProcessesorOutputConfigSettings) GetSourceAccountDetails() SecurityLakeSourceAccountDetails`

GetSourceAccountDetails returns the SourceAccountDetails field if non-nil, zero value otherwise.

### GetSourceAccountDetailsOk

`func (o *SecretProcessesorOutputConfigSettings) GetSourceAccountDetailsOk() (*SecurityLakeSourceAccountDetails, bool)`

GetSourceAccountDetailsOk returns a tuple with the SourceAccountDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAccountDetails

`func (o *SecretProcessesorOutputConfigSettings) SetSourceAccountDetails(v SecurityLakeSourceAccountDetails)`

SetSourceAccountDetails sets SourceAccountDetails field to given value.

### HasSourceAccountDetails

`func (o *SecretProcessesorOutputConfigSettings) HasSourceAccountDetails() bool`

HasSourceAccountDetails returns a boolean if a field has been set.

### GetRuleId

`func (o *SecretProcessesorOutputConfigSettings) GetRuleId() string`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *SecretProcessesorOutputConfigSettings) GetRuleIdOk() (*string, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *SecretProcessesorOutputConfigSettings) SetRuleId(v string)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *SecretProcessesorOutputConfigSettings) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetStreamName

`func (o *SecretProcessesorOutputConfigSettings) GetStreamName() string`

GetStreamName returns the StreamName field if non-nil, zero value otherwise.

### GetStreamNameOk

`func (o *SecretProcessesorOutputConfigSettings) GetStreamNameOk() (*string, bool)`

GetStreamNameOk returns a tuple with the StreamName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamName

`func (o *SecretProcessesorOutputConfigSettings) SetStreamName(v string)`

SetStreamName sets StreamName field to given value.

### HasStreamName

`func (o *SecretProcessesorOutputConfigSettings) HasStreamName() bool`

HasStreamName returns a boolean if a field has been set.

### GetAccount

`func (o *SecretProcessesorOutputConfigSettings) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *SecretProcessesorOutputConfigSettings) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *SecretProcessesorOutputConfigSettings) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *SecretProcessesorOutputConfigSettings) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetCaseInsensitivity

`func (o *SecretProcessesorOutputConfigSettings) GetCaseInsensitivity() bool`

GetCaseInsensitivity returns the CaseInsensitivity field if non-nil, zero value otherwise.

### GetCaseInsensitivityOk

`func (o *SecretProcessesorOutputConfigSettings) GetCaseInsensitivityOk() (*bool, bool)`

GetCaseInsensitivityOk returns a tuple with the CaseInsensitivity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseInsensitivity

`func (o *SecretProcessesorOutputConfigSettings) SetCaseInsensitivity(v bool)`

SetCaseInsensitivity sets CaseInsensitivity field to given value.

### HasCaseInsensitivity

`func (o *SecretProcessesorOutputConfigSettings) HasCaseInsensitivity() bool`

HasCaseInsensitivity returns a boolean if a field has been set.

### GetRole

`func (o *SecretProcessesorOutputConfigSettings) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SecretProcessesorOutputConfigSettings) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SecretProcessesorOutputConfigSettings) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *SecretProcessesorOutputConfigSettings) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetSchema

`func (o *SecretProcessesorOutputConfigSettings) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *SecretProcessesorOutputConfigSettings) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *SecretProcessesorOutputConfigSettings) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *SecretProcessesorOutputConfigSettings) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetStage

`func (o *SecretProcessesorOutputConfigSettings) GetStage() string`

GetStage returns the Stage field if non-nil, zero value otherwise.

### GetStageOk

`func (o *SecretProcessesorOutputConfigSettings) GetStageOk() (*string, bool)`

GetStageOk returns a tuple with the Stage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStage

`func (o *SecretProcessesorOutputConfigSettings) SetStage(v string)`

SetStage sets Stage field to given value.

### HasStage

`func (o *SecretProcessesorOutputConfigSettings) HasStage() bool`

HasStage returns a boolean if a field has been set.

### GetWarehouse

`func (o *SecretProcessesorOutputConfigSettings) GetWarehouse() string`

GetWarehouse returns the Warehouse field if non-nil, zero value otherwise.

### GetWarehouseOk

`func (o *SecretProcessesorOutputConfigSettings) GetWarehouseOk() (*string, bool)`

GetWarehouseOk returns a tuple with the Warehouse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarehouse

`func (o *SecretProcessesorOutputConfigSettings) SetWarehouse(v string)`

SetWarehouse sets Warehouse field to given value.

### HasWarehouse

`func (o *SecretProcessesorOutputConfigSettings) HasWarehouse() bool`

HasWarehouse returns a boolean if a field has been set.

### GetAllowInsecure

`func (o *SecretProcessesorOutputConfigSettings) GetAllowInsecure() bool`

GetAllowInsecure returns the AllowInsecure field if non-nil, zero value otherwise.

### GetAllowInsecureOk

`func (o *SecretProcessesorOutputConfigSettings) GetAllowInsecureOk() (*bool, bool)`

GetAllowInsecureOk returns a tuple with the AllowInsecure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowInsecure

`func (o *SecretProcessesorOutputConfigSettings) SetAllowInsecure(v bool)`

SetAllowInsecure sets AllowInsecure field to given value.

### HasAllowInsecure

`func (o *SecretProcessesorOutputConfigSettings) HasAllowInsecure() bool`

HasAllowInsecure returns a boolean if a field has been set.

### GetToCreate

`func (o *SecretProcessesorOutputConfigSettings) GetToCreate() bool`

GetToCreate returns the ToCreate field if non-nil, zero value otherwise.

### GetToCreateOk

`func (o *SecretProcessesorOutputConfigSettings) GetToCreateOk() (*bool, bool)`

GetToCreateOk returns a tuple with the ToCreate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCreate

`func (o *SecretProcessesorOutputConfigSettings) SetToCreate(v bool)`

SetToCreate sets ToCreate field to given value.

### HasToCreate

`func (o *SecretProcessesorOutputConfigSettings) HasToCreate() bool`

HasToCreate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


