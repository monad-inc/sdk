# SetStorageTypeCostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClearOutputCosts** | Pointer to **[]string** |  | [optional] 
**Costs** | Pointer to [**map[string]RoutesV2SetStorageTypeCostEntry**](RoutesV2SetStorageTypeCostEntry.md) |  | [optional] 
**OutputCosts** | Pointer to [**[]RoutesV2SetOutputCostEntry**](RoutesV2SetOutputCostEntry.md) |  | [optional] 

## Methods

### NewSetStorageTypeCostRequest

`func NewSetStorageTypeCostRequest() *SetStorageTypeCostRequest`

NewSetStorageTypeCostRequest instantiates a new SetStorageTypeCostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetStorageTypeCostRequestWithDefaults

`func NewSetStorageTypeCostRequestWithDefaults() *SetStorageTypeCostRequest`

NewSetStorageTypeCostRequestWithDefaults instantiates a new SetStorageTypeCostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClearOutputCosts

`func (o *SetStorageTypeCostRequest) GetClearOutputCosts() []string`

GetClearOutputCosts returns the ClearOutputCosts field if non-nil, zero value otherwise.

### GetClearOutputCostsOk

`func (o *SetStorageTypeCostRequest) GetClearOutputCostsOk() (*[]string, bool)`

GetClearOutputCostsOk returns a tuple with the ClearOutputCosts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClearOutputCosts

`func (o *SetStorageTypeCostRequest) SetClearOutputCosts(v []string)`

SetClearOutputCosts sets ClearOutputCosts field to given value.

### HasClearOutputCosts

`func (o *SetStorageTypeCostRequest) HasClearOutputCosts() bool`

HasClearOutputCosts returns a boolean if a field has been set.

### GetCosts

`func (o *SetStorageTypeCostRequest) GetCosts() map[string]RoutesV2SetStorageTypeCostEntry`

GetCosts returns the Costs field if non-nil, zero value otherwise.

### GetCostsOk

`func (o *SetStorageTypeCostRequest) GetCostsOk() (*map[string]RoutesV2SetStorageTypeCostEntry, bool)`

GetCostsOk returns a tuple with the Costs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCosts

`func (o *SetStorageTypeCostRequest) SetCosts(v map[string]RoutesV2SetStorageTypeCostEntry)`

SetCosts sets Costs field to given value.

### HasCosts

`func (o *SetStorageTypeCostRequest) HasCosts() bool`

HasCosts returns a boolean if a field has been set.

### GetOutputCosts

`func (o *SetStorageTypeCostRequest) GetOutputCosts() []RoutesV2SetOutputCostEntry`

GetOutputCosts returns the OutputCosts field if non-nil, zero value otherwise.

### GetOutputCostsOk

`func (o *SetStorageTypeCostRequest) GetOutputCostsOk() (*[]RoutesV2SetOutputCostEntry, bool)`

GetOutputCostsOk returns a tuple with the OutputCosts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputCosts

`func (o *SetStorageTypeCostRequest) SetOutputCosts(v []RoutesV2SetOutputCostEntry)`

SetOutputCosts sets OutputCosts field to given value.

### HasOutputCosts

`func (o *SetStorageTypeCostRequest) HasOutputCosts() bool`

HasOutputCosts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


