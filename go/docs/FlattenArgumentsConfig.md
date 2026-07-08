# FlattenArgumentsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delimiter** | Pointer to **string** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 | [optional] 
**Key** | Pointer to **string** | The key to flatten | [optional] 

## Methods

### NewFlattenArgumentsConfig

`func NewFlattenArgumentsConfig() *FlattenArgumentsConfig`

NewFlattenArgumentsConfig instantiates a new FlattenArgumentsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFlattenArgumentsConfigWithDefaults

`func NewFlattenArgumentsConfigWithDefaults() *FlattenArgumentsConfig`

NewFlattenArgumentsConfigWithDefaults instantiates a new FlattenArgumentsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDelimiter

`func (o *FlattenArgumentsConfig) GetDelimiter() string`

GetDelimiter returns the Delimiter field if non-nil, zero value otherwise.

### GetDelimiterOk

`func (o *FlattenArgumentsConfig) GetDelimiterOk() (*string, bool)`

GetDelimiterOk returns a tuple with the Delimiter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelimiter

`func (o *FlattenArgumentsConfig) SetDelimiter(v string)`

SetDelimiter sets Delimiter field to given value.

### HasDelimiter

`func (o *FlattenArgumentsConfig) HasDelimiter() bool`

HasDelimiter returns a boolean if a field has been set.

### GetKey

`func (o *FlattenArgumentsConfig) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *FlattenArgumentsConfig) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *FlattenArgumentsConfig) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *FlattenArgumentsConfig) HasKey() bool`

HasKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


