# ModelsCostBreakdown

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddedBytes** | Pointer to **int32** |  | [optional] 
**ContextCost** | Pointer to **float32** |  | [optional] 
**CostWithMonad** | Pointer to **float32** |  | [optional] 
**CostWithoutMonad** | Pointer to **float32** |  | [optional] 
**DeliveredBytes** | Pointer to **int32** |  | [optional] 
**Estimated** | Pointer to **bool** |  | [optional] 
**FilteredBytes** | Pointer to **int32** |  | [optional] 
**FilteringSavings** | Pointer to **float32** |  | [optional] 
**KeptBytes** | Pointer to **int32** |  | [optional] 
**KeptCost** | Pointer to **float32** |  | [optional] 
**RawInputBytes** | Pointer to **int32** |  | [optional] 
**ReductionSavings** | Pointer to **float32** |  | [optional] 
**RemovedBytes** | Pointer to **int32** |  | [optional] 
**RoutedAwayBytes** | Pointer to **int32** |  | [optional] 
**RoutingSavings** | Pointer to **float32** |  | [optional] 

## Methods

### NewModelsCostBreakdown

`func NewModelsCostBreakdown() *ModelsCostBreakdown`

NewModelsCostBreakdown instantiates a new ModelsCostBreakdown object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsCostBreakdownWithDefaults

`func NewModelsCostBreakdownWithDefaults() *ModelsCostBreakdown`

NewModelsCostBreakdownWithDefaults instantiates a new ModelsCostBreakdown object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddedBytes

`func (o *ModelsCostBreakdown) GetAddedBytes() int32`

GetAddedBytes returns the AddedBytes field if non-nil, zero value otherwise.

### GetAddedBytesOk

`func (o *ModelsCostBreakdown) GetAddedBytesOk() (*int32, bool)`

GetAddedBytesOk returns a tuple with the AddedBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddedBytes

`func (o *ModelsCostBreakdown) SetAddedBytes(v int32)`

SetAddedBytes sets AddedBytes field to given value.

### HasAddedBytes

`func (o *ModelsCostBreakdown) HasAddedBytes() bool`

HasAddedBytes returns a boolean if a field has been set.

### GetContextCost

`func (o *ModelsCostBreakdown) GetContextCost() float32`

GetContextCost returns the ContextCost field if non-nil, zero value otherwise.

### GetContextCostOk

`func (o *ModelsCostBreakdown) GetContextCostOk() (*float32, bool)`

GetContextCostOk returns a tuple with the ContextCost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContextCost

`func (o *ModelsCostBreakdown) SetContextCost(v float32)`

SetContextCost sets ContextCost field to given value.

### HasContextCost

`func (o *ModelsCostBreakdown) HasContextCost() bool`

HasContextCost returns a boolean if a field has been set.

### GetCostWithMonad

`func (o *ModelsCostBreakdown) GetCostWithMonad() float32`

GetCostWithMonad returns the CostWithMonad field if non-nil, zero value otherwise.

### GetCostWithMonadOk

`func (o *ModelsCostBreakdown) GetCostWithMonadOk() (*float32, bool)`

GetCostWithMonadOk returns a tuple with the CostWithMonad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostWithMonad

`func (o *ModelsCostBreakdown) SetCostWithMonad(v float32)`

SetCostWithMonad sets CostWithMonad field to given value.

### HasCostWithMonad

`func (o *ModelsCostBreakdown) HasCostWithMonad() bool`

HasCostWithMonad returns a boolean if a field has been set.

### GetCostWithoutMonad

`func (o *ModelsCostBreakdown) GetCostWithoutMonad() float32`

GetCostWithoutMonad returns the CostWithoutMonad field if non-nil, zero value otherwise.

### GetCostWithoutMonadOk

`func (o *ModelsCostBreakdown) GetCostWithoutMonadOk() (*float32, bool)`

GetCostWithoutMonadOk returns a tuple with the CostWithoutMonad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostWithoutMonad

`func (o *ModelsCostBreakdown) SetCostWithoutMonad(v float32)`

