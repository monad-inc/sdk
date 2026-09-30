# HydrolixAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | Pointer to [**HydrolixPasswordAuth**](HydrolixPasswordAuth.md) |  | [optional] 
**ServiceAccount** | Pointer to [**HydrolixServiceAccountAuth**](HydrolixServiceAccountAuth.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewHydrolixAuthConfig

`func NewHydrolixAuthConfig(type_ string, ) *HydrolixAuthConfig`

NewHydrolixAuthConfig instantiates a new HydrolixAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHydrolixAuthConfigWithDefaults

`func NewHydrolixAuthConfigWithDefaults() *HydrolixAuthConfig`

NewHydrolixAuthConfigWithDefaults instantiates a new HydrolixAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPassword

`func (o *HydrolixAuthConfig) GetPassword() HydrolixPasswordAuth`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *HydrolixAuthConfig) GetPasswordOk() (*HydrolixPasswordAuth, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *HydrolixAuthConfig) SetPassword(v HydrolixPasswordAuth)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *HydrolixAuthConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetServiceAccount

`func (o *HydrolixAuthConfig) GetServiceAccount() HydrolixServiceAccountAuth`

GetServiceAccount returns the ServiceAccount field if non-nil, zero value otherwise.

### GetServiceAccountOk

`func (o *HydrolixAuthConfig) GetServiceAccountOk() (*HydrolixServiceAccountAuth, bool)`

GetServiceAccountOk returns a tuple with the ServiceAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceAccount

`func (o *HydrolixAuthConfig) SetServiceAccount(v HydrolixServiceAccountAuth)`

SetServiceAccount sets ServiceAccount field to given value.

### HasServiceAccount

`func (o *HydrolixAuthConfig) HasServiceAccount() bool`

HasServiceAccount returns a boolean if a field has been set.

### GetType

`func (o *HydrolixAuthConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *HydrolixAuthConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *HydrolixAuthConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


