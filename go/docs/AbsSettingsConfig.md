# AbsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountUrl** | Pointer to **string** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. | [optional] 
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Compression** | Pointer to **string** | The compression method to be applied to the data before storing in Azure | [optional] 
**Container** | Pointer to **string** | A container organizes a set of blobs, similar to a directory in a file system. | [optional] 
**FormatConfig** | Pointer to [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**PartitionFormat** | Pointer to **string** | Specifies the format for organizing data into partitions within your Azure container. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**Prefix** | Pointer to **string** | An optional prefix for Azure object keys to organize data within the container | [optional] 

## Methods

### NewAbsSettingsConfig

`func NewAbsSettingsConfig() *AbsSettingsConfig`

NewAbsSettingsConfig instantiates a new AbsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAbsSettingsConfigWithDefaults

`func NewAbsSettingsConfigWithDefaults() *AbsSettingsConfig`

NewAbsSettingsConfigWithDefaults instantiates a new AbsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountUrl

`func (o *AbsSettingsConfig) GetAccountUrl() string`

GetAccountUrl returns the AccountUrl field if non-nil, zero value otherwise.

### GetAccountUrlOk

`func (o *AbsSettingsConfig) GetAccountUrlOk() (*string, bool)`

GetAccountUrlOk returns a tuple with the AccountUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUrl

`func (o *AbsSettingsConfig) SetAccountUrl(v string)`

SetAccountUrl sets AccountUrl field to given value.

### HasAccountUrl

`func (o *AbsSettingsConfig) HasAccountUrl() bool`

HasAccountUrl returns a boolean if a field has been set.

### GetBatchConfig

`func (o *AbsSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *AbsSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *AbsSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *AbsSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetCompression

`func (o *AbsSettingsConfig) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *AbsSettingsConfig) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *AbsSettingsConfig) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *AbsSettingsConfig) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetContainer

`func (o *AbsSettingsConfig) GetContainer() string`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *AbsSettingsConfig) GetContainerOk() (*string, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *AbsSettingsConfig) SetContainer(v string)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *AbsSettingsConfig) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetFormatConfig

`func (o *AbsSettingsConfig) GetFormatConfig() FormatterFormatConfig`

GetFormatConfig returns the FormatConfig field if non-nil, zero value otherwise.

### GetFormatConfigOk

`func (o *AbsSettingsConfig) GetFormatConfigOk() (*FormatterFormatConfig, bool)`

GetFormatConfigOk returns a tuple with the FormatConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormatConfig

`func (o *AbsSettingsConfig) SetFormatConfig(v FormatterFormatConfig)`

SetFormatConfig sets FormatConfig field to given value.

### HasFormatConfig

`func (o *AbsSettingsConfig) HasFormatConfig() bool`

HasFormatConfig returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *AbsSettingsConfig) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *AbsSettingsConfig) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *AbsSettingsConfig) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *AbsSettingsConfig) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *AbsSettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *AbsSettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *AbsSettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *AbsSettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


