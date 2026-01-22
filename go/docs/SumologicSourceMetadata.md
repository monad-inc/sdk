# SumologicSourceMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomSourceCategory** | Pointer to **string** | Desired source category. Useful if you want to override the source category configured for the source. | [optional] 
**CustomSourceHost** | Pointer to **string** | Desired source host. Useful if you want to override the source host configured for the source. | [optional] 
**CustomSourceName** | Pointer to **string** | Desired source name. Useful if you want to override the source name configured for the source. | [optional] 
**SumoFields** | Pointer to [**[]SumologicSumoField**](SumologicSumoField.md) |  | [optional] 

## Methods

### NewSumologicSourceMetadata

`func NewSumologicSourceMetadata() *SumologicSourceMetadata`

NewSumologicSourceMetadata instantiates a new SumologicSourceMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSumologicSourceMetadataWithDefaults

`func NewSumologicSourceMetadataWithDefaults() *SumologicSourceMetadata`

NewSumologicSourceMetadataWithDefaults instantiates a new SumologicSourceMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomSourceCategory

`func (o *SumologicSourceMetadata) GetCustomSourceCategory() string`

GetCustomSourceCategory returns the CustomSourceCategory field if non-nil, zero value otherwise.

### GetCustomSourceCategoryOk

`func (o *SumologicSourceMetadata) GetCustomSourceCategoryOk() (*string, bool)`

GetCustomSourceCategoryOk returns a tuple with the CustomSourceCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomSourceCategory

`func (o *SumologicSourceMetadata) SetCustomSourceCategory(v string)`

SetCustomSourceCategory sets CustomSourceCategory field to given value.

### HasCustomSourceCategory

`func (o *SumologicSourceMetadata) HasCustomSourceCategory() bool`

HasCustomSourceCategory returns a boolean if a field has been set.

### GetCustomSourceHost

`func (o *SumologicSourceMetadata) GetCustomSourceHost() string`

GetCustomSourceHost returns the CustomSourceHost field if non-nil, zero value otherwise.

### GetCustomSourceHostOk

`func (o *SumologicSourceMetadata) GetCustomSourceHostOk() (*string, bool)`

GetCustomSourceHostOk returns a tuple with the CustomSourceHost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomSourceHost

`func (o *SumologicSourceMetadata) SetCustomSourceHost(v string)`

SetCustomSourceHost sets CustomSourceHost field to given value.

### HasCustomSourceHost

`func (o *SumologicSourceMetadata) HasCustomSourceHost() bool`

HasCustomSourceHost returns a boolean if a field has been set.

### GetCustomSourceName

`func (o *SumologicSourceMetadata) GetCustomSourceName() string`

GetCustomSourceName returns the CustomSourceName field if non-nil, zero value otherwise.

### GetCustomSourceNameOk

`func (o *SumologicSourceMetadata) GetCustomSourceNameOk() (*string, bool)`

GetCustomSourceNameOk returns a tuple with the CustomSourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomSourceName

`func (o *SumologicSourceMetadata) SetCustomSourceName(v string)`

SetCustomSourceName sets CustomSourceName field to given value.

### HasCustomSourceName

`func (o *SumologicSourceMetadata) HasCustomSourceName() bool`

HasCustomSourceName returns a boolean if a field has been set.

### GetSumoFields

`func (o *SumologicSourceMetadata) GetSumoFields() []SumologicSumoField`

GetSumoFields returns the SumoFields field if non-nil, zero value otherwise.

### GetSumoFieldsOk

`func (o *SumologicSourceMetadata) GetSumoFieldsOk() (*[]SumologicSumoField, bool)`

GetSumoFieldsOk returns a tuple with the SumoFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSumoFields

`func (o *SumologicSourceMetadata) SetSumoFields(v []SumologicSumoField)`

SetSumoFields sets SumoFields field to given value.

### HasSumoFields

`func (o *SumologicSourceMetadata) HasSumoFields() bool`

HasSumoFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


