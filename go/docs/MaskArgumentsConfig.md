# MaskArgumentsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | Key whose value will be masked | [optional] 
**Mode** | Pointer to [**MaskModeConfig**](MaskModeConfig.md) |  | [optional] 

## Methods

### NewMaskArgumentsConfig

`func NewMaskArgumentsConfig() *MaskArgumentsConfig`

NewMaskArgumentsConfig instantiates a new MaskArgumentsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMaskArgumentsConfigWithDefaults

`func NewMaskArgumentsConfigWithDefaults() *MaskArgumentsConfig`

NewMaskArgumentsConfigWithDefaults instantiates a new MaskArgumentsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *MaskArgumentsConfig) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *MaskArgumentsConfig) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *MaskArgumentsConfig) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *MaskArgumentsConfig) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMode

`func (o *MaskArgumentsConfig) GetMode() MaskModeConfig`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *MaskArgumentsConfig) GetModeOk() (*MaskModeConfig, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *MaskArgumentsConfig) SetMode(v MaskModeConfig)`

SetMode sets Mode field to given value.

### HasMode

`func (o *MaskArgumentsConfig) HasMode() bool`

HasMode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