SetCostWithoutMonad sets CostWithoutMonad field to given value.

### HasCostWithoutMonad

`func (o *ModelsCostBreakdown) HasCostWithoutMonad() bool`

HasCostWithoutMonad returns a boolean if a field has been set.

### GetDeliveredBytes

`func (o *ModelsCostBreakdown) GetDeliveredBytes() int32`

GetDeliveredBytes returns the DeliveredBytes field if non-nil, zero value otherwise.

### GetDeliveredBytesOk

`func (o *ModelsCostBreakdown) GetDeliveredBytesOk() (*int32, bool)`

GetDeliveredBytesOk returns a tuple with the DeliveredBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveredBytes

`func (o *ModelsCostBreakdown) SetDeliveredBytes(v int32)`

SetDeliveredBytes sets DeliveredBytes field to given value.

### HasDeliveredBytes

`func (o *ModelsCostBreakdown) HasDeliveredBytes() bool`

HasDeliveredBytes returns a boolean if a field has been set.

### GetEstimated

`func (o *ModelsCostBreakdown) GetEstimated() bool`

GetEstimated returns the Estimated field if non-nil, zero value otherwise.

### GetEstimatedOk

`func (o *ModelsCostBreakdown) GetEstimatedOk() (*bool, bool)`

GetEstimatedOk returns a tuple with the Estimated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimated

`func (o *ModelsCostBreakdown) SetEstimated(v bool)`

SetEstimated sets Estimated field to given value.

### HasEstimated

`func (o *ModelsCostBreakdown) HasEstimated() bool`

HasEstimated returns a boolean if a field has been set.

### GetFilteredBytes

`func (o *ModelsCostBreakdown) GetFilteredBytes() int32`

GetFilteredBytes returns the FilteredBytes field if non-nil, zero value otherwise.

### GetFilteredBytesOk

`func (o *ModelsCostBreakdown) GetFilteredBytesOk() (*int32, bool)`

GetFilteredBytesOk returns a tuple with the FilteredBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilteredBytes

`func (o *ModelsCostBreakdown) SetFilteredBytes(v int32)`

SetFilteredBytes sets FilteredBytes field to given value.

### HasFilteredBytes

`func (o *ModelsCostBreakdown) HasFilteredBytes() bool`

HasFilteredBytes returns a boolean if a field has been set.

### GetFilteringSavings

`func (o *ModelsCostBreakdown) GetFilteringSavings() float32`

GetFilteringSavings returns the FilteringSavings field if non-nil, zero value otherwise.

### GetFilteringSavingsOk

`func (o *ModelsCostBreakdown) GetFilteringSavingsOk() (*float32, bool)`

GetFilteringSavingsOk returns a tuple with the FilteringSavings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilteringSavings

`func (o *ModelsCostBreakdown) SetFilteringSavings(v float32)`

SetFilteringSavings sets FilteringSavings field to given value.

### HasFilteringSavings

`func (o *ModelsCostBreakdown) HasFilteringSavings() bool`

HasFilteringSavings returns a boolean if a field has been set.

### GetKeptBytes

`func (o *ModelsCostBreakdown) GetKeptBytes() int32`

GetKeptBytes returns the KeptBytes field if non-nil, zero value otherwise.

### GetKeptBytesOk

`func (o *ModelsCostBreakdown) GetKeptBytesOk() (*int32, bool)`

GetKeptBytesOk returns a tuple with the KeptBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeptBytes

`func (o *ModelsCostBreakdown) SetKeptBytes(v int32)`

SetKeptBytes sets KeptBytes field to given value.

### HasKeptBytes

`func (o *ModelsCostBreakdown) HasKeptBytes() bool`

HasKeptBytes returns a boolean if a field has been set.

### GetKeptCost

`func (o *ModelsCostBreakdown) GetKeptCost() float32`

GetKeptCost returns the KeptCost field if non-nil, zero value otherwise.

### GetKeptCostOk

`func (o *ModelsCostBreakdown) GetKeptCostOk() (*float32, bool)`

