# ModelsCursorPagination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Limit** | Pointer to **int32** |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsCursorPagination

`func NewModelsCursorPagination() *ModelsCursorPagination`

NewModelsCursorPagination instantiates a new ModelsCursorPagination object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsCursorPaginationWithDefaults

`func NewModelsCursorPaginationWithDefaults() *ModelsCursorPagination`

NewModelsCursorPaginationWithDefaults instantiates a new ModelsCursorPagination object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLimit

`func (o *ModelsCursorPagination) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ModelsCursorPagination) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ModelsCursorPagination) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ModelsCursorPagination) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetNextCursor

`func (o *ModelsCursorPagination) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *ModelsCursorPagination) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *ModelsCursorPagination) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *ModelsCursorPagination) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


