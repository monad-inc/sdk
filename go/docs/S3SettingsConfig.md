# S3SettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Bucket** | Pointer to **string** | The name of the S3 bucket where data will be stored | [optional] 
**Compression** | Pointer to **string** | The compression method to be applied to the data before storing in S3 | [optional] 
**FormatConfig** | Pointer to [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**PartitionFormat** | Pointer to **string** | Specifies the format for organizing data into partitions within your S3 bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**Prefix** | Pointer to **string** | An optional prefix for S3 object keys to organize data within the bucket | [optional] 
**Region** | Pointer to **string** | The AWS region where the S3 bucket is located | [optional] 
**RoleArn** | Pointer to **string** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket | [optional] 

## Methods

### NewS3SettingsConfig

`func NewS3SettingsConfig() *S3SettingsConfig`

NewS3SettingsConfig instantiates a new S3SettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewS3SettingsConfigWithDefaults

`func NewS3SettingsConfigWithDefaults() *S3SettingsConfig`

NewS3SettingsConfigWithDefaults instantiates a new S3SettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *S3SettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *S3SettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *S3SettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *S3SettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetBucket

`func (o *S3SettingsConfig) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *S3SettingsConfig) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *S3SettingsConfig) SetBucket(v string)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *S3SettingsConfig) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetCompression

`func (o *S3SettingsConfig) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *S3SettingsConfig) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *S3SettingsConfig) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *S3SettingsConfig) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetFormatConfig

`func (o *S3SettingsConfig) GetFormatConfig() FormatterFormatConfig`

GetFormatConfig returns the FormatConfig field if non-nil, zero value otherwise.

### GetFormatConfigOk

`func (o *S3SettingsConfig) GetFormatConfigOk() (*FormatterFormatConfig, bool)`

GetFormatConfigOk returns a tuple with the FormatConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormatConfig

`func (o *S3SettingsConfig) SetFormatConfig(v FormatterFormatConfig)`

SetFormatConfig sets FormatConfig field to given value.

### HasFormatConfig

`func (o *S3SettingsConfig) HasFormatConfig() bool`

HasFormatConfig returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *S3SettingsConfig) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *S3SettingsConfig) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *S3SettingsConfig) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *S3SettingsConfig) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *S3SettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *S3SettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *S3SettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *S3SettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRegion

`func (o *S3SettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *S3SettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *S3SettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *S3SettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *S3SettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *S3SettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *S3SettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *S3SettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


