# RoutesV3TagListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Tags** | Pointer to [**[]RoutesV3TagResponse**](RoutesV3TagResponse.md) |  | [optional] 

## Methods

### NewRoutesV3TagListResponse

`func NewRoutesV3TagListResponse() *RoutesV3TagListResponse`

NewRoutesV3TagListResponse instantiates a new RoutesV3TagListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3TagListResponseWithDefaults

`func NewRoutesV3TagListResponseWithDefaults() *RoutesV3TagListResponse`

NewRoutesV3TagListResponseWithDefaults instantiates a new RoutesV3TagListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *RoutesV3TagListResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesV3TagListResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesV3TagListResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesV3TagListResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetTags

`func (o *RoutesV3TagListResponse) GetTags() []RoutesV3TagResponse`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *RoutesV3TagListResponse) GetTagsOk() (*[]RoutesV3TagResponse, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *RoutesV3TagListResponse) SetTags(v []RoutesV3TagResponse)`

SetTags sets Tags field to given value.

### HasTags

`func (o *RoutesV3TagListResponse) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


