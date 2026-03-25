# EncryptAlgorithmConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Aes** | Pointer to [**EncryptAESVariant**](EncryptAESVariant.md) |  | [optional] 
**Age** | Pointer to [**EncryptAgeVariant**](EncryptAgeVariant.md) |  | [optional] 
**Type** | Pointer to **string** | \&quot;aes\&quot; or \&quot;age\&quot; | [optional] 

## Methods

### NewEncryptAlgorithmConfig

`func NewEncryptAlgorithmConfig() *EncryptAlgorithmConfig`

NewEncryptAlgorithmConfig instantiates a new EncryptAlgorithmConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEncryptAlgorithmConfigWithDefaults

`func NewEncryptAlgorithmConfigWithDefaults() *EncryptAlgorithmConfig`

NewEncryptAlgorithmConfigWithDefaults instantiates a new EncryptAlgorithmConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAes

`func (o *EncryptAlgorithmConfig) GetAes() EncryptAESVariant`

GetAes returns the Aes field if non-nil, zero value otherwise.

### GetAesOk

`func (o *EncryptAlgorithmConfig) GetAesOk() (*EncryptAESVariant, bool)`

GetAesOk returns a tuple with the Aes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAes

`func (o *EncryptAlgorithmConfig) SetAes(v EncryptAESVariant)`

SetAes sets Aes field to given value.

### HasAes

`func (o *EncryptAlgorithmConfig) HasAes() bool`

HasAes returns a boolean if a field has been set.

### GetAge

`func (o *EncryptAlgorithmConfig) GetAge() EncryptAgeVariant`

GetAge returns the Age field if non-nil, zero value otherwise.

### GetAgeOk

`func (o *EncryptAlgorithmConfig) GetAgeOk() (*EncryptAgeVariant, bool)`

GetAgeOk returns a tuple with the Age field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAge

`func (o *EncryptAlgorithmConfig) SetAge(v EncryptAgeVariant)`

SetAge sets Age field to given value.

### HasAge

`func (o *EncryptAlgorithmConfig) HasAge() bool`

HasAge returns a boolean if a field has been set.

### GetType

`func (o *EncryptAlgorithmConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EncryptAlgorithmConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EncryptAlgorithmConfig) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EncryptAlgorithmConfig) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