GetKeptCostOk returns a tuple with the KeptCost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeptCost

`func (o *ModelsCostBreakdown) SetKeptCost(v float32)`

SetKeptCost sets KeptCost field to given value.

### HasKeptCost

`func (o *ModelsCostBreakdown) HasKeptCost() bool`

HasKeptCost returns a boolean if a field has been set.

### GetRawInputBytes

`func (o *ModelsCostBreakdown) GetRawInputBytes() int32`

GetRawInputBytes returns the RawInputBytes field if non-nil, zero value otherwise.

### GetRawInputBytesOk

`func (o *ModelsCostBreakdown) GetRawInputBytesOk() (*int32, bool)`

GetRawInputBytesOk returns a tuple with the RawInputBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRawInputBytes

`func (o *ModelsCostBreakdown) SetRawInputBytes(v int32)`

SetRawInputBytes sets RawInputBytes field to given value.

### HasRawInputBytes

`func (o *ModelsCostBreakdown) HasRawInputBytes() bool`

HasRawInputBytes returns a boolean if a field has been set.

### GetReductionSavings

`func (o *ModelsCostBreakdown) GetReductionSavings() float32`

GetReductionSavings returns the ReductionSavings field if non-nil, zero value otherwise.

### GetReductionSavingsOk

`func (o *ModelsCostBreakdown) GetReductionSavingsOk() (*float32, bool)`

GetReductionSavingsOk returns a tuple with the ReductionSavings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReductionSavings

`func (o *ModelsCostBreakdown) SetReductionSavings(v float32)`

SetReductionSavings sets ReductionSavings field to given value.

### HasReductionSavings

`func (o *ModelsCostBreakdown) HasReductionSavings() bool`

HasReductionSavings returns a boolean if a field has been set.

### GetRemovedBytes

`func (o *ModelsCostBreakdown) GetRemovedBytes() int32`

GetRemovedBytes returns the RemovedBytes field if non-nil, zero value otherwise.

### GetRemovedBytesOk

`func (o *ModelsCostBreakdown) GetRemovedBytesOk() (*int32, bool)`

GetRemovedBytesOk returns a tuple with the RemovedBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovedBytes

`func (o *ModelsCostBreakdown) SetRemovedBytes(v int32)`

SetRemovedBytes sets RemovedBytes field to given value.

### HasRemovedBytes

`func (o *ModelsCostBreakdown) HasRemovedBytes() bool`

HasRemovedBytes returns a boolean if a field has been set.

### GetRoutedAwayBytes

`func (o *ModelsCostBreakdown) GetRoutedAwayBytes() int32`

GetRoutedAwayBytes returns the RoutedAwayBytes field if non-nil, zero value otherwise.

### GetRoutedAwayBytesOk

`func (o *ModelsCostBreakdown) GetRoutedAwayBytesOk() (*int32, bool)`

GetRoutedAwayBytesOk returns a tuple with the RoutedAwayBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutedAwayBytes

`func (o *ModelsCostBreakdown) SetRoutedAwayBytes(v int32)`

SetRoutedAwayBytes sets RoutedAwayBytes field to given value.

### HasRoutedAwayBytes

`func (o *ModelsCostBreakdown) HasRoutedAwayBytes() bool`

HasRoutedAwayBytes returns a boolean if a field has been set.

### GetRoutingSavings

`func (o *ModelsCostBreakdown) GetRoutingSavings() float32`

GetRoutingSavings returns the RoutingSavings field if non-nil, zero value otherwise.

### GetRoutingSavingsOk

`func (o *ModelsCostBreakdown) GetRoutingSavingsOk() (*float32, bool)`

GetRoutingSavingsOk returns a tuple with the RoutingSavings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingSavings

`func (o *ModelsCostBreakdown) SetRoutingSavings(v float32)`

SetRoutingSavings sets RoutingSavings field to given value.

### HasRoutingSavings

`func (o *ModelsCostBreakdown) HasRoutingSavings() bool`

HasRoutingSavings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


