# ModelsTransformList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Transforms** | Pointer to [**[]ModelsTransform**](ModelsTransform.md) |  | [optional] 

## Methods

### NewModelsTransformList

`func NewModelsTransformList() *ModelsTransformList`

NewModelsTransformList instantiates a new ModelsTransformList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsTransformListWithDefaults

`func NewModelsTransformListWithDefaults() *ModelsTransformList`

NewModelsTransformListWithDefaults instantiates a new ModelsTransformList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsTransformList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsTransformList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsTransformList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsTransformList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetTransforms

`func (o *ModelsTransformList) GetTransforms() []ModelsTransform`

GetTransforms returns the Transforms field if non-nil, zero value otherwise.

### GetTransformsOk

`func (o *ModelsTransformList) GetTransformsOk() (*[]ModelsTransform, bool)`

GetTransformsOk returns a tuple with the Transforms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransforms

`func (o *ModelsTransformList) SetTransforms(v []ModelsTransform)`

SetTransforms sets Transforms field to given value.

### HasTransforms

`func (o *ModelsTransformList) HasTransforms() bool`

HasTransforms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


