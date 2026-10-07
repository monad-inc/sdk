# EncryptArgumentsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Algorithm** | Pointer to [**EncryptAlgorithmConfig**](EncryptAlgorithmConfig.md) |  | [optional] 
**Key** | Pointer to **string** | Key whose value will be encrypted | [optional] 

## Methods

### NewEncryptArgumentsConfig

`func NewEncryptArgumentsConfig() *EncryptArgumentsConfig`

NewEncryptArgumentsConfig instantiates a new EncryptArgumentsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEncryptArgumentsConfigWithDefaults

`func NewEncryptArgumentsConfigWithDefaults() *EncryptArgumentsConfig`

NewEncryptArgumentsConfigWithDefaults instantiates a new EncryptArgumentsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlgorithm

`func (o *EncryptArgumentsConfig) GetAlgorithm() EncryptAlgorithmConfig`

GetAlgorithm returns the Algorithm field if non-nil, zero value otherwise.

### GetAlgorithmOk

`func (o *EncryptArgumentsConfig) GetAlgorithmOk() (*EncryptAlgorithmConfig, bool)`

GetAlgorithmOk returns a tuple with the Algorithm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlgorithm

`func (o *EncryptArgumentsConfig) SetAlgorithm(v EncryptAlgorithmConfig)`

SetAlgorithm sets Algorithm field to given value.

### HasAlgorithm

`func (o *EncryptArgumentsConfig) HasAlgorithm() bool`

HasAlgorithm returns a boolean if a field has been set.

### GetKey

`func (o *EncryptArgumentsConfig) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *EncryptArgumentsConfig) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *EncryptArgumentsConfig) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *EncryptArgumentsConfig) HasKey() bool`

HasKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


