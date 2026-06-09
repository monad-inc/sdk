# AwsS3SettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of data upto now would be performed on the first sync. All syncs thereafter will be incremental. | [optional] 
**Bucket** | **string** | Name of the S3 bucket. | 
**Compression** | **string** | Compression format of the S3 objects. | 
**Format** | **string** | File format of the S3 objects. | 
**KeyFilter** | Pointer to [**SqsS3BaseKeyFilter**](SqsS3BaseKeyFilter.md) |  | [optional] 
**PartitionFormat** | **string** | Partition format of your S3 bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). | 
**Prefix** | Pointer to **string** | Prefix of the S3 object keys to read. | [optional] 
**RecordLocation** | Pointer to **string** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. Leave empty if you want the entire record. | [optional] 
**Region** | Pointer to **string** | AWS Region of your bucket. | [optional] 
**RoleArn** | Pointer to **string** | Role ARN to assume when reading from S3. | [optional] 
**Schema** | **[]string** | Ordered list of column names for headerless delimited files (e.g. PSV). Applies to the \&quot;delimited\&quot; format only; the \&quot;csv\&quot; and \&quot;wsv\&quot; formats always read column names from the first row and ignore this field. | 

## Methods

### NewAwsS3SettingsConfig

`func NewAwsS3SettingsConfig(bucket string, compression string, format string, partitionFormat string, schema []string, ) *AwsS3SettingsConfig`

NewAwsS3SettingsConfig instantiates a new AwsS3SettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwsS3SettingsConfigWithDefaults

`func NewAwsS3SettingsConfigWithDefaults() *AwsS3SettingsConfig`

NewAwsS3SettingsConfigWithDefaults instantiates a new AwsS3SettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *AwsS3SettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *AwsS3SettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *AwsS3SettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *AwsS3SettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetBucket

`func (o *AwsS3SettingsConfig) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *AwsS3SettingsConfig) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *AwsS3SettingsConfig) SetBucket(v string)`

SetBucket sets Bucket field to given value.


### GetCompression

`func (o *AwsS3SettingsConfig) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *AwsS3SettingsConfig) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *AwsS3SettingsConfig) SetCompression(v string)`

SetCompression sets Compression field to given value.


### GetFormat

`func (o *AwsS3SettingsConfig) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *AwsS3SettingsConfig) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *AwsS3SettingsConfig) SetFormat(v string)`

SetFormat sets Format field to given value.


### GetKeyFilter

`func (o *AwsS3SettingsConfig) GetKeyFilter() SqsS3BaseKeyFilter`

GetKeyFilter returns the KeyFilter field if non-nil, zero value otherwise.

### GetKeyFilterOk

`func (o *AwsS3SettingsConfig) GetKeyFilterOk() (*SqsS3BaseKeyFilter, bool)`

GetKeyFilterOk returns a tuple with the KeyFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyFilter

`func (o *AwsS3SettingsConfig) SetKeyFilter(v SqsS3BaseKeyFilter)`

SetKeyFilter sets KeyFilter field to given value.

### HasKeyFilter

`func (o *AwsS3SettingsConfig) HasKeyFilter() bool`

HasKeyFilter returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *AwsS3SettingsConfig) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *AwsS3SettingsConfig) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *AwsS3SettingsConfig) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.


### GetPrefix

`func (o *AwsS3SettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *AwsS3SettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *AwsS3SettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *AwsS3SettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRecordLocation

`func (o *AwsS3SettingsConfig) GetRecordLocation() string`

GetRecordLocation returns the RecordLocation field if non-nil, zero value otherwise.

### GetRecordLocationOk

`func (o *AwsS3SettingsConfig) GetRecordLocationOk() (*string, bool)`

GetRecordLocationOk returns a tuple with the RecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocation

`func (o *AwsS3SettingsConfig) SetRecordLocation(v string)`

SetRecordLocation sets RecordLocation field to given value.

### HasRecordLocation

`func (o *AwsS3SettingsConfig) HasRecordLocation() bool`

HasRecordLocation returns a boolean if a field has been set.

### GetRegion

`func (o *AwsS3SettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AwsS3SettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AwsS3SettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AwsS3SettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *AwsS3SettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *AwsS3SettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *AwsS3SettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *AwsS3SettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetSchema

`func (o *AwsS3SettingsConfig) GetSchema() []string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *AwsS3SettingsConfig) GetSchemaOk() (*[]string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *AwsS3SettingsConfig) SetSchema(v []string)`

SetSchema sets Schema field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


