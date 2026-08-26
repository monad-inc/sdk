# ModelsSchemaHistoryList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**SchemaHistory** | Pointer to [**[]ModelsSchemaHistory**](ModelsSchemaHistory.md) |  | [optional] 

## Methods

### NewModelsSchemaHistoryList

`func NewModelsSchemaHistoryList() *ModelsSchemaHistoryList`

NewModelsSchemaHistoryList instantiates a new ModelsSchemaHistoryList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsSchemaHistoryListWithDefaults

`func NewModelsSchemaHistoryListWithDefaults() *ModelsSchemaHistoryList`

NewModelsSchemaHistoryListWithDefaults instantiates a new ModelsSchemaHistoryList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsSchemaHistoryList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsSchemaHistoryList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsSchemaHistoryList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsSchemaHistoryList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetSchemaHistory

`func (o *ModelsSchemaHistoryList) GetSchemaHistory() []ModelsSchemaHistory`

GetSchemaHistory returns the SchemaHistory field if non-nil, zero value otherwise.

### GetSchemaHistoryOk

`func (o *ModelsSchemaHistoryList) GetSchemaHistoryOk() (*[]ModelsSchemaHistory, bool)`

GetSchemaHistoryOk returns a tuple with the SchemaHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemaHistory

`func (o *ModelsSchemaHistoryList) SetSchemaHistory(v []ModelsSchemaHistory)`

SetSchemaHistory sets SchemaHistory field to given value.

### HasSchemaHistory

`func (o *ModelsSchemaHistoryList) HasSchemaHistory() bool`

HasSchemaHistory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


