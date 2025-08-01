# ModelsConnectionList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Connections** | Pointer to [**[]ModelsConnection**](ModelsConnection.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewModelsConnectionList

`func NewModelsConnectionList() *ModelsConnectionList`

NewModelsConnectionList instantiates a new ModelsConnectionList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsConnectionListWithDefaults

`func NewModelsConnectionListWithDefaults() *ModelsConnectionList`

NewModelsConnectionListWithDefaults instantiates a new ModelsConnectionList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnections

`func (o *ModelsConnectionList) GetConnections() []ModelsConnection`

GetConnections returns the Connections field if non-nil, zero value otherwise.

### GetConnectionsOk

`func (o *ModelsConnectionList) GetConnectionsOk() (*[]ModelsConnection, bool)`

GetConnectionsOk returns a tuple with the Connections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnections

`func (o *ModelsConnectionList) SetConnections(v []ModelsConnection)`

SetConnections sets Connections field to given value.

### HasConnections

`func (o *ModelsConnectionList) HasConnections() bool`

HasConnections returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsConnectionList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsConnectionList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsConnectionList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsConnectionList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


