# HashArgumentsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Algorithm** | Pointer to **string** | Hash algorithm | [optional] 
**Fields** | Pointer to **[]string** | Fields to hash, in order; empty hashes the whole record | [optional] 
**Key** | Pointer to **string** | Key to store the resulting hash in | [optional] 

## Methods

### NewHashArgumentsConfig

`func NewHashArgumentsConfig() *HashArgumentsConfig`

NewHashArgumentsConfig instantiates a new HashArgumentsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHashArgumentsConfigWithDefaults

`func NewHashArgumentsConfigWithDefaults() *HashArgumentsConfig`

NewHashArgumentsConfigWithDefaults instantiates a new HashArgumentsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlgorithm

`func (o *HashArgumentsConfig) GetAlgorithm() string`

GetAlgorithm returns the Algorithm field if non-nil, zero value otherwise.

### GetAlgorithmOk

`func (o *HashArgumentsConfig) GetAlgorithmOk() (*string, bool)`

GetAlgorithmOk returns a tuple with the Algorithm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlgorithm

`func (o *HashArgumentsConfig) SetAlgorithm(v string)`

SetAlgorithm sets Algorithm field to given value.

### HasAlgorithm

`func (o *HashArgumentsConfig) HasAlgorithm() bool`

HasAlgorithm returns a boolean if a field has been set.

### GetFields

`func (o *HashArgumentsConfig) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *HashArgumentsConfig) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *HashArgumentsConfig) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *HashArgumentsConfig) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetKey

`func (o *HashArgumentsConfig) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *HashArgumentsConfig) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *HashArgumentsConfig) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *HashArgumentsConfig) HasKey() bool`

HasKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


