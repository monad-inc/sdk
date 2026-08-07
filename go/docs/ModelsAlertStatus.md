# ModelsAlertStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClearingStartedAt** | Pointer to **int32** | When clearing began | [optional] 
**ResolvedAt** | Pointer to **int32** | Unix timestamp when resolved | [optional] 
**State** | Pointer to [**ModelsAlertState**](ModelsAlertState.md) |  | [optional] 

## Methods

### NewModelsAlertStatus

`func NewModelsAlertStatus() *ModelsAlertStatus`

NewModelsAlertStatus instantiates a new ModelsAlertStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsAlertStatusWithDefaults

`func NewModelsAlertStatusWithDefaults() *ModelsAlertStatus`

NewModelsAlertStatusWithDefaults instantiates a new ModelsAlertStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClearingStartedAt

`func (o *ModelsAlertStatus) GetClearingStartedAt() int32`

GetClearingStartedAt returns the ClearingStartedAt field if non-nil, zero value otherwise.

### GetClearingStartedAtOk

`func (o *ModelsAlertStatus) GetClearingStartedAtOk() (*int32, bool)`

GetClearingStartedAtOk returns a tuple with the ClearingStartedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClearingStartedAt

`func (o *ModelsAlertStatus) SetClearingStartedAt(v int32)`

SetClearingStartedAt sets ClearingStartedAt field to given value.

### HasClearingStartedAt

`func (o *ModelsAlertStatus) HasClearingStartedAt() bool`

HasClearingStartedAt returns a boolean if a field has been set.

### GetResolvedAt

`func (o *ModelsAlertStatus) GetResolvedAt() int32`

GetResolvedAt returns the ResolvedAt field if non-nil, zero value otherwise.

### GetResolvedAtOk

`func (o *ModelsAlertStatus) GetResolvedAtOk() (*int32, bool)`

GetResolvedAtOk returns a tuple with the ResolvedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolvedAt

`func (o *ModelsAlertStatus) SetResolvedAt(v int32)`

SetResolvedAt sets ResolvedAt field to given value.

### HasResolvedAt

`func (o *ModelsAlertStatus) HasResolvedAt() bool`

HasResolvedAt returns a boolean if a field has been set.

### GetState

`func (o *ModelsAlertStatus) GetState() ModelsAlertState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ModelsAlertStatus) GetStateOk() (*ModelsAlertState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ModelsAlertStatus) SetState(v ModelsAlertState)`

SetState sets State field to given value.

### HasState

`func (o *ModelsAlertStatus) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


