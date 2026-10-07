# SqsS3BaseKeyFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filter** | Pointer to [**SqsS3BaseFilterVariant**](SqsS3BaseFilterVariant.md) |  | [optional] 
**Type** | [**SqsS3BaseKeyFilterType**](SqsS3BaseKeyFilterType.md) |  | 

## Methods

### NewSqsS3BaseKeyFilter

`func NewSqsS3BaseKeyFilter(type_ SqsS3BaseKeyFilterType, ) *SqsS3BaseKeyFilter`

NewSqsS3BaseKeyFilter instantiates a new SqsS3BaseKeyFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSqsS3BaseKeyFilterWithDefaults

`func NewSqsS3BaseKeyFilterWithDefaults() *SqsS3BaseKeyFilter`

NewSqsS3BaseKeyFilterWithDefaults instantiates a new SqsS3BaseKeyFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilter

`func (o *SqsS3BaseKeyFilter) GetFilter() SqsS3BaseFilterVariant`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *SqsS3BaseKeyFilter) GetFilterOk() (*SqsS3BaseFilterVariant, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *SqsS3BaseKeyFilter) SetFilter(v SqsS3BaseFilterVariant)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *SqsS3BaseKeyFilter) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetType

`func (o *SqsS3BaseKeyFilter) GetType() SqsS3BaseKeyFilterType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SqsS3BaseKeyFilter) GetTypeOk() (*SqsS3BaseKeyFilterType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SqsS3BaseKeyFilter) SetType(v SqsS3BaseKeyFilterType)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


