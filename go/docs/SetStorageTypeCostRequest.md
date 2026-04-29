# SetStorageTypeCostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Costs** | Pointer to [**map[string]RoutesV2SetStorageTypeCostEntry**](RoutesV2SetStorageTypeCostEntry.md) |  | [optional] 

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


