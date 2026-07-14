# ModelsResourceUsageList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Usages** | Pointer to [**[]ModelsResourceUsage**](ModelsResourceUsage.md) |  | [optional] 

## Methods

### NewModelsResourceUsageList

`func NewModelsResourceUsageList() *ModelsResourceUsageList`

NewModelsResourceUsageList instantiates a new ModelsResourceUsageList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsResourceUsageListWithDefaults

`func NewModelsResourceUsageListWithDefaults() *ModelsResourceUsageList`

NewModelsResourceUsageListWithDefaults instantiates a new ModelsResourceUsageList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsResourceUsageList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsResourceUsageList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsResourceUsageList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsResourceUsageList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetUsages

`func (o *ModelsResourceUsageList) GetUsages() []ModelsResourceUsage`

GetUsages returns the Usages field if non-nil, zero value otherwise.

### GetUsagesOk

`func (o *ModelsResourceUsageList) GetUsagesOk() (*[]ModelsResourceUsage, bool)`

GetUsagesOk returns a tuple with the Usages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsages

`func (o *ModelsResourceUsageList) SetUsages(v []ModelsResourceUsage)`

SetUsages sets Usages field to given value.

### HasUsages

`func (o *ModelsResourceUsageList) HasUsages() bool`

HasUsages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


