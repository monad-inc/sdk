# ModelsSharedResourceList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**SharedResources** | Pointer to [**[]ModelsSharedResource**](ModelsSharedResource.md) | The page of shared resources. | [optional] 

## Methods

### NewModelsSharedResourceList

`func NewModelsSharedResourceList() *ModelsSharedResourceList`

NewModelsSharedResourceList instantiates a new ModelsSharedResourceList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsSharedResourceListWithDefaults

`func NewModelsSharedResourceListWithDefaults() *ModelsSharedResourceList`

NewModelsSharedResourceListWithDefaults instantiates a new ModelsSharedResourceList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsSharedResourceList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsSharedResourceList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsSharedResourceList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsSharedResourceList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetSharedResources

`func (o *ModelsSharedResourceList) GetSharedResources() []ModelsSharedResource`

GetSharedResources returns the SharedResources field if non-nil, zero value otherwise.

### GetSharedResourcesOk

`func (o *ModelsSharedResourceList) GetSharedResourcesOk() (*[]ModelsSharedResource, bool)`

GetSharedResourcesOk returns a tuple with the SharedResources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedResources

`func (o *ModelsSharedResourceList) SetSharedResources(v []ModelsSharedResource)`

SetSharedResources sets SharedResources field to given value.

### HasSharedResources

`func (o *ModelsSharedResourceList) HasSharedResources() bool`

HasSharedResources returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


