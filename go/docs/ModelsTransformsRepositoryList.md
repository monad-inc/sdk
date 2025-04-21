# ModelsTransformsRepositoryList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Transforms** | Pointer to [**[]ModelsTransformsRepositoryTransform**](ModelsTransformsRepositoryTransform.md) |  | [optional] 

## Methods

### NewModelsTransformsRepositoryList

`func NewModelsTransformsRepositoryList() *ModelsTransformsRepositoryList`

NewModelsTransformsRepositoryList instantiates a new ModelsTransformsRepositoryList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsTransformsRepositoryListWithDefaults

`func NewModelsTransformsRepositoryListWithDefaults() *ModelsTransformsRepositoryList`

NewModelsTransformsRepositoryListWithDefaults instantiates a new ModelsTransformsRepositoryList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsTransformsRepositoryList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsTransformsRepositoryList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsTransformsRepositoryList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsTransformsRepositoryList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetTransforms

`func (o *ModelsTransformsRepositoryList) GetTransforms() []ModelsTransformsRepositoryTransform`

GetTransforms returns the Transforms field if non-nil, zero value otherwise.

### GetTransformsOk

`func (o *ModelsTransformsRepositoryList) GetTransformsOk() (*[]ModelsTransformsRepositoryTransform, bool)`

GetTransformsOk returns a tuple with the Transforms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransforms

`func (o *ModelsTransformsRepositoryList) SetTransforms(v []ModelsTransformsRepositoryTransform)`

SetTransforms sets Transforms field to given value.

### HasTransforms

`func (o *ModelsTransformsRepositoryList) HasTransforms() bool`

HasTransforms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


