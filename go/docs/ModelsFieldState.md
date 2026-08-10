# ModelsFieldState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Types** | Pointer to [**map[string]ModelsTypeState**](ModelsTypeState.md) |  | [optional] 

## Methods

### NewModelsFieldState

`func NewModelsFieldState() *ModelsFieldState`

NewModelsFieldState instantiates a new ModelsFieldState object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsFieldStateWithDefaults

`func NewModelsFieldStateWithDefaults() *ModelsFieldState`

NewModelsFieldStateWithDefaults instantiates a new ModelsFieldState object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTypes

`func (o *ModelsFieldState) GetTypes() map[string]ModelsTypeState`

GetTypes returns the Types field if non-nil, zero value otherwise.

### GetTypesOk

`func (o *ModelsFieldState) GetTypesOk() (*map[string]ModelsTypeState, bool)`

GetTypesOk returns a tuple with the Types field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypes

`func (o *ModelsFieldState) SetTypes(v map[string]ModelsTypeState)`

SetTypes sets Types field to given value.

### HasTypes

`func (o *ModelsFieldState) HasTypes() bool`

HasTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


