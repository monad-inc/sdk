# ModelsEnrichmentList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enrichments** | Pointer to [**[]ModelsEnrichment**](ModelsEnrichment.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewModelsEnrichmentList

`func NewModelsEnrichmentList() *ModelsEnrichmentList`

NewModelsEnrichmentList instantiates a new ModelsEnrichmentList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsEnrichmentListWithDefaults

`func NewModelsEnrichmentListWithDefaults() *ModelsEnrichmentList`

NewModelsEnrichmentListWithDefaults instantiates a new ModelsEnrichmentList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnrichments

`func (o *ModelsEnrichmentList) GetEnrichments() []ModelsEnrichment`

GetEnrichments returns the Enrichments field if non-nil, zero value otherwise.

### GetEnrichmentsOk

`func (o *ModelsEnrichmentList) GetEnrichmentsOk() (*[]ModelsEnrichment, bool)`

GetEnrichmentsOk returns a tuple with the Enrichments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrichments

`func (o *ModelsEnrichmentList) SetEnrichments(v []ModelsEnrichment)`

SetEnrichments sets Enrichments field to given value.

### HasEnrichments

`func (o *ModelsEnrichmentList) HasEnrichments() bool`

HasEnrichments returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsEnrichmentList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsEnrichmentList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsEnrichmentList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsEnrichmentList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


