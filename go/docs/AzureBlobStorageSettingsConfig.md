# AzureBlobStorageSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountUrl** | Pointer to **string** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. | [optional] 
**BackfillStartTime** | Pointer to **string** | Starting timestamp for initial data sync. Only processes blobs with a last modified time after this timestamp on the initial sync. If not specified, all available data from the specified prefix will be processed. Incremental syncs automatically continue from the last processed timestamp, scanning from the previous day&#39;s partition forward to catch late-arriving data. Files updated in partitions older than the current state&#39;s previous prefix will not be detected. | [optional] 
**Compression** | Pointer to **string** | The compression format of objects in the Azure container | [optional] 
**Container** | Pointer to **string** | A container organizes a set of blobs, similar to a directory in a file system. | [optional] 
**Format** | Pointer to **string** | File format of the Blob storage objects in Azure. | [optional] 
**PartitionFormat** | Pointer to **string** | Specifies the format for organizing data into partitions within your Azure container. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**Prefix** | Pointer to **string** | An optional prefix for Azure object keys to organize data within the container | [optional] 
**RecordLocation** | Pointer to **string** | Location of the record in the JSON object. Applies only if the format is JSON. | [optional] 

## Methods

### NewAzureBlobStorageSettingsConfig

`func NewAzureBlobStorageSettingsConfig() *AzureBlobStorageSettingsConfig`

NewAzureBlobStorageSettingsConfig instantiates a new AzureBlobStorageSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureBlobStorageSettingsConfigWithDefaults

`func NewAzureBlobStorageSettingsConfigWithDefaults() *AzureBlobStorageSettingsConfig`

NewAzureBlobStorageSettingsConfigWithDefaults instantiates a new AzureBlobStorageSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountUrl

`func (o *AzureBlobStorageSettingsConfig) GetAccountUrl() string`

GetAccountUrl returns the AccountUrl field if non-nil, zero value otherwise.

### GetAccountUrlOk

`func (o *AzureBlobStorageSettingsConfig) GetAccountUrlOk() (*string, bool)`

GetAccountUrlOk returns a tuple with the AccountUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUrl

`func (o *AzureBlobStorageSettingsConfig) SetAccountUrl(v string)`

SetAccountUrl sets AccountUrl field to given value.

### HasAccountUrl

`func (o *AzureBlobStorageSettingsConfig) HasAccountUrl() bool`

HasAccountUrl returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *AzureBlobStorageSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *AzureBlobStorageSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *AzureBlobStorageSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *AzureBlobStorageSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetCompression

`func (o *AzureBlobStorageSettingsConfig) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *AzureBlobStorageSettingsConfig) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *AzureBlobStorageSettingsConfig) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *AzureBlobStorageSettingsConfig) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetContainer

`func (o *AzureBlobStorageSettingsConfig) GetContainer() string`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *AzureBlobStorageSettingsConfig) GetContainerOk() (*string, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *AzureBlobStorageSettingsConfig) SetContainer(v string)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *AzureBlobStorageSettingsConfig) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetFormat

`func (o *AzureBlobStorageSettingsConfig) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *AzureBlobStorageSettingsConfig) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *AzureBlobStorageSettingsConfig) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *AzureBlobStorageSettingsConfig) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *AzureBlobStorageSettingsConfig) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *AzureBlobStorageSettingsConfig) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *AzureBlobStorageSettingsConfig) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *AzureBlobStorageSettingsConfig) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *AzureBlobStorageSettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *AzureBlobStorageSettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *AzureBlobStorageSettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *AzureBlobStorageSettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRecordLocation

`func (o *AzureBlobStorageSettingsConfig) GetRecordLocation() string`

GetRecordLocation returns the RecordLocation field if non-nil, zero value otherwise.

### GetRecordLocationOk

`func (o *AzureBlobStorageSettingsConfig) GetRecordLocationOk() (*string, bool)`

GetRecordLocationOk returns a tuple with the RecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocation

`func (o *AzureBlobStorageSettingsConfig) SetRecordLocation(v string)`

SetRecordLocation sets RecordLocation field to given value.

### HasRecordLocation

`func (o *AzureBlobStorageSettingsConfig) HasRecordLocation() bool`

HasRecordLocation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


