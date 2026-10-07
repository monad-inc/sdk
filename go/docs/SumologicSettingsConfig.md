# SumologicSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceMetadata** | Pointer to [**SumologicSourceMetadata**](SumologicSourceMetadata.md) |  | [optional] 
**Url** | Pointer to **string** | The URL of the Sumo Logic instance. | [optional] 

## Methods

### NewSumologicSettingsConfig

`func NewSumologicSettingsConfig() *SumologicSettingsConfig`

NewSumologicSettingsConfig instantiates a new SumologicSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSumologicSettingsConfigWithDefaults

`func NewSumologicSettingsConfigWithDefaults() *SumologicSettingsConfig`

NewSumologicSettingsConfigWithDefaults instantiates a new SumologicSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceMetadata

`func (o *SumologicSettingsConfig) GetSourceMetadata() SumologicSourceMetadata`

GetSourceMetadata returns the SourceMetadata field if non-nil, zero value otherwise.

### GetSourceMetadataOk

`func (o *SumologicSettingsConfig) GetSourceMetadataOk() (*SumologicSourceMetadata, bool)`

GetSourceMetadataOk returns a tuple with the SourceMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceMetadata

`func (o *SumologicSettingsConfig) SetSourceMetadata(v SumologicSourceMetadata)`

SetSourceMetadata sets SourceMetadata field to given value.

### HasSourceMetadata

`func (o *SumologicSettingsConfig) HasSourceMetadata() bool`

HasSourceMetadata returns a boolean if a field has been set.

### GetUrl

`func (o *SumologicSettingsConfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *SumologicSettingsConfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *SumologicSettingsConfig) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *SumologicSettingsConfig) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


