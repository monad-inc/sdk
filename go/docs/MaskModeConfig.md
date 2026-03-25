# MaskModeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Deterministic** | Pointer to [**MaskDeterministicVariant**](MaskDeterministicVariant.md) |  | [optional] 
**Simple** | Pointer to **map[string]interface{}** |  | [optional] 
**Type** | Pointer to **string** | Type of masking mode. \&quot;simple\&quot; or \&quot;deterministic\&quot;. Defaults to \&quot;simple\&quot;. | [optional] 

## Methods

### NewMaskModeConfig

`func NewMaskModeConfig() *MaskModeConfig`

NewMaskModeConfig instantiates a new MaskModeConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMaskModeConfigWithDefaults

`func NewMaskModeConfigWithDefaults() *MaskModeConfig`

NewMaskModeConfigWithDefaults instantiates a new MaskModeConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeterministic

`func (o *MaskModeConfig) GetDeterministic() MaskDeterministicVariant`

GetDeterministic returns the Deterministic field if non-nil, zero value otherwise.

### GetDeterministicOk

`func (o *MaskModeConfig) GetDeterministicOk() (*MaskDeterministicVariant, bool)`

GetDeterministicOk returns a tuple with the Deterministic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeterministic

`func (o *MaskModeConfig) SetDeterministic(v MaskDeterministicVariant)`

SetDeterministic sets Deterministic field to given value.

### HasDeterministic

`func (o *MaskModeConfig) HasDeterministic() bool`

HasDeterministic returns a boolean if a field has been set.

### GetSimple

`func (o *MaskModeConfig) GetSimple() map[string]interface{}`

GetSimple returns the Simple field if non-nil, zero value otherwise.

### GetSimpleOk

`func (o *MaskModeConfig) GetSimpleOk() (*map[string]interface{}, bool)`

GetSimpleOk returns a tuple with the Simple field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimple

`func (o *MaskModeConfig) SetSimple(v map[string]interface{})`

SetSimple sets Simple field to given value.

### HasSimple

`func (o *MaskModeConfig) HasSimple() bool`

HasSimple returns a boolean if a field has been set.

### GetType

`func (o *MaskModeConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MaskModeConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MaskModeConfig) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MaskModeConfig) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


