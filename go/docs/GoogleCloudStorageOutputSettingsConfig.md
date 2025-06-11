# GoogleCloudStorageOutputSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Bucket** | Pointer to **string** | The name of the bucket where data will be stored | [optional] 
**Compression** | Pointer to **string** | The compression method to be applied to the data before storing | [optional] 
**Format** | Pointer to [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**PartitionFormat** | Pointer to **string** | Specifies the format for organizing data into partitions within your bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**Prefix** | Pointer to **string** | An optional prefix for object keys to organize data within the bucket | [optional] 

## Methods

### NewGoogleCloudStorageOutputSettingsConfig

`func NewGoogleCloudStorageOutputSettingsConfig() *GoogleCloudStorageOutputSettingsConfig`

NewGoogleCloudStorageOutputSettingsConfig instantiates a new GoogleCloudStorageOutputSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGoogleCloudStorageOutputSettingsConfigWithDefaults

`func NewGoogleCloudStorageOutputSettingsConfigWithDefaults() *GoogleCloudStorageOutputSettingsConfig`

NewGoogleCloudStorageOutputSettingsConfigWithDefaults instantiates a new GoogleCloudStorageOutputSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *GoogleCloudStorageOutputSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *GoogleCloudStorageOutputSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *GoogleCloudStorageOutputSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *GoogleCloudStorageOutputSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetBucket

`func (o *GoogleCloudStorageOutputSettingsConfig) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *GoogleCloudStorageOutputSettingsConfig) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *GoogleCloudStorageOutputSettingsConfig) SetBucket(v string)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *GoogleCloudStorageOutputSettingsConfig) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetCompression

`func (o *GoogleCloudStorageOutputSettingsConfig) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *GoogleCloudStorageOutputSettingsConfig) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *GoogleCloudStorageOutputSettingsConfig) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *GoogleCloudStorageOutputSettingsConfig) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetFormat

`func (o *GoogleCloudStorageOutputSettingsConfig) GetFormat() FormatterFormatConfig`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *GoogleCloudStorageOutputSettingsConfig) GetFormatOk() (*FormatterFormatConfig, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *GoogleCloudStorageOutputSettingsConfig) SetFormat(v FormatterFormatConfig)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *GoogleCloudStorageOutputSettingsConfig) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *GoogleCloudStorageOutputSettingsConfig) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *GoogleCloudStorageOutputSettingsConfig) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *GoogleCloudStorageOutputSettingsConfig) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *GoogleCloudStorageOutputSettingsConfig) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *GoogleCloudStorageOutputSettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *GoogleCloudStorageOutputSettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *GoogleCloudStorageOutputSettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *GoogleCloudStorageOutputSettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


